import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2, Users, DollarSign, TrendingUp, MapPin, Zap } from "lucide-react";

interface SharingOpportunityProps {
  campus: string;
  distance: string;
  demand: number;
  rate: number;
  status: "available" | "sharing" | "offline";
  connection: "direct" | "grid";
}

const SharingOpportunity = ({ campus, distance, demand, rate, status, connection }: SharingOpportunityProps) => {
  const statusConfig = {
    available: { color: "text-secondary", bg: "bg-secondary/10", badge: "bg-secondary/20" },
    sharing: { color: "text-primary", bg: "bg-primary/10", badge: "bg-primary/20" },
    offline: { color: "text-muted-foreground", bg: "bg-muted/10", badge: "bg-muted/20" }
  };

  const config = statusConfig[status];

  return (
    <div className="p-4 rounded-lg border border-border/50 hover:border-border transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`${config.bg} p-2 rounded-lg`}>
            <Users className={`h-4 w-4 ${config.color}`} />
          </div>
          <div>
            <h4 className="font-medium">{campus}</h4>
            <div className="flex items-center text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 mr-1" />
              {distance} • {connection} connection
            </div>
          </div>
        </div>
        <Badge className={config.badge}>
          {status.toUpperCase()}
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <div className="text-sm text-muted-foreground">Demand</div>
          <div className="text-lg font-bold text-accent">{demand} kW</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Rate</div>
          <div className="text-lg font-bold text-secondary">₹{rate}/kWh</div>
        </div>
      </div>
      
      {status === "available" && (
        <Button size="sm" className="w-full">
          <Share2 className="h-4 w-4 mr-2" />
          Share Energy
        </Button>
      )}
      {status === "sharing" && (
        <div className="text-sm text-primary font-medium text-center">
          <Zap className="h-4 w-4 inline mr-1" />
          Currently sharing 45 kW
        </div>
      )}
    </div>
  );
};

export const EnergySharing = () => {
  const sharingData: SharingOpportunityProps[] = [
    {
      campus: "Engineering College",
      distance: "2.3 km",
      demand: 180,
      rate: 4.8,
      status: "sharing",
      connection: "direct"
    },
    {
      campus: "Medical College", 
      distance: "4.1 km",
      demand: 320,
      rate: 5.2,
      status: "available",
      connection: "grid"
    },
    {
      campus: "Arts College",
      distance: "1.8 km", 
      demand: 95,
      rate: 4.5,
      status: "available",
      connection: "direct"
    },
    {
      campus: "Polytechnic Institute",
      distance: "6.2 km",
      demand: 150,
      rate: 5.0,
      status: "offline",
      connection: "grid"
    }
  ];

  const currentSharing = sharingData.filter(item => item.status === "sharing");
  const totalShared = currentSharing.reduce((acc, item) => acc + 45, 0); // Simplified calculation
  const totalRevenue = totalShared * 4.8; // Average rate

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Share2 className="h-5 w-5 mr-2 text-primary" />
            Energy Sharing Network
          </CardTitle>
          <Badge variant="secondary">
            <TrendingUp className="h-3 w-3 mr-1" />
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {/* Current Sharing Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-primary/5 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{totalShared} kW</div>
            <div className="text-sm text-muted-foreground">Currently Sharing</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">₹{Math.round(totalRevenue)}/hr</div>
            <div className="text-sm text-muted-foreground">Revenue Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">{currentSharing.length}</div>
            <div className="text-sm text-muted-foreground">Connected Campuses</div>
          </div>
        </div>

        {/* Sharing Opportunities */}
        <div className="space-y-4">
          <h4 className="font-medium text-sm text-muted-foreground mb-3">SHARING OPPORTUNITIES</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sharingData.map((item, index) => (
              <SharingOpportunity key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Grid Export Option */}
        <div className="mt-6 p-4 border border-dashed border-border rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-grid/10 p-2 rounded-lg">
                <DollarSign className="h-4 w-4 text-grid" />
              </div>
              <div>
                <h4 className="font-medium">Export to Main Grid</h4>
                <p className="text-sm text-muted-foreground">Surplus: 125.4 kW available</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-grid">₹5.2/kWh</div>
              <Button size="sm" variant="outline">
                Export Now
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};