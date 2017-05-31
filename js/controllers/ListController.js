app.controller('ListController', ['$scope', 'firebase', '$firebaseArray', '$firebaseObject', 
	function($scope, firebase, $firebaseArray, $firebaseObject){
  
  var products = firebase.database().ref().child('product');
  $scope.products = $firebaseArray(products);
  
  $scope.removeProduct = function(id) {
    var ref = firebase.database().ref().child('product/' + id);
    var product = $firebaseObject(ref);
    product.$remove();
    console.log("Delete Done");	
   };
   

   $scope.maxSize=2;
  	$scope.currentPage=1;
  	$scope.viewby = 3;
  	$scope.itemsPerPage = $scope.viewby;

  	$scope.setItemsPerPage = function(num) {
            $scope.itemsPerPage = num;
            $scope.currentPage = 1; 
            }       

        $scope.numItem = [3,5,10,15,20,25]; 
  
   
}])
.filter('startFrom',StartForm);

function StartForm(){
	return function(data,start){
		return data.slice(start);
	}	
} 

 