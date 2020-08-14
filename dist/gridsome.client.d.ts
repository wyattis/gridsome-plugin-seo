import VueType from 'vue';
import { MetaInfo } from 'vue-meta';
export default function (Vue: typeof VueType, options: any, context: any): void;
declare module 'vue/types/vue' {
    interface Vue {
        makeSeoContent(context: any, opts?: any): MetaInfo;
    }
}
