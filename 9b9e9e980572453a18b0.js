"use strict";(self.webpackChunkwebtool_liff=self.webpackChunkwebtool_liff||[]).push([[235],{235:(t,a,e)=>{e.r(a),e.d(a,{default:()=>n});const s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.id?e("div",{staticClass:"d-inline-block"},[e("input",{staticClass:"d-none",attrs:{id:t.id,type:"file",accept:"image/*",capture:"camera"},on:{change:t.parseFile}}),e("label",{staticClass:"btn btn-secondary btn-sm mb-0",attrs:{for:t.id}},[e("b-icon-card-image")],1)]):t._e()},staticRenderFns:[],props:[],data:function(){return{id:""}},created(){this.id=`img-${this._uid}`},mounted(){},methods:{parseFile:function(t){const a=this,e=t.srcElement,s=e.files[0];e.value="";const i=new window.FileReader;i.addEventListener("load",(function(){const t=i.result,e=new window.Image;e.onload=function(){const{width:s,height:i}=this;Object.assign(a,{width:s,height:i,url:t}),a.$emit("load",e,a)},e.src=t}),!1),s&&i.readAsDataURL(s)}}};var i=e(601);const n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid px-0"},[e("nav",{staticClass:"navbar navbar-dark bg-dark"},[e("div",{staticClass:"navbar-brand d-flex"},[e("div",[t._v("Webtool Liff")]),e("open-image",{staticClass:"mb-0",on:{load:t.loadImg}},[t._v("上傳")])],1)]),e("div",{staticClass:"container-fluid px-0"},[e("b-card",{attrs:{"no-body":""}},[e("b-card-body",[e("ul",[e("li",[t._v("os: "+t._s(t.os))])]),e("div",{staticClass:"card pb-0",staticStyle:{width:"200px"}},[t.imgUrl?e("img",{staticClass:"mw-100 mh-100",attrs:{src:t.imgUrl}}):t._e()])])],1)],1)])},staticRenderFns:[],components:{OpenImage:s},data:()=>({imgUrl:"",os:""}),async mounted(){await i.init({liffId:"1656579746-5xEz3OYa"}),this.os=i.getOS()},updated(){},methods:{loadImg(t){this.imgUrl=t.src}}}}}]);