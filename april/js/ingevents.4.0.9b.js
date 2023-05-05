

var ingEvents = function (window) {
    var module = {},
        params = {};

    /**
     * Search Yandex Metrika tracking ids
     * @returns {Array}
     */
    module.findYMIds = function () {
        var idsYM = [];
        if (typeof window['Ya'] !== 'undefined') {
            if (typeof window['Ya']['_metrika'] !== 'undefined') {
                for (var key in window['Ya']['_metrika']['hitParam']) {
                    if (!window['Ya']['_metrika']['hitParam'].hasOwnProperty(key)) {
                        continue;
                    }
                    idsYM.push(parseInt(key));
                }
            }
        }
        return idsYM;
    };

    /**
     * Search alternate GA tracking name
     * @returns {*}
     */
    module.checkGAName = function () {
        if (typeof window['ga'] === 'undefined') {
            if (typeof window['__gaTracker'] !== 'undefined') {
                return '__gaTracker';
            }
        } else {
            return 'ga';
        }
        return undefined;
    };

    /**
     * Search GA tracking names and ids
     * @returns {{GA: Array, GT: Array}}
     */
    module.findGAIds = function () {
        var trackersGA = [];
        var trackersGT = [];
        if (typeof window[params.nameGA] !== 'undefined') {
            var ga_trackers = window[params.nameGA]['getAll']();
            ga_trackers.forEach(function (item) {
                var ga_name = item.get('name');
                if (ga_name === 't0') {
                    trackersGA.push('send');
                }
                if (/^(gtag_UA_.*)$/g.exec(ga_name) === null && ga_name !== 't0') {
                    trackersGA.push(ga_name + '.send');
                }
                trackersGT.push(item.get('trackingId'));
            });
        }
        return { GA: trackersGA, GT: trackersGT };
    };

    /**
     * Set module params
     * @param debug
     * @param idsYM
     * @param idsGA
     * @param idsGT
     * @param nameGA
     */
    module.init = function (_ref) {
        var _ref$debug = _ref.debug,
            debug = _ref$debug === undefined ? true : _ref$debug,
            _ref$idsYM = _ref.idsYM,
            idsYM = _ref$idsYM === undefined ? this.findYMIds() : _ref$idsYM,
            _ref$idsGA = _ref.idsGA,
            idsGA = _ref$idsGA === undefined ? [] : _ref$idsGA,
            _ref$idsGT = _ref.idsGT,
            idsGT = _ref$idsGT === undefined ? [] : _ref$idsGT,
            _ref$nameGA = _ref.nameGA,
            nameGA = _ref$nameGA === undefined ? this.checkGAName() : _ref$nameGA;

        params.debug = debug;
        params.idsYM = idsYM;
        params.idsGA = idsGA;
        params.idsGT = idsGT;
        params.nameGA = nameGA;
        params.init = true;

        var trackers = this.findGAIds();

        if (params.idsGA.length === 0) {
            params.idsGA = trackers.GA;
        }

        if (params.idsGT.length === 0) {
            params.idsGT = trackers.GT;
        }
    };

    module.checkPrams = function () {
        if (params.init !== true) {
            module.init({});
        }
    };

    /**
     * Return module params
     * @returns {*}
     */
    module.getParams = function () {
        return params;
    };

    /**
     * Return script version
     * @returns {string}
     */
    module.version = function () {
        return 'Events script version: 4.0.9b';
    };

    module.banner = function () {
        return "\n _                                           _\n(_)                                         | |\n _  _ __   __ _   ___  __    __  ___  _ __  | |_  ___\n| || '_ \\ / _` | / _ \\ \\ \\  / / / _ \\| '_ \\ | __|/ __|\n| || | | | (_| ||  __/  \\ \\/ / |  __/| | | || |_ \\__ \\\n|_||_| |_|\\__, | \\___|   \\__/   \\___||_| |_| \\__||___/\n           __/ |\n          |___/";
    };

    /**
     * Call YM event or virtual page
     * @param type
     * @param label
     * @param goalParams
     * @constructor
     */
    module.YMReachGoal = function (_ref2) {
        var _ref2$type = _ref2.type,
            type = _ref2$type === undefined ? 'event' : _ref2$type,
            label = _ref2.label,
            _ref2$goalParams = _ref2.goalParams,
            goalParams = _ref2$goalParams === undefined ? {} : _ref2$goalParams;

        if (typeof label !== 'undefined') {
            for (var i = 0; i < params.idsYM.length; i++) {
                if (typeof window['yaCounter' + params.idsYM[i]] !== 'undefined') {
                    window['yaCounter' + params.idsYM[i]]['reachGoal'](label, goalParams, module.callbackTrackersMessage(type, 'ym', 'yaCounter' + params.idsYM[i], params.debug, label));
                }
            }
        }
    };

    /**
     * Call GA virtual page
     * @param page
     * @constructor
     */
    module.GAPageView = function (_ref3) {
        var page = _ref3.page;

        // Search tracker ga.js
        if (typeof window['_gaq'] !== 'undefined') {
            window['_gaq'].push(['_trackPageview', page]);
            module.callbackTrackersMessage('page', 'ga', '_gaq', params.debug, page);
        }

        // Search tracker analytics.js
        if (typeof window[params.nameGA] !== 'undefined') {
            for (var i = 0; i < params.idsGA.length; i++) {
                window[params.nameGA](params.idsGA[i], 'pageview', page, { hitCallback: ingCallbackTrackersMessage('page', 'ga', 'ga(' + params.idsGA[i] + ')', params.debug, page) });
            }
        }

        // Search tracker gtag.js
        if (typeof window['gtag'] !== 'undefined') {
            for (var _i = 0; _i < params.idsGT.length; _i++) {
                window['gtag']('event', 'page_view', { 'send_to': params.idsGT[_i], 'page_path': page });
                module.callbackTrackersMessage('page', 'ga', 'gtag(' + params.idsGT[_i] + ')', params.debug, page);
            }
        }
    };

    /**
     * Call GA event
     * @param category
     * @param action
     * @param label
     * @constructor
     */
    module.GAEvent = function (_ref4) {
        var category = _ref4.category,
            action = _ref4.action,
            label = _ref4.label;

        if (typeof category !== 'undefined' && typeof action !== 'undefined' && typeof label !== 'undefined') {
            // Search pageTracker
            if (typeof window['pageTracker'] !== 'undefined') {
                window['pageTracker']['_trackEvent'](category, action, label);
                module.callbackTrackersMessage('event', 'ga', 'pageTracker', params.debug, category, action, label);
            }
            // Search tracker ga.js
            if (typeof window['_gaq'] !== 'undefined') {
                window['_gaq'].push(['_trackEvent', category, action, label]);
                module.callbackTrackersMessage('event', 'ga', '_gaq', params.debug, category, action, label);
            }
            // Search tracker analytics.js
            if (typeof window[params.nameGA] !== 'undefined') {
                for (var i = 0; i < params.idsGA.length; i++) {
                    window[params.nameGA](params.idsGA[i], 'event', category, action, label, {
                        hitCallback: ingCallbackTrackersMessage('event', 'ga', 'ga(' + params.idsGA[i] + ')', params.debug, category, action, label)
                    });
                }
            }
            // Search tracker gtag.js
            if (typeof window['gtag'] !== 'undefined') {
                window['gtag']('event', action, { 'event_category': category, 'event_label': label });
                module.callbackTrackersMessage('event', 'ga', 'gtag', params.debug, category, action, label);
            }
        }
    };

    /**
     * DataLayer push function
     * @param dataLayerName
     * @param data
     */
    module.dataLayerPush = function (dataLayerName, data) {
        if (typeof window[dataLayerName] !== 'undefined') {
            data.eventCallback = module.callbackTrackersMessage('push', 'dl', dataLayerName, params.debug, data);
            window[dataLayerName].push(data);
        }
    };

    /**
     * DataLayer function
     * @param dataLayerName
     * @param data
     * @constructor
     */
    module.DataLayer = function (dataLayerName, data) {
        ingEvents.checkPrams();
        ingEvents.listTrackers();
        module.dataLayerPush(dataLayerName, data);
    };

    /**
     * Event function
     * @param category
     * @param action
     * @param label
     * @param ya_label
     * @param goalParams
     * @constructor
     */
    module.Event = function (_ref5) {
        var category = _ref5.category,
            action = _ref5.action,
            label = _ref5.label,
            ya_label = _ref5.ya_label,
            goalParams = _ref5.goalParams;

        ingEvents.checkPrams();
        try {
            var _ya_label = typeof ya_label === "undefined" && typeof label !== "undefined" ? label : ya_label;
            ingEvents.listTrackers();
            ingEvents.YMReachGoal({ type: 'event', label: _ya_label, goalParams: goalParams });
            ingEvents.GAEvent({ category: category, action: action, label: label });
        } catch (e) {
            console.log(e.message);
        }
    };

    /**
     * PageView function
     * @param page
     * @param label
     * @constructor
     */
    module.PageView = function (_ref6) {
        var page = _ref6.page,
            label = _ref6.label;

        ingEvents.checkPrams();
        try {
            ingEvents.listTrackers();
            ingEvents.YMReachGoal({ type: 'page', label: label });
            ingEvents.GAPageView({ page: page });
        } catch (e) {
            console.log(e.message);
        }
    };

    /**
     * Show all configured trackers
     * @returns {string}
     */
    module.listTrackers = function () {
        var msg = '';
        var msg_group = 'IngEvent on tracker:';
        try {
            msg += 'GA ids: ' + params.idsGA.join(', ') + '\n';
            msg += 'GT ids: ' + params.idsGT.join(', ') + '\n';
            msg += 'YM ids: ' + params.idsYM.join(', ') + '\n';
        } catch (e) {
            console.log(msg_group + 'Some error!');
        }

        if (params.debug === true) {
            console.group(msg_group);
            console.log(msg);
            console.groupEnd();
        }
        return msg_group + msg;
    };

    /**
     * Callback Trackers Message
     * @param type
     * @param tracker_type
     * @param tracker
     * @param debug
     * @param vars
     * @returns {string}
     */
    module.callbackTrackersMessage = function (type, tracker_type, tracker, debug) {
        var msg = 'IngEvent callback parameters :\n\t';
        msg += '[tracker  : ' + tracker_type + ']\n\t';
        msg += '[type     : ' + type + ']\n';

        for (var _len = arguments.length, vars = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
            vars[_key - 4] = arguments[_key];
        }

        if (tracker_type === 'ym') {
            var label = vars[0];

            msg += '\t[label    : ' + label + ']\n';
        }

        if (tracker_type === 'ga') {
            if (type === 'page') {
                var page = vars[0];

                msg += '\t[page     : ' + page + ']\n';
            } else {
                var category = vars[0],
                    action = vars[1],
                    _label = vars[2];

                msg += '\t[category : ' + category + ']\n\t[action   : ' + action + ']\n\t[label    : ' + _label + ']\n';
            }
        }

        if (tracker_type === 'dl') {
            var data = vars[0];

            msg += '\t[data     : ' + JSON.stringify(data) + ']\n';
        }

        if (debug === true) {
            console.log(msg);
        } else { return msg; }
    };

    return module;
}(window);

/**
 * Global window callback function for ga hitCallback.
 * Needed to avoid error: Expected a function for the field value: hitCallback. But found: string.
 * @param type
 * @param tracker_type
 * @param tracker
 * @param debug
 * @param vars
 */
function ingCallbackTrackersMessage(type, tracker_type, tracker, debug) {
    for (var _len2 = arguments.length, vars = Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
        vars[_key2 - 4] = arguments[_key2];
    }

    ingEvents.callbackTrackersMessage.apply(ingEvents, [type, tracker_type, tracker, debug].concat(vars));
}

/**
 * Legacy event proxy function
 * @param category
 * @param action
 * @param label
 * @param ya_label
 * @param goalParams
 */
function ing_events(_ref7) {
    var category = _ref7.category,
        action = _ref7.action,
        label = _ref7.label,
        ya_label = _ref7.ya_label,
        goalParams = _ref7.goalParams;

    ingEvents.Event({ category: category, action: action, label: label, ya_label: ya_label, goalParams: goalParams });
}

/**
 * Legacy pageview proxy function
 * @param page
 * @param label
 */
function ing_pageview(_ref8) {
    var page = _ref8.page,
        label = _ref8.label;

    ingEvents.PageView({ page: page, label: label });
}


var ingEventsConfig = {
    //debug  :true, //debug mode
    //idsYM  :[],   //Yandex Metrika id array
    //idsGA  :[],   //GA tracking name array
    //idsGT  :[],   //GA tracking id array
    //nameGA :'ga'    //GA tracking analytics names
};

window.addEventListener('load', function () {
    ingEvents.init(ingEventsConfig);


    document.addEventListener('wpcf7mailsent', function (event) {

        if (event.detail.contactFormId == "600") {
            ingEvents.listTrackers();
            ingEvents.YMReachGoal({ label: 'callback', goalParams: {} });
        }
        if (event.detail.contactFormId == "39") {
            ingEvents.listTrackers();
            ingEvents.YMReachGoal({ label: 'consultation', goalParams: {} });
        }
        if (event.detail.contactFormId == "17") {
            ingEvents.listTrackers();
            ingEvents.YMReachGoal({ label: 'application', goalParams: {} });
        }
        if (event.detail.contactFormId == "35") {
            ingEvents.listTrackers();
            ingEvents.YMReachGoal({ label: 'delivery', goalParams: {} });
        }
        if (event.detail.contactFormId == "391") {
            ingEvents.listTrackers();
            ingEvents.YMReachGoal({ label: 'declaration', goalParams: {} });
        }


    }, false);
}); 