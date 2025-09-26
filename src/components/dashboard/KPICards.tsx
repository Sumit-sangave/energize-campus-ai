import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Zap, Leaf, Battery, DollarSign } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  unit: string;
  change: number;
  icon: React.ReactNode;
  color: "solar" | "wind" | "battery" | "grid" | "secondary" | "accent";
}

const KPICard = ({ title, value, unit, change, icon, color }: KPICardProps) => {
  const isPositive = change >= 0;
  
  const colorClasses = {
    solar: "text-solar border-solar/30 bg-solar/5",
    wind: "text-wind border-wind/30 bg-wind/5", 
    battery: "text-battery border-battery/30 bg-battery/5",
    grid: "text-grid border-grid/30 bg-grid/5",
    secondary: "text-secondary border-secondary/30 bg-secondary/5",
    accent: "text-accent border-accent/30 bg-accent/5"
  };

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 ${colorClasses[color]}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-current/10 flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value}
          <span className="text-sm font-normal text-muted-foreground ml-1">{unit}</span>
        </div>
        <div className="flex items-center text-xs mt-1">
          {isPositive ? (
            <TrendingUp className="h-3 w-3 text-secondary mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 text-destructive mr-1" />
          )}
          <span className={isPositive ? "text-secondary" : "text-destructive"}>
            {Math.abs(change)}% from yesterday
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export const KPICards = () => {
  const kpiData = [
    {
      title: "Solar Generation",
      value: "342.5",
      unit: "kWh",
      change: 15.2,
      icon: <Zap className="h-4 w-4" />,
      color: "solar" as const
    },
    {
      title: "Wind Generation", 
      value: "187.3",
      unit: "kWh",
      change: 8.7,
      icon: <Zap className="h-4 w-4" />,
      color: "wind" as const
    },
    {
      title: "Battery Status",
      value: "87",
      unit: "%",
      change: 5.1,
      icon: <Battery className="h-4 w-4" />,
      color: "battery" as const
    },
    {
      title: "Grid Import",
      value: "45.2",
      unit: "kWh", 
      change: -23.4,
      icon: <Zap className="h-4 w-4" />,
      color: "grid" as const
    },
    {
      title: "CO₂ Saved",
      value: "127.8",
      unit: "kg",
      change: 12.3,
      icon: <Leaf className="h-4 w-4" />,
      color: "secondary" as const
    },
    {
      title: "Cost Savings",
      value: "₹2,347",
      unit: "",
      change: 18.6,
      icon: <DollarSign className="h-4 w-4" />,
      color: "accent" as const
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {kpiData.map((kpi, index) => (
        <KPICard key={index} {...kpi} />
      ))}
    </div>
  );
};