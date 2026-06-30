import { Monitor, Gamepad2, Smartphone, FolderOpen, Settings } from "lucide-react";

const items = [
  { icon: Monitor, label: "Screen Share" },
  { icon: Gamepad2, label: "Controller" },
  { icon: Smartphone, label: "Devices" },
  { icon: FolderOpen, label: "Transfers" },
  { icon: Settings, label: "Settings" }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
      <div className="p-6 text-2xl font-bold text-blue-500">
        Nexus Mirror
      </div>

      <nav className="flex-1 px-3">
        {items.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition mb-2"
          >
            <Icon size={20} />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}