(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-ceSkinResult"],{"056d":function(t,a,e){"use strict";e("6a54");var i=e("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;i(e("d90f"));var n=e("e9b6"),s=(i(e("8ec2")),i(e("eb97")),{data:function(){return{imgPath:"",color:0,smooth:0,other:"",gray_pic:"",brown_pic:"",red_pic:""}},onLoad:function(t){t&&(this.imgPath=t.imgPath,console.log(this.imgPath),this.doRec())},methods:{doRec:function(){var t=this;uni.showLoading({title:"皮肤检测中..."});var a=uni.getStorageSync("ACCESS_TOKEN");(0,n.pathToBase64)(t.imgPath).then((function(e){uni.request({url:"https://aip.baidubce.com/rest/2.0/face/v1/skin_analyze?access_token="+a,method:"POST",data:{appid:"19565010",image:e,image_type:"BASE64",face_field:"color,smooth,acnespotmole,wrinkle,skinface"},header:{"Content-Type":"application/json"},success:function(a){if(a.data.result){console.log(a.data.result),t.color=a.data.result.face_list[0].skin.color,t.smooth=a.data.result.face_list[0].skin.smooth,t.other="痘数量："+a.data.result.face_list[0].acnespotmole.acne_num+"，斑数量："+a.data.result.face_list[0].acnespotmole.speckle_num+"，痣数量："+a.data.result.face_list[0].acnespotmole.mole_num+"，皱纹数量："+a.data.result.face_list[0].wrinkle.wrinkle_num,(0,n.base64ToPath)("data:image/jpg;base64,"+a.data.result.face_list[0].skinface.skin_health_check_images.gray_pic).then((function(a){t.gray_pic=a})),(0,n.base64ToPath)("data:image/jpg;base64,"+a.data.result.face_list[0].skinface.skin_health_check_images.brown_pic).then((function(a){t.brown_pic=a})),(0,n.base64ToPath)("data:image/jpg;base64,"+a.data.result.face_list[0].skinface.skin_health_check_images.red_pic).then((function(a){t.red_pic=a}));var e=uni.getStorageSync("USE_TIMES");uni.setStorage({key:"USE_TIMES",data:e-1});var i=null;wx.createInterstitialAd&&(i=wx.createInterstitialAd({adUnitId:"adunit-bc87a4140987aa6e"}),i.onLoad((function(){})),i.onError((function(t){})),i.onClose((function(){}))),i&&i.show().catch((function(t){console.error(t)}))}else uni.showModal({content:a.data.error_msg,showCancel:!1});uni.hideLoading()}})})).catch((function(t){uni.hideLoading()}))}}});a.default=s},"1f9c":function(t,a,e){var i=e("c86c");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.main_view[data-v-5b882590]{margin-top:%?120?%}.btn[data-v-5b882590]{margin:%?30?%}.item_bg[data-v-5b882590]{margin:%?10?%;background-color:#fff}.text-detail[data-v-5b882590]{margin:%?10?%;display:flex;text-align:left;font-size:%?32?%;color:#5b5b5b}.text[data-v-5b882590]{margin:%?10?%}.content[data-v-5b882590]{display:flex;flex-direction:column;align-items:center;justify-content:center}.btnitem_bg[data-v-5b882590]{width:40%;margin-left:%?40?%;margin-right:%?40?%;background-color:#2979ff}.img-bg[data-v-5b882590]{margin-top:%?40?%;background-color:#fff}.imagead[data-v-5b882590]{margin:%?20?%;width:160px;height:160px;background-color:#fff}.title_img[data-v-5b882590]{margin:%?10?%;width:100%;height:420px;background-color:#fff}.uni-btn-v[data-v-5b882590]{margin:%?40?%;padding:%?10?% 0}',""]),t.exports=a},"361f":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"main_view"},[e("v-uni-image",{staticClass:"title_img",attrs:{mode:"aspectFill",src:t.imgPath}}),e("v-uni-view",{staticClass:"text-detail",attrs:{"scroll-y":"true"}},[e("v-uni-text",{staticClass:"text"},[t._v("您的肤色等级（1~6，越小肤色越浅）："+t._s(t.color))])],1),e("v-uni-view",{staticClass:"text-detail",attrs:{"scroll-y":"true"}},[e("v-uni-text",{staticClass:"text"},[t._v("您的皮肤光滑度（1~4，越小越光滑）："+t._s(t.smooth))])],1),e("v-uni-view",{staticClass:"text-detail",attrs:{"scroll-y":"true"}},[e("v-uni-text",{staticClass:"text"},[t._v("其他："+t._s(t.other))])],1),e("v-uni-text",{staticClass:"text"},[t._v("以下是Visia图：")]),e("v-uni-image",{staticClass:"title_img",attrs:{mode:"aspectFill",src:t.gray_pic}}),e("v-uni-image",{staticClass:"title_img",attrs:{mode:"aspectFill",src:t.brown_pic}}),e("v-uni-image",{staticClass:"title_img",attrs:{mode:"aspectFill",src:t.red_pic}}),e("v-uni-ad",{attrs:{"unit-id":"adunit-4562d86e348595af","ad-type":"video","ad-theme":"white"}})],1)},n=[]},"3def":function(t,a,e){"use strict";e.r(a);var i=e("056d"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},dd96:function(t,a,e){var i=e("1f9c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("967d").default;n("91c39592",i,!0,{sourceMap:!1,shadowMode:!1})},eb9f:function(t,a,e){"use strict";var i=e("dd96"),n=e.n(i);n.a},f6dc:function(t,a,e){"use strict";e.r(a);var i=e("361f"),n=e("3def");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("eb9f");var c=e("828b"),o=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"5b882590",null,!1,i["a"],void 0);a["default"]=o.exports}}]);