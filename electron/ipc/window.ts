/**
 * =====================================================
 * Nexus Mirror
 * File: window.ts
 * Purpose: Window IPC Handlers
 * =====================================================
 */

import { BrowserWindow, ipcMain } from "electron";

export function registerWindowHandlers(window: BrowserWindow): void {
  ipcMain.handle("window:minimize", () => {
    window.minimize();
  });

  ipcMain.handle("window:maximize", () => {
    if (window.isMaximized()) {
      window.unmaximize();
    } else {
      window.maximize();
    }
  });

  ipcMain.handle("window:close", () => {
    window.close();
  });
}