import solid from "solid-start/vite";
import {defineConfig} from "vite";
// @ts-ignore: types are not ready
import ssg from "solid-start-static";

export default defineConfig({//TODO
    plugins: [solid({
        ssr: false,
        // prerenderRoutes: ["/", "/en", "/pt"],
        adapter: ssg({}),
        
    })],
});
