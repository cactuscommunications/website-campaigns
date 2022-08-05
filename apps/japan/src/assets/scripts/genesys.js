(function (g, e, n, es, ys) {
  g['_genesysJs'] = e; g[e] = g[e] || function () { (g[e].q = g[e].q || []).push(arguments) };g[e].t = 1 * new Date(); g[e].c = es;
  ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
})(window, 'Genesys', 'https://apps.mypurecloud.jp/genesys-bootstrap/genesys.min.js', {
  environment: 'apne1', deploymentId: '3d99a490-a537-4f22-8c8e-40a5a53e9145'});

const hesitationEventsMap = {
  '/services/english-editing/compare-support' : 'Japan_Editing_Page',
  '/services/english-editing': 'japan_english_editing',
  '/services/publishing-services-packs/full-publication-support': 'Japan_Full_Publication_support',
  '/services/publishing-services-packs/writing-plus-full-publication-support': 'Japan_Full_Writing_Publication_support',
  '/': 'Japan_Home_page',
  '/services/english-editing/premium-editing-plan': 'Japan_pes',
  '/services/translation/premium-translation-plan': 'Japan_Premium_translation',
  '/services/publishing-services-packs': 'Japan_PSS_pages',
  '/services/english-editing/standard-editing-plan': 'Japan_SES',
  '/services/english-editing/top-journal-editing-plan': 'Japan_top_journal_editing',
  '/services/translation': 'Japan_Translation_Page',
  '/services/translation?utm_source': 'Japan_translation_UTM_source',
  '/contact': 'JPY_Contact_us',
}

const getEventNameBasedOnUrl = function () {
  const url = new URL(window.location.href);var pathname = url.pathname;var searchParams = url.search;
  var firstQueryParam = searchParams.slice(0,searchParams.indexOf('='));var path = pathname+firstQueryParam;
  console.log(path);return hesitationEventsMap[path] || 'Japan_Default_Message';
}

var timerId = null;
const genesysHesitate = function () {
  const timeout = 10;
  var eventName = getEventNameBasedOnUrl();
  timerId = setTimeout(function () {
    console.log('hesitating with ' + eventName);
    Genesys("command", "Journey.record", {eventName: eventName,  customAttributes: { Page: document.title, Timeout: timeout }});
  }, timeout * 1000)
};

(function () {Genesys("subscribe", "Launcher.visible", function() { genesysHesitate();})})();

(function (doc, options){
  var lastUrl = location.href;
  new MutationObserver(function()  {
    const url = location.href; if (url !== lastUrl) {clearTimeout(timerId);timerId = null;lastUrl = url;genesysHesitate();}
  }).observe(doc, options);
})(document, {subtree: true, childList: true});
