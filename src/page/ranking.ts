import { BLOD } from "../bilibili-old";
import { Page } from "./page";
import html from '../html/ranking.html';
import { jsonpHook } from "../utils/hook/node";
import { propertyHook } from "../utils/hook/method";
import { addCss } from "../utils/element";
import { Header } from "./header";

export class PageRanking extends Page {
    constructor(protected BLOD: BLOD) {
        super(html);
        this.location();
        this.overDue();
        this.initState();
        this.updateDom();
        Header.primaryMenu();
        Header.banner();
    }
    /** 还原正确的排行地址否则页面无法正常初始化 */
    protected location() {
        this.BLOD.urlCleaner.updateLocation(/ranking/.test(document.referrer) ? document.referrer : "https://www.bilibili.com/ranking");
    }
    /** 三日以外的数据全部过期 */
    protected overDue() {
        jsonpHook(["api.bilibili.com/x/web-interface/ranking", "arc_type=0"], d => d.replace(/day=\d+/, "day=3"), undefined, false);
    }
    /** 禁用错误的__INITIAL_STATE__ */
    protected initState() {
        propertyHook(window, '__INITIAL_STATE__', undefined);
    }
    /** 优化高分辨率支持 */
    protected style() {
        addCss("@media screen and (min-width: 1400px){.main-inner {width: 1160px !important;}}");
    }
}