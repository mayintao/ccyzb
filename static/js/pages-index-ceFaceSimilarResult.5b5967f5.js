(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-ceFaceSimilarResult"],{"3b8b":function(t,e,a){"use strict";var n=a("5354"),i=a.n(n);i.a},4038:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.main_view[data-v-49931837]{margin-top:%?120?%}.btn[data-v-49931837]{margin:%?30?%}.item_bg[data-v-49931837]{margin:%?10?%;background-color:#fff}.text-detail[data-v-49931837]{margin:%?10?%;display:flex;text-align:center;font-size:%?32?%;color:#5b5b5b}.text[data-v-49931837]{margin:%?10?%}.content[data-v-49931837]{margin:%?10?%;display:flex;flex-direction:row;align-items:center;justify-content:center}.btnitem_bg[data-v-49931837]{width:40%;margin-left:%?40?%;margin-right:%?40?%;background-color:#2979ff}.img-bg[data-v-49931837]{margin-top:%?40?%;background-color:#fff}.imagead[data-v-49931837]{margin:%?20?%;width:160px;height:160px;background-color:#fff}.title_img[data-v-49931837]{margin:%?10?%;width:50%;height:200px;background-color:#fff}.uni-btn-v[data-v-49931837]{margin:%?40?%;padding:%?10?% 0}',""]),t.exports=e},5354:function(t,e,a){var n=a("4038");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("f75065d8",n,!0,{sourceMap:!1,shadowMode:!1})},"7daf":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"main_view"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-image",{staticClass:"title_img",attrs:{mode:"aspectFit",src:t.imgPath},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage(t.imgPath)}}}),a("v-uni-image",{staticClass:"title_img",attrs:{mode:"aspectFit",src:t.imgPath1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage(t.imgPath1)}}})],1),a("v-uni-view",{staticClass:"text-detail",attrs:{"scroll-y":"true"}},[a("v-uni-text",{staticClass:"text"},[t._v("相似度："+t._s(t.score))])],1),a("v-uni-ad",{attrs:{"unit-id":"adunit-4562d86e348595af","ad-type":"video","ad-theme":"white"}})],1)},i=[]},"8f86":function(t,e,a){"use strict";a.r(e);var n=a("9679"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},9679:function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(a("d90f"));var i=a("e9b6"),o=(n(a("8ec2")),n(a("eb97")),a("9b8e"),{data:function(){return{imgPath:"",imgPath1:"",type:0,score:0}},onLoad:function(t){t&&(this.imgPath=t.imgPath,this.imgPath1=t.imgPath1,this.type=t.type,this.doRec())},methods:{doRec:function(){var t=this;uni.showLoading({title:"相似度比对中..."});var e=uni.getStorageSync("ACCESS_TOKEN");(0,i.pathToBase64)(t.imgPath).then((function(a){0==t.type?(0,i.pathToBase64)(t.imgPath1).then((function(n){uni.request({url:"https://aip.baidubce.com/rest/2.0/face/v3/match?access_token="+e,method:"POST",data:[{image:a,image_type:"BASE64",face_type:"LIVE",quality_control:"NONE",liveness_control:"NONE"},{image:n,image_type:"BASE64",face_type:"LIVE",quality_control:"NONE",liveness_control:"NONE"}],header:{"Content-Type":"application/json"},success:function(e){if(console.log(e.data.result),e.data.result){t.score=e.data.result.score;var a=uni.getStorageSync("USE_TIMES");uni.setStorage({key:"USE_TIMES",data:a-1});var n=null;wx.createInterstitialAd&&(n=wx.createInterstitialAd({adUnitId:"adunit-bc87a4140987aa6e"}),n.onLoad((function(){})),n.onError((function(t){})),n.onClose((function(){}))),n&&n.show().catch((function(t){console.error(t)}))}else uni.showModal({content:e.data.error_msg,showCancel:!1});uni.hideLoading()}})})):uni.request({url:"https://aip.baidubce.com/rest/2.0/face/v3/match?access_token="+e,method:"POST",data:[{image:a,image_type:"BASE64",face_type:"LIVE",quality_control:"NONE",liveness_control:"NONE"},{image:t.imgPath1,image_type:"URL",face_type:"LIVE",quality_control:"NONE",liveness_control:"NONE"}],header:{"Content-Type":"application/json"},success:function(e){console.log(e.data.result);var a=uni.getStorageSync("USE_TIMES");uni.setStorage({key:"USE_TIMES",data:a-1}),e.data.result?t.score=e.data.result.score:uni.showModal({content:e.data.error_msg,showCancel:!1}),uni.hideLoading()}})})).catch((function(t){uni.hideLoading()}))},previewImage:function(t){""!=t&&uni.previewImage({urls:[t]})}}});e.default=o},fd43:function(t,e,a){"use strict";a.r(e);var n=a("7daf"),i=a("8f86");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("3b8b");var c=a("828b"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"49931837",null,!1,n["a"],void 0);e["default"]=r.exports}}]);