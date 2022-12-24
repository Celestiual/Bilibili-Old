/** API IO */
export class URLS {
    // protocol + //
    private static readonly P_AUTO = '//';
    private static readonly P_HTTP = 'http://';
    private static readonly P_HTTPS = 'https://';
    private static readonly P_WS = 'ws://';
    private static readonly P_WSS = 'wss://';
    // domain
    private static readonly D_WWW = 'www.bilibili.com';
    private static readonly D_API = 'api.bilibili.com';
    private static readonly D_APP = 'app.bilibili.com';
    private static readonly D_MANAGER = 'manager.bilibili.co';
    private static readonly D_INTERFACE = 'interface.bilibili.com';
    private static readonly D_PASSPORT = 'passport.bilibili.com';
    private static readonly D_BANGUMI = 'bangumi.bilibili.com';
    private static readonly D_SPACE = 'space.bilibili.com';
    private static readonly D_STATIC_S = 'static.hdslb.com';
    private static readonly D_CHAT = 'chat.bilibili.com';
    private static readonly D_DATA = 'data.bilibili.com';
    private static readonly D_COMMENT = 'comment.bilibili.com';
    private static readonly D_BROADCAST = 'broadcast.bilibili.com';
    private static readonly D_MISAKA_SW = 'misaka-sw.bilibili.com';
    private static readonly D_MEMBER = 'member.bilibili.com';
    private static readonly D_BVC = 'bvc.bilivideo.com';
    private static readonly D_S1 = 's1.hdslb.com';
    private static readonly D_API_GLOBAL = 'api.global.bilibili.com';
    private static readonly D_ACCOUNT = 'account.bilibili.com';
    private static readonly D_INTL = 'apiintl.biliapi.net';

    static readonly WEBSHOW_LOCS = URLS.P_AUTO + URLS.D_API + '/x/web-show/res/locs';
    static readonly INDEX_TOP_RCMD = URLS.P_AUTO + URLS.D_API + '/x/web-interface/index/top/rcmd';
    static readonly PAGE_HEADER = URLS.P_AUTO + URLS.D_API + '/x/web-show/page/header';
    static readonly SEASON_RANK_LIST = URLS.P_AUTO + URLS.D_API + '/pgc/season/rank/web/list';
    static readonly VIDEO = URLS.P_AUTO + URLS.D_STATIC_S + '/js/video.min.js';
    static readonly JQUERY = URLS.P_AUTO + URLS.D_STATIC_S + '/js/jquery.min.js';
    static readonly ARTICLE_CARDS = URLS.P_AUTO + URLS.D_API + '/x/article/cards';
    static readonly VIEW_DETAIL = URLS.P_AUTO + URLS.D_API + '/x/web-interface/view/detail';
    static readonly VIEW = URLS.P_AUTO + URLS.D_API + '/view';
    static readonly X_VIEW = URLS.P_AUTO + URLS.D_API + '/x/web-interface/view';
    static readonly PAGE_LIST = URLS.P_AUTO + URLS.D_API + '/x/player/pagelist';
    static readonly TAG_INFO = URLS.P_AUTO + URLS.D_API + '/x/tag/info';
    static readonly TAG_TOP = URLS.P_AUTO + URLS.D_API + '/x/web-interface/tag/top';
    static readonly BANGUMI_SEASON = URLS.P_AUTO + URLS.D_BANGUMI + '/view/web_api/season';
    static readonly SEASON_STATUS = URLS.P_AUTO + URLS.D_API + '/pgc/view/web/season/user/status';
    static readonly SEASON_SECTION = URLS.P_AUTO + URLS.D_API + '/pgc/web/season/section';
    static readonly GLOBAL_OGV_VIEW = URLS.P_AUTO + URLS.D_API_GLOBAL + '/intl/gateway/v2/ogv/view/app/season';
    static readonly GLOBAL_OGV_PLAYURL = URLS.P_AUTO + URLS.D_API_GLOBAL + '/intl/gateway/v2/ogv/playurl';
    static readonly APP_PGC_PLAYURL = URLS.P_AUTO + URLS.D_API + '/pgc/player/api/playurl';
    static readonly ACCOUNT_GETCARDBYMID = URLS.P_AUTO + URLS.D_ACCOUNT + '/api/member/getCardByMid';
    static readonly LOGIN_APP_THIRD = URLS.P_AUTO + URLS.D_PASSPORT + '/login/app/third';
    static readonly PLAYER = URLS.P_AUTO + URLS.D_API + '/x/player/v2';
    static readonly PLAYURL_PROJ = URLS.P_AUTO + URLS.D_APP + '/v2/playurlproj';
    static readonly PGC_PLAYURL_PROJ = URLS.P_AUTO + URLS.D_API + '/pgc/player/api/playurlproj';
    static readonly PGC_PLAYURL_TV = URLS.P_AUTO + URLS.D_API + '/pgc/player/api/playurltv';
    static readonly UGC_PLAYURL_TV = URLS.P_AUTO + URLS.D_API + '/x/tv/ugc/playurl';
    static readonly PGC_PLAYURL = URLS.P_AUTO + URLS.D_API + '/pgc/player/web/playurl';
    static readonly PLAYURL = URLS.P_AUTO + URLS.D_API + '/x/player/playurl';
    static readonly INTL_PLAYURL = URLS.P_AUTO + URLS.D_APP + '/x/intl/playurl';
    static readonly INTL_OGV_PLAYURL = URLS.P_AUTO + URLS.D_INTL + '/intl/gateway/ogv/player/api/playurl';
    static readonly PLAYURL_INTERFACE = URLS.P_AUTO + URLS.D_INTERFACE + '/v2/playurl';
    static readonly PLAYURL_BANGUMI = URLS.P_AUTO + URLS.D_BANGUMI + '/player/web_api/v2/playurl';
    static readonly LIKE = URLS.P_AUTO + URLS.D_API + '/x/web-interface/archive/like';
    static readonly HAS_LIKE = URLS.P_AUTO + URLS.D_API + '/x/web-interface/archive/has/like';
    static readonly DM_WEB_VIEW = URLS.P_AUTO + URLS.D_API + '/x/v2/dm/web/view';
    static readonly DM_WEB_SEG_SO = URLS.P_AUTO + URLS.D_API + '/x/v2/dm/web/seg.so';
}