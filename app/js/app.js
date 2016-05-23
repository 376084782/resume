var app=angular.module('myApp',['myCtl1','myDrt','ngRoute','ngAnimate']);

//路由规则
app.config(function($routeProvider){
	$routeProvider.when('/main-info',{
        templateUrl:'cuts/main-info.html',
        controller:'main-info'
        })
        .when('/skills', {
            templateUrl:'cuts/skills.html',
            controller:'skills'
        })
        .when('/exp',{
            templateUrl:'cuts/exp.html',
            controller:'exp'
        })
        .otherwise({redirectTo:'/main-info'
        });
    });
