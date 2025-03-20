// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'



// export default defineConfig({
//   plugins: [react(), svgr()],
//   test: {
//     globals: true,
//     environment: "jsdom",
//     setupFiles: "./src/setupTests.js",
//   },
// })
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true, // ✅ Allows `test`, `expect`, `describe` globally
    environment: "jsdom", // ✅ Simulates a browser environment
    setupFiles: "./src/setupTest.js", // ✅ Runs before tests
  },
});