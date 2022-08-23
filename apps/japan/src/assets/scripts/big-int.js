//BigInt tracking
(function (bi, gi, nt) {
    window._bigint = {
        "track": function (l, de, da) {
            window._bigint._oB.push({"l": l, "de": de, "da": da});
        }, "_oB": []
    };
    var _sD = ((/(test|local|dev|staging|stage)[0-9]*\./gi).test(window.location.hostname)) ? "test1." : "";
    _sD = (nt === undefined || nt === "") ? _sD : (nt + ".");
    var _sE = (bi === undefined || bi === "") ? "cactusglobal.io" : bi;
    var _aE = (gi === undefined || gi === "") ? "cactusglobal.io" : gi;
    window.cactusglobal_io = {};
    window.cactusglobal_io.endpoint = "https://" + _sD + _aE + "/v1/";
    var d = new Date();
    var jsElm = document.createElement("script");
    jsElm.async = 1;
    jsElm.type = "application/javascript";
    jsElm.src = "https://" + _sD + _sE + "/assets/client-track.js?" + d.getFullYear() + '' + d.getMonth() + '' + d.getDate() + '' + d.getHours();
    document.head.appendChild(jsElm);
})("cf.cactusglobal.io", "api.cactusglobal.io");