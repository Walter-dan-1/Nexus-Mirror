/**
 * =====================================================
 * Nexus Mirror
 * File: system.ts
 * Purpose: System IPC Handlers
 * =====================================================
 */
import { app, ipcMain } from "electron";
export function registerSystemHandlers() {
    ipcMain.handle("system:getAppInfo", () => ({
        name: app.getName(),
        version: app.getVersion(),
        platform: process.platform
    }));
}
//# sourceMappingURL=system.js.map