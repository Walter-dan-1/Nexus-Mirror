/**
 * =====================================================
 * Nexus Mirror
 * File: preload.ts
 * =====================================================
 */
import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld("nexus", {
    getAppInfo: () => ipcRenderer.invoke("system:getAppInfo"),
    minimizeWindow: () => ipcRenderer.invoke("window:minimize"),
    maximizeWindow: () => ipcRenderer.invoke("window:maximize"),
    closeWindow: () => ipcRenderer.invoke("window:close"),
    isMaximized: () => ipcRenderer.invoke("window:isMaximized")
});
//# sourceMappingURL=preload.js.map