import {
    Minus,
    Square,
    X
} from "lucide-react";

import electronService from "../services/electron/electronService";

export default function TitleBar() {

    return (

        <header
            className="h-12 bg-slate-900 border-b border-slate-800 flex items-center justify-between select-none"
            style={{ WebkitAppRegion: "drag" } as React.CSSProperties}
        >

            <div className="px-5 text-blue-500 font-semibold">
                Nexus Mirror
            </div>

            <div
                className="flex"
                style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
            >

                <button
                    onClick={() => electronService.minimize()}
                    className="w-12 h-12 hover:bg-slate-700 transition"
                >
                    <Minus className="mx-auto" size={18}/>
                </button>

                <button
                    onClick={() => electronService.maximize()}
                    className="w-12 h-12 hover:bg-slate-700 transition"
                >
                    <Square className="mx-auto" size={16}/>
                </button>

                <button
                    onClick={() => electronService.close()}
                    className="w-12 h-12 hover:bg-red-600 transition"
                >
                    <X className="mx-auto" size={18}/>
                </button>

            </div>

        </header>

    );

}