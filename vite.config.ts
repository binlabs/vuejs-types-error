import path from "path";
import summary from "rollup-plugin-summary";
import { fileURLToPath } from "url";
import { defineConfig, UserConfigExport } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const kitchenSinkConfig: UserConfigExport = defineConfig({
  publicDir: false,
  build: {
    outDir: path.join(__dirname, "./public/html"),
    lib: {
      entry: path.join(__dirname, "./src/index.ts"),
      name: "cui",
      formats: ["es"],
      fileName: "index",
    },
  },
  plugins: [summary()],
});

export default kitchenSinkConfig;
