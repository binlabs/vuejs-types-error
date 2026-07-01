import { vuejsTypesPlugin } from "@wc-toolkit/vuejs-types";

export default {
  /** Globs to analyze */
  globs: ["src/components/**/*.ts"],
  /** Globs to exclude */
  exclude: ["src/**/*.test.ts", "src/**/*.stories.ts", "src/**/*.styles.ts"],
  /** Enable special handling for litelement */
  litelement: true,
  /** Provide custom plugins */
  plugins: [
    vuejsTypesPlugin({
      outdir: "types",
      fileName: "custom-element-vuejs.d.ts",
      modulePath: (_, tagName) =>
        `../dist/components/${tagName.replace("my-", "")}/${tagName.replace("my-", "")}.js`,
    }),
  ],
};
