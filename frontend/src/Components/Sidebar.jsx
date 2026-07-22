import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  BarChart3,
  UserCircle,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Customers", path: "/customers", icon: Users },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Profile", path: "/profile", icon: UserCircle },
];
 
export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-slate-200 flex flex-col">
      {/* Logo / brand area */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="text-lg font-semibold text-white tracking-wide">
          <span className="text-lg font-semibold text-white tracking-wide">
              Insight<span className="text-indigo-400">Board</span>
          </span>
        </div>
      </div>
 
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
              ${
                isActive
                  ? "bg-indigo-500/10 text-indigo-400"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <Icon size={18} />
            {name}
          </NavLink>
        ))}
      </nav>
 
      {/* Footer area, optional but keeps sidebar feeling complete */}
      <div className="px-6 py-4 border-t border-slate-800 text-xs text-slate-500">
        InsightBoard v1.0
      </div>
    </aside>
  );
}
 