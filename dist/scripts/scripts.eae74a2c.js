"use strict";angular.module("icr-style-guide",["ngAnimate","ngSanitize","ngTouch","ui.router","hljs"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){c.html5Mode(!0),b.otherwise("/"),a.state("frame",{"abstract":!0,url:"/",templateUrl:"views/frame.html"}).state("navigation",{"abstract":!0,parent:"frame",templateUrl:"views/navigation.html"}).state("home",{url:"",parent:"frame",templateUrl:"views/main.html",controller:"MainCtrl"}).state("resets",{url:"",parent:"frame",templateUrl:"views/resets.html"}).state("layout",{url:"",parent:"frame",templateUrl:"views/layout.html"}).state("svgs",{url:"",parent:"frame",templateUrl:"views/svgs.html"}).state("media-queries",{url:"",parent:"frame",templateUrl:"views/media-queries.html"})}]).run(["$rootScope",function(a){a.$on("$stateChangeSuccess",function(){document.body.scrollTop=document.documentElement.scrollTop=0})}]),angular.module("icr-style-guide").controller("MainCtrl",function(){}),angular.module("icr-style-guide").directive("ascii",function(){return{restrict:"A",replace:!1,transclude:!1,scope:!0,link:function(a,b){var c="&lt;",d="&gt;",e="<br />",f="&emsp;",g=b.html(),h=g.replace(/>/g,d).replace(/</g,c).replace(/#/g,e).replace(/=/g,f);b.html(h)}}}),angular.module("icr-style-guide").directive("codeSnippet",function(){return console.log("loaded directive"),{restrict:"EA",transclude:!0,templateURL:"../views/code-snippet.html",link:function(a,b){a.code=b.html()}}});