(this["webpackJsonpfactory-website"]=this["webpackJsonpfactory-website"]||[]).push([[0],{100:function(e,t,a){e.exports=a(170)},105:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(16),r=a.n(l),i=(a(105),a(10)),o=a(11),m=a(13),s=a(12),p=a(14),d=a(73),u=a(28),h=a(4),g=a(97),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).phoneClick=function(){var e=!a.state.phoneOpen;a.setState({phoneOpen:e})},a.state={phoneOpen:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.dataSource,n=t.isMobile,l=Object(u.a)(t,["dataSource","isMobile"]),r=this.state.phoneOpen,i=a.LinkMenu,o=i.children,m=Object.keys(o).map((function(e,t){return c.a.createElement(g.a,Object.assign({key:t.toString()},o[e]),o[e].children)})),s=void 0===r?300:null;return c.a.createElement(h.c,Object.assign({component:"header",animation:{opacity:0,type:"from"}},a.wrapper,l),c.a.createElement("div",Object.assign({},a.page,{className:"".concat(a.page.className).concat(r?" open":"")}),c.a.createElement(h.c,Object.assign({animation:{x:-30,type:"from",ease:"easeOutQuad"}},a.logo),c.a.createElement("img",{width:"100%",src:a.logo.children,alt:"img"})),n&&c.a.createElement("div",Object.assign({},a.mobileMenu,{onClick:function(){e.phoneClick()}}),c.a.createElement("em",null),c.a.createElement("em",null),c.a.createElement("em",null)),c.a.createElement(h.c,Object.assign({},i,{animation:n?{height:0,duration:300,onComplete:function(t){e.state.phoneOpen&&(t.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:s,reverse:!!r}),m)))}}]),t}(c.a.Component),E=(a(149),a(58)),y=(a(93),a(57)),k=a(18),O=a(20),f=a(53);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,w=function(e,t){var a=0===e.name.indexOf("title")?"h1":"div",n="string"===typeof e.children&&e.children.match(j)?c.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"===typeof e.children&&(n=c.a.createElement(y.a,v({},e.children))),c.a.createElement(a,v({key:t.toString()},e),n)},F=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=Object(k.a)({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement(O.a,Object.assign({key:"QueueAnim",type:["bottom","top"],delay:200},t.textWrapper),c.a.createElement("div",Object.assign({key:"title"},t.title),"string"===typeof t.title.children&&t.title.children.match(j)?c.a.createElement("img",{src:t.title.children,width:"100%",alt:"img"}):t.title.children),c.a.createElement("div",Object.assign({key:"content"},t.content),t.content.children),c.a.createElement(y.a,Object.assign({ghost:!0,key:"button"},t.button),t.button.children)),c.a.createElement(h.c,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner0-icon",key:"icon"},c.a.createElement(E.a,{type:"down"})))}}]),t}(c.a.PureComponent),_=(a(42),a(23)),x=(a(43),a(21)),A=a(22),W=a.n(A),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).getBlockChildren=function(e){return e.map((function(e){var t=Object(k.a)({},e),a=t.title,n=t.img,l=t.content;return["title","img","content"].forEach((function(e){return delete t[e]})),c.a.createElement("li",Object.assign({key:t.name},t),c.a.createElement("span",n,c.a.createElement("img",{src:n.children,width:"100%",alt:"img"})),c.a.createElement("h2",a,a.children),c.a.createElement("div",l,l.children))}))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=Object(k.a)({},this.props),t=e.dataSource,a=e.isMobile;delete e.dataSource,delete e.isMobile;var n=this.getBlockChildren(t.block.children),l=a?"bottom":"left",r=a?{y:30,opacity:0,delay:600,type:"from",ease:"easeOutQuad"}:{x:30,opacity:0,type:"from",ease:"easeOutQuad"};return c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement(W.a,Object.assign({},t.OverPack,{component:_.a}),c.a.createElement(O.a,Object.assign({key:"text",type:l,leaveReverse:!0,ease:["easeOutQuad","easeInQuad"]},t.textWrapper,{component:x.a}),c.a.createElement("div",Object.assign({key:"title"},t.titleWrapper),t.titleWrapper.children.map(w)),c.a.createElement(O.a,Object.assign({component:"ul",key:"ul",type:l,ease:"easeOutQuad"},t.block),n)),c.a.createElement(h.c,Object.assign({key:"img",animation:r,resetStyle:!0},t.img,{component:x.a}),c.a.createElement("img",{src:t.img.children,width:"100%",alt:"img"}))))}}]),t}(c.a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dataSource,a=(e.isMobile,Object(u.a)(e,["dataSource","isMobile"])),n=t.wrapper,l=t.titleWrapper,r=t.page,i=t.OverPack,o=t.childWrapper;return c.a.createElement("div",Object.assign({},a,n),c.a.createElement("div",r,c.a.createElement("div",l,l.children.map(w)),c.a.createElement(W.a,i,c.a.createElement(O.a,{type:"bottom",key:"block",leaveReverse:!0,component:_.a,componentProps:o},o.children.map((function(e,t){var a=e.children,n=Object(u.a)(e,["children"]);return c.a.createElement(x.a,Object.assign({key:t.toString()},n),c.a.createElement("div",a,a.children.map(w)))}))))))}}]),t}(c.a.PureComponent),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).getChildrenToRender=function(e){return e.map((function(e){return c.a.createElement(x.a,Object.assign({key:e.name},e),c.a.createElement("div",e.children.wrapper,c.a.createElement("span",e.children.img,c.a.createElement("img",{src:e.children.img.children,height:"100%",alt:"img"})),c.a.createElement("p",e.children.content,e.children.content.children)))}))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=Object(k.a)({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var a=this.getChildrenToRender(t.block.children);return c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement("div",t.page,c.a.createElement("div",Object.assign({key:"title"},t.titleWrapper),t.titleWrapper.children.map(w)),c.a.createElement(W.a,Object.assign({className:"content-template ".concat(e.className)},t.OverPack),c.a.createElement(h.b,Object.assign({component:_.a,key:"ul",enter:{y:"+=30",opacity:0,type:"from",ease:"easeInOutQuad"},leave:{y:"+=30",opacity:0,ease:"easeInOutQuad"}},t.block),a))))}}]),t}(c.a.PureComponent);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).getDelay=function(e,t){return e%t*100+100*Math.floor(e/t)+100*t},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=Object(k.a)({},this.props),a=t.dataSource,n=t.isMobile;delete t.dataSource,delete t.isMobile;var l=0,r=a.block.children.map((function(t,a){var r=t.children,i=n?50*a:e.getDelay(a,24/t.md),o={opacity:0,type:"from",ease:"easeOutQuad",delay:i},m=P({},o,{x:"+=10",delay:i+100});return l=(l+=t.md)>24?0:l,c.a.createElement(h.c,Object.assign({component:x.a,animation:o,key:t.name},t,{componentProps:{md:t.md,xs:t.xs},className:l?t.className:"".concat(t.className||""," clear-both").trim()}),c.a.createElement(h.c,Object.assign({animation:{x:"-=10",opacity:0,type:"from",ease:"easeOutQuad"},key:"img"},r.icon),c.a.createElement("img",{src:r.icon.children,width:"100%",alt:"img"})),c.a.createElement("div",r.textWrapper,c.a.createElement(h.c,Object.assign({key:"h2",animation:m,component:"h2"},r.title),r.title.children),c.a.createElement(h.c,Object.assign({key:"p",animation:P({},m,{delay:i+200}),component:"div"},r.content),r.content.children)))}));return c.a.createElement("div",Object.assign({},t,a.wrapper),c.a.createElement("div",a.page,c.a.createElement("div",a.titleWrapper,a.titleWrapper.children.map(w)),c.a.createElement(W.a,a.OverPack,c.a.createElement(O.a,{key:"u",type:"bottom"},c.a.createElement(_.a,Object.assign({key:"row"},a.block),r)))))}}]),t}(c.a.PureComponent),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).getBlockChildren=function(e){return e.map((function(e,t){var a=e.titleWrapper,n=Object(u.a)(e,["titleWrapper"]);return c.a.createElement(x.a,Object.assign({key:t.toString()},n),a.children.map(w))}))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=Object(k.a)({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var a=this.getBlockChildren(t.block.children);return c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement("div",t.page,c.a.createElement("div",t.titleWrapper,t.titleWrapper.children.map(w)),c.a.createElement(W.a,t.OverPack,c.a.createElement(O.a,Object.assign({type:"bottom",key:"block",leaveReverse:!0},t.block,{component:_.a}),a))))}}]),t}(c.a.PureComponent),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).getLiChildren=function(e){return e.map((function(e,t){var a=e.title,n=e.childWrapper,l=Object(u.a)(e,["title","childWrapper"]);return c.a.createElement(x.a,Object.assign({key:t.toString()},l,{title:null,content:null}),c.a.createElement("h2",a,"string"===typeof a.children&&a.children.match(j)?c.a.createElement("img",{src:a.children,width:"100%",alt:"img"}):a.children),c.a.createElement("div",n,n.children.map(w)))}))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=Object(k.a)({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var a=this.getLiChildren(t.block.children);return c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement(W.a,t.OverPack,c.a.createElement(O.a,Object.assign({type:"bottom",key:"ul",leaveReverse:!0,component:_.a},t.block),a),c.a.createElement(h.c,Object.assign({animation:{y:"+=30",opacity:0,type:"from"},key:"copyright"},t.copyrightWrapper),c.a.createElement("div",t.copyrightPage,c.a.createElement("div",t.copyright,t.copyright.children)))))}}]),t}(c.a.Component);I.defaultProps={className:"footer1"};var Q,q=I,G={isScrollLink:!0,wrapper:{className:"header2 home-page-wrapper"},page:{className:"home-page"},logo:{className:"header2-logo",children:"https://res.cloudinary.com/drlouie/image/upload/v1572163474/factory-test/%E6%9C%AA%E6%A0%87%E9%A2%98-2_azpege.png"},LinkMenu:{className:"header2-menu",children:[{name:"Banner0_1",to:"Banner0_1",children:"\u9996\u9875",className:"menu-item"},{name:"Feature4_0",to:"Feature4_0",children:"\u516c\u53f8\u4ecb\u7ecd",className:"menu-item"},{name:"Content0_0",to:"Content0_0",children:"\u7cbe\u9009\u4ea7\u54c1",className:"menu-item"},{name:"Content5_0",to:"Content5_0",children:"\u5382\u623f\u8bbe\u5907",className:"menu-item"},{name:"Content3_0",to:"Content3_0",children:"\u4e13\u4e1a\u4f18\u52bf",className:"menu-item"},{name:"Teams1_0",to:"Teams1_0",children:"\u8054\u7cfb\u6211\u4eec",className:"menu-item"}]},mobileMenu:{className:"header2-mobile-menu"},menuLink:{children:[]}},L={wrapper:{className:"banner0 k24fclz6j2m-editor_css"},textWrapper:{className:"banner0-text-wrapper k24owmtfl3p-editor_css"},title:{className:"banner0-title k24ovv3me0o-editor_css",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u6d77\u57ce\u826f\u6da6\u5efa\u6750\u79d1\u6280\u6709\u9650\u516c\u53f8"))},content:{className:"banner0-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u4ee5\u987e\u5ba2\u8981\u6c42\u4e3a\u57fa\u7840\uff0c\u4ee5\u4e13\u4e1a\u53ef\u9760\u4e3a\u4e2d\u5fc3\uff0c\u4ee5\u8bda\u4fe1\u5c65\u7ea6\u4e3a\u6cd5\u5219\uff0c\u4ee5\u6301\u7eed\u6539\u8fdb\u4e3a\u5148\u5bfc"))},button:{className:"banner0-button k26zqyai7ws-editor_css",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,c.a.createElement("br",null))),type:"default",href:"",target:""}},R={wrapper:{className:"home-page-wrapper content6-wrapper"},OverPack:{className:"home-page content6"},textWrapper:{className:"content6-text",xs:24,md:10},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u96c6\u5f00\u91c7\u3001\u751f\u4ea7\u3001\u52a0\u5de5\u3001\u9500\u552e\u4e8e\u4e00\u4f53")),className:"title-h1"},{name:"content",className:"title-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u6d77\u57ce\u826f\u6da6\u5efa\u6750\u79d1\u6280\u6709\u9650\u516c\u53f8\u4f4d\u4e8e\u8fbd\u5b81\u7701\u6d77\u57ce\u5e02\uff0c\u4ee5\u4e30\u5bcc\u7684\u767d\u4e91\u77f3\u77ff\u4ea7\u8d44\u6e90\u800c\u95fb\u540d\uff0c\u4ea4\u901a\u4fbf\u5229\uff0c\u5730\u7406\u4f4d\u7f6e\u4f18\u8d8a\u3002\u81ea\u6709\u77ff\u5c71\u624b\u7eed\u9f50\u5168\uff0c\u77ff\u5c71\u50a8\u91cf\u6781\u5927\uff0c\u767d\u4e91\u77f3\u54c1\u8d28\u4f18\u826f\u3002"))}]},img:{children:"https://res.cloudinary.com/drlouie/image/upload/v1571906074/factory-test/WechatIMG14_lojylj.jpg",className:"content6-img",xs:24,md:14},block:{children:[{name:"block0",img:{children:"https://res.cloudinary.com/drlouie/image/upload/v1572162932/factory-test/%E7%85%A4%E7%82%AD%E5%BC%80%E9%87%87_gmuf31.svg",className:"content6-icon"},title:{className:"content6-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5f00\u91c7"))},content:{className:"content6-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u81ea\u6709\u77ff\u5c71\u624b\u7eed\u9f50\u5168\uff0c\u77ff\u5c71\u50a8\u91cf\u6781\u5927\uff0c\u767d\u4e91\u77f3\u54c1\u8d28\u4f18\u826f"))}},{name:"block1",img:{className:"content6-icon",children:"https://res.cloudinary.com/drlouie/image/upload/v1572162888/factory-test/%E7%94%9F%E4%BA%A7%E7%AE%A1%E7%90%86_p89hwb.svg"},title:{className:"content6-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u751f\u4ea7\u548c\u52a0\u5de5"))},content:{className:"content6-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u8fdb\u53e3\u751f\u4ea7\u5de5\u827a\u6280\u672f\u4ece\u539f\u6750\u6599\u5230\u4ea7\u54c1\u4fdd\u969c\u54c1\u8d28\u8d28\u91cf"))}},{name:"block2",img:{className:"content6-icon",children:"https://res.cloudinary.com/drlouie/image/upload/v1572162824/factory-test/%E5%B7%A5%E5%8E%82_ak8cpk.svg"},title:{className:"content6-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u8bbe\u5907\u5148\u8fdb"))},content:{className:"content6-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u8fdb\u53e3\u5236\u7802\u8bbe\u5907\uff0c\u8fdb\u53e3\u7b5b\u5206\u673a\u68b0"))}}]}},T={wrapper:{className:"home-page-wrapper content0-wrapper"},page:{className:"home-page content0"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u7cbe\u9009\u4ea7\u54c1"))}]},childWrapper:{className:"content0-block-wrapper",children:[{name:"block0",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://cbu01.alicdn.com/img/ibank/2015/367/556/2255655763_1289638920.jpg"},{name:"title",className:"content0-block-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5f69\u7802"))},{name:"content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u6c38\u4e45\u67d3\u8272\u5f69\u7802\u8272\u5f69\u7262\u56fa\u3001\u6301\u4e45\u3001\u4e0d\u892a\u8272"))}]}},{name:"block1",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571932101756&di=d2e12d89694ddb690481a55d456b8f1a&imgtype=0&src=http%3A%2F%2Fcmsimgshow.zhuchao.cc%2F24456%2F20151225103229.jpg%3Fp"},{name:"title",className:"content0-block-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u77f3\u82f1\u7802"))},{name:"content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u826f\u597d\u7684\u8010\u9178\u8010\u9ad8\u6e29\uff0c\u9002\u7528\u4e0e\u4e0d\u540c\u5730\u57df"))}]}},{name:"block2",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571932135445&di=b4ad87a8e865b9f374ffeef36ce01b62&imgtype=0&src=http%3A%2F%2Fimg.jdzj.com%2FUserDocument%2F2014d%2Fqymx123%2FPicture%2F2015114105532.jpg"},{name:"title",className:"content0-block-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u9499\u7c89"))},{name:"content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u9897\u7c92\u5c0f\uff0c\u542b\u91cf\u9ad8"))}]}}]}},Y={wrapper:{className:"home-page-wrapper content5-wrapper"},page:{className:"home-page content5"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5382\u623f\u8bbe\u5907")),className:"title-h1"},{name:"content",className:"title-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,c.a.createElement("br",null)))}]},block:{className:"content5-img-wrapper",gutter:16,children:[{name:"block0",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://res.cloudinary.com/drlouie/image/upload/v1571906075/factory-test/WechatIMG16_dlk2l5.jpg"},content:{children:"Ant Design"}}},{name:"block1",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://res.cloudinary.com/drlouie/image/upload/v1571906075/factory-test/WechatIMG15_hqoyed.jpg"},content:{children:"Ant Motion"}}},{name:"block2",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://res.cloudinary.com/drlouie/image/upload/v1571906074/factory-test/WechatIMG14_lojylj.jpg"},content:{children:"Ant Design"}}},{name:"block3",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://res.cloudinary.com/drlouie/image/upload/v1571906075/factory-test/WechatIMG16_dlk2l5.jpg"},content:{children:"Ant Motion"}}},{name:"block4",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://mmbiz.qpic.cn/mmbiz_png/tX2ibGA82YNchLKpYPVXgmasZAWVJ0vZEiayMicF4wKuGibWdB5LophYjadvsBv4FvyBibIy1YX8aicSSrUxniapLGorA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1"},content:{children:"Ant Design"}}},{name:"block5",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://res.cloudinary.com/drlouie/image/upload/v1571906075/factory-test/WechatIMG15_hqoyed.jpg"},content:{children:"Ant Motion"}}},{name:"block6",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://res.cloudinary.com/drlouie/image/upload/v1571906074/factory-test/WechatIMG14_lojylj.jpg"},content:{children:"Ant Design"}}},{name:"block7",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://res.cloudinary.com/drlouie/image/upload/v1571906075/factory-test/WechatIMG16_dlk2l5.jpg"},content:{children:"Ant Motion"}}}]}},J={wrapper:{className:"home-page-wrapper content3-wrapper k24fk3vf8yf-editor_css"},page:{className:"home-page content3"},OverPack:{playScale:.3},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u4e13\u4e1a\u4f18\u52bf")),className:"title-h1"},{name:"content",className:"title-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u8d28\u91cf\u68c0\u6d4b\u8bbe\u5907\uff0c\u8fdb\u53e3\u751f\u4ea7\u5de5\u827a\u6280\u672f"))}]},block:{className:"content3-block-wrapper",children:[{name:"block0",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://res.cloudinary.com/drlouie/image/upload/v1572270195/factory-test/%E7%B1%BB%E5%88%AB_uap8ms.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u79cd\u7c7b\u4e30\u5bcc"))},content:{className:"content3-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u63d0\u4f9b\u6c49\u767d\u7389\u7802\u3001\u5929\u7136\u5f69\u7802\u3001\u77f3\u82f1\u7802\u3001\u96ea\u82b1\u767d\u7b49\uff0c\u5e74\u4ea7\u91cf\u8fbe\u5341\u4e07\u5428"))}}},{name:"block1",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://res.cloudinary.com/drlouie/image/upload/v1572269777/factory-test/%E5%88%B6%E7%A0%82%E6%9C%BA_m9elhr.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5236\u7802\u8bbe\u5907"))},content:{className:"content3-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u7b2c\u4e09\u4ee3\u5236\u7802\u8bbe\u5907\u51fa\u6599\u987a\u7545\u3001\u8fd0\u884c\u53ef\u9760\u3001\u9ad8\u6548\u8282\u80fd\uff0c\u4ea7\u91cf\u529f\u6548\u66f4\u9ad8"))}}},{name:"block2",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://res.cloudinary.com/drlouie/image/upload/v1572269777/factory-test/%E7%A3%A8%E7%B2%89%E6%9C%BA_ilhuex.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u7814\u78e8\u8bbe\u5907"))},content:{className:"content3-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u9009\u7528\u8fdb\u53e3\u8bbe\u5907\u4fdd\u8bc1\u6210\u54c1\u7387\uff0c\u54c1\u8d28\u66f4\u597d"))}}},{name:"block3",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://res.cloudinary.com/drlouie/image/upload/v1572269777/factory-test/%E7%B2%BE%E7%BB%86%E5%8C%96%E5%AD%A6%E5%93%81_v38qnd.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u68c0\u6d4b\u8bbe\u5907"))},content:{className:"content3-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5b8c\u5584\u9f50\u5168\u7684\u68c0\u6d4b\u8bbe\u5907\u4fdd\u8bc1\u6210\u54c1\u54c1\u8d28\u7b26\u5408\u76f8\u5173\u6807\u51c6\uff0c\u6ee1\u8db3\u5ba2\u6237\u591a\u79cd\u9700\u6c42"))}}},{name:"block4",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://res.cloudinary.com/drlouie/image/upload/v1572269777/factory-test/%E5%8C%96%E5%B7%A5%E7%8E%AF%E4%BF%9D_yzv2oa.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5316\u5de5\u73af\u4fdd"))},content:{className:"content3-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5728\u751f\u4ea7\u8fc7\u7a0b\u4e2d\u65f6\u523b\u6ce8\u610f\u5316\u5b66\u54c1\u4f7f\u7528\uff0c\u4e0d\u5bf9\u73af\u5883\u9020\u6210\u7834\u574f\u548c\u6c61\u67d3"))}}},{name:"block5",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://res.cloudinary.com/drlouie/image/upload/v1572269938/factory-test/%E5%AE%89%E5%85%A8%E9%98%B2%E6%8A%A42_pmfhb9.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5b89\u5168\u9632\u62a4"))},content:{className:"content3-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u62e5\u6709\u5b8c\u6574\u7684\u5b89\u5168\u89c4\u8303\u6761\u4f8b\uff0c\u65f6\u523b\u6ce8\u610f\u5de5\u5382\u4e0e\u5de5\u4eba\u7684\u5b89\u5168\u4fdd\u62a4"))}}}]}},X={wrapper:{className:"home-page-wrapper teams1-wrapper"},page:{className:"home-page teams1"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u8054\u7cfb\u6211\u4eec"))}]},block:{className:"block-wrapper",children:[{name:"block0",className:"block",md:8,xs:24,titleWrapper:{children:[{name:"image",className:"teams1-image",children:"https://res.cloudinary.com/drlouie/image/upload/v1572272329/factory-test/%E7%94%B5%E8%AF%9D_xk0hf0.png"},{name:"title",className:"teams1-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u8054\u7cfb\u7535\u8bdd"))},{name:"content",className:"teams1-job k2aied0zvc-editor_css",children:"\u516c\u53f8+\u804c\u4f4d \u4fe1\u606f\u6682\u7f3a"},{name:"content1",className:"teams1-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"0412-3351122",c.a.createElement("br",null),"0412-3352002"))}]}},{name:"block1",className:"block",md:8,xs:24,titleWrapper:{children:[{name:"image",className:"teams1-image",children:"https://res.cloudinary.com/drlouie/image/upload/v1572272335/factory-test/%E9%82%AE%E4%BB%B6_Email_%E9%82%AE%E7%AE%B1_phyxs2.png"},{name:"title",className:"teams1-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u4f01\u4e1a\u90ae\u7bb1"))},{name:"content",className:"teams1-job k2aiejdv5c-editor_css",children:"\u516c\u53f8+\u804c\u4f4d \u4fe1\u606f\u6682\u7f3a"},{name:"content1",className:"teams1-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"hclrjc@163.com"),c.a.createElement("p",null,c.a.createElement("br",null)))}]}},{name:"block2",className:"block",md:8,xs:24,titleWrapper:{children:[{name:"image",className:"teams1-image",children:"https://res.cloudinary.com/drlouie/image/upload/v1572272344/factory-test/%E6%89%8B%E6%9C%BA%E8%90%A5%E9%94%80_%E6%89%8B%E6%9C%BA%E8%B5%9A%E9%92%B1_%E6%89%8B%E6%9C%BA%E6%9F%A5%E8%B4%A6_j9kjue.png"},{name:"title",className:"teams1-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u624b\u673a\u53f7\u7801"))},{name:"content",className:"teams1-job k2aieml1kzl-editor_css",children:"\u516c\u53f8+\u804c\u4f4d \u4fe1\u606f\u6682\u7f3a"},{name:"content1",className:"teams1-content k2aih5ydoeo-editor_css",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"18604207722"),c.a.createElement("h2",null,"13998015168"),c.a.createElement("p",null,c.a.createElement("br",null)))}]}}]}},K={wrapper:{className:"home-page-wrapper footer1-wrapper"},OverPack:{className:"footer1",playScale:.2},block:{className:"home-page",gutter:0,children:[{name:"block0",xs:24,md:6,className:"block",title:{className:"logo",children:"https://res.cloudinary.com/drlouie/image/upload/v1572163474/factory-test/%E6%9C%AA%E6%A0%87%E9%A2%98-2_azpege.png"},childWrapper:{className:"slogan",children:[{name:"content0",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Hai cheng LiangRun Construction Materials echnology Co.,Ltd."))}]}},{name:"block1",xs:24,md:6,className:"block",title:{children:"\u4ea7\u54c1"},childWrapper:{children:[{name:"link0",href:"#",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u6c49\u767d\u7389\u7802"))},{name:"link1",href:"#",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5929\u7136\u5f69\u7802"))},{name:"link2",href:"#",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u77f3\u82f1\u7802"))},{name:"link3",href:"#",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u96ea\u82b1\u767d"))}]}},{name:"block2",xs:24,md:6,className:"block",title:{children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u4f18\u52bf"))},childWrapper:{children:[{href:"#",name:"link0",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5148\u8fdb\u8bbe\u5907"))},{href:"#",name:"link1",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u8fdb\u53e3\u5de5\u827a"))}]}},{name:"block3",xs:24,md:6,className:"block",title:{children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u7406\u5ff5"))},childWrapper:{children:[{href:"#",name:"link0",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u4ee5\u5ba2\u6237\u8981\u6c42\u4e3a\u57fa\u7840"))},{href:"#",name:"link1",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u4ee5\u4e13\u4e1a\u53ef\u9760\u4e3a\u4e2d\u5fc3"))},{name:"content~k2aiz209ls",className:"",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u4ee5\u8bda\u4fe1\u5c65\u7ea6\u4e3a\u6cd5\u5219"))},{name:"content~k2aiznf86q",className:"",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u4ee5\u6301\u7eed\u6539\u8fdb\u4e3a\u5148\u5bfc"))}]}}]},copyrightWrapper:{className:"copyright-wrapper"},copyrightPage:{className:"home-page"},copyright:{className:"copyright",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"\xa92019 by \u826f\u6da6\u5efa\u6750\xa0All Rights Reserved"))}};a(169);Object(d.enquireScreen)((function(e){Q=e}));var U=window.location,V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={isMobile:Q,show:!U.port},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(d.enquireScreen)((function(t){e.setState({isMobile:!!t})})),U.port&&setTimeout((function(){e.setState({show:!0})}),500)}},{key:"render",value:function(){var e=this,t=[c.a.createElement(b,{id:"Nav2_1",key:"Nav2_1",dataSource:G,isMobile:this.state.isMobile}),c.a.createElement(F,{id:"Banner0_1",key:"Banner0_1",dataSource:L,isMobile:this.state.isMobile}),c.a.createElement(M,{id:"Feature4_0",key:"Feature4_0",dataSource:R,isMobile:this.state.isMobile}),c.a.createElement(S,{id:"Content0_0",key:"Content0_0",dataSource:T,isMobile:this.state.isMobile}),c.a.createElement(B,{id:"Content5_0",key:"Content5_0",dataSource:Y,isMobile:this.state.isMobile}),c.a.createElement(D,{id:"Content3_0",key:"Content3_0",dataSource:J,isMobile:this.state.isMobile}),c.a.createElement(z,{id:"Teams1_0",key:"Teams1_0",dataSource:X,isMobile:this.state.isMobile}),c.a.createElement(q,{id:"Footer1_1",key:"Footer1_1",dataSource:K,isMobile:this.state.isMobile})];return c.a.createElement("div",{className:"templates-wrapper",ref:function(t){e.dom=t}},this.state.show&&t)}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[100,1,2]]]);
//# sourceMappingURL=main.0799b8cf.chunk.js.map