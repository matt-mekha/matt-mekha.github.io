(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4Y7M":function(e){e.exports=JSON.parse('{"languages":{"HTML":{"img":"HTML.png","displayName":"HTML"},"CSS":{"img":"CSS.png","displayName":"CSS"},"JS":{"img":"JS.png","displayName":"JavaScript"},"C#":{"img":"CSharp.png","displayName":"C#"}},"frameworks":{"Unity":{"img":"Unity.png","displayName":"Unity"},"p5":{"img":"p5.png","displayName":"p5.js"},"React":{"img":"React.png","displayName":"React"},"NodeJS":{"img":"NodeJS.png","displayName":"Node.js"}}}')},D85t:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){var e=a("RHEb");return{page:e.default||e}}])},RHEb:function(e,t,a){"use strict";a.r(t);var o=a("0iUn"),n=a("sLSF"),i=a("MI3g"),r=a("a7VT"),c=a("Tit0"),s=a("MX0m"),p=a.n(s),l=a("q1tI"),d=a.n(l),m=a("5Yp1"),x={textDecoration:"none"},b=function(e){return d.a.createElement("a",{className:e.className,style:x,target:"_blank",href:e.href},e.children)},g=a("khU4"),h=a("4Y7M"),u=a("8+3m"),f=function(e){var t=h[e.type][e.name];return d.a.createElement("img",{src:u.paths.img+e.type+"/"+t.img,className:"projectIcon",title:t.displayName})},w=function(e){return d.a.createElement("div",{className:"projectCard"+(e.active?" projectActive":""),onClick:e.onClick},d.a.createElement("p",{className:"projectTitle"},e.project.title),d.a.createElement("img",{className:"projectImg",src:u.paths.img+"projects/"+e.project.img}),d.a.createElement("div",{className:"projectDesc"},e.project.desc,d.a.createElement("div",{className:"projectInfo"},d.a.createElement("p",{className:"projectInfoLabel"},"Languages:",d.a.createElement("br",null),e.project.languages.map(function(e){return d.a.createElement(f,{type:"languages",name:e})})),d.a.createElement("p",{className:"projectInfoLabel"},"Frameworks:",d.a.createElement("br",null),e.project.frameworks.map(function(e){return d.a.createElement(f,{type:"frameworks",name:e})}))),d.a.createElement("br",null),d.a.createElement("div",{className:"projectButtonContainer"},d.a.createElement(b,{className:"projectButton",href:e.project.demo},"VIEW"),""==e.project.source?d.a.createElement("div",{className:"projectButton projectButtonDisabled"},"CODE"):d.a.createElement(b,{className:"projectButton",href:e.project.source},"CODE"))),d.a.createElement("div",{className:"projectSeparator"}))},j=function(e){function t(e){var a;return Object(o.default)(this,t),(a=Object(i.default)(this,Object(r.default)(t).call(this,e))).state={activeProject:null},a}return Object(c.default)(t,e),Object(n.default)(t,[{key:"handleClick",value:function(e){window.innerWidth>u.constants.mobileWidth&&this.setState({activeProject:e})}},{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,this.state.activeProject?d.a.createElement("div",{className:"projectFade",onClick:function(){e.handleClick(null)}}):"",d.a.createElement("div",{className:"projectContainer"},g.map(function(t){return d.a.createElement(w,{project:t,active:t.title==e.state.activeProject,key:t.title,onClick:function(){e.handleClick(t.title)}})})))}}]),t}(d.a.Component);t.default=function(){return d.a.createElement(m.a,{page:"Projects"},d.a.createElement(j,null),d.a.createElement(p.a,{id:"3453486974",dynamic:[u.colors.accentDark,u.colors.textLight,u.colors.accentLight,u.colors.disabled,u.constants.mobileWidth+1,u.constants.headerHeight+200,u.constants.headerHeight+200,u.constants.headerHeight+185,u.constants.headerHeight+200,u.constants.headerHeight+200,u.constants.mobileWidth]},[".projectContainer{box-sizing:border-box;width:100%;padding:50px 30px 50px 30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".projectCard{box-sizing:border-box;border-radius:20px;margin:30px;width:350px;height:435px;padding:30px;display:inline-block;background-color:#fff;box-shadow:10px 10px 10px #ccc;cursor:pointer;position:relative;bottom:0px;will-change:bottom,box-shadow;-webkit-transition:bottom 0.2s,box-shadow 0.2s;transition:bottom 0.2s,box-shadow 0.2s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}",".projectTitle{font-size:28px;position:relative;margin:0 0 30px 0;}",".projectDesc{display:none;font-size:16px;}",".projectImg{width:350px;position:absolute;left:0px;bottom:0px;border-radius:0 0 20px 20px;}",".projectInfo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".projectInfoLabel{margin-top:40px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}",".projectIcon{width:48px;height:48px;position:relative;top:10px;}",".projectButtonContainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".projectButton{box-sizing:border-box;background-color:".concat(u.colors.accentDark,";color:").concat(u.colors.textLight,";padding:20px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;text-align:center;font-size:24px;border-radius:10px;margin-top:30px;margin-left:10px;margin-right:10px;position:relative;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);box-shadow:5px 5px 10px #aaa;will-change:transform,box-shadow;-webkit-transition:-webkit-transform 0.2s,box-shadow 0.2s;-webkit-transition:transform 0.2s,box-shadow 0.2s;transition:transform 0.2s,box-shadow 0.2s;}"),".projectButton:not(.projectButtonDisabled):hover{background-color:".concat(u.colors.accentLight,";-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);box-shadow:10px 10px 10px #aaa;}"),".projectButton:not(.projectButtonDisabled):active{-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);box-shadow:0px 0px 10px #aaa;}",".projectButtonDisabled{cursor:not-allowed;box-shadow:unset;background-color:".concat(u.colors.disabled,";}"),".projectSeparator{display:none;}","@media only screen and (min-width:".concat(u.constants.mobileWidth+1,"px){.projectCard:not(.projectActive):hover{bottom:10px;box-shadow:15px 15px 10px #ccc;}.projectCard.projectActive{cursor:unset;margin:0;width:calc(100% - 200px);height:calc(100vh - ").concat(u.constants.headerHeight+200,"px);border-radius:30px 20px 20px 30px;position:fixed;bottom:100px;left:100px;box-shadow:unset;z-index:3;}.projectCard.projectActive .projectImg{position:absolute;left:0px;bottom:0px;border-radius:20px 0 0 20px;width:unset;height:calc(100vh - ").concat(u.constants.headerHeight+200,"px);}.projectCard.projectActive .projectTitle{font-size:42px;top:5px;left:calc(100vh - ").concat(u.constants.headerHeight+185,"px);}.projectCard.projectActive .projectDesc{display:inline-block;position:absolute;width:calc(calc(calc(100vw - 200px) - calc(100vh - ").concat(u.constants.headerHeight+200,"px)) - 100px);left:calc(100vh - ").concat(u.constants.headerHeight+200,"px);top:80px;font-size:24px;margin:30px 50px;}.projectCard.projectActive .projectInfoLabel{position:relative;left:50px;}.projectFade{display:block;position:fixed;z-index:1;left:0;top:0;width:100vw;height:100vh;background-color:#00000099;}}"),"@media only screen and (max-width:".concat(u.constants.mobileWidth,"px){.projectContainer{display:block;padding:0px;margin:0px;width:100%;padding-top:0px;}.projectCard{cursor:unset;-webkit-transition:unset;transition:unset;margin:0px;width:100%;display:block;border-radius:0px;background:none;box-shadow:unset;height:unset;padding-top:10px;padding-left:50px;padding-right:50px;}.projectCard:first-child{padding-top:80px;}.projectCard:last-child{padding-bottom:100px;}.projectCard:hover{bottom:unset;box-shadow:unset;}.projectCard:not(:last-child) .projectSeparator{display:block;height:1px;margin-top:100px;margin-bottom:60px;background-color:#aaa;}.projectTitle{font-size:36px;}.projectImg{width:100%;max-width:300px;position:static;border-radius:15px;}.projectDesc{display:block;padding:25px 10px 0px 10px;}.projectButtonContainer{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.projectButton{min-width:200px;}.projectButtonDisabled{display:none;}}")]))}},khU4:function(e){e.exports=JSON.parse('[{"title":"Satellite","desc":"A mobile game I made with Unity and published to the Apple App Store.","img":"Satellite.png","demo":"https://apps.apple.com/us/app/satellite-gravity-game/id1447827395","source":"","languages":["C#"],"frameworks":["Unity"]},{"title":"2D Raycasting Demo","desc":"A 2D light simulation that optimizes raycasting by using the minimum number of rays possible.","img":"2DRaycasting.png","demo":"/static/code/2DRaycasting/index.html","source":"","languages":["HTML","JS"],"frameworks":["p5"]},{"title":"This Website","desc":"I made this website to both learn React and make a little portfolio.","img":"Website.png","demo":"/","source":"","languages":["HTML","CSS","JS"],"frameworks":["React","NodeJS"]}]')}},[["D85t",1,0]]]);