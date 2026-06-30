import { useEffect, useState } from "react";

type AppInfo = {
  name: string;
  version: string;
  platform: string;
};

declare global {
  interface Window {
    nexus: {
      getAppInfo: () => Promise<AppInfo>;
    };
  }
}

export default function Dashboard() {
  const [appInfo, setAppInfo] = useState<AppInfo>({
    name: "Loading...",
    version: "Loading...",
    platform: "Loading..."
  });

  useEffect(() => {
    async function load() {
      try {
        const info = await window.nexus.getAppInfo();
        setAppInfo(info);
      } catch (error) {
        console.error(error);

        setAppInfo({
          name: "IPC Error",
          version: "-",
          platform: "-"
        });
      }
    }

    load();
  }, []);

  return (
    <main className="flex-1 bg-slate-950 p-10">
      <h1 className="text-4xl font-bold">
        Welcome to {appInfo.name}
      </h1>

      <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p><strong>Application:</strong> {appInfo.name}</p>
        <p><strong>Version:</strong> {appInfo.version}</p>
        <p><strong>Platform:</strong> {appInfo.platform}</p>
      </div>
    </main>
  );
}