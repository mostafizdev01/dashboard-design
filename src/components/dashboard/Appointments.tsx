
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  Copy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../ui/table";
import { toast } from "sonner";

const appointments = [
  { name: "Jane D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", repair: "Screen", date: "02/06/2026", slot: "1", time: "09:00" },
  { name: "Jane D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", repair: "Screen", date: "02/06/2026", slot: "1", time: "10:00" },
  { name: "Jane D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", repair: "Screen", date: "02/06/2026", slot: "1", time: "11:00" },
  { name: "Jane D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", repair: "Screen", date: "02/06/2026", slot: "1", time: "12:00" },
  { name: "Jane D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", repair: "Screen", date: "02/06/2026", slot: "1", time: "02:00" },
  { name: "Jane D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", repair: "Screen", date: "02/06/2026", slot: "1", time: "03:00" },
];

export default function Appointments() {
  const copyLink = () => {
    navigator.clipboard.writeText("https://techstore.com/book?id=store123");
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="space-y-8">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-card border-border">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-400" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium uppercase">Total Booked</p>
              <p className="text-2xl font-bold">34</p>
              <p className="text-xs text-emerald-400 font-medium">+8 this week</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-card border-border">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium uppercase">AI Booked</p>
              <p className="text-2xl font-bold">28</p>
              <p className="text-xs text-muted-foreground">82% of total</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-card border-border">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <AlertCircle className="w-5 h-5 text-orange-400" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium uppercase">Pending</p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-muted-foreground">Awaiting confirmation</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Booking Link */}
      <Card className="p-4 lg:p-6 bg-card border-border">
        <h3 className="text-sm font-semibold mb-4">Booking Link</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 h-12 bg-white/5 border border-border rounded-xl flex items-center px-4 text-muted-foreground font-mono text-xs sm:text-sm overflow-hidden whitespace-nowrap text-ellipsis">
            https://techstore.com/book?id=store123
          </div>
          <button
            onClick={copyLink}
            className="h-12 px-6 bg-slate-800 text-white border cursor-pointer border-slate-500 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <Copy className="w-4 h-4" /> Copy Link
          </button>
        </div>
      </Card>

      {/* Appointments Table */}
      <Card className="bg-card border-border overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-border">
          <Table className="min-w-250">
            <TableHeader className="bg-white/5">
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground font-semibold">Client Name</TableHead>
                <TableHead className="text-muted-foreground font-semibold">Client Phone</TableHead>
                <TableHead className="text-muted-foreground font-semibold">Client Mail</TableHead>
                <TableHead className="text-muted-foreground font-semibold">Device</TableHead>
                <TableHead className="text-muted-foreground font-semibold">Repair Type</TableHead>
                <TableHead className="text-muted-foreground font-semibold">Date</TableHead>
                <TableHead className="text-muted-foreground font-semibold text-center">Slot no</TableHead>
                <TableHead className="text-muted-foreground font-semibold text-right">Start Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((apt, idx) => (
                <TableRow key={idx} className="border-border hover:bg-white/5 transition-colors group">
                  <TableCell className="font-medium text-blue-500 cursor-pointer group-hover:underline underline-offset-4">{apt.name}</TableCell>
                  <TableCell>{apt.phone}</TableCell>
                  <TableCell>{apt.email}</TableCell>
                  <TableCell>{apt.device}</TableCell>
                  <TableCell>{apt.repair}</TableCell>
                  <TableCell>{apt.date}</TableCell>
                  <TableCell className="text-center">{apt.slot}</TableCell>
                  <TableCell className="text-right">{apt.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="p-4 lg:p-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors order-2 sm:order-1">
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <div className="flex items-center gap-1 lg:gap-2 order-1 sm:order-2">
            {[1, 2, 3, 4, 5, "...", 11].map((p, idx) => (
              <button
                key={idx}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${p === 2 ? "bg-blue-600 text-primary-foreground shadow-[0_0_10px_rgba(34,211,238,0.4)]" : "text-muted-foreground hover:bg-white/5"
                  } ${typeof p !== 'number' && p !== '...' ? 'hidden md:block' : ''}`}
              >
                {p}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 transition-colors order-3">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </Card>
    </div>
  );
}
