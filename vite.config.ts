import solid from "solid-start/vite";
import {defineConfig} from "vite";

export default defineConfig({//TODO
    plugins: [solid({
        ssr: false
    })],
});
