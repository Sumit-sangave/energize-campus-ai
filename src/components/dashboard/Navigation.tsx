import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Settings, User, Home, Zap, Share2, Bot, UserIcon, BellIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  userRole: "admin" | "technician";
  userName: string;
}

export const Navigation = ({ userRole, userName }: NavigationProps) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/energy-flow", label: "Energy Flow", icon: Zap },
    { path: "/energy-sharing", label: "Energy Sharing", icon: Share2 },
    { path: "/ai-assistant", label: "AI Assistant", icon: Bot },
  ];

  return (
    <header className="bg-gradient-dashboard border-b border-border p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SmartGrid Pro
            </div>
            <Badge 
              variant="secondary" 
              className="bg-secondary/20 text-secondary-foreground border-secondary/30"
            >
              {userRole === "admin" ? "Admin Dashboard" : "Technician Panel"}
            </Badge>
          </div>
          
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant={location.pathname === item.path ? "secondary" : "ghost"} 
                  size="sm" 
                  className="flex items-center space-x-2"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/notifications">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Bell className="h-4 w-4" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Settings className="h-4 w-4" />
          </Button>
          <Link to="/profile">
            <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-card border hover:bg-muted/50 transition-colors cursor-pointer">
              <User className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{userName}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};