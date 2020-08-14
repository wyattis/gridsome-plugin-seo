import { SEOConfig } from './types';
import { MetaInfo } from 'vue-meta';
declare type SEOFlags = {
    openGraph?: boolean;
    twitter?: boolean;
};
export declare function makeRichContent(config: SEOConfig, flags?: SEOFlags): MetaInfo;
export {};
