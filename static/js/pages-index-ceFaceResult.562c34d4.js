(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-ceFaceResult"],{"31c5":function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.main_view[data-v-0f9b97f6]{margin-top:%?120?%}.btn[data-v-0f9b97f6]{margin:%?30?%}.item_bg[data-v-0f9b97f6]{margin:%?10?%;background-color:#fff}.text-detail[data-v-0f9b97f6]{margin:%?10?%;display:flex;text-align:left;font-size:%?32?%;color:#5b5b5b}.text[data-v-0f9b97f6]{margin:%?10?%}.content[data-v-0f9b97f6]{display:flex;flex-direction:column;align-items:center;justify-content:center}.btnitem_bg[data-v-0f9b97f6]{width:40%;margin-left:%?40?%;margin-right:%?40?%;background-color:#2979ff}.img-bg[data-v-0f9b97f6]{margin-top:%?40?%;background-color:#fff}.imagead[data-v-0f9b97f6]{margin:%?20?%;width:160px;height:160px;background-color:#fff}.title_img[data-v-0f9b97f6]{margin:%?10?%;width:100%;height:420px;background-color:#fff}.uni-btn-v[data-v-0f9b97f6]{margin:%?40?%;padding:%?10?% 0}',""]),t.exports=e},"330d8":function(t,e,a){"use strict";a.r(e);var n=a("9c61"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"545f":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"main_view"},[a("v-uni-image",{staticClass:"title_img",attrs:{mode:"aspectFill",src:t.imgPath},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage(t.imgPath)}}}),a("v-uni-view",{staticClass:"text-detail",attrs:{"scroll-y":"true"}},[a("v-uni-text",{staticClass:"text"},[t._v("实时颜值："+t._s(t.beauty))])],1),a("v-uni-view",{staticClass:"text-detail",attrs:{"scroll-y":"true"}},[a("v-uni-text",{staticClass:"text"},[t._v("年龄预估："+t._s(t.age))])],1),a("v-uni-view",{staticClass:"text-detail",attrs:{"scroll-y":"true"}},[a("v-uni-text",{staticClass:"text"},[t._v("其他："+t._s(t.other))])],1),a("v-uni-ad",{attrs:{"unit-id":"adunit-4562d86e348595af","ad-type":"video","ad-theme":"white"}})],1)},i=[]},"6a64":function(t,e,a){"use strict";var n=a("aebb"),i=a.n(n);i.a},7777:function(t,e,a){"use strict";a.r(e);var n=a("545f"),i=a("330d8");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("6a64");var r=a("828b"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"0f9b97f6",null,!1,n["a"],void 0);e["default"]=s.exports},"9c61":function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(a("d90f"));var i=a("e9b6"),o=(n(a("8ec2")),n(a("eb97")),{data:function(){return{imgPath:"",beauty:0,age:0,other:""}},onLoad:function(t){t&&(this.imgPath=t.imgPath,console.log(this.imgPath),this.doRec())},methods:{doRec:function(){var t=this;uni.showLoading({title:"颜值测算中..."});var e=uni.getStorageSync("ACCESS_TOKEN");(0,i.pathToBase64)(t.imgPath).then((function(a){uni.request({url:"https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token="+e,method:"POST",data:{image:a,image_type:"BASE64",face_field:"age,beauty,gender,face_shape,emotion",max_face_num:3},header:{"Content-Type":"application/json"},success:function(e){if(console.log(e.data.result),e.data.result){t.beauty=e.data.result.face_list[0].beauty,t.age=e.data.result.face_list[0].age,t.other="实时表情："+e.data.result.face_list[0].emotion.type+"，脸型："+e.data.result.face_list[0].face_shape.type+"，性别："+e.data.result.face_list[0].gender.type+"（可能性："+e.data.result.face_list[0].gender.probability+"）";var a=uni.getStorageSync("USE_TIMES");uni.setStorage({key:"USE_TIMES",data:a-1});var n=null;wx.createInterstitialAd&&(n=wx.createInterstitialAd({adUnitId:"adunit-bc87a4140987aa6e"}),n.onLoad((function(){})),n.onError((function(t){})),n.onClose((function(){}))),n&&n.show().catch((function(t){console.error(t)}))}else uni.showModal({content:e.data.error_msg,showCancel:!1});uni.hideLoading()}})})).catch((function(t){uni.hideLoading()}))},previewImage:function(t){""!=t&&uni.previewImage({urls:[t]})}}});e.default=o},aebb:function(t,e,a){var n=a("31c5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("ded32d9e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);