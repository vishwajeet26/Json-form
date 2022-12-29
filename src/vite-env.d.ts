/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_APP_ENV: 'development' | 'staging' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
