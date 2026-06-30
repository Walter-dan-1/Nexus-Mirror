/**
 * =====================================================
 * Nexus Mirror
 * File: window.ts
 * =====================================================
 */
import { ipcMain } from "electron";
export function registerWindowHandlers(window) {
    ipcMain.handle("window:minimize", () => {
        window.minimize();
    });
    ipcMain.handle("window:maximize", () => {
        if (window.isMaximized()) {
            window.unmaximize();
        }
        else {
            window.maximize();
        }
    });
    ipcMain.handle("window:close", () => {
        window.close();
    });
    ipcMain.handle("window:isMaximized", () => {
        return window.isMaximized();
    });
}
//# sourceMappingURL=window.js.map