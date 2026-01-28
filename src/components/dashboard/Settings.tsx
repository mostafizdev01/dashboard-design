
import {
  User,
  Mail,
  Store,
  MapPin,
  Pencil
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

export default function Settings() {
  const handleSave = () => {
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-4xl">
      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList className="bg-white/5 border border-border p-1 rounded-xl h-12">
          <TabsTrigger value="profile" className="rounded-lg px-8 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Profile
          </TabsTrigger>
          <TabsTrigger value="password" className="rounded-lg px-8 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Password Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-8">
          {/* Profile Image */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold">Profile Image</h3>
            <div className="relative inline-block group">
              <Avatar className="w-24 h-24 border-4 border-card ring-2 ring-primary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-lg shadow-lg hover:scale-110 transition-transform sidebar-glow">
                <Pencil className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-muted-foreground font-medium">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="fullName" defaultValue="Jane D." className="pl-10 h-12 bg-card border-border" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-muted-foreground font-medium">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="email" defaultValue="jane@gmail.com" className="pl-10 h-12 bg-card border-border" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="storeName" className="text-muted-foreground font-medium">Store Name</Label>
              <div className="relative">
                <Store className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="storeName" defaultValue="Ubreakfix Store" className="pl-10 h-12 bg-card border-border" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="storeAddress" className="text-muted-foreground font-medium">Store Address</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="storeAddress" defaultValue="123 Main Street, New York, NY 10001" className="pl-10 h-12 bg-card border-border" />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleSave}
              className="w-full h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-lg transition-all sidebar-glow shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Save
            </button>
          </div>
        </TabsContent>

        <TabsContent value="password">
          <Card className="p-8 bg-card border-border">
            <div className="max-w-md space-y-6">
              <h3 className="text-xl font-semibold">Change Password</h3>
              <div className="space-y-2">
                <Label className="text-muted-foreground font-medium">Current Password</Label>
                <Input type="password"className="bg-transparent underline border-b border-border h-10 px-0 rounded-none focus-visible:ring-0 focus-visible:border-primary" />
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground font-medium">New Password</Label>
                <Input type="password" className="bg-transparent underline border-b border-border h-10 px-0 rounded-none focus-visible:ring-0 focus-visible:border-primary" />
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground font-medium">Confirm New Password</Label>
                <Input type="password" className="bg-transparent underline border-b border-border h-10 px-0 rounded-none focus-visible:ring-0 focus-visible:border-primary" />
              </div>
              <button className="w-full h-12 bg-primary text-primary-foreground rounded-xl font-bold transition-all mt-4">
                Update Password
              </button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
