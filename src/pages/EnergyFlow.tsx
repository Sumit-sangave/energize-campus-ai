import { EnergyFlowDiagram } from "@/components/dashboard/EnergyFlowDiagram";

export const EnergyFlow = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">
          Real-time Energy Flow
        </h1>
        <p className="text-muted-foreground mt-1">
          Live monitoring of energy generation, storage, and distribution
        </p>
      </div>
      
      <EnergyFlowDiagram />
    </div>
  );
};