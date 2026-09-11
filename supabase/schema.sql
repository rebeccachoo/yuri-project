-- Every Kid Can: Supabase schema for admin-managed content
-- (volunteers, blog posts, partners). Everything else — pillars, team,
-- impact stats, awards — stays in /data/*.ts.
--
-- Run this once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.

create extension if not exists "pgcrypto";

-- =========================================================
-- volunteers
-- =========================================================
create table if not exists public.volunteers (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  organization_name text not null,
  title text not null,
  location text not null,
  date text not null,
  age_requirement text not null,
  description text not null,
  apply_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.volunteers enable row level security;

create policy "Public can read volunteers"
  on public.volunteers for select
  using (true);
-- No insert/update/delete policy: only the service_role key (used by
-- server actions behind the /admin login gate) can write, since
-- service_role bypasses RLS entirely.

-- =========================================================
-- blog_posts
-- =========================================================
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  excerpt text not null,
  content text[] not null default '{}',
  author text not null,
  date date not null,
  read_time text not null,
  accent_color text not null default 'navy',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.blog_posts enable row level security;

create policy "Public can read blog_posts"
  on public.blog_posts for select
  using (true);

-- =========================================================
-- partners
-- =========================================================
create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  website text,
  logo text,
  monogram text not null,
  accent_color text not null default 'navy',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.partners enable row level security;

create policy "Public can read partners"
  on public.partners for select
  using (true);

-- =========================================================
-- newsletter_subscribers
-- =========================================================
create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz not null default now()
);

alter table public.newsletter_subscribers enable row level security;

create policy "Public can subscribe to the newsletter"
  on public.newsletter_subscribers for insert
  with check (true);

create policy "Public can unsubscribe from the newsletter"
  on public.newsletter_subscribers for delete
  using (true);
-- No select/update policy: visitors can add or remove their own row by
-- email (the app code always filters delete by email — see
-- unsubscribeFromNewsletter) but can't read the list back; only the
-- service_role key (admin) can view/manage it directly.

-- =========================================================
-- keep updated_at current on every update
-- =========================================================
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger volunteers_set_updated_at
  before update on public.volunteers
  for each row execute function public.set_updated_at();

create trigger blog_posts_set_updated_at
  before update on public.blog_posts
  for each row execute function public.set_updated_at();

create trigger partners_set_updated_at
  before update on public.partners
  for each row execute function public.set_updated_at();
