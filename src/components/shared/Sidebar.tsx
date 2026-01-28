
import { 
  Phone, 
  Calendar, 
  Settings, 
  LogOut,
  Zap,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";
import { toast } from "sonner";

// eslint-disable-next-line react-refresh/only-export-components
export const navItems = [
  { name: "Dashboard Overview", href: "/", icon: Home },
  { name: "Call Logs", href: "/call-logs", icon: Phone },
  { name: "Appointments", href: "/appointments", icon: Calendar },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {

  const handleLogout = ()=> {
    toast.success("Logout Success!")
  }
  
const {pathname} = useLocation();
  return (
    <aside className="fixed left-0 top-0 h-screen w-65 bg-background border-r border-border hidden lg:flex flex-col z-50">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          <Zap className="text-primary-foreground fill-primary-foreground w-6 h-6" />
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                  isActive 
                    ? "bg-primary/10 text-white shadow-lg shadow-slate-600 border border-white" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-muted-foreground group-hover:text-foreground")} />
              <span className="font-medium text-[15px]">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-8 border-t border-border/50">
        <button onClick={handleLogout} className="flex cursor-pointer items-center gap-3 text-destructive hover:text-destructive/80 transition-colors w-full group">
          <LogOut className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium text-[15px]">Log Out</span>
        </button>
      </div>
    </aside>
  );
}
