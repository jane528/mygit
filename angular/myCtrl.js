//restrict:
// E:元素名称
//A:属性
//C:类名
//M:注释
//默认：EA
app.directive("guoyiDirective",function(){
    return{
        restrict:"E",
        template:"<h1>自定义指令</h1>"
    };
});
app.controller('myCtrl',function($scope){
    $scope.firstname='jane.wang';
    $scope.sayHello = function(){
        $scope.greeting="hello man";
    };
});
//根作用域$rootScope可作用于整个应用中，是各个controller中scope的桥梁
app.controller('myCtrl',function($scope,$rootScope){
    //关于作用域$scope局部变量，在使用时{{变量名}}
    //关于作用域$rootscope全局变量，在使用时{{$root.变量名}}
});
app.controller('myCtrl2',function($scope){
    $scope.f1="jane";
    $scope.f2="wang";
    $scope.a1=true;
    $scope.allname=function(){
        $scope.a1= !$scope.a1;
    };
    $scope.count=0;
});
//控制器的使用在js中写
//1.定义app变量var app=angular.module('应用名称',[]);
//2.app.controller('控制器名称',function($scope){内容});
//3.一个应用中可以有多个控制器/**

