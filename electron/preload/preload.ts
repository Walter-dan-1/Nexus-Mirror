/**
 * =====================================================
 * Nexus Mirror
 * File: preload.ts
 * Purpose: Secure Electron Bridge
 * =====================================================
 */

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("nexus", {
  getAppInfo: () => ipcRenderer.invoke("system:getAppInfo"),

  minimizeWindow: () => ipcRenderer.invoke("window:minimize"),

  maximizeWindow: () => ipcRenderer.invoke("window:maximize"),

  closeWindow: () => ipcRenderer.invoke("window:close")
});

export {};