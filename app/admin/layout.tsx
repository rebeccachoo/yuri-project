// The public site now uses a dark, gradient body background as part of its
// redesign. /admin is an internal dashboard, not part of that redesign, so
// it keeps its own light background regardless of what the body sets.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1 flex-col bg-white text-navy-deep">{children}</div>;
}
