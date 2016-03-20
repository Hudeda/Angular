(function() {
  var app = angular.module('myDog', []);

  app.controller('DogController', function(){
    this.products = dogs;
  });

    var dogs=[
        {name: "שרפיי",image:"images/sharpey.jpg"},
        {name:'אלסקן מלמוט',image:"images/Alaskan_Malamute.jpg"},
        {name: "קאנה קורסו",image:"images/kanekorso.jpg" },{name:'אקיטה אינו',image:"images/akitauno.jpg"}
    ]

})();
