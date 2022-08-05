(function() {
  var script = document.createElement('script');
  script.defer = true;
  script.setAttribute('rel', 'dns-prefetch');
  script.src = 'https://cdn.notifyvisitors.com/js/clients/cactus/editage-jp.js';
  var entry = document.getElementsByTagName('script')[0];
  entry.parentNode.insertBefore(script, entry);
})();