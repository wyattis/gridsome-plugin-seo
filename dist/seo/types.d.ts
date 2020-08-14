declare type AppPlatform = {
    name?: string;
    id?: string;
    url?: string;
};
export interface TwitterApp extends TwitterBase {
    type: 'app';
    name: string;
    country?: string;
    iphone?: AppPlatform;
    ipad?: AppPlatform;
    googleplay?: AppPlatform;
}
export interface TwitterPlayer extends TwitterBase {
    type: 'player';
    url: string;
    width: number;
    height: number;
    image?: string;
    imageAlt?: string;
}
export interface TwitterSummaryLarge extends TwitterBase {
    type: 'summary_large_image';
    image?: string;
}
export interface TwitterSummary extends TwitterBase {
    type: 'summary';
}
export interface TwitterBase {
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    site?: string;
    creator?: string;
}
declare type TwitterConfig = TwitterBase & (TwitterSummary | TwitterApp | TwitterPlayer | TwitterSummaryLarge);
export declare type Meta = {
    name: string;
    content: string;
};
declare type OpenGraphImage = {
    url: string;
    secure_url?: string;
    type: 'image/jpeg' | 'image/gif' | 'image/png';
    width: number;
    height: number;
};
declare enum VideoType {
    MOVIE = "movie",
    EPISODE = "episode",
    TV_SHOW = "tv_show",
    OTHER = "other"
}
declare type OpenGraphVideo = {
    type: VideoType;
    url: string;
    secure_url?: string;
    width: number;
    height: number;
};
declare type OpenGraphConfig = {
    url: string;
    title: string;
    description: string;
    type?: 'website';
    locale?: string;
    app_id?: string;
    video?: OpenGraphVideo | OpenGraphVideo[] | string | string[];
    image?: OpenGraphImage | OpenGraphImage[] | string | string[];
};
export declare type SEOConfig = {
    title: string;
    description: string;
    keywords?: string;
    robots?: string;
    graph?: {
        title?: string;
        description?: string;
        image?: string;
        type?: NodeType;
        url?: string;
        openGraph?: OpenGraphConfig;
        twitter?: TwitterConfig;
    };
};
export declare enum NodeType {
    WEB = "website",
    VIDEO = "video",
    IMAGE = "image"
}
export declare const sharedKeys: ReadonlyArray<string>;
export {};
