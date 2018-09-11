(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";var s=n(63);n.n(s).a},67:function(e,t,n){"use strict";var s=n(64);n.n(s).a},69:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"site-footer"},[e._v("\n  © "+e._s(e.year)+" Vue Land • "),n("router-link",{attrs:{to:"/q-and-a"}},[e._v("Q&A sessions")]),e._v(" • "),n("router-link",{attrs:{to:"/guideline"}},[e._v("Guideline")]),e._v(" • "),n("router-link",{attrs:{to:"/polls"}},[e._v("Polls")])],1)};s._withStripped=!0;var a={data:()=>({year:(new Date).getFullYear()})},i=(n(67),n(6)),r=Object(i.a)(a,s,[],!1,null,"40ab164b",null);r.options.__file="src/components/Footer.vue";t.a=r.exports},70:function(e,t,n){"use strict";var s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"site-header"},[t("span",{staticClass:"site-ins"},[this._v("Welcome to")]),this._v(" "),t("h1",{staticClass:"site-title"},[t("router-link",{attrs:{to:"/"}},[this._v("Vue Land")]),t("sup",{staticClass:"tm"},[this._v("™")])],1)])};s._withStripped=!0;n(65);var a=n(6),i=Object(a.a)({},s,[],!1,null,"61dd7a3d",null);i.options.__file="src/components/Header.vue";t.a=i.exports},71:function(e,t,n){},73:function(e,t,n){"use strict";var s=n(71);n.n(s).a},80:function(e,t,n){"use strict";var s=function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"channel"},[this._v("#"+this._s(this.name))])};s._withStripped=!0;var a={props:{name:{type:String,required:!0}}},i=(n(73),n(6)),r=Object(i.a)(a,s,[],!1,null,"b39714fa",null);r.options.__file="src/components/Channel.vue";t.a=r.exports},88:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page container"},[t("site-header"),this._v(" "),t("div",{staticClass:"site-main"},[t("div",{staticClass:"site-content"},[t("guideline-content")],1)]),this._v(" "),t("site-footer")],1)};s._withStripped=!0;var a=n(70),i=n(69),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("p",[e._v("This will be a community-driven server so feel free to suggest new text channels, better server names, nice logos, or anything else you think would improve it for everyone. Roles are being created for mods, trusted users, etc. As with all communities, we have a few rules to keep things friendly.")]),e._v(" "),n("ol",[e._m(0),e._v(" "),n("li",[n("p",[n("strong",[e._v("Use the relevant text channel.")]),e._v(" Channels are grouped by category, if you're new to here, you might introduce yourself at "),n("channel",{attrs:{name:"introductions"}}),e._v(". If you need help, please try to find a relevant channel, eg: use "),n("channel",{attrs:{name:"vuex"}}),e._v(" for vuex questions, otherwise post it in "),n("channel",{attrs:{name:"need-help"}}),e._v(". If you want to share your project, use "),n("channel",{attrs:{name:"i-made-this"}}),e._v(", etc. If you can't not find a relevant channel then put it in "),n("channel",{attrs:{name:"general"}}),e._v(" or ask admin to create a new text channel.")],1)]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Don’t be afraid to ask.")]),e._v(" There’s not such thing as a stupid question. We’re here to learn and we encourage people to ask questions about anything Vue related. However it would save both you and the others a good amount of time if you format your message correctly and reference a link to codepen.io / codesandbox.io whenever possible, "),n("channel",{attrs:{name:"discord-help"}}),e._v(" is here in case you have any furthur questions regarding discord usage.")],1)]),e._v(" "),e._m(1)])])};r._withStripped=!0;var o={components:{Channel:n(80).a}},l=n(6),u=Object(l.a)(o,r,[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("strong",[this._v("Respect other users of this server.")]),this._v(" We’re all on the same team here so let’s have fun, share what we know, and hopefully learn something new. No bullying, harassment, racism, or sexism. Censoring yourself with * is also not allowed. Memes included. Generally, just be excellent to each other.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("strong",[this._v("No spam.")]),this._v(" Nobody likes spam so let’s keep this server clean and relevant. Duplicated messages and ads might be deleted.")])])}],!1,null,null,null);u.options.__file="src/markdown/guideline.md";var c=u.exports,h={name:"guideline",head:{title:"Guideline"},components:{SiteHeader:a.a,SiteFooter:i.a,GuidelineContent:c}},v=Object(l.a)(h,s,[],!1,null,null,null);v.options.__file="src/views/Guideline.vue";t.default=v.exports}}]);