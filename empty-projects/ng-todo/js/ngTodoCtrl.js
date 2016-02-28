ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope, $http) {
    $scope.todos = [
        {
            val: "Cool thing 1",
            completed: false
        },
        {
            val: "Cool thing 2",
            completed: false
        },
        {
            val: "Cool thing 3",
            completed: true
        },
        {
            val: "Cool thing 4",
            completed: false
        },
        {
            val: "Cool thing 5",
            completed: true
        }
    ];
});
