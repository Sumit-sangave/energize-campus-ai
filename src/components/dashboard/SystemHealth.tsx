import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, AlertCircle, CheckCircle, Clock, Wrench, Activity } from "lucide-react";

interface HealthItemProps {
  name: string;
  status: "online" | "warning" | "offline" | "maintenance";
  performance: number;
  lastChecked: string;
  issues?: string[];
}

const HealthItem = ({ name, status, performance, lastChecked, issues }: HealthItemProps) => {
  const statusConfig = {
    online: { 
      icon: CheckCircle, 
      color: "text-secondary", 
      bg: "bg-secondary/10",
      badge: "bg-secondary/20 text-secondary"
    },
    warning: { 
      icon: AlertCircle, 
      color: "text-accent", 
      bg: "bg-accent/10",
      badge: "bg-accent/20 text-accent"
    },
    offline: { 
      icon: AlertCircle, 
      color: "text-destructive", 
      bg: "bg-destructive/10",
      badge: "bg-destructive/20 text-destructive"
    },
    maintenance: { 
      icon: Wrench, 
      color: "text-solar", 
      bg: "bg-solar/10",
      badge: "bg-solar/20 text-solar"
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="p-4 rounded-lg border border-border/50 hover:border-border transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`${config.bg} p-2 rounded-lg`}>
            <Icon className={`h-4 w-4 ${config.color}`} />
          </div>
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-xs text-muted-foreground">Last checked: {lastChecked}</p>
          </div>
        </div>
        <Badge className={config.badge}>
          {status.toUpperCase()}
        </Badge>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Performance</span>
          <span className="text-sm font-medium">{performance}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              performance >= 90 ? 'bg-secondary' : 
              performance >= 70 ? 'bg-solar' : 'bg-accent'
            }`}
            style={{ width: `${performance}%` }}
          />
        </div>
        
        {issues && issues.length > 0 && (
          <div className="mt-2 space-y-1">
            {issues.map((issue, index) => (
              <div key={index} className="text-xs text-muted-foreground flex items-center">
                <AlertCircle className="h-3 w-3 mr-1 text-accent" />
                {issue}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const SystemHealth = () => {
  const healthData: HealthItemProps[] = [
    {
      name: "Solar Panel Array A",
      status: "online",
      performance: 96,
      lastChecked: "2 min ago"
    },
    {
      name: "Solar Panel Array B", 
      status: "warning",
      performance: 87,
      lastChecked: "2 min ago",
      issues: ["Slight shading detected on panel 15-18"]
    },
    {
      name: "Wind Turbine 1",
      status: "online", 
      performance: 94,
      lastChecked: "1 min ago"
    },
    {
      name: "Battery Bank 1",
      status: "warning",
      performance: 94,
      lastChecked: "3 min ago",
      issues: ["Temperature slightly elevated", "Maintenance due in 2 days"]
    },
    {
      name: "Battery Bank 2",
      status: "online",
      performance: 98,
      lastChecked: "3 min ago"
    },
    {
      name: "Grid Inverter",
      status: "online",
      performance: 99,
      lastChecked: "1 min ago"
    },
    {
      name: "Weather Station",
      status: "online",
      performance: 100,
      lastChecked: "30 sec ago"
    },
    {
      name: "Control System",
      status: "maintenance",
      performance: 85,
      lastChecked: "15 min ago",
      issues: ["Scheduled firmware update in progress"]
    }
  ];

  const overallHealth = Math.round(
    healthData.reduce((acc, item) => acc + item.performance, 0) / healthData.length
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2 text-primary" />
            System Health Monitor
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Activity className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium">Overall: {overallHealth}%</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {healthData.map((item, index) => (
            <HealthItem key={index} {...item} />
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              <Clock className="h-4 w-4 inline mr-1" />
              Last system scan: 2 minutes ago
            </div>
            <Button variant="outline" size="sm">
              <Activity className="h-4 w-4 mr-2" />
              Run Full Diagnostic
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};