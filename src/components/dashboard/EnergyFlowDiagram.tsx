import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Wind, Battery, Home, Grid3x3, ArrowRight } from "lucide-react";

interface EnergyNodeProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
  color: string;
  status: "active" | "charging" | "discharging" | "idle";
}

const EnergyNode = ({ icon, label, value, unit, color, status }: EnergyNodeProps) => {
  const statusEffects = {
    active: "animate-pulse-glow",
    charging: "animate-pulse-glow bg-battery/10",
    discharging: "animate-pulse-glow bg-accent/10", 
    idle: "opacity-60"
  };

  return (
    <div className={`relative p-4 rounded-xl border-2 ${color} ${statusEffects[status]} transition-all duration-300`}>
      <div className="flex flex-col items-center space-y-2">
        <div className="h-12 w-12 rounded-full bg-current/20 flex items-center justify-center">
          {icon}
        </div>
        <div className="text-center">
          <div className="text-xs font-medium text-muted-foreground">{label}</div>
          <div className="text-lg font-bold">
            {value} <span className="text-xs font-normal">{unit}</span>
          </div>
        </div>
      </div>
      {status === "active" && (
        <div className="absolute inset-0 rounded-xl animate-energy-flow opacity-30 bg-gradient-to-r from-transparent via-current to-transparent pointer-events-none" />
      )}
    </div>
  );
};

const EnergyFlow = ({ direction = "right" }: { direction?: "right" | "down" }) => {
  return (
    <div className={`flex items-center justify-center ${direction === "down" ? "flex-col" : ""}`}>
      <div className="relative">
        <ArrowRight className={`h-6 w-6 text-primary ${direction === "down" ? "rotate-90" : ""}`} />
        <div className="absolute inset-0 animate-energy-flow opacity-60">
          <ArrowRight className={`h-6 w-6 text-primary-glow ${direction === "down" ? "rotate-90" : ""}`} />
        </div>
      </div>
    </div>
  );
};

export const EnergyFlowDiagram = () => {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Grid3x3 className="h-5 w-5 mr-2 text-primary" />
          Real-Time Energy Flow
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          {/* Generation Sources */}
          <div className="space-y-4">
            <EnergyNode
              icon={<Sun className="h-6 w-6" />}
              label="Solar Panels"
              value="342.5"
              unit="kW"
              color="border-solar text-solar"
              status="active"
            />
            <EnergyNode
              icon={<Wind className="h-6 w-6" />}
              label="Wind Turbine"
              value="187.3"
              unit="kW"
              color="border-wind text-wind"
              status="active"
            />
          </div>

          <EnergyFlow />

          {/* Battery Storage */}
          <div className="flex justify-center">
            <EnergyNode
              icon={<Battery className="h-6 w-6" />}
              label="Battery Storage"
              value="87"
              unit="% (450kWh)"
              color="border-battery text-battery"
              status="charging"
            />
          </div>

          <EnergyFlow />

          {/* Consumption & Export */}
          <div className="space-y-4">
            <EnergyNode
              icon={<Home className="h-6 w-6" />}
              label="Campus Load"
              value="278.9"
              unit="kW"
              color="border-accent text-accent"
              status="active"
            />
            <EnergyNode
              icon={<Grid3x3 className="h-6 w-6" />}
              label="Grid Export"
              value="125.4"
              unit="kW"
              color="border-secondary text-secondary"
              status="active"
            />
          </div>
        </div>

        {/* Energy Balance Summary */}
        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-secondary">529.8 kW</div>
              <div className="text-sm text-muted-foreground">Total Generation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">278.9 kW</div>
              <div className="text-sm text-muted-foreground">Campus Consumption</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">250.9 kW</div>
              <div className="text-sm text-muted-foreground">Surplus (Battery + Export)</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};