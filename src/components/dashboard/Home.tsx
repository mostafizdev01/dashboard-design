
import {
    Phone,
    Bot,
    ArrowRightLeft,
    Calendar,
    XCircle,
    Clock,
    ChevronDown
} from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { Card } from "../ui/card";

const stats = [
    {
        title: "Total Calls Today",
        value: "127",
        change: "+12%",
        isPositive: true,
        icon: Phone,
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-400"
    },
    {
        title: "AI-Handled Calls",
        value: "98",
        change: "+77%",
        isPositive: true,
        icon: Bot,
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-400"
    },
    {
        title: "Warm Transfer",
        value: "23",
        change: "+18%",
        isPositive: true,
        icon: ArrowRightLeft,
        iconBg: "bg-orange-500/20",
        iconColor: "text-orange-400"
    },
    {
        title: "Appointments Booked",
        value: "34",
        change: "+8%",
        isPositive: true,
        icon: Calendar,
        iconBg: "bg-emerald-500/20",
        iconColor: "text-emerald-400"
    },
    {
        title: "Missed/Failed Calls",
        value: "6",
        change: "-3%",
        isPositive: false,
        icon: XCircle,
        iconBg: "bg-red-500/20",
        iconColor: "text-red-400"
    },
    {
        title: "Avg Call Duration",
        value: "3:42",
        change: "+15%",
        isPositive: true,
        icon: Clock,
        iconBg: "bg-indigo-500/20",
        iconColor: "text-indigo-400"
    },
];

const chartData = [
    { name: "Mon", calls: 45 },
    { name: "Tue", calls: 62 },
    { name: "Wed", calls: 58 },
    { name: "Thu", calls: 75 },
    { name: "Fri", calls: 82 },
    { name: "Sat", calls: 95 },
    { name: "Sun", calls: 68 },
];

const recentActivity = [
    {
        text: "AI booked appointment for iPhone 13 screen repair",
        time: "2 min ago",
        dotColor: "bg-emerald-500"
    },
    {
        text: "Warm transfer to technician - Software issue",
        time: "5 min ago",
        dotColor: "bg-orange-500"
    },
    {
        text: "Quote provided for iPad battery replacement",
        time: "8 min ago",
        dotColor: "bg-emerald-500"
    },
    {
        text: "Call dropped after 12 seconds",
        time: "15 min ago",
        dotColor: "bg-red-500"
    },
];

const topRequests = [
    { name: "Screen Repair", count: 156, percentage: 85, color: "bg-blue-500" },
    { name: "Battery Replacement", count: 89, percentage: 55, color: "bg-blue-500" },
    { name: "Back Glass Repair", count: 67, percentage: 40, color: "bg-blue-500" },
    { name: "Software Issues", count: 45, percentage: 25, color: "bg-blue-500" },
];

export default function Home() {
    return (
        <div className="space-y-8 pb-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <Card key={stat.title} className="p-6 border-border hover:border-primary/50 transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                                <p className="text-3xl font-bold">{stat.value}</p>
                                <p className={stat.isPositive ? "text-emerald-400 text-sm font-medium" : "text-red-400 text-sm font-medium"}>
                                    {stat.change}
                                </p>
                            </div>
                            <div className={`p-3 rounded-xl ${stat.iconBg}`}>
                                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Main Chart Section */}
            <Card className="p-8 bg-card border-border">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-xl font-semibold">Call Trends - This Week</h2>
                        <p className="text-muted-foreground text-sm">Total: 472 calls</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border text-sm font-medium hover:bg-accent transition-colors">
                        This Week <ChevronDown className="w-4 h-4" />
                    </button>
                </div>

                <div className="h-75 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#22D3EE" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94A3B8', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94A3B8', fontSize: 12 }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#121E4A',
                                    border: '1px solid #121E4A',
                                    borderRadius: '8px'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="calls"
                                stroke="#132255"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="#132255"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            {/* Bottom Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <Card className="p-8 bg-card border-border">
                    <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
                    <div className="space-y-6">
                        {recentActivity.map((activity, idx) => (
                            <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-transparent hover:border-white/10 transition-colors group">
                                <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${activity.dotColor}`} />
                                <div className="space-y-1">
                                    <p className="text-[15px] font-medium leading-tight group-hover:text-blue-400 transition-colors">
                                        {activity.text}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Top Repair Requests */}
                <Card className="p-8 bg-card border-border">
                    <h2 className="text-xl font-semibold mb-6">Top Repair Requests</h2>
                    <div className="space-y-8">
                        {topRequests.map((request, idx) => (
                            <div key={idx} className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium">{request.name}</span>
                                    <span className="text-muted-foreground">{request.count} requests</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${request.color} rounded-full transition-all duration-1000`}
                                        style={{ width: `${request.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
