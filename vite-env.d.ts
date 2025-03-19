/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: string; // Recognizes 'development', 'production', etc.
  readonly VITE_API_URL?: string; // Add other environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;