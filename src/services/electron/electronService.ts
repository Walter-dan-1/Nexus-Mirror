class ElectronService {

    getAppInfo() {
        return window.nexus.getAppInfo();
    }

    minimize() {
        return window.nexus.minimizeWindow();
    }

    maximize() {
        return window.nexus.maximizeWindow();
    }

    close() {
        return window.nexus.closeWindow();
    }

    isMaximized() {
        return window.nexus.isMaximized();
    }

}

export default new ElectronService();