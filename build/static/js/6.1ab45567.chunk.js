(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{171:function(e,t,n){},225:function(e,t,n){},227:function(e,t,n){},228:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);n(116);var a=n(128),c=(n(333),n(330)),r=n(115),i=n(0),l=n.n(i),u=(n(118),n(101)),o=(n(138),n(134)),s=[{title:"\u9996\u9875",path:"/home",icon:"home",isShow:!0,children:[]},{title:"\u7528\u6237\u7ba1\u7406",path:"/user",icon:"user",isShow:!0,children:[{title:"\u7528\u6237\u8be6\u60c5",path:"/user/infor",isShow:!0,icon:"",children:[]}]}],m=n(34),f=n(7),p=(n(171),o.a.SubMenu),h=Object(f.f)((function(e){var t=Object(i.useState)(e.activeMenu.path),n=Object(r.a)(t,2),c=n[0],f=n[1];Object(i.useEffect)((function(){e.history.push(c)}),[]),Object(i.useEffect)((function(){var t=e.activeMenu.path;f(t),e.history.push(t)}),[e.activeMenu]);return l.a.createElement(a.a.Sider,{trigger:null,collapsible:!0,collapsed:e.isOpen},l.a.createElement("div",{className:"logo"}),l.a.createElement(o.a,{mode:"inline",theme:"dark",onSelect:function(t){f(t.key);var n=t.domEvent.target;e.onMenuClick({title:n.innerText,path:t.key})},defaultSelectedKeys:[c],selectedKeys:[c],style:{borderRight:0},className:"sider_bar"},function e(t){return t.map((function(t){if(t.isShow)return t.children.length>0?l.a.createElement(p,{key:t.path,title:l.a.createElement("span",null,l.a.createElement(u.a,{type:t.icon}),l.a.createElement("span",null,t.title))},e(t.children)):l.a.createElement(o.a.Item,{key:t.path},l.a.createElement(m.b,{to:t.path},t.icon?l.a.createElement(u.a,{type:t.icon}):null,l.a.createElement("span",null,t.title)))}))}(s)))})),b=(n(154),n(334)),E=(n(221),n(226)),d=(n(223),n(332));n(225);var O=Object(f.f)((function(e){var t=Object(i.useState)([e.menuName.title]),n=Object(r.a)(t,2),c=n[0],m=n[1],f=l.a.createElement(o.a,{onClick:function(t){e.history.push(t.key)}},l.a.createElement(o.a.Item,{key:"/login"},l.a.createElement(u.a,{type:"logout"}),"\u9000\u51fa"));return Object(i.useEffect)((function(){var t=e.menuName.title,n=function e(t,n){return n.filter((function(n){return n.children.length>0?e(t,n.children):n.title===t}))}(t,s);"\u9996\u9875"===n[0].title?m([t]):m([n[0].title,e.menuName.title])}),[e.menuName]),l.a.createElement(a.a.Header,{className:"app_header"},l.a.createElement("div",{className:"menu_float"},l.a.createElement("span",{className:"menu_icon"},l.a.createElement(u.a,{className:"trigger",type:e.isOpen?"menu-unfold":"menu-fold",onClick:function(){e.openChange(!e.isOpen)}})),l.a.createElement(d.a,null,c.map((function(e,t){return l.a.createElement(d.a.Item,{key:t},e)})))),l.a.createElement("div",null,l.a.createElement(b.a,{overlay:f},l.a.createElement(E.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}))))})),v=(n(140),n(160)),j=(n(227),v.a.TabPane),y=Object(f.f)((function(e){var t=Object(i.useState)(e.menuList),n=Object(r.a)(t,2),a=n[0],c=n[1],u=Object(i.useState)(e.activeMenu.path),o=Object(r.a)(u,2),s=o[0],m=o[1];Object(i.useEffect)((function(){m(e.activeMenu.path)}),[e.activeMenu]),Object(i.useEffect)((function(){c(e.menuList)}),[e.menuList]);var f=Object(i.useState)(0),p=Object(r.a)(f,2),h=p[0],b=p[1],E=function(t){a.forEach((function(e,n){return e.path===t&&b(n-1)}));var n=a.filter((function(e){return e.path!==t}));n.length&&s===t&&(s=h>=0?n[h].path:n[0].path),m(s),c(n),e.onTabPan(t,s)};return l.a.createElement(v.a,{hideAdd:!0,onChange:function(t){e.history.push(t),m(t),e.onTabPan("",t)},activeKey:s,type:"editable-card",onEdit:function(e,t){E(e)},tabBarGutter:5},a.map((function(e){return l.a.createElement(j,{tab:e.title,key:e.path})})))})),g=(n(228),{title:"\u9996\u9875",path:"/home"});t.default=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),u=n[0],o=n[1],s=Object(i.useState)(g),m=Object(r.a)(s,2),f=m[0],p=m[1],b=Object(i.useState)([g]),E=Object(r.a)(b,2),d=E[0],v=E[1];return l.a.createElement(a.a,null,l.a.createElement(h,{isOpen:u,onMenuClick:function(e){!d.some((function(t){return t.title===e.title}))&&d.push(e),v(d),p(e)},activeMenu:f}),l.a.createElement(a.a,null,l.a.createElement(O,{isOpen:u,openChange:function(e){return o(e)},menuName:f}),l.a.createElement(y,{menuList:d,activeMenu:f,onTabPan:function(e,t){var n=d.filter((function(t){return t.path!==e}));v(n);var a=d.filter((function(e){return e.path===t}));p(a[0])}}),l.a.createElement(a.a.Content,{className:"content"},l.a.createElement(c.a,{bordered:!1},e.children))))}}}]);
//# sourceMappingURL=6.1ab45567.chunk.js.map