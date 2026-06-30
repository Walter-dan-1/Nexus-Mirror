import { contextBridge, ipcRenderer } from "electron";
console.log("✅ PRELOAD EXECUTED");
const api = {
    getAppInfo: () => ipcRenderer.invoke("system:getAppInfo")
};
contextBridge.exposeInMainWorld("nexus", api);
console.log("✅ API EXPOSED");
//# sourceMappingURL=preload.js.map