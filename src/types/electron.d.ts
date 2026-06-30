export {};

declare global {

    interface AppInfo {
        name: string;
        version: string;
        platform: string;
    }

    interface Window {

        nexus: {

            getAppInfo(): Promise<AppInfo>;

            minimizeWindow(): Promise<void>;

            maximizeWindow(): Promise<void>;

            closeWindow(): Promise<void>;

            isMaximized(): Promise<boolean>;

        };

    }

}