!function(a,b,c){function d(a){var c="default";a.self_redirect===!0?c="true":a.self_redirect===!1&&(c="false");var d=b.createElement("iframe"),e="https://open.weixin.qq.com/connect/qrconnect?appid="+a.appid+"&scope="+a.scope+"&redirect_uri="+a.redirect_uri+"&state="+a.state+"&login_type=jssdk&self_redirect="+c+'&styletype='+(a.styletype || '')+'&sizetype='+(a.sizetype || '')+'&bgcolor='+(a.bgcolor || '')+'&rst='+(a.rst || '');e+=a.style?"&style="+a.style:"",e+=a.href?"&href="+a.href:"",d.src=e,d.frameBorder="0",d.allowTransparency="true",d.scrolling="no",d.width="300px",d.height="400px";var f=b.getElementById(a.id);f.innerHTML="",f.appendChild(d)}a.WxLogin=d}(window,document);






// https://open.weixin.qq.com/connect/qrconnect?appid=wxbdc5610cc59c1631&redirect_uri=https%3A%2F%2Fpassport.yhd.com%2Fwechat%2Fcallback.do&response_type=code&scope=snsapi_login&state=3d6be0a4035d839573b04816624a415e#wechat_redirect 