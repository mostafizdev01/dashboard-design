
import { Bell, Menu, Zap } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";
import { navItems } from "./Sidebar";

const getPageTitle = (pathname: string) => {
  switch (pathname) {
    case "/":
      return "Dashboard Overview";
    case "/call-logs":
      return "Call Logs & History";
    case "/appointments":
      return "Appointments";
    case "/settings":
      return "Settings";
    default:
      return "Dashboard";
  }
};

export default function Header() {
  useLocation();

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-65 h-20 bg-background/80 backdrop-blur-md border-b border-border z-40 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-70 bg-background border-r border-border p-0">
            <SheetHeader className="p-8 border-b border-border/50">
              <SheetTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  <Zap className="text-primary-foreground fill-primary-foreground w-6 h-6" />
                </div>
                <span className="text-xl font-bold tracking-tight">AI Agent</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                        isActive 
                          ? "bg-primary/10 text-primary shadow-[0_0_20px_rgba(34,211,238,0.2)] border border-primary/20" 
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    )}
                  >
                    <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                    <span className="font-medium text-[15px]">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
        <h1 className="text-xl lg:text-2xl font-semibold truncate max-w-37.5 sm:max-w-none">{getPageTitle(location.pathname)}</h1>
      </div>

      <div className="flex items-center gap-2 lg:gap-6">
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-background" />
        </button>

        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8 lg:w-10 lg:h-10 border-2 border-primary/20">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
