import { SEOConfig } from './types';
export declare type Config = {
    data?: Partial<SEOConfig>;
    extract?: {
        default: {};
    };
};
export declare function extractData(config: {}, ...sources: any[]): SEOConfig;
