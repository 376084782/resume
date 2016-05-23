var drt=angular.module('myDrt',[]);
drt.directive("menu",function(){
    return{
        replace:true,
        restrict:'EA',
        template:"<div class='menu-wrapper'><ul class='menu'>" +
        "<li><a href='#main-info'>资料</a></li>" +"<li><a href='#skills'>技能</a></li>" +
        "<li><a href='#exp'>经验</a></li>"+"</ul></div>",
        link:function (scope,element,attrs){
            var t=element.find("a").each(function(){
                var aa=$(this);
                if(aa.attr("href").slice(1)==scope.menu){
                    aa.addClass("current-menu");
                }});

        }
    }
});
drt.controller("expmes",function($scope){
//时间点信息
    $scope.projects=[
        {
            time:'2016.02.09至2016.04.08',
            name:"在线学习子系统",
            content:"学校外包项目，为部队内部提供在线学习，在线考试，实时新闻，评论互动等功能。管理员可修改权限，上传资源。我在项目中负责在线学习系统子模块前后台网页的搭建，样式调控，使用到了jquery，jquery ui，bootstrap框架，使用svn版本控制配合团队合作。使用ckplayer及h5 object标签实现网页端视频，音频，pdf的播放，使用jstree实现树状图信息的实时更改。并测试完成ie8+，chrome，firefox之间的兼容问题。"
        },
        {
            time:"2014.04.21至今",
            name:"自行车租赁系统",
            content:"项目基于大数据分布式架构和可视化技术实现:1.移动端租车提示，搜索租车点功能,2.网页端实现租车点流量预测，数据可视化，地图动态显示租车点信息，管理租车点区域分布及管理员信息。并动态规划自行车分布最优策略项目中我使用了jquery，jquery ui，bootstrap，angular框架进行网页端实现。使用echarts及ajax技术实现数据可视化模块。调用了百度地图api实现地图租车位信息即时更新。"
        },
        {
            time:"2014.04.21至今",
            name:"自行车租赁系统",
            content:"项目基于大数据分布式架构和可视化技术实现:1.移动端租车提示，搜索租车点功能,2.网页端实现租车点流量预测，数据可视化，地图动态显示租车点信息，管理租车点区域分布及管理员信息。并动态规划自行车分布最优策略项目中我使用了jquery，jquery ui，bootstrap，angular框架进行网页端实现。使用echarts及ajax技术实现数据可视化模块。调用了百度地图api实现地图租车位信息即时更新。"
        },
        {
            time:"2014.04.21至今",
            name:"自行车租赁系统",
            content:"项目基于大数据分布式架构和可视化技术实现:1.移动端租车提示，搜索租车点功能,2.网页端实现租车点流量预测，数据可视化，地图动态显示租车点信息，管理租车点区域分布及管理员信息。并动态规划自行车分布最优策略项目中我使用了jquery，jquery ui，bootstrap，angular框架进行网页端实现。使用echarts及ajax技术实现数据可视化模块。调用了百度地图api实现地图租车位信息即时更新。"
        },
        {
            time:"2014.04.21至今",
            name:"自行车租赁系统",
            content:"项目基于大数据分布式架构和可视化技术实现:1.移动端租车提示，搜索租车点功能,2.网页端实现租车点流量预测，数据可视化，地图动态显示租车点信息，管理租车点区域分布及管理员信息。并动态规划自行车分布最优策略项目中我使用了jquery，jquery ui，bootstrap，angular框架进行网页端实现。使用echarts及ajax技术实现数据可视化模块。调用了百度地图api实现地图租车位信息即时更新。"
        },
        {
            time:"2014.04.21至今",
            name:"自行车租赁系统",
            content:"项目基于大数据分布式架构和可视化技术实现:1.移动端租车提示，搜索租车点功能,2.网页端实现租车点流量预测，数据可视化，地图动态显示租车点信息，管理租车点区域分布及管理员信息。并动态规划自行车分布最优策略项目中我使用了jquery，jquery ui，bootstrap，angular框架进行网页端实现。使用echarts及ajax技术实现数据可视化模块。调用了百度地图api实现地图租车位信息即时更新。"
        }
    ];
})
drt.directive("timeline", function () {
    return{
        replace:true,
        restrict:'EA',
        transclude:true,
        template:"<div ng-transclude></div>",
        controller : function() {
            var expanders = [];
            this.gotOpened = function(selectedExpander) {

                angular.forEach(expanders, function(expander) {
                    if (selectedExpander != expander) {
                        expander.showMe = false;
                    }
                });
            }
            this.addExpander = function(expander) {
                expanders.push(expander);
            }
        }
    }
});
drt.directive("tcontent",function(){
    return {
        replace: true,
        restrict: "EA",
        require: '^?timeline',
        transclude: true,
        scope: {
            time: "=time",
            name: "=tName",
            cnt: "=tCnt"
        },
        template: "<div><div class='timePart' ng-click='toggle($event)'>" +
        "<div class='timePoint'><div class='Ttitle'>{{time}}<br>{{name}}</div></div>" +
        "</div>" +
        "<div ng-show='showMe' class='Tcnt' ng-class='{\"Tcnt-show\":showMe}'>" +
        "<h3>{{name}}</h3>" +
        "<p>{{cnt}}</p></div></div>",
        link: function (scope, element, attrs, ctrl) {
            console.log(scope.name);
            scope.showMe = false;
            ctrl.addExpander(scope);
            scope.toggle = function toggle($event) {
                $(".timeLine").addClass("pullleft");
                scope.showMe = !scope.showMe;

                ctrl.gotOpened(scope);
            }
        }
    }
});