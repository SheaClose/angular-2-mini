angular
  .module("myApp", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "./js/home/homeTmpl.html"
      })
      .state("products", {
        url: "/products/:id",
        templateUrl: "./js/products/productsTmpl.html",
        controller: "productsCtrl",
        resolve: {
          products: function(productsSrvc, $state) {
            return productsSrvc
              .getProducts($state.params.id)
              .then(res => res.data)
              .catch(err => {
                console.log(err);
                $state.go("home");
              });
          }
        }
      })
      .state("settings", {
        url: "/settings?category",
        templateUrl: "./js/settings/settingsTmpl.html",
        controller: function($stateParams) {
          console.log("$stateParams: ", $stateParams);
        }
      });
    $urlRouterProvider.otherwise("/");
  });
