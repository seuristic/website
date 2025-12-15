/// <reference types="vite/client" />
/// <reference types="vite-imagetools" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string
  readonly VITE_FLAGSMITH_ENVIRONMENT_ID?: string
  readonly VITE_FLAGSMITH_API?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
