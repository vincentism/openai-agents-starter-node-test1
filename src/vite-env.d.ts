/// <reference types="vite/client" />

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

interface ImportMetaEnv {
  /**
   * JWT used to authenticate against the agent backend (edge controller).
   * Must be signed by the private key matching a public key in
   * edgeone.json `agents.auth.verificationKeys`. Injected at build time.
   * Never commit a real token to the repo.
   */
  readonly VITE_AGENT_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
