import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Lightbulb, Clock, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

interface InsightProps {
  type: "suggestion" | "prediction" | "alert" | "optimization";
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  action?: string;
  savings?: string;
}

const InsightCard = ({ type, title, description, priority, action, savings }: InsightProps) => {
  const typeConfig = {
    suggestion: { icon: Lightbulb, color: "text-solar", bg: "bg-solar/10" },
    prediction: { icon: TrendingUp, color: "text-primary", bg: "bg-primary/10" },
    alert: { icon: AlertTriangle, color: "text-accent", bg: "bg-accent/10" },
    optimization: { icon: CheckCircle, color: "text-secondary", bg: "bg-secondary/10" }
  };

  const priorityColors = {
    high: "border-l-accent bg-accent/5",
    medium: "border-l-solar bg-solar/5", 
    low: "border-l-secondary bg-secondary/5"
  };

  const Icon = typeConfig[type].icon;

  return (
    <div className={`p-4 border-l-4 rounded-lg ${priorityColors[priority]} border border-border/50`}>
      <div className="flex items-start space-x-3">
        <div className={`${typeConfig[type].bg} p-2 rounded-lg`}>
          <Icon className={`h-4 w-4 ${typeConfig[type].color}`} />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">{title}</h4>
            <Badge variant="outline" className="text-xs">
              {priority.toUpperCase()}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          {savings && (
            <div className="text-sm font-medium text-secondary">
              Potential Savings: {savings}
            </div>
          )}
          {action && (
            <Button size="sm" variant="outline" className="mt-2">
              {action}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export const AIInsights = () => {
  const insights: InsightProps[] = [
    {
      type: "prediction",
      title: "Peak Solar Generation at 2:30 PM",
      description: "Weather forecast shows optimal conditions. Solar output expected to reach 520kW.",
      priority: "medium",
      action: "Schedule Heavy Loads",
      savings: "₹1,200"
    },
    {
      type: "suggestion", 
      title: "Optimize AC Usage",
      description: "Run campus AC systems between 2-4 PM when solar generation peaks.",
      priority: "high",
      action: "Auto-Schedule",
      savings: "₹2,300/day"
    },
    {
      type: "alert",
      title: "Battery Maintenance Due",
      description: "Battery bank efficiency dropped to 94%. Schedule maintenance within 48 hours.",
      priority: "high",
      action: "Schedule Maintenance"
    },
    {
      type: "optimization",
      title: "Grid Export Opportunity",
      description: "Surplus 180kW available for grid export. Current rate: ₹5.2/kWh.",
      priority: "medium",
      action: "Export to Grid",
      savings: "₹936/hour"
    },
    {
      type: "prediction",
      title: "Low Wind Forecast Tomorrow",
      description: "Wind speeds below 3 m/s expected. Increase battery storage today.",
      priority: "low",
      action: "Adjust Storage"
    },
    {
      type: "suggestion",
      title: "Load Shifting Opportunity", 
      description: "Move lab equipment usage to 1-3 PM window for 100% renewable power.",
      priority: "medium",
      action: "Create Schedule",
      savings: "₹850"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="h-5 w-5 mr-2 text-primary" />
          AI-Powered Insights & Recommendations
          <Badge variant="secondary" className="ml-2">
            <Clock className="h-3 w-3 mr-1" />
            Live
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {insights.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Total Potential Daily Savings: <span className="font-bold text-secondary">₹5,386</span>
            </div>
            <Button variant="outline" size="sm">
              View All Insights
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};