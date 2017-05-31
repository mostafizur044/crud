app.controller('AddController', ['$scope', 'firebase' , '$firebaseArray', '$location' , 
	function($scope, firebase , $firebaseArray, $location){
	
	$scope.addProduct = function() {
		var ref = firebase.database().ref().child('product');
		console.log(ref);
		var product = $firebaseArray(ref);
		product.$add({
			sku: $scope.product.sku,
			description: $scope.product.description,
			price: $scope.product.price
		});
		$location.path('/');
	};
	
}]);


