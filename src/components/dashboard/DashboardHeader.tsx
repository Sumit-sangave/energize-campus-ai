import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Settings, User, Mic, MessageSquare } from "lucide-react";

interface DashboardHeaderProps {
  userRole: "admin" | "technician";
  userName: string;
}

export const DashboardHeader = ({ userRole, userName }: DashboardHeaderProps) => {
  return (
    <header className="bg-gradient-dashboard border-b border-border p-6">
      <div className="flex items-center justify-between">
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
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            <Mic className="h-4 w-4 mr-2" />
            Voice Assistant
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            <MessageSquare className="h-4 w-4 mr-2" />
            AI Chat
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Settings className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-card border">
            <User className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{userName}</span>
          </div>
        </div>
      </div>
    </header>
  );
};