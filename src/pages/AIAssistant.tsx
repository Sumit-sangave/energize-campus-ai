import { AIInsights } from "@/components/dashboard/AIInsights";
import { ChatInterface } from "@/components/dashboard/ChatInterface";

export const AIAssistant = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">
          AI Assistant & Insights
        </h1>
        <p className="text-muted-foreground mt-1">
          Intelligent recommendations and voice-enabled chat support
        </p>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <AIInsights />
        <ChatInterface />
      </div>
    </div>
  );
};