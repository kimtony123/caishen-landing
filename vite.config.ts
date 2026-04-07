import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      three: "three",
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx"],
  },
  plugins: [
    react(),
  ],
});
