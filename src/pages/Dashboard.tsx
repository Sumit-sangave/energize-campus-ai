import { KPICards } from "@/components/dashboard/KPICards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calendar, Zap, Battery } from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* KPI Cards */}
      <KPICards />

      {/* Energy Predictions and Today's Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tomorrow's Predictions */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold flex items-center">
              <Calendar className="h-5 w-5 text-primary mr-2" />
              Tomorrow's Energy Forecast
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Expected Generation</p>
                <p className="text-2xl font-bold text-secondary">485.2 kWh</p>
                <div className="flex items-center text-xs text-secondary">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  12% higher than today
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Campus Demand</p>
                <p className="text-2xl font-bold text-primary">420.8 kWh</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  Similar to today's usage
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Surplus Available</span>
                <span className="font-semibold text-accent">64.4 kWh</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Energy Data */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold flex items-center">
              <Zap className="h-5 w-5 text-primary mr-2" />
              Today's Energy Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Total Generated</p>
                <p className="text-2xl font-bold text-solar">529.8 kWh</p>
                <div className="text-xs text-muted-foreground">
                  Solar: 342.5 kWh • Wind: 187.3 kWh
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Total Consumed</p>
                <p className="text-2xl font-bold text-grid">484.6 kWh</p>
                <div className="text-xs text-muted-foreground">
                  Campus: 439.4 kWh • Grid Import: 45.2 kWh
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Net Energy Balance</span>
                <span className="font-semibold text-secondary">+45.2 kWh Surplus</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Battery Status */}
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Battery className="h-5 w-5 text-battery mr-2" />
            Battery System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Current Charge</p>
              <p className="text-3xl font-bold text-battery">87%</p>
              <p className="text-xs text-muted-foreground mt-1">348 kWh stored</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Estimated Runtime</p>
              <p className="text-3xl font-bold text-primary">12.5 hrs</p>
              <p className="text-xs text-muted-foreground mt-1">At current load</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Health Status</p>
              <p className="text-3xl font-bold text-secondary">96%</p>
              <p className="text-xs text-muted-foreground mt-1">Excellent condition</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};