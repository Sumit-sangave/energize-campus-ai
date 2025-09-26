import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Mic, Send, Bot, User, Volume2 } from "lucide-react";

interface ChatMessage {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: string;
  hasAudio?: boolean;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "ai",
      content: "Hello! I'm your AI Energy Assistant. I can help you optimize energy usage, predict generation, and provide insights. Try asking: 'How much renewable energy did we use today?' or 'When should I run the AC systems?'",
      timestamp: "10:30 AM",
      hasAudio: true
    },
    {
      id: "2", 
      type: "user",
      content: "How much renewable energy did we use today?",
      timestamp: "10:32 AM"
    },
    {
      id: "3",
      type: "ai", 
      content: "Today, your campus used 89.3% renewable energy! Here's the breakdown:\n\n🌞 Solar: 342.5 kWh (65%)\n💨 Wind: 187.3 kWh (35%)\n⚡ Grid: Only 10.7% (56.2 kWh)\n\nYou've saved ₹2,347 and prevented 127.8 kg of CO₂ emissions compared to full grid usage!",
      timestamp: "10:32 AM",
      hasAudio: true
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: getAIResponse(inputMessage),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hasAudio: true
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const getAIResponse = (input: string): string => {
    const responses = {
      "battery": "Battery status is excellent! Currently at 87% capacity (391.5 kWh stored). Optimal charging rate detected. The system will automatically start discharging during peak demand hours (6-9 PM). Expected runtime: 8.5 hours at current load.",
      "schedule": "Based on weather forecast and current generation, here's the optimal schedule:\n\n2:30 PM - Peak solar generation (520kW)\n2:30-4:00 PM - Run AC systems, heavy machinery\n4:00-6:00 PM - Charge batteries\n6:00-9:00 PM - Use stored energy\n\nThis will save approximately ₹1,850 today!",
      "fault": "All systems are operating normally! Last diagnostic completed 2 minutes ago:\n\n✅ Solar arrays: 96% efficiency\n⚠️ Battery Bank 1: Slight temperature elevation (within safe limits)\n✅ Wind turbine: Optimal performance\n✅ Grid connection: Stable\n\nNext maintenance check scheduled for tomorrow at 9:00 AM.",
      "default": "I can help you with energy optimization, system monitoring, scheduling loads, checking equipment status, and predicting generation patterns. What specific information do you need about your energy systems?"
    };
    
    const key = Object.keys(responses).find(k => 
      input.toLowerCase().includes(k) && k !== "default"
    ) || "default";
    
    return responses[key as keyof typeof responses];
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
  };

  const playAudio = (messageId: string) => {
    // Simulate audio playback
    console.log(`Playing audio for message: ${messageId}`);
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-5 w-5 mr-2 text-primary" />
            AI Energy Assistant
          </div>
          <Badge variant="secondary" className="animate-pulse">
            <MessageSquare className="h-3 w-3 mr-1" />
            Online
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.type === "ai" && (
                    <Bot className="h-4 w-4 mt-0.5 text-primary" />
                  )}
                  {message.type === "user" && (
                    <User className="h-4 w-4 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs opacity-70">{message.timestamp}</span>
                      {message.hasAudio && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => playAudio(message.id)}
                          className="h-6 w-6 p-0"
                        >
                          <Volume2 className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t pt-4">
          <div className="flex space-x-2">
            <Button
              variant={isListening ? "default" : "outline"}
              size="icon"
              onClick={toggleVoiceInput}
              className={isListening ? "animate-pulse" : ""}
            >
              <Mic className="h-4 w-4" />
            </Button>
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about energy usage, predictions, or system status..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              "Battery status?",
              "Optimal schedule today?", 
              "Any system faults?",
              "Energy sharing opportunities?"
            ].map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setInputMessage(suggestion)}
                className="text-xs"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};