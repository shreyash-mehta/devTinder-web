import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { BASE_URL } from "./src/utils/constants";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
