
import {
  Search,
  ChevronDown,
  Play,
  FileText,
  Phone,
  Clock
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const calls = [
  {
    id: 1,
    number: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    outcome: "Quote Provided",
    type: "Screen",
    active: true
  },
  {
    id: 2,
    number: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Warm Transfer",
    outcome: "Escalated to technician",
    type: "Software",
    active: false
  },
  {
    id: 3,
    number: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Appointment",
    outcome: "Appointment Booked",
    type: "Battery",
    active: false
  },
  {
    id: 4,
    number: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "0:20",
    status: "Dropped",
    outcome: "Call Dropped",
    type: "Unknown",
    active: false
  },
];

const transcript = [
  { role: "AI Assistant", text: "Thank you for calling UBreakFix! How can I help you today?", color: "text-emerald-400" },
  { role: "Customer", text: "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?", color: "text-blue-500 font-bold" },
  { role: "AI Assistant", text: "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?", color: "text-emerald-400" },
  { role: "Customer", text: "Yes, please! When are you available?", color: "text-blue-500 font-bold" },
  { role: "AI Assistant", text: "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?", color: "text-emerald-400" },
];

export default function CallLogs() {
  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by phone number, issue type..."
            className="pl-10 bg-card border-border h-11"
          />
        </div>
        <div className="flex gap-3">
          {["All Type", "All Issues", "Today"].map((filter) => (
            <button key={filter} className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors">
              {filter} <ChevronDown className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Call List */}
        <Card className="xl:col-span-1 bg-card border-border overflow-hidden flex flex-col h-175">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold">Call List</h3>
          </div>
          <div className="flex-1 overflow-y-auto">
            {calls.map((call) => (
              <div
                key={call.id}
                className={cn(
                  "p-5 border-b border-border cursor-pointer transition-colors hover:bg-white/5",
                  call.active && "bg-primary/5 border-r-2 border-r-primary"
                )}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{call.number}</p>
                      <p className="text-xs text-muted-foreground">{call.date} • {call.time}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={cn(
                    "text-[10px] uppercase tracking-wider",
                    call.status === "AI Resolved" && "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                    call.status === "Warm Transfer" && "bg-orange-500/10 text-orange-400 border-orange-500/20",
                    call.status === "Dropped" && "bg-red-500/10 text-red-400 border-red-500/20",
                    call.status === "Appointment" && "bg-blue-500/10 text-blue-400 border-blue-500/20",
                  )}>
                    {call.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {call.duration}</span>
                  <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {call.outcome}</span>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-none text-[10px]">
                    {call.type}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Call Details */}
        <Card className="xl:col-span-2 bg-card border-border overflow-hidden flex flex-col h-175">
          <div className="p-6 border-b border-border flex justify-between items-center">
            <h3 className="font-semibold">Call Details</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Phone Number</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Duration</p>
                <p className="font-medium">4:32</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Date & Time</p>
                <p className="font-medium">2025-12-16 10:45 AM</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Issue Type</p>
                <p className="font-medium">Screen</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">AI Resolved</Badge>
                <p className="text-sm text-muted-foreground">Outcome: <span className="text-foreground font-medium">Quote provided</span></p>
              </div>
              <button className="w-full h-12 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl flex items-center justify-center gap-3 font-medium transition-colors border border-primary/20">
                <Play className="w-4 h-4 fill-primary" /> Play Audio Recording
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <FileText className="w-4 h-4" />
                <h4 className="font-semibold text-foreground">Conversation Transcript</h4>
              </div>
              <div className="space-y-6 p-6 rounded-2xl bg-white/5 border border-white/5">
                {transcript.map((line, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className={cn("text-xs font-bold", line.color)}>{line.role}:</p>
                    <p className="text-[15px]">{line.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
