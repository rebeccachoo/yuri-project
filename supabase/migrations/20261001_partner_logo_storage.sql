-- Logos are public; writes happen only in authenticated admin server actions
-- using the service-role client. No public upload policies are granted.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('partner-logos', 'partner-logos', true, 2097152,
        array['image/png', 'image/jpeg', 'image/webp'])
on conflict (id) do nothing;
