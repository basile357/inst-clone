(this.webpackJsonpinst=this.webpackJsonpinst||[]).push([[2],{14:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"j",(function(){return f})),n.d(t,"m",(function(){return l})),n.d(t,"p",(function(){return p})),n.d(t,"q",(function(){return b})),n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return m})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return h})),n.d(t,"e",(function(){return g})),n.d(t,"g",(function(){return O})),n.d(t,"o",(function(){return x})),n.d(t,"n",(function(){return w})),n.d(t,"d",(function(){return I})),n.d(t,"l",(function(){return k})),n.d(t,"k",(function(){return y})),n.d(t,"f",(function(){return L}));var r=n(33),u=n(12),a=n(3),c=n.n(a),i=n(7),o=n(8),s=function(e){var t;return null===(t=e.split("?").shift())||void 0===t?void 0:t.split("%2F").pop()},d=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.firestore().collection("users").where("username","==",t).get();case 2:return n=e.sent,e.abrupt("return",!!n.docs.find((function(e){return e.exists})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.firestore().collection("users").orderBy("username").startAt(t).endAt("".concat(t,"\uf8ff")).get();case 2:return n=e.sent,e.abrupt("return",n.docs.map((function(e){return Object(u.a)(Object(u.a)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(i.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.c.firestore().collection("users").doc(t).update({avatarUrl:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.child("".concat(n,"/").concat(Date.now(),".").concat(t.name.split(".").pop())).put(t);case 2:return r=e.sent,e.next=5,o.d.child("".concat(r.metadata.fullPath)).getDownloadURL();case 5:return u=e.sent,e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.firestore().collection("photos").add(t);case 2:return n=e.sent,e.abrupt("return",n.id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.c.firestore().collection("photos").doc(t).delete());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(!(r=s(t))){e.next=6;break}return e.next=6,o.d.child("".concat(n,"/").concat(r)).delete();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.firestore().collection("users").where("userId","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.docs.reduce((function(e,t){return Object(u.a)(Object(u.a)({},t.data()),{},{docId:t.id})}),{}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.firestore().collection("users").where("username","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.docs.length>0?n.docs.reduce((function(e,t){return Object(u.a)(Object(u.a)({},t.data()),{},{docId:t.id})}),{}):null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.firestore().collection("photos").doc(t).get();case 2:if(!(n=e.sent).exists){e.next=5;break}return e.abrupt("return",Object(u.a)(Object(u.a)({},n.data()),{},{docId:n.id}));case 5:return e.abrupt("return",null);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(c.a.mark((function e(t,n,a){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.firestore().collection("users").where("userId","not-in",[].concat(Object(r.a)(a),[t])).limit(n).get();case 2:return i=e.sent,e.abrupt("return",i.docs.map((function(e){return Object(u.a)(Object(u.a)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.c.firestore().collection("users").doc(t).update({following:"add"===r?o.a.arrayUnion(n):o.a.arrayRemove(n)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.c.firestore().collection("users").doc(t).update({followers:"add"===r?o.a.arrayUnion(n):o.a.arrayRemove(n)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.firestore().collection("photos").where("userId","in",t).orderBy("dateCreated","desc").limit(3).get();case 2:return r=e.sent,a=r.docs.map((function(e){return Object(u.a)(Object(u.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(a.map((function(e){return j(e.userId)})));case 6:return i=e.sent,e.abrupt("return",i.map((function(e,t){return Object(u.a)(Object(u.a)({user:e},a[t]),{},{isLiked:a[t].likes.includes(n)})})));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.c.firestore().collection("photos").doc(t).update({likes:"add"===r?o.a.arrayUnion(n):o.a.arrayRemove(n)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.c.firestore().collection("photos").doc(t).update({comments:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.firestore().collection("photos").where("userId","==",t).orderBy("dateCreated","desc").get();case 2:return r=e.sent,e.abrupt("return",r.docs.map((function(e){return Object(u.a)(Object(u.a)({},e.data()),{},{docId:e.id,isLiked:!!n&&e.data().likes.includes(n)})})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},22:function(e,t,n){"use strict";n.d(t,"i",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return f})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return j}));var r=n(11),u=n(6),a=Object(r.c)({name:"user",initialState:{user:null,isLoading:!0,followingIds:[]},reducers:{setUser:function(e,t){var n=t.payload;e.user=n},setIsLoading:function(e,t){var n=t.payload;e.isLoading=n}},extraReducers:function(e){e.addCase(u.l.pending,(function(e){e.isLoading=!0})),e.addCase(u.l.fulfilled,(function(e,t){var n=t.payload;e.user=n,e.isLoading=!1})),e.addCase(u.l.rejected,(function(e,t){e.isLoading=!1,console.log(t.error)})),e.addCase(u.h.pending,(function(e,t){var n=t.meta;e.followingIds.push(n.arg.profileId)})),e.addCase(u.h.fulfilled,(function(e,t){var n,r,u=t.meta.arg,a=u.profileId;"add"===u.method?null===(n=e.user)||void 0===n||n.following.push(a):e.user&&(e.user.following=null===(r=e.user)||void 0===r?void 0:r.following.filter((function(e){return e!==a})));e.followingIds=e.followingIds.filter((function(e){return e!==a}))})),e.addCase(u.h.rejected,(function(e,t){var n=t.error,r=t.meta;e.followingIds=e.followingIds.filter((function(e){return e!==r.arg.profileId})),console.log(n)})),e.addCase(u.k.fulfilled,(function(e,t){var n=t.payload;e.user&&(e.user.avatarUrl=n||void 0)}))}}),c=a.actions,i=a.reducer,o=function(e){var t=e.user.user;return t&&t.username},s=function(e){var t=e.user.user;return t&&t.avatarUrl},d=function(e){var t=e.user.user;return t&&t.fullName},f=function(e){var t=e.user.user;return t&&t.userId},l=function(e){var t=e.user.user;return t&&t.docId},p=function(e){return e.user.isLoading},b=function(e){return function(t){var n=t.user.user;return n&&n.following.includes(e)||!1}},v=function(e){return function(t){var n=t.user.followingIds;return e&&n.includes(e)||!1}},m=c.setUser,j=c.setIsLoading;t.a=i},25:function(e,t,n){"use strict";var r,u;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u})),function(e){e.DASHBOARD="/",e.LOGIN="/login",e.SIGN_UP="/signup",e.PROFILE="/:username",e.NOT_FOUND="/not-found",e.POST="/p/:id",e.EXPLORE_SUGGESTIONS="/explore/suggestions",e.CREATE="/create"}(r||(r={})),function(e){e.LOGO="https://res.cloudinary.com/dso6gkkxp/image/upload/v1622108631/logo_zgpwei.svg",e.AVATAR="https://res.cloudinary.com/dso6gkkxp/image/upload/v1622124933/default_uuoru5.png"}(u||(u={}))},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return a}));var r=n(29),u=function(){return Object(r.b)()},a=r.c},44:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(11),u=n(6),a=Object(r.c)({name:"suggestions",initialState:{items:[],isLoading:!1},reducers:{setItems:function(e,t){var n=t.payload;e.items=n}},extraReducers:function(e){e.addCase(u.f.pending,(function(e){e.isLoading=!0})),e.addCase(u.f.fulfilled,(function(e,t){var n=t.payload;e.items=n,e.isLoading=!1})),e.addCase(u.f.rejected,(function(e,t){e.isLoading=!1,console.log(t.error)})),e.addCase(u.h.fulfilled,(function(e,t){var n=t.meta,r=n.arg.method,u=n.arg.profileId,a=n.arg.userId,c=e.items.find((function(e){return e.userId===u}));c&&("add"===r?c.followers.push(a):c.followers=c.followers.filter((function(e){return e!==a})))}))}}),c=a.actions,i=a.reducer,o=(c.setItems,function(e){return 0===e.suggestions.items.length}),s=function(e){return e.suggestions.items},d=function(e){return e.suggestions.isLoading};t.a=i},45:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(11),u=n(6),a=Object(r.c)({name:"profile",initialState:{items:{},isLoading:!1},reducers:{setItems:function(e,t){var n=t.payload;n&&(e.items[n.user.username]=n)}},extraReducers:function(e){e.addCase(u.d.pending,(function(e){e.isLoading=!0})),e.addCase(u.d.fulfilled,(function(e,t){var n=t.payload;n&&(e.items[n.user.username]=n),e.isLoading=!1})),e.addCase(u.d.rejected,(function(e,t){e.isLoading=!1,console.log(t.error)})),e.addCase(u.h.fulfilled,(function(e,t){var n=t.meta.arg,r=n.profileId,u=n.method,a=n.userId,c=Object.values(e.items).find((function(e){return(null===e||void 0===e?void 0:e.user.userId)===r}));c&&("add"===u?c.user.followers.push(a):c.user.followers=c.user.followers.filter((function(e){return e!==a})))})),e.addCase(u.i.fulfilled,(function(e,t){var n,r,u=t.meta,a=u.arg.docId,c=u.arg.comment,i=Object.values(e.items).find((function(e){return null===e||void 0===e?void 0:e.posts.find((function(e){return e.docId===a}))}));i&&(null===(n=e.items[i.user.username])||void 0===n||null===(r=n.posts.find((function(e){return e.docId===a})))||void 0===r||r.comments.push(c))})),e.addCase(u.j.fulfilled,(function(e,t){var n=t.meta,r=n.arg.docId,u=n.arg.userId,a=n.arg.method,c=Object.values(e.items).find((function(e){return null===e||void 0===e?void 0:e.posts.find((function(e){return e.docId===r}))}));if(c){var i=c.posts.find((function(e){return e.docId===r}));i&&(i.isLiked=!i.isLiked,"add"===a?i.likes.push(u):i.likes=i.likes.filter((function(e){return e!==u})))}})),e.addCase(u.k.fulfilled,(function(e,t){var n=t.payload,r=t.meta.arg.docId,u=Object.values(e.items).find((function(e){return(null===e||void 0===e?void 0:e.user.docId)===r}));u&&(u.user.avatarUrl=n||void 0)})),e.addCase(u.b.fulfilled,(function(e,t){var n=t.meta,r=n.arg.docId,u=n.arg.username,a=Object.values(e.items).find((function(e){return(null===e||void 0===e?void 0:e.user.username)===u}));a&&(a.posts=a.posts.filter((function(e){return e.docId!==r})))}))}}),c=a.actions,i=a.reducer,o=function(e){return function(t){var n;return null===(n=t.profile.items[e])||void 0===n?void 0:n.user}},s=function(e){return function(t){var n;return null===(n=t.profile.items[e])||void 0===n?void 0:n.posts}},d=function(e){return e.profile.isLoading},f=function(e){return function(t){var n,r=t.profile.items;return e&&(null===(n=r[e])||void 0===n?void 0:n.posts.length)||0}};c.setItems;t.a=i},47:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n(6),u=n(11),a=Object(u.c)({name:"timeline",initialState:{items:[],isLoading:!1},reducers:{setItems:function(e,t){var n=t.payload;e.items=n}},extraReducers:function(e){e.addCase(r.g.pending,(function(e){e.isLoading=!0})),e.addCase(r.g.fulfilled,(function(e,t){var n=t.payload;e.items=n,e.isLoading=!1})),e.addCase(r.g.rejected,(function(e,t){e.isLoading=!1,console.log(t.error)})),e.addCase(r.j.fulfilled,(function(e,t){var n=t.meta,r=n.arg.docId,u=n.arg.userId,a=n.arg.method,c=e.items.find((function(e){return e.docId===r}));c&&(c.isLiked=!c.isLiked,"add"===a?c.likes.push(u):c.likes=c.likes.filter((function(e){return e!==u})))})),e.addCase(r.i.fulfilled,(function(e,t){var n=t.meta,r=n.arg.docId,u=n.arg.comment,a=e.items.find((function(e){return e.docId===r}));a&&a.comments.push(u)}))}}),c=a.actions,i=a.reducer,o=function(e){return e.timeline.items},s=function(e){return e.timeline.isLoading};c.setItems;t.a=i},48:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(12),u=n(11),a=n(6),c=Object(u.c)({name:"post",initialState:{items:{},isLoading:!1},reducers:{},extraReducers:function(e){e.addCase(a.c.pending,(function(e){e.isLoading=!0})),e.addCase(a.c.fulfilled,(function(e,t){var n=t.payload;n&&(e.items[n.post.docId]=Object(r.a)(Object(r.a)({},n.post),{},{user:n.user})),e.isLoading=!1})),e.addCase(a.c.rejected,(function(e,t){e.isLoading=!1,console.log(t.error)})),e.addCase(a.j.fulfilled,(function(e,t){var n=t.meta,r=n.arg.docId,u=n.arg.userId,a=n.arg.method,c=Object.values(e.items).find((function(e){return(null===e||void 0===e?void 0:e.docId)===r}));c&&(c.isLiked=!c.isLiked,"add"===a?c.likes.push(u):c.likes=c.likes.filter((function(e){return e!==u})))})),e.addCase(a.i.fulfilled,(function(e,t){var n=t.meta,r=n.arg.docId,u=n.arg.comment,a=Object.values(e.items).find((function(e){return e&&e.docId===r}));a&&a.comments.push(u)})),e.addCase(a.b.fulfilled,(function(e,t){var n=t.meta.arg.docId;delete e.items[n]}))}}).reducer,i=function(e){return function(t){return t.post.items[e]}},o=function(e){return e.post.isLoading};t.a=c},49:function(e,t,n){e.exports={container:"App_container__eSJ6i"}},55:function(e,t,n){},6:function(e,t,n){"use strict";n.d(t,"l",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return p})),n.d(t,"g",(function(){return b})),n.d(t,"j",(function(){return v})),n.d(t,"i",(function(){return m})),n.d(t,"d",(function(){return j})),n.d(t,"k",(function(){return h})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return O})),n.d(t,"e",(function(){return x}));var r=n(12),u=n(33),a=n(3),c=n.n(a),i=n(7),o=n(14),s=n(11),d=Object(s.b)("user/fetchById",function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.h)(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(s.b)("post/fetchById",function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,u,a,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=n.getState,e.next=3,Object(o.e)(t);case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return",null);case 6:return i=null===(r=u().user.user)||void 0===r?void 0:r.userId,a.isLiked=i&&a.likes.includes(i)||!1,e.next=10,Object(o.h)(a.userId);case 10:return s=e.sent,e.abrupt("return",{post:a,user:s});case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),l=Object(s.b)("suggestions/fetch",function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,u,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.count,u=t.userId,a=n.getState,i=a().user.user.following,e.next=5,Object(o.g)(u,r,i);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),p=Object(s.b)("user/updateFollowing",function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r,u,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userDocId,r=t.profileId,u=t.profileDocId,a=t.method,i=t.userId,e.next=3,Promise.all([Object(o.o)(n,r,a),Object(o.n)(u,i,a)]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(s.b)("timeline/fetchPosts",function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,u,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=n.getState,(a=null===(r=u().user.user)||void 0===r?void 0:r.following)&&a.length){e.next=4;break}return e.abrupt("return",[]);case 4:return e.next=6,Object(o.d)(a,t);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=Object(s.b)("timeline/updatePostLikes",function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.docId,r=t.userId,u=t.method,e.next=3,Object(o.l)(n,r,u);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(s.b)("timeline/updatePostComments",function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,a,i,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.docId,a=t.comment,i=t.variant,s=n.getState,!(d="timeline"===i?s().timeline.items.find((function(e){return e.docId===r})):Object.values(s().post.items).find((function(e){return e&&e.docId===r})))){e.next=7;break}return e.next=6,Object(o.k)(r,[].concat(Object(u.a)(d.comments),[a]));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),j=Object(s.b)("profile/fetch",function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,u,a,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=n.getState,a=(null===(r=u().user.user)||void 0===r?void 0:r.userId)||null,e.next=4,Object(o.i)(t);case 4:if(i=e.sent){e.next=7;break}return e.abrupt("return",null);case 7:return e.next=9,Object(o.f)(i.userId,a);case 9:return s=e.sent,e.abrupt("return",{user:i,posts:s});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(s.b)("user/updateUserAvatar",function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r,u,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.file,r=t.username,u=t.docId,a=t.url,e.next=3,Object(o.p)(n,r);case 3:if(!(i=e.sent)){e.next=7;break}return e.next=7,Promise.all([Object(o.m)(u,i),Object(o.a)(a,r)]);case 7:return e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(s.b)("post/addUserPost",function(){var e=Object(i.a)(c.a.mark((function e(t){var n,u,a,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.postData,u=t.file,a=t.username,e.next=3,Object(o.p)(u,a);case 3:return i=e.sent,e.next=6,Object(o.q)(Object(r.a)(Object(r.a)({},n),{},{imageSrc:i}));case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(s.b)("post/deleteUserPost",function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.url,u=t.docId,e.next=3,Promise.all([Object(o.a)(r,n),Object(o.b)(u)]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(s.b)("user/searchUsers",function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.j)(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},65:function(e,t,n){"use strict";n.r(t);var r=n(2),u=n.n(r),a=n(30),c=n.n(a),i=(n(55),n(41)),o=n(13),s=n(25),d=n(49),f=n.n(d),l=n(22),p=n(8),b=n(35),v=n(6),m=n(43),j=n(10),h=function(){return Object(j.jsx)("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(j.jsx)(m.f,{style:{width:"40px",height:"40px"}})})},g=u.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(7)]).then(n.bind(null,132))})),O=u.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(6)]).then(n.bind(null,133))})),x=u.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(8)]).then(n.bind(null,134))})),w=u.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(5)]).then(n.bind(null,135))}));var I=function(){var e=function(){var e=Object(b.a)(),t=u.a.useContext(p.b).firebase,n=Object(b.b)(l.b);return u.a.useEffect((function(){var n=t.auth().onAuthStateChanged((function(t){t?e(Object(v.l)(t.uid)):(e(Object(l.k)(null)),e(Object(l.j)(!1)))}),(function(t){console.log(t.message),e(Object(l.k)(null)),e(Object(l.j)(!1))}));return function(){return n()}}),[t,e]),n}();return Object(j.jsx)("div",{className:f.a.container,children:Object(j.jsx)(i.a,{children:Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(h,{}),children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"".concat(s.a.LOGIN),exact:!0,children:Object(j.jsx)(g,{})}),Object(j.jsx)(o.b,{path:"".concat(s.a.SIGN_UP),exact:!0,children:Object(j.jsx)(O,{})}),Object(j.jsx)(o.b,{exact:!0,path:["".concat(s.a.DASHBOARD),"".concat(s.a.PROFILE),"".concat(s.a.EXPLORE_SUGGESTIONS),"".concat(s.a.POST),"".concat(s.a.CREATE)],children:e?Object(j.jsx)(h,{}):Object(j.jsx)(w,{})}),Object(j.jsx)(o.b,{children:e?Object(j.jsx)(h,{}):Object(j.jsx)(x,{})})]})})})})},k=n(29),y=n(23),L=n(11),C=n(44),S=n(47),P=n(45),U=n(48),R=Object(y.b)({user:l.a,suggestions:C.a,timeline:S.a,profile:P.a,post:U.a}),A=Object(L.a)({reducer:function(e,t){return"user/logout"===t.type&&(e={}),R(e,t)}});c.a.render(Object(j.jsx)(u.a.StrictMode,{children:Object(j.jsx)(k.a,{store:A,children:Object(j.jsx)(p.b.Provider,{value:{firebase:p.c,FieldValue:p.a},children:Object(j.jsx)(I,{})})})}),document.getElementById("root"))},8:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o}));n(50);var r=n(2),u=n(34),a=(n(57),n(67),n(66),u.a.initializeApp({apiKey:"AIzaSyCHSdDmDdqClqpU_Y9GogMQP-o-ukVZ-xA",authDomain:"instagram-bf61f.firebaseapp.com",projectId:"instagram-bf61f",storageBucket:"instagram-bf61f.appspot.com",messagingSenderId:"323621794662",appId:"1:323621794662:web:7f59962b20d1e1a219cea7"})),c=u.a.firestore.FieldValue,i=u.a.storage().ref(),o=Object(r.createContext)({})}},[[65,3,4]]]);
//# sourceMappingURL=main.386ca0a9.chunk.js.map