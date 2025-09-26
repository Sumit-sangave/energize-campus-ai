import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, AlertTriangle, Info, CheckCircle, Zap, Battery, Sun } from "lucide-react";

export const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "alert",
      icon: AlertTriangle,
      title: "Grid Import Threshold Exceeded",
      message: "Campus is importing 45.2 kWh from grid. Consider load balancing.",
      time: "2 minutes ago",
      unread: true
    },
    {
      id: 2,
      type: "success",
      icon: CheckCircle,
      title: "Battery Optimization Complete",
      message: "AI has optimized battery charging schedule for tomorrow's forecast.",
      time: "15 minutes ago",
      unread: true
    },
    {
      id: 3,
      type: "info",
      icon: Sun,
      title: "Peak Solar Generation",
      message: "Solar panels generating 280 kWh - optimal conditions detected.",
      time: "1 hour ago",
      unread: false
    },
    {
      id: 4,
      type: "warning",
      icon: Battery,
      title: "Battery Maintenance Due",
      message: "Battery bank B2 scheduled for maintenance check next week.",
      time: "3 hours ago",
      unread: false
    },
    {
      id: 5,
      type: "info",
      icon: Zap,
      title: "Energy Sharing Opportunity",
      message: "Engineering College nearby has requested 30 kWh surplus energy.",
      time: "5 hours ago",
      unread: false
    }
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "alert":
        return "border-destructive/50 bg-destructive/5";
      case "warning":
        return "border-accent/50 bg-accent/5";
      case "success":
        return "border-secondary/50 bg-secondary/5";
      default:
        return "border-primary/50 bg-primary/5";
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "alert":
        return "text-destructive";
      case "warning":
        return "text-accent";
      case "success":
        return "text-secondary";
      default:
        return "text-primary";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Notifications
            </h1>
            <p className="text-muted-foreground mt-1">
              Stay updated with system alerts and energy insights
            </p>
          </div>
          <Button variant="outline" size="sm">
            Mark All as Read
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <Card 
              key={notification.id} 
              className={`hover:shadow-lg transition-all duration-300 ${getTypeStyles(notification.type)} ${
                notification.unread ? "border-l-4" : ""
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full bg-current/10 ${getIconColor(notification.type)}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{notification.title}</h3>
                      <div className="flex items-center space-x-2">
                        {notification.unread && (
                          <Badge variant="secondary" className="text-xs">New</Badge>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Notification Settings */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="h-5 w-5 text-primary mr-2" />
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">System Alerts</h4>
              <p className="text-sm text-muted-foreground">
                Get notified about critical system issues
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Energy Insights</h4>
              <p className="text-sm text-muted-foreground">
                Receive AI-powered optimization suggestions
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Maintenance Reminders</h4>
              <p className="text-sm text-muted-foreground">
                Schedule and track equipment maintenance
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Energy Sharing</h4>
              <p className="text-sm text-muted-foreground">
                Opportunities for campus-to-campus sharing
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};