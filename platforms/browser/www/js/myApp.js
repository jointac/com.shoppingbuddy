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
.factory('globalbudget', function(newbudget){
	var newitem = newbudget;
	return newitem;
});
