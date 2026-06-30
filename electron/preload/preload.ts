/**
 * =====================================================
 * Nexus Mirror
 * File: preload.ts
 * Purpose: Secure Bridge
 * =====================================================
 */

import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("nexus", {
  version: "0.1.0"
});