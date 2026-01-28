import { useState } from "react";
import { Edit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type TabType = "profile" | "password";
type ModeType = "view" | "edit";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [mode, setMode] = useState<ModeType>("view");
  const [formData, setFormData] = useState({
    fullName: "Md Mostafiz Rahman",
    email: "mostafiz4372@gmail.com",
    storeName: "FAI OP",
    storeAddress: "Dhaka, Bangladesh",
  });

  const handleSave = () => {
    setMode("view");
    toast.success("Saved Successfull!")
  };

  return (

    <>
      {/* Tabs */}
      <div className="flex gap-6 mb-8 border-b border-card-border">
        <button
          onClick={() => setActiveTab("profile")}
          className={cn(
            "pb-3 text-sm font-medium transition-colors border-b-2 -mb-px",
            activeTab === "profile"
              ? "text-foreground border-foreground"
              : "text-foreground-muted border-transparent hover:text-foreground"
          )}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("password")}
          className={cn(
            "pb-3 text-sm font-medium transition-colors border-b-2 -mb-px",
            activeTab === "password"
              ? "text-foreground border-foreground"
              : "text-foreground-muted border-transparent hover:text-foreground"
          )}
        >
          Password Settings
        </button>
      </div>

      {activeTab === "profile" && (
        <div className="max-w-2xl">
          {/* Profile Image */}
          <div className="mb-8">
            <p className="text-sm text-foreground-muted mb-4">Profile Image</p>
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-accent/30">
                <img
                  src="https://www.mostafizdev.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F145785701%3Fv%3D4&w=640&q=75"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {mode === "view" && (
                <button
                  onClick={() => setMode("edit")}
                  className="absolute -right-1 -bottom-1 w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg hover:bg-accent/80 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              )}
              {mode === "edit" && (
                <button className="ml-4 px-4 py-2 bg-card border border-card-border rounded-lg text-sm text-foreground hover:border-accent/50 transition-colors absolute -right-24 top-1/2 -translate-y-1/2">
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {mode === "view" ? (
            /* View Mode */
            <div className="space-y-6">
              <div>
                <p className="text-sm text-foreground-muted mb-1">Full Name:</p>
                <p className="text-foreground">{formData.fullName}</p>
              </div>
              <div>
                <p className="text-sm text-foreground-muted mb-1">Email:</p>
                <p className="text-foreground">{formData.email}</p>
              </div>
              <div>
                <p className="text-sm text-foreground-muted mb-1">Store Name:</p>
                <p className="text-foreground">{formData.storeName}</p>
              </div>
              <div>
                <p className="text-sm text-foreground-muted mb-1">Store Address:</p>
                <p className="text-foreground">{formData.storeAddress}</p>
              </div>
            </div>
          ) : (
            /* Edit Mode */
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-card-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent/50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-card-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-foreground mb-2">Store Name</label>
                  <input
                    type="text"
                    value={formData.storeName}
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-card-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent/50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Store Address</label>
                  <input
                    type="text"
                    value={formData.storeAddress}
                    onChange={(e) => setFormData({ ...formData, storeAddress: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-card-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent/50"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSave}
                  className="w-full md:w-auto px-16 py-3 bg-success hover:bg-success/90 text-white font-medium rounded-lg transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "password" && (
        <div className="max-w-md">
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-foreground mb-2">Current Password</label>
              <input
                type="password"
                placeholder="Enter current password"
                className="w-full px-4 py-3 bg-input border border-card-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent/50"
              />
            </div>
            <div>
              <label className="block text-sm text-foreground mb-2">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full px-4 py-3 bg-input border border-card-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent/50"
              />
            </div>
            <div>
              <label className="block text-sm text-foreground mb-2">Confirm New Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full px-4 py-3 bg-input border border-card-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent/50"
              />
            </div>
            <div className="pt-4">
              <button className="w-full px-16 py-3 bg-success hover:bg-success/90 text-white font-medium rounded-lg transition-colors">
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
