var app = angular.module('todo', [ ]);

app.controller('TodoController', function($scope){

    $scope.todoList= []
    $scope.addToList = function(){
      todoObject = {name:$scope.currentTodo};
      $scope.todolist.push(todoObject);
    }

     $scope.deleteFromList = function(todo){
        index = $scope.todos.indexOf(todo)
        $scope.todos.splice(index,1)
     }
});

app.directive('todoItem', function(){
    return{
        restrict: 'E',
        templateUrl: 'todoIist.html'
        }
    };
});
app.directive('todoLtem', function(){
    return{
        restrict: 'E',
        templateUrl: 'todoList.html'
    };
});
