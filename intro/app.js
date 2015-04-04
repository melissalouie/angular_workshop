(function(){
    var app = angular.module('todo', [ ]);

    app.controller('TodoController', function($scope){
               $scope.myName = "Melissa"
               $scope.todo= {mostImportant:"exercise"};
               $scope.todos = {
                mostImportant:'exercise',
                leastImportant:'play video games'
            };
            $scope.eatingHealthy = true
            $scope.eatingFatty = false
            var todos = [
               {"name": "Eat"},
               {"name": "Run"},
               {"name": "Run"},
             ];
            $scope.todos = todos;

    });
})();
