(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-main"],{"058f":function(t,i,e){t.exports=e.p+"static/logo_bqbj.jpg"},"0a72":function(t,i,e){var n=e("7e69");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("967d").default;a("1a1be3be",n,!0,{sourceMap:!1,shadowMode:!1})},"20f2":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.width?e("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[e("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},a=[]},"2b3e":function(t,i,e){t.exports=e.p+"static/icon_face_editattr.jpg"},"2cda":function(t,i,e){"use strict";e("6a54");var n=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("fd3c");n(e("d90f")),e("e9b6"),n(e("8ec2"));var a={data:function(){return{recType:0,imagePath:"",imagePath1:"",isMember:!1}},onLoad:function(){},methods:{change:function(t){this.recType=t.detail.index,1==this.recType||7==this.recType?this.chooseMedia2():this.chooseMedia()},chooseMedia:function(){var t=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(i){var e,n=null===(e=i.tempFiles)||void 0===e?void 0:e[0];if(n){var a=new FileReader;a.onload=function(i){var e=i.target.result;console.log("图片 base64 数据:",e),t.imagePath=e,t.doImgSecCheck()},a.readAsDataURL(n)}else console.error("无法获取图片文件")},fail:function(t){console.error("选择图片失败",t)}})},chooseMedia2:function(){var t=this;uni.chooseImage({count:2,sizeType:["compressed"],sourceType:["album","camera"],success:function(i){console.log("选择图片结果:",i);var e=i.tempFiles||i.tempFilePaths.map((function(t){return{tempFilePath:t}}));e.length>=1&&(t.imagePath=e[0].tempFilePath),e.length>=2&&(t.imagePath1=e[1].tempFilePath),console.log("图片1路径:",t.imagePath),console.log("图片2路径:",t.imagePath1),t.doImgSecCheck()},fail:function(t){console.error("失败",t)}})},doCeFace:function(){uni.navigateTo({url:"ceFaceResult?imgPath="+this.imagePath})},doCeSimilar:function(){console.log(this.imagePath),console.log(this.imagePath1),uni.navigateTo({url:"ceFaceSimilarResult?imgPath="+this.imagePath+"&imgPath1="+this.imagePath1+"&type=0"})},doCeSkin:function(){uni.navigateTo({url:"ceSkinResult?imgPath="+this.imagePath})},doCeEmoticonEdit:function(){uni.navigateTo({url:"ceEmoticonEdit?imgPath="+this.imagePath})},doCeHairStyle:function(){uni.navigateTo({url:"ceHairStyle?imgPath="+this.imagePath})},doCePotraitEffect:function(){uni.navigateTo({url:"cePotraitEffect?imgPath="+this.imagePath})},doCeFaceEditattr:function(){uni.navigateTo({url:"ceFaceEditattr?imgPath="+this.imagePath})},doCeFaceMerge:function(){console.log(this.imagePath),console.log(this.imagePath1),uni.navigateTo({url:"ceFaceMergeResult?imgPath="+this.imagePath+"&imgPath1="+this.imagePath1})},doCeFaceAnimation:function(){uni.navigateTo({url:"ceFaceAnimation?imgPath="+this.imagePath})},doImgSecCheck:function(){console.log("自己业务代码处理"),uni.hideLoading(),0==this.recType?this.doCeFace():1==this.recType?this.doCeSimilar():2==this.recType?this.doCeSkin():3==this.recType?this.doCeEmoticonEdit():4==this.recType?this.doCeHairStyle():5==this.recType?this.doCePotraitEffect():6==this.recType?this.doCeFaceEditattr():7==this.recType?this.doCeFaceMerge():8==this.recType&&this.doCeFaceAnimation()}}};i.default=a},3156:function(t,i,e){"use strict";e.r(i);var n=e("36d0"),a=e("f6ed");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("c6a6");var r=e("828b"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"34eff256",null,!1,n["a"],void 0);i["default"]=s.exports},"36d0":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uniGrid:e("904c").default,uniGridItem:e("6ab2").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"main_view"},[n("v-uni-swiper",{staticClass:"swiperad",attrs:{circular:!0,"indicator-dots":!0,autoplay:!0,interval:3e3,duration:500}},[n("v-uni-swiper-item",[n("v-uni-image",{staticClass:"title_img",attrs:{mode:"aspectFill",src:"https://hzmtt-ccyzb.oss-cn-beijing.aliyuncs.com/20210126-01.png"}})],1),n("v-uni-swiper-item",[n("v-uni-image",{staticClass:"title_img",attrs:{mode:"aspectFill",src:"https://hzmtt-ccyzb.oss-cn-beijing.aliyuncs.com/20210126-02.jpeg"}})],1),n("v-uni-swiper-item",[n("v-uni-image",{staticClass:"title_img",attrs:{mode:"aspectFill",src:"https://hzmtt-ccyzb.oss-cn-beijing.aliyuncs.com/20210126-03.jpg"}})],1),n("v-uni-swiper-item",[n("v-uni-image",{staticClass:"title_img",attrs:{mode:"aspectFill",src:"https://hzmtt-ccyzb.oss-cn-beijing.aliyuncs.com/20210126-04.jpeg"}})],1)],1),n("v-uni-ad",{attrs:{"unit-id":"adunit-3287205700b3d2b9"}}),n("uni-grid",{attrs:{column:3,borderColor:"#d0dee5",highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},[n("uni-grid-item",{key:0,attrs:{index:0}},[n("v-uni-view",{staticClass:"grid-item-box",staticStyle:{"background-color":"#fff"}},[n("v-uni-image",{staticClass:"item_bg",attrs:{mode:"aspectFill",src:e("425b")}}),n("v-uni-text",{staticClass:"text"},[t._v("测测颜值")])],1)],1),n("uni-grid-item",{key:1,attrs:{index:1}},[n("v-uni-view",{staticClass:"grid-item-box",staticStyle:{"background-color":"#fff"}},[n("v-uni-image",{staticClass:"item_bg",attrs:{mode:"aspectFill",src:e("d8da")}}),n("v-uni-text",{staticClass:"text"},[t._v("测相似度")])],1)],1),n("uni-grid-item",{key:2,attrs:{index:2}},[n("v-uni-view",{staticClass:"grid-item-box",staticStyle:{"background-color":"#fff"}},[n("v-uni-image",{staticClass:"item_bg",attrs:{mode:"aspectFill",src:e("36f1")}}),n("v-uni-text",{staticClass:"text"},[t._v("皮肤检测")])],1)],1),n("uni-grid-item",{key:3,attrs:{index:3}},[n("v-uni-view",{staticClass:"grid-item-box",staticStyle:{"background-color":"#fff"}},[n("v-uni-image",{staticClass:"item_bg",attrs:{mode:"aspectFill",src:e("058f")}}),n("v-uni-text",{staticClass:"text"},[t._v("表情编辑")])],1)],1),n("uni-grid-item",{key:4,attrs:{index:4}},[n("v-uni-view",{staticClass:"grid-item-box",staticStyle:{"background-color":"#fff"}},[n("v-uni-image",{staticClass:"item_bg",attrs:{mode:"aspectFill",src:e("8e1e")}}),n("v-uni-text",{staticClass:"text"},[t._v("发型编辑")])],1)],1),n("uni-grid-item",{key:5,attrs:{index:5}},[n("v-uni-view",{staticClass:"grid-item-box",staticStyle:{"background-color":"#fff"}},[n("v-uni-image",{staticClass:"item_bg",attrs:{mode:"aspectFill",src:e("a26e")}}),n("v-uni-text",{staticClass:"text"},[t._v("人像特效")])],1)],1),n("uni-grid-item",{key:6,attrs:{index:6}},[n("v-uni-view",{staticClass:"grid-item-box",staticStyle:{"background-color":"#fff"}},[n("v-uni-image",{staticClass:"item_bg",attrs:{mode:"aspectFill",src:e("2b3e")}}),n("v-uni-text",{staticClass:"text"},[t._v("年龄变换")])],1)],1),n("uni-grid-item",{key:7,attrs:{index:7}},[n("v-uni-view",{staticClass:"grid-item-box",staticStyle:{"background-color":"#fff"}},[n("v-uni-image",{staticClass:"item_bg",attrs:{mode:"aspectFill",src:e("4cce")}}),n("v-uni-text",{staticClass:"text"},[t._v("人脸融合")])],1)],1),n("uni-grid-item",{key:8,attrs:{index:8}},[n("v-uni-view",{staticClass:"grid-item-box",staticStyle:{"background-color":"#fff"}},[n("v-uni-image",{staticClass:"item_bg",attrs:{mode:"aspectFill",src:e("a715")}}),n("v-uni-text",{staticClass:"text"},[t._v("变动漫脸")])],1)],1)],1),n("v-uni-ad",{attrs:{"unit-id":"adunit-d40808cc6aa2f281","ad-type":"video","ad-theme":"white"}}),n("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("合作、咨询、反馈请联系微信：13616548127")])],1)},o=[]},"36f1":function(t,i){t.exports="data:image/jpeg;base64,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"},"425b":function(t,i,e){t.exports=e.p+"static/icon_ceyanzhi.jpg"},"4c42":function(t,i,e){"use strict";e.r(i);var n=e("8716"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"4cce":function(t,i,e){t.exports=e.p+"static/icon_face_merge.jpg"},"546b":function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,".main_view[data-v-34eff256]{margin-top:%?120?%}.swiperad[data-v-34eff256]{height:%?500?%}.title_img[data-v-34eff256]{margin:%?10?%;width:100%;height:300px;background-color:#eee}.uni-title[data-v-34eff256]{margin-top:%?40?%;font-size:%?30?%;font-weight:500;padding:%?20?% 0;line-height:1.5}.grid-item-box[data-v-34eff256]{flex:1;\n\t\t/* position: relative; */\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:0 0}.uni-common-pl[data-v-34eff256]{padding-left:%?30?%}.uni-list[data-v-34eff256]{background-color:#fff;position:relative;width:100%;display:flex;flex-direction:column}.uni-list-cell[data-v-34eff256]{position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.uni-list-cell-left[data-v-34eff256]{white-space:nowrap;font-size:%?28?%;padding:0 %?30?%}.uni-list-cell-db[data-v-34eff256],\n.uni-list-cell-right[data-v-34eff256]{flex:1}.uni-input[data-v-34eff256]{height:%?50?%;padding:%?15?% %?25?%;line-height:%?50?%;font-size:%?28?%;background:#fff;flex:1}.text-tips[data-v-34eff256]{margin:%?20?%;display:flex;background-color:#fff;justify-content:center;align-items:center;text-align:left;font-size:%?30?%;color:#353535;line-height:1.7}.text[data-v-34eff256]{justify-content:center;align-items:center;text-align:left;font-size:%?30?%;color:#353535;line-height:1.8}.btn-bg[data-v-34eff256]{margin:%?40?%;background-color:#fff;display:flex;flex-direction:row;align-items:center;justify-content:center}.img-bg[data-v-34eff256]{margin-top:%?40?%;background-color:#fff}.imagead[data-v-34eff256]{margin:%?20?%;width:160px;height:160px;background-color:#eee}.content[data-v-34eff256]{display:flex;flex-direction:column;align-items:center;justify-content:center}.item_bg[data-v-34eff256]{width:%?160?%;height:%?160?%;margin:%?20?%;background-color:#fff}.btn_translate_bg[data-v-34eff256]{margin-top:%?40?%;width:70%;margin-left:%?40?%;margin-right:%?40?%;background-color:#128f94}.text-area[data-v-34eff256]{display:flex;justify-content:center}.title[data-v-34eff256]{font-size:%?36?%;color:#8f8f94}.result[data-v-34eff256]{font-size:%?24?%;color:#128f94}.uni-btn-v[data-v-34eff256]{margin:%?40?%;padding:%?10?% 0}",""]),t.exports=i},"6a65":function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-grid-item[data-v-13f73da8]{height:100%;display:flex;cursor:pointer}.uni-grid-item__box[data-v-13f73da8]{display:flex;width:100%;position:relative;flex:1;flex-direction:column}.uni-grid-item--border[data-v-13f73da8]{position:relative;z-index:0;border-bottom:1px #d2d2d2 solid;border-right:1px #d2d2d2 solid}.uni-grid-item--border-top[data-v-13f73da8]{position:relative;border-top:1px #d2d2d2 solid;z-index:0}.uni-highlight[data-v-13f73da8]:active{background-color:#f1f1f1}',""]),t.exports=i},"6ab2":function(t,i,e){"use strict";e.r(i);var n=e("20f2"),a=e("4c42");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("7344");var r=e("828b"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"13f73da8",null,!1,n["a"],void 0);i["default"]=s.exports},7344:function(t,i,e){"use strict";var n=e("788c"),a=e.n(n);a.a},"788c":function(t,i,e){var n=e("6a65");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("967d").default;a("60e4a997",n,!0,{sourceMap:!1,shadowMode:!1})},7957:function(t,i,e){"use strict";var n=e("0a72"),a=e.n(n);a.a},"7e69":function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-grid-wrap[data-v-6f48037d]{display:flex;flex:1;flex-direction:column;width:100%}.uni-grid[data-v-6f48037d]{display:flex;flex-direction:row;flex-wrap:wrap}.uni-grid--border[data-v-6f48037d]{position:relative;z-index:1;border-left:1px #d2d2d2 solid}',""]),t.exports=i},8716:function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("64aa"),e("aa9c"),e("bf0f"),e("2797"),e("dd2b");var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(i,e){i===t&&t.grid.children.splice(e,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};i.default=n},"8e1e":function(t,i,e){t.exports=e.p+"static/logo_fxbj.jpg"},"904c":function(t,i,e){"use strict";e.r(i);var n=e("ea02"),a=e("b240");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("7957");var r=e("828b"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"6f48037d",null,!1,n["a"],void 0);i["default"]=s.exports},a26e:function(t,i,e){t.exports=e.p+"static/logo_rxtx.jpg"},a715:function(t,i,e){t.exports=e.p+"static/logo_rxdm.jpg"},b240:function(t,i,e){"use strict";e.r(i);var n=e("c1b2"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},c1b2:function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("64aa"),e("c9b5"),e("bf0f"),e("ab80"),e("2797"),e("5c47"),e("e966");var n={name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(i){t.children.forEach((function(t,e){t.width=i}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var i=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(e){i.width=parseInt((e[0].width-1)/i.column)+"px",t(i.width)}))}}};i.default=n},c30d:function(t,i,e){var n=e("546b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("967d").default;a("363c7c06",n,!0,{sourceMap:!1,shadowMode:!1})},c6a6:function(t,i,e){"use strict";var n=e("c30d"),a=e.n(n);a.a},d8da:function(t,i,e){t.exports=e.p+"static/icon_similar.jpg"},ea02:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":this.showBorder},style:{"border-left-color":this.borderColor},attrs:{id:this.elId}},[this._t("default")],2)],1)},a=[]},f6ed:function(t,i,e){"use strict";e.r(i);var n=e("2cda"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a}}]);