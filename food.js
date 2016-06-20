(function(){
var dogFoodRequest= new XMLHttpRequest();
dogFoodRequest.addEventListener("load", loadDogFood);
dogFoodRequest.open("GET", "dogfood.json");
dogFoodRequest.send();})();

function loadDogFood(){
  var dogDoc = document.getElementById("dogfoodlist");
  var dogDOM="";
  var dogFood = JSON.parse(event.target.responseText);
  
  
  dogFood.dog_brands.forEach(function(brand){
    dogDOM+="<div class='brandName'><div>"+brand.name +"</div>";
    brand.types.forEach(function(type){
      dogDOM +="<div class ='type'><div class='typename'>" +
      type.type.replace(type.type.charAt(0), type.type.charAt(0).toUpperCase()).replace("_", " ") + "</div>";
      type.volumes.forEach(function(volume){
        dogDOM += "<div class='typeandprice'>" + volume.name+ ": ";
        dogDOM += volume.price + "</div>";
        

      });
      dogDOM+="</div>";
    });
    dogDOM+="</div>";
    dogDoc.innerHTML =dogDOM;
  });
}
(function(){
var catFoodRequest= new XMLHttpRequest();
catFoodRequest.addEventListener("load", loadCatFood);
catFoodRequest.open("GET", "catfood.json");
catFoodRequest.send();})();

function loadCatFood(){
  
  var catDoc = document.getElementById("catfoodlist");
  var catDOM="";
  var catFood = JSON.parse(event.target.responseText);
  
  
  catFood.cat_brands.forEach(function(brand){
    catDOM+="<div class='brandName'><div>"+brand.name +"</div>";
    brand.breeds.forEach(function(breed){
      catDOM +="<div class ='breed'><div class='breedname'>" +breed.breed +"</div>";
      breed.volumes.forEach(function(volume){
        catDOM += "<div class='typeandprice'>" + volume.name + ": ";
        catDOM +=  volume.price + "</div>";
      });
      catDOM+="</div>";
    });
    catDOM+="</div>";
    catDoc.innerHTML =catDOM;
  });

}