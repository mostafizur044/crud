app.controller('EditController', ['$scope','firebase', '$location', '$routeParams', '$firebaseObject',    
    function($scope, firebase, $location, $routeParams, $firebaseObject){
    
    var ref = firebase.database().ref().child('product/' + $routeParams.id);
		$scope.product = $firebaseObject(ref);
    
    $scope.editProduct = function() {
        $scope.product.$save({
            sku: $scope.product.sku,
            description: $scope.product.description,
            price: $scope.product.price
        });
        $scope.edit_form.$setPristine();
        $scope.product = {};
        console.log("Edit done!!");
        $location.path('/');
        
    };
     
}]);