export default function (api: any, options: any): void;
export declare const defaultOptions: () => {
    output: {
        openGraph: boolean;
        twitter: boolean;
        robots: boolean;
    };
    data: {
        type: string;
    };
    extract: {
        default: {
            title: string;
            keywords: string;
            description: string;
            image: string;
            url: string;
        };
    };
};
