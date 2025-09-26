import { EnergySharing } from "@/components/dashboard/EnergySharing";

export const EnergySharingPage = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">
          Energy Sharing Network
        </h1>
        <p className="text-muted-foreground mt-1">
          Multi-campus energy collaboration and grid export management
        </p>
      </div>
      
      <EnergySharing />
    </div>
  );
};