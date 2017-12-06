angular.module("myApp").service("productsSrvc", function($http) {
  this.getProducts = function(category) {
    return $http
      .get(`https://practiceapi.devmountain.com/products?category=${category}`)
      .catch(console.log);
  };
});
