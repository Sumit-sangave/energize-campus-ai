import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KPICards } from "@/components/dashboard/KPICards";
import { EnergyFlowDiagram } from "@/components/dashboard/EnergyFlowDiagram";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { SystemHealth } from "@/components/dashboard/SystemHealth";
import { EnergySharing } from "@/components/dashboard/EnergySharing";
import { ChatInterface } from "@/components/dashboard/ChatInterface";
import { Button } from "@/components/ui/button";
import { Users, Wrench } from "lucide-react";

const Index = () => {
  const [userRole, setUserRole] = useState<"admin" | "technician">("admin");
  const [userName] = useState("Dr. Rajesh Kumar");

  const toggleRole = () => {
    setUserRole(prev => prev === "admin" ? "technician" : "admin");
  };

  return (
    <div className="min-h-screen bg-gradient-dashboard">
      <DashboardHeader userRole={userRole} userName={userName} />
      
      {/* Role Toggle */}
      <div className="p-6 pb-0">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Smart Energy Management Platform
            </h1>
            <p className="text-muted-foreground mt-1">
              Government College Campus • Rajasthan, India
            </p>
          </div>
          <Button 
            onClick={toggleRole}
            variant="outline"
            className="flex items-center space-x-2"
          >
            {userRole === "admin" ? <Wrench className="h-4 w-4" /> : <Users className="h-4 w-4" />}
            <span>Switch to {userRole === "admin" ? "Technician" : "Admin"} View</span>
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* KPI Cards - Always visible */}
        <KPICards />

        {userRole === "admin" ? (
          <>
            {/* Admin Dashboard */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 space-y-6">
                <EnergyFlowDiagram />
                <EnergySharing />
              </div>
              <div className="space-y-6">
                <AIInsights />
                <ChatInterface />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Technician Dashboard */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 space-y-6">
                <EnergyFlowDiagram />
                <SystemHealth />
              </div>
              <div className="space-y-6">
                <AIInsights />
                <ChatInterface />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-border/50 p-6">
        <div className="text-center text-sm text-muted-foreground">
          <div className="mb-2">
            🏆 <strong>Smart India Hackathon 2024</strong> • Smart Energy Management Solution
          </div>
          <div className="flex items-center justify-center space-x-6">
            <span>🌱 100% Vendor Neutral</span>
            <span>🤖 AI-Powered Optimization</span>
            <span>🔗 Multi-Campus Energy Sharing</span>
            <span>🎙️ Voice + Chat Assistant</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;