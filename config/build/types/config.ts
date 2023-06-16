export type BuildMode = 'production' | 'development';

export interface Buildpath {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: Buildpath;
  isDev: boolean;
  port: number;
}
