import SidebarItem from "./SidebarItem";
export default function Sidebar() {
  return (
    <aside className="w-72 h-screen border-r bg-white/60 backdrop-blur-sm px-6 py-10 shadow-lg">
      <h2 className="mb-8 text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard</h2>
      <nav className="space-y-3 text-xl">
        <SidebarItem label="Designs" active />
        <SidebarItem label="Testimonials" active={false} disabled />
        <SidebarItem label="Team" active={false} disabled />
      </nav>
    </aside>
  );
}