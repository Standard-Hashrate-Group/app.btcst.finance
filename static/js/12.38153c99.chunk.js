(this.webpackJsonp=this.webpackJsonp||[]).push([[12],{1226:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(20),l=a(39),s=a(245),c=a(108),i=a(85);t.a=function(e){var t=Object(l.a)(),a=t.textMedium,n=t.textLight,u=t.placeholder,m=Object(s.a)(e.url||"","","_blank"),d=e.disabled?"N/A":e.text?e.text+(e.suffix?" "+e.suffix:""):"Fetching\u2026";return r.a.createElement(c.a,{style:{justifyContent:"space-between",marginTop:4}},r.a.createElement(i.a,{note:!o.d,fontWeight:"bold",style:{color:e.disabled?u:a}},e.label),r.a.createElement(i.a,{note:!o.d,onPress:e.url?m:void 0,style:{color:e.disabled?u:e.text?a:n,textDecorationLine:e.url?"underline":"none"}},d))}},1236:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(19),l=a.n(o),s=a(0),c=a.n(s),i=a(10),u=a(4),m=a(20),d=a(75),b=a(51),f=a(162),k=function(e){var t,a=Object(b.a)(),n=Object(s.useContext)(d.a).approveToken,o=Object(s.useState)(!1),i=l()(o,2),k=i[0],E=i[1],x=Object(s.useCallback)((function(){var t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.token){a.next=19;break}return e.onError({}),E(!0),a.prev=3,a.next=6,r.a.awrap(n(e.token.address,e.spender));case 6:if(!(t=a.sent)){a.next=11;break}return a.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(3),e.onError(a.t0);case 16:return a.prev=16,E(!1),a.finish(16);case 19:case"end":return a.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?c.a.createElement(u.a,null):c.a.createElement(f.a,{title:a("approve")+" "+((null==(t=e.token)?void 0:t.symbol)||""),onPress:x,loading:k,containerStyle:{marginBottom:m.g.tiny}})},E=a(427),x=a(1215),p=a(420),y=a(421),g=a(1221),h=a(1222),v=a(1217),S=a(1219),T=a(1223),j=a(1226),O=a(1224),w=a(85),F=a(143),U=a(1220),N=a(1216),A=a(430),P=a(163),B=a(1228),C=a(211),D=a(426),L=a(39),Z=a(59),_=a(245),z=function(){var e,t=Object(b.a)(),a=Object(B.a)(),n=Object(_.a)("https://www.binance.com/cn/trade/BTCST_USDT","","_blank"),r=Object(_.a)("https://exchange.pancakeswap.finance/","","_blank");return c.a.createElement(u.a,{style:{marginTop:m.g.large}},c.a.createElement(J,{state:a}),c.a.createElement(x.a,null),c.a.createElement(M,{state:a}),a.stoken&&(null==(e=a.yourTotalSToken)?void 0:e.isZero())&&c.a.createElement(u.a,null,c.a.createElement(O.a,{text:t("you-dont-have-btcst"),color:"orange",style:{marginTop:m.g.small}}),c.a.createElement(f.a,{style:{marginTop:m.g.tiny},title:t("buy-on-binance"),onPress:n}),c.a.createElement(f.a,{style:{marginTop:m.g.tiny},title:t("buy-on-pancakeswap"),onPress:r})),c.a.createElement(W,{state:a}))},J=function(e){var t=e.state,a=Object(b.a)(),n=t.loading,r=t.yourTotalSToken,o=t.yourFreeToSendSToken,l=t.yourSTokenStaked,s=(t.stokenAllowed,Object(L.a)()),i=s.textDark,d=s.textLight;s.placeholder;return c.a.createElement(u.a,null,c.a.createElement(w.a,{style:{fontSize:m.d?28:20,marginBottom:m.g.tiny,color:n?d:i}},!n&&t.stoken&&r?a("you-have")+" "+Object(C.d)(r,t.stoken.decimals)+" BTCST":a("fetching")),c.a.createElement(w.a,{style:{fontSize:m.d?14:10,marginBottom:m.g.tiny,color:n?d:i}},!n&&t.stoken&&r?a("free-to-send")+Object(C.d)(o,t.stoken.decimals)+" "+a("staked-in-pool")+Object(C.d)(l,t.stoken.decimals):""))},M=function(e){var t=e.state,a=Object(b.a)();return!t.stoken||t.yourTotalSToken.isZero()?c.a.createElement(v.a,{text:a("amount-to-stake"),disabled:!0}):c.a.createElement(u.a,null,c.a.createElement(v.a,{text:a("amount-to-stake")}),c.a.createElement(U.a,{token:t.stoken,amount:t.amount,onAmountChanged:t.setAmount,autoFocus:m.d}))},W=function(e){var t=e.state,a=Object(b.a)(),n=Object(L.a)(),r=(n.textDark,n.textLight),o=n.placeholder,l=!t.stoken||t.yourTotalSToken.isZero()||!t.yourSTokenStaked||Object(C.i)(t.amount),s=Z.ethers.FixedNumber.from(58).divUnsafe(Z.ethers.FixedNumber.from(1e6)),i=Z.ethers.FixedNumber.from(60).mulUnsafe(Z.ethers.FixedNumber.from(24)),u=Z.ethers.FixedNumber.from(711).divUnsafe(Z.ethers.FixedNumber.from(1e8)),d=Z.ethers.FixedNumber.from(22715),f=u.subUnsafe(i.mulUnsafe(s).divUnsafe(d)),k=l?void 0:Z.ethers.FixedNumber.from(t.amount).mulUnsafe(f).divUnsafe(Z.ethers.FixedNumber.from(10)),E=l?void 0:Z.ethers.FixedNumber.from(Object(C.d)(t.yourSTokenStaked,t.stoken.decimals)).mulUnsafe(f).divUnsafe(Z.ethers.FixedNumber.from(10)),x=l||null==k?void 0:k.addUnsafe(E),p=l?void 0:Z.ethers.FixedNumber.fromString(Object(C.d)(t.totalSTokenSupply,t.stoken.decimals)).divUnsafe(Z.ethers.FixedNumber.from(10)).mulUnsafe(f),y=(l||Object(C.j)(t.amount,t.stoken.decimals).add(t.yourSTokenStaked),l?void 0:x.divUnsafe(p).mulUnsafe(Z.ethers.FixedNumber.from(100)).round(6));return c.a.createElement(S.a,null,c.a.createElement(w.a,{style:{fontSize:m.d?28:20,marginBottom:m.g.normal,color:l?o:r}},a(l?"n/a":"btcb-estimated")),c.a.createElement(j.a,{label:a("daily-share"),text:y,suffix:"%",disabled:l}),c.a.createElement(j.a,{label:a("your-daily-reward"),text:x?x.round(8).toString():"",disabled:l}),c.a.createElement(q,{state:t}))},q=function(e){var t=e.state,a=Object(s.useState)({}),n=l()(a,2),r=n[0],o=n[1];return c.a.createElement(u.a,{style:{marginTop:m.g.normal}},!t.stoken||t.yourTotalSToken.isZero()||Object(C.i)(t.amount)?c.a.createElement(G,{state:t,onError:o,disabled:!0}):Object(C.j)(t.amount,t.stoken.decimals).gt(t.yourTotalSToken)?c.a.createElement(T.a,{symbol:t.stoken.symbol}):t.loading?c.a.createElement(h.a,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(k,{token:t.stoken,spender:P.c,onSuccess:function(){return t.setSTokenAllowed(!0)},onError:o,hidden:t.stokenAllowed}),c.a.createElement(G,{state:t,onError:o,disabled:!t.stokenAllowed})),r.message&&4001!==r.code&&c.a.createElement(g.a,{error:r}))},G=function(e){var t=e.state,a=e.onError,n=e.disabled,o=Object(b.a)();return c.a.createElement(f.a,{title:o("stake"),loading:t.entering,onPress:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a({}),e.prev=1,e.next=4,r.a.awrap(t.onEnter());case 4:t.setAmount(""),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),a(e.t0),console.log(e.t0);case 11:case"end":return e.stop()}}),null,null,[[1,7]],Promise)},disabled:n})};t.default=function(){var e=Object(b.a)();return c.a.createElement(D.a,null,c.a.createElement(p.a,null,c.a.createElement(E.a,null),c.a.createElement(y.a,null,c.a.createElement(F.a,{text:e("stake")}),c.a.createElement(w.a,{light:!0},e("stake-desc")),c.a.createElement(z,null)),"web"===i.a.OS&&c.a.createElement(N.a,null)),c.a.createElement(A.b,null))}}}]);
//# sourceMappingURL=12.38153c99.chunk.js.map