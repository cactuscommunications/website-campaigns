//Google Analytics + Optimize script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function()
  { (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
function getCookie(cname) { var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++)
  { var c = ca[i];
    while (c.charAt(0) == ' ') { c = c.substring(1); } if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
  } return ""; }
  ga('create', 'UA-239732-1', 'auto', {'allowLinker': true});
  ga('require', 'linker');
  ga('linker:autoLink', ['app.editage.jp' ,'accounts.editage.com' ,'campaign.editage.jp']);
  ga('require', 'GTM-KZF538Q');
  ga('send', 'pageview');
  var dimensionValue1 = (getCookie('__ivc') || null);
  ga('set', 'dimension1', dimensionValue1);
