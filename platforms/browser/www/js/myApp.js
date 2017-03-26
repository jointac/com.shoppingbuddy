var myApp = angular.module('myApp',[]);
myApp
.factory('promoitems', function(){
    var promoitems = [{
            "itemdesc":"COCA COLA CAN",
            "itemamt":"P30.00",
            "promodetail":"BUY 2 TAKE 1 FREE",
            "itemimg":"/img/coke.png"
        },{
            "itemdesc":"OREO",
            "itemamt":"P10.00",
            "promodetail":"5% OFF",
            "itemimg":"/img/oreo.png"
        },{
            "itemdesc":"DOVE",
            "itemamt":"P45.00",
            "promodetail":"5% OFF",
            "itemimg":"/img/dove.png"
        },{
            "itemdesc":"JOY DISHWASHING LIQUID",
            "itemamt":"P40.00",
            "promodetail":"5% OFF",
            "itemimg":"/img/joy.png"
        },{
            "itemdesc":"CHAMPION DETERGENT",
            "itemamt":"P6.00",
            "promodetail":"2 FOR P10.00",
            "itemimg":"/img/champ.png"
        }];
    return promoitems;
})
.factory('aisle', function(){
    var aisleitem = [{
            "aisle":"1",
            "cat":"FRESH PRODUCE",
            "description":"FRESH FRUITS, FRESH HERBS, FRESH VEGETABLES",
            "itemimg":"/img/produce2.png",
        },{
            "aisle":"2",
            "cat":"MEAT & SEAFOOD",
            "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
            "itemimg":"/img/meat2.png",
        },{
            "aisle":"3",
            "cat":"DAIRY & EGGS",
            "description":"CONDENSED MILK, CREAM, EGGS, EVAPORATED MILK",
            "itemimg":"/img/dairy2.png",
        },{
            "aisle":"4",
            "cat":"BAKERY",
            "description":"BREAD, BUNS & ROLLS, TORTILLA & FLAT BREAD",
            "itemimg":"/img/bakery2.png",
        },{
            "aisle":"5",
            "cat":"BREAKFAST",
            "description":"CEREAL, HOT CEREAL & PANCAKES",
            "itemimg":"/img/meat2.png",
        },{
            "aisle":"6",
            "cat":"FROZEN",
            "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
            "itemimg":"/img/bfast2.png",
        },{
            "aisle":"7",
            "cat":"PANTRY",
            "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
            "itemimg":"/img/pantry2.png",
        },{
            "aisle":"8",
            "cat":"CANNED GOODS",
            "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
            "itemimg":"/img/can2.png",
        },{
            "aisle":"9",
            "cat":"PASTA & DRIED",
            "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
            "itemimg":"/img/pasta2.png",
        },{
            "aisle":"10",
            "cat":"BEVERAGES",
            "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
            "itemimg":"/img/beverages2.png",
        }];
    return aisleitem;
})
.factory('grocery', function(){
    var groceryitem = {};
    groceryitem.freshproduce = function() {
        var items = [{
            "item":1,
            "description":"Apple",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }, {
            "item":2,
            "description":"Cabbage",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }];
        return items;
    };

    groceryitem.meatseafood = function() {
        var items = [{
            "item":1,
            "description":"Tilapia",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }, {
            "item":2,
            "description":"Minced Meat",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }];
        return items;
    };

    groceryitem.dairyegg = function() {
        var items = [{
            "item":1,
            "description":"Egg",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }, {
            "item":2,
            "description":"Milk",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }];
        return items;
    };

    groceryitem.bakery = function() {
        var items = [{
            "item":1,
            "description":"Bread",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }, {
            "item":2,
            "description":"Buns",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }];
        return items;
    };

    groceryitem.breakfast = function() {
        var items = [{
            "item":1,
            "description":"Cereal",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }, {
            "item":2,
            "description":"Pancake",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }];
        return items;
    };

    groceryitem.frozen = function() {
        var items = [{
            "item":1,
            "description":"Hotdogs",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }, {
            "item":2,
            "description":"Poultry",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }];
        return items;
    };
    groceryitem.pantry = function() {
        var items = [{
            "item":1,
            "description":"Flour",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }, {
            "item":2,
            "description":"Flour",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }];
        return items;
    };
    groceryitem.canneditem = function() {
        var items = [{
            "item":1,
            "description":"Century Tuna",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }, {
            "item":2,
            "description":"Corned Beef",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }];
        return items;
    };
    groceryitem.driedfood = function() {
        var items = [{
            "item":1,
            "description":"Pasta",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }, {
            "item":2,
            "description":"Rice",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }];
        return items;
    };
    groceryitem.beverage = function() {
        var items = [{
            "item":1,
            "description":"Coke",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }, {
            "item":2,
            "description":"Iced Tea",
            "price":5,
            "weight":1,
            "nutritionfacts":"item"
        }];
        return items;
    };

    return groceryitem;
})
.factory('newitem', function(){
    var newitems = [{
            "itemdesc":"MAGGI MAGIC ISDA",
            "itemamt":"P36.00",
            "promodetail":"8G 12'S",
            "itemimg":"/img/coke.png"
        },{
            "itemdesc":"OREO",
            "itemamt":"P10.00",
            "promodetail":"50G",
            "itemimg":"/img/oreo.png"
        },{
            "itemdesc":"DOVE",
            "itemamt":"P45.00",
            "promodetail":"",
            "itemimg":"/img/dove.png"
        },{
            "itemdesc":"JOY DISHWASHING LIQUID",
            "itemamt":"P40.00",
            "promodetail":"3G",
            "itemimg":"/img/joy.png"
        }];
    return newitems;
})
.factory('globalbudget', function(newbudget){
	var newitem = newbudget;
	return newitem;
});
