!function(a,b){"use strict";var c,d=document.getElementsByTagName("head")[0].getElementsByTagName("link"),e=d.length,f=b.aid,g=b.uid;if(f||(f=(window.location.href||"").match(/\/blog_([A-Za-z0-9]*)\./),f=f?f[1]:null),!g)for(var h=0;e>h;h++)if("RSS"===d[h].title.toUpperCase()&&(c=d[h].href)){g=parseInt(c.substring(c.lastIndexOf("/")+1).replace(".xml",""),10);break}a.sinaadsExParams=a.sinaadsExParams||{},f&&(a.sinaadsExParams.blogArticleId=f),g&&(a.sinaadsExParams.blogUserId=g)}(window,window.scope?{uid:window.scope.$uid,aid:window.scope.$articleid}:{});