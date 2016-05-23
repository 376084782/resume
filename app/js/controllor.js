var myapp11=angular.module('myCtl1',[]);
myapp11.controller('myCtrl',function($scope){
	$scope.name="aaa";
});
myapp11.controller('exp',function($scope){
	$scope.menu='exp';
})
myapp11.controller('main-info',function($scope){
	$scope.menu='main-info';
})
myapp11.controller('skills',function($scope){
	$scope.menu='skills';
})