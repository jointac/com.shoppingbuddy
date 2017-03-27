var myApp = angular.module('myApp',[]);
myApp
.factory('promoitems', function(){
    var promoitems = [{
            "itemdesc":"COCA COLA CAN",
            "itemamt":"P30.00",
            "promodetail":"BUY 2 TAKE 1 FREE",
            "itemimg":"../www/img/coke.png",
        },{
            "itemdesc":"OREO",
            "itemamt":"P10.00",
            "promodetail":"5% OFF",
            "itemimg":"../www/img/oreo.png",
        },{
            "itemdesc":"DOVE",
            "itemamt":"P45.00",
            "promodetail":"5% OFF",
            "itemimg":"../www/img/dove.png",
        },{
            "itemdesc":"JOY DISHWASHING LIQUID",
            "itemamt":"P40.00",
            "promodetail":"5% OFF",
            "itemimg":"../www/img/joy.png",
        },{
            "itemdesc":"CHAMPION DETERGENT",
            "itemamt":"P6.00",
            "promodetail":"2 FOR P10.00",
            "itemimg":"../www/img/champ.png",
        }, {
            "itemdesc":"LUCKY ME! PANCIT CANTON CHILI MANSI",
            "itemamt":"P6.00",
            "promodetail":"2 FOR P10.00",
            "itemimg":"../www/img/luckyme.gif",
        }];
    return promoitems;
})
.factory('aisle', function(){
    var aisleitem = [{
            "aisle":"1",
            "cat":"FRESH PRODUCE",
            "description":"FRESH FRUITS, FRESH HERBS, FRESH VEGETABLES",
            "itemimg":"../www/img/produce2.png",
        },{
            "aisle":"2",
            "cat":"MEAT & SEAFOOD",
            "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
            "itemimg":"../www/img/meat2.png",
        },{
            "aisle":"3",
            "cat":"DAIRY & EGGS",
            "description":"CONDENSED MILK, CREAM, EGGS, EVAPORATED MILK",
            "itemimg":"../www/img/dairy2.png",
        },{
            "aisle":"4",
            "cat":"BAKERY",
            "description":"BREAD, BUNS & ROLLS, TORTILLA & FLAT BREAD",
            "itemimg":"../www/img/bakery2.png",
        },{
            "aisle":"5",
            "cat":"BREAKFAST",
            "description":"CEREAL, HOT CEREAL & PANCAKES",
            "itemimg":"../www/img/meat2.png",
        },{
            "aisle":"6",
            "cat":"FROZEN",
            "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
            "itemimg":"../www/img/frozen2.png",
        },{
            "aisle":"7",
            "cat":"PANTRY",
            "description":"CONDIMENTS, SEASONINGS, COOKING OIL",
            "itemimg":"../www/img/pantry2.png",
        },{
            "aisle":"8",
            "cat":"CANNED GOODS",
            "description":"CANNED FOOD, CANNED FRUITS, CANNED MILK",
            "itemimg":"../www/img/can2.png",
        },{
            "aisle":"9",
            "cat":"PASTA & DRIED",
            "description":"PASTAS, FLOUR, BAKING SODA",
            "itemimg":"../www/img/pasta2.png",
        },{
            "aisle":"10",
            "cat":"BEVERAGES",
            "description":"JUICES & HEALTH DRINKS, COFFEE, TEA, SOFTDRINKS",
            "itemimg":"../www/img/beverages2.png",
        },{
            "aisle":"11",
            "cat":"HEALTH & BEAUTY",
            "description":"HAIR CARE, BODY CARE, ORAL CARE, FACIAL CARE",
            "itemimg":"../www/img/personal2.png",
        },{
            "aisle":"12",
            "cat":"HOME CARE",
            "description":"TISSUE & TOILET PAPER, LAUNDRY HOME SUPPLIES",
            "itemimg":"../www/img/house2.png",
        }];
    return aisleitem;
})
.factory('productcat', function(){
    var products = {};
    products.product1 = function() {
        var aisleitem = [{
            "aisle":"1",
            "cat":"FRESH PRODUCE",
            "description":"FRESH FRUITS, FRESH HERBS, FRESH VEGETABLES",
            "itemimg":"../www/img/produce1.png",
            "background":"../www/img/freshproduce.jpg",
        },{
            "aisle":"2",
            "cat":"MEAT & SEAFOOD",
            "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
            "itemimg":"../www/img/meat1.png",
            "background":"../www/img/meat.jpg",
        },{
            "aisle":"3",
            "cat":"DAIRY & EGGS",
            "description":"CONDENSED MILK, CREAM, EGGS, EVAPORATED MILK",
            "itemimg":"../www/img/dairy1.png",
            "background":"../www/img/dairy.jpg",
        },{
            "aisle":"4",
            "cat":"BAKERY",
            "description":"BREAD, BUNS & ROLLS, TORTILLA & FLAT BREAD",
            "itemimg":"../www/img/bakery1.png",
            "background":"../www/img/bread.jpg",
        },{
            "aisle":"5",
            "cat":"BREAKFAST",
            "description":"CEREAL, HOT CEREAL & PANCAKES",
            "itemimg":"../www/img/meat1.png",
            "background":"../www/img/bfast.jpg",
        },{
            "aisle":"6",
            "cat":"FROZEN",
            "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
            "itemimg":"../www/img/frozen1.png",
            "background":"../www/img/frozen.jpg",
        }];
        return aisleitem;
    };

    products.product2 = function() {
        var aisleitem = [{
            "aisle":"7",
            "cat":"PANTRY",
            "description":"CONDIMENTS, SEASONINGS, COOKING OIL",
            "itemimg":"../www/img/pantry1.png",
            "background":"../www/img/pantry.jpg",
        },{
            "aisle":"8",
            "cat":"CANNED GOODS",
            "description":"CANNED FOOD, CANNED FRUITS, CANNED MILK",
            "itemimg":"../www/img/can1.png",
            "background":"../www/img/canned.jpg",
        },{
            "aisle":"9",
            "cat":"PASTA & DRIED",
            "description":"PASTAS, FLOUR, BAKING SODA",
            "itemimg":"../www/img/pasta1.png",
            "background":"../www/img/pasta.jpg",
        },{
            "aisle":"10",
            "cat":"BEVERAGES",
            "description":"JUICES & HEALTH DRINKS, COFFEE, TEA, SOFTDRINKS",
            "itemimg":"../www/img/beverages1.png",
            "background":"../www/img/beverage.jpg",
        },{
            "aisle":"11",
            "cat":"HEALTH & BEAUTY",
            "description":"HAIR CARE, BODY CARE, ORAL CARE, FACIAL CARE",
            "itemimg":"../www/img/personal1.png",
            "background":"../www/img/health.jpg",
        },{
            "aisle":"12",
            "cat":"HOME CARE",
            "description":"TISSUE & TOILET PAPER, LAUNDRY HOME SUPPLIES",
            "itemimg":"../www/img/house1.png",
            "background":"../www/img/homecare.jpg",
        }];
        return aisleitem;
    };

    return products;
})
.factory('grocery', function(){
    var groceryitem = {};
    groceryitem.freshproduce = function() {
        var items = [{
            "item":1,
            "description":"Apple",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }, {
            "item":2,
            "description":"Cabbage",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }];
        return items;
    };

    groceryitem.meatseafood = function() {
        var items = [{
            "item":1,
            "description":"Tilapia",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }, {
            "item":2,
            "description":"Minced Meat",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }];
        return items;
    };

    groceryitem.dairyegg = function() {
        var items = [{
            "item":1,
            "description":"Egg",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }, {
            "item":2,
            "description":"Milk",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }];
        return items;
    };

    groceryitem.bakery = function() {
        var items = [{
            "item":1,
            "description":"Bread",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }, {
            "item":2,
            "description":"Buns",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }];
        return items;
    };

    groceryitem.breakfast = function() {
        var items = [{
            "item":1,
            "description":"Cereal",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }, {
            "item":2,
            "description":"Pancake",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }];
        return items;
    };

    groceryitem.frozen = function() {
        var items = [{
            "item":1,
            "description":"Hotdogs",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }, {
            "item":2,
            "description":"Poultry",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }];
        return items;
    };
    groceryitem.pantry = function() {
        var items = [{
            "item":1,
            "description":"Flour",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }, {
            "item":2,
            "description":"Flour",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }];
        return items;
    };
    groceryitem.canneditem = function() {
        var items = [{
            "item":1,
            "description":"Century Tuna",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }, {
            "item":2,
            "description":"Corned Beef",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }];
        return items;
    };
    groceryitem.driedfood = function() {
        var items = [{
            "item":1,
            "description":"Pasta",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }, {
            "item":2,
            "description":"Rice",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }];
        return items;
    };
    groceryitem.beverage = function() {
        var items = [{
            "item":1,
            "description":"Coke",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }, {
            "item":2,
            "description":"Iced Tea",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }];
        return items;
    };
    groceryitem.healthbeauty = function() {
        var items = [{
            "item":1,
            "description":"Coke",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }, {
            "item":2,
            "description":"Iced Tea",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }];
        return items;
    };
    groceryitem.homecare = function() {
        var items = [{
            "item":1,
            "description":"Coke",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
        }, {
            "item":2,
            "description":"Iced Tea",
            "price":5,
            "weight":1,
            "nutritionfacts":"item",
            "itemimg":"../www/img/coke.png",
            "barcodeimg":"../www/img/barcode.png"
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
            "itemimg":"../www/img/maggieisda.png"
        },{
            "itemdesc":"BOY BAWANG BAKED BARBEQUE FLAVOR",
            "itemamt":"P32.00",
            "promodetail":"50G",
            "itemimg":"../www/img/bbawang.jpg"
        },{
            "itemdesc":"SUNSILK LONG & HEALTHY GROWTH",
            "itemamt":"P132.00",
            "promodetail":"",
            "itemimg":"../www/img/sunsilk.png"
        },{
            "itemdesc":"KOPIKO CAFE BLANCA",
            "itemamt":"P6.00",
            "promodetail":"30G",
            "itemimg":"../www/img/kopiko.png"
        }];
    return newitems;
})
.factory('globalbudget', function(newbudget){
	var newitem = newbudget;
	return newitem;
});
