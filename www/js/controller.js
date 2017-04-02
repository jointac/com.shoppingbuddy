myApp
.controller("splashpageCtrl", function($scope, $timeout, promoitems, newitem, aisle, grocery, productcat, subcat) {
	$scope.welcomepage = true;
	$scope.detailpage = false;
	$timeout(function(){
    	$scope.welcomepage = false;
    	$scope.detailpage = true;
    },2500)

    var ctrl = this;
    $scope.budget = 0;
    $scope.rembudget = 0;
    $scope.totalamt = 0;
	$scope.error = false;
	$scope.pricingdetail = false;
	$scope.detailpage = false;
	$scope.shoppinglinks = true;
	$scope.aislepage = false;
	$scope.promopage = false;
	$scope.whatsnewpage =false;
	$scope.productcat1 = false;
	$scope.productcat2 = false;
	$scope.productpage = false;
	$scope.productpageitem = false;
	$scope.aisleitems = aisle;
	$scope.shoppingcart = [];
	$scope.productcategory = '';
	$scope.subcategory ='';
	$scope.noitem = 0;
	//productcat1
	$scope.windowheight = "100vh";
	$scope.proceednow = function() {
		if ($.isNumeric(ctrl.txtAmt)) {
			$scope.budget = ctrl.txtAmt;
			$scope.error = false;
			$scope.pricingdetail = false;
			$scope.productcat1 = true;
			$scope.products1 = productcat.product1();
		} else {
			$scope.error = true;
		}
	};
	$scope.goto = function(link) {
		var $url = 'shoppinglinks';
		$scope.pricingdetail = false;
		$scope.shoppinglinks = false;
		$scope.promoitems = false;
		$scope.aislepage = false;
		$scope.promopage = false;
		$scope.productcat1 = false;
		$scope.productcat2 = false;
		$scope.whatsnewpage = false;
		$scope.productpage = false;
		$scope.productpageitem = false;
		switch(link) {
			case 0:
				$scope.shoppinglinks = true;
				break;
			case 1:
				$scope.whatsnewpage = true;
				$scope.whatsnew = newitem;
				break;
			case 2:
				$scope.aislepage = true;
				$scope.detailheight = (($(window).height() - 50) - 70).toString() + "px";
				break;
			case 3:
				$scope.pricingdetail = true;
				break;
			case 4:
				$scope.detailheight = (($(window).height() - 50) - 100 - 100).toString() + "px";
				$scope.promopage = true;
				$scope.prmitems = promoitems;
				break;
			case 5:
				break;
			case 6:
				$scope.productcat2 = true;
				$scope.products2 = productcat.product2();
				break;
			case 7:
				$scope.productcat1 = true;
				$scope.products1 = productcat.product1();
				break;
		}
	}
	$scope.gotocat = function(link) {
		$scope.pricingdetail = false;
		$scope.shoppinglinks = false;
		$scope.promoitems = false;
		$scope.aislepage = false;
		$scope.promopage = false;
		$scope.productcat1 = false;
		$scope.productcat2 = false;
		$scope.whatsnewpage = false;
		$scope.productpageitem = false;
		$scope.productpage = true;
		switch (link) {
			case "1":
				$scope.groceryitem = grocery.freshproduce();
				$scope.subcat = subcat.freshproduct();
				$scope.productcategory = "FRESH PRODUCE";
				$scope.subcategory = "FRUITS";
				break;
			case "2":
				$scope.groceryitem = grocery.meatseafood();
				$scope.subcat = subcat.meatseafood();
				$scope.productcategory = "MEAT & SEAFOOD";
				$scope.subcategory = "";
				break;
			case "3":
				$scope.groceryitem = grocery.dairyegg();
				$scope.subcat = subcat.dairyegg();
				$scope.productcategory = "DAIRY & EGGS";
				$scope.subcategory = "";
				break;
			case "4":
				$scope.groceryitem = grocery.bakery();
				$scope.subcat = subcat.bakery();
				$scope.productcategory = "BAKERY";
				$scope.subcategory = "";
				break;
			case "5":
				$scope.groceryitem = grocery.breakfast();
				$scope.subcat = subcat.breakfast();
				$scope.productcategory = "BREAKFAST";
				$scope.subcategory = "";
				break;
			case "6":
				$scope.groceryitem = grocery.frozen();
				$scope.subcat = subcat.frozen();
				$scope.productcategory = "FROZEN GOODS";
				$scope.subcategory = "";
				break;
			case "7":
				$scope.groceryitem = grocery.pantry();
				$scope.subcat = subcat.pantry();
				$scope.productcategory = "PANTRY";
				$scope.subcategory = "";
				break;
			case "8":
				$scope.groceryitem = grocery.canneditem();
				$scope.subcat = subcat.canneditem();
				$scope.productcategory = "CANNED GOODS";
				$scope.subcategory = "";
				break;
			case "9":
				$scope.groceryitem = grocery.driedfood();
				$scope.subcat = subcat.driedfood();
				$scope.productcategory = "PASTA & DRIED GOODS";
				$scope.subcategory = "";
				break;
			case "10":
				$scope.groceryitem = grocery.beverage();
				$scope.subcat = subcat.beverage();
				$scope.productcategory = "BEVERAGE";
				$scope.subcategory = "JUICES & HEALTH DRINKS";
				break;
			case "11":
				$scope.groceryitem = grocery.healthbeauty();
				$scope.subcat = subcat.healthbeauty();
				$scope.productcategory = "HEALTH & BEAUTY";
				$scope.subcategory = "";
				break;
			case "12":
				$scope.groceryitem = grocery.homecare();
				$scope.subcat = subcat.homecare();
				$scope.productcategory = "HOME CARE";
				$scope.subcategory = "";
				break;
		}
	};
	$scope.gotoproduct = function(cat,id){
		$scope.pricingdetail = false;
		$scope.shoppinglinks = false;
		$scope.promoitems = false;
		$scope.aislepage = false;
		$scope.promopage = false;
		$scope.productcat1 = false;
		$scope.productcat2 = false;
		$scope.whatsnewpage = false;
		$scope.productpage = false;
		$scope.productpageitem = true;
		$scope.productitem = {};
		var identity = id - 1;
		$scope.noitem = 0;
		$scope.productcategory = cat;
		switch (cat) {
			case "FRESH PRODUCE":
				$scope.productitem = grocery.freshproduce()[identity];
				$scope.subcategory = "FRUITS";
				break;
			case "MEAT & SEAFOOD":
				$scope.productitem = grocery.meatseafood()[identity];
				break;
			case "DAIRY & EGGS":
				$scope.productitem = grocery.dairyegg()[identity];
				break;
			case "BAKERY":
				$scope.productitem = grocery.bakery()[identity];
				break;
			case "BREAKFAST":
				$scope.productitem = grocery.breakfast()[identity];
				break;
			case "FROZEN GOODS":
				$scope.productitem = grocery.frozen()[identity];
				break;
			case "PANTRY":
				$scope.productitem = grocery.pantry()[identity];
				break;
			case "CANNED GOODS":
				$scope.productitem = grocery.canneditem()[identity];
				break;
			case "PASTA & DRIED GOODS":
				$scope.productitem = grocery.driedfood()[identity];
				break;
			case "BEVERAGE":
				$scope.productitem = grocery.beverage()[identity];
				break;
			case "HEALTH & BEAUTY":
				$scope.productitem = grocery.healthbeauty()[identity];
				break;
			case "HOME CARE":
				$scope.productitem = grocery.homecare()[identity];
				break;

		}
	};
	$scope.additem = function() {
		$scope.noitem+=1;
	}
	$scope.subtractitem = function() {
		$scope.noitem = ($scope.noitem > 0) ? $scope.noitem - 1: 0;
	}
	$scope.addtocart = function(item, amt, cat, id) {
		var newitem =  {};
		var newamt = amt * $scope.noitem;
		if (newamt > 0 && $scope.budget > ($scope.totalamt + newamt)) {
			newitem =  {
				"description": item,
				"amt": "P " + newamt.toString(),
				"cat": cat,
				"id": id,
				"itemid" : cat + "_" + id.toString(),
			}
			$scope.shoppingcart.push(newitem);
			$scope.totalamt+=newamt;
	    	$scope.rembudget = $scope.budget - $scope.totalamt;
		} else {
			alert("You don't have enough budget.");
		}
	}
	$scope.removeitem = function(itemid, amt) {
		$scope.totalamt-=parseInt(amt.substring(2));
		var newitems = $scope.shoppingcart.filter(function(el){
			return el.itemid !== itemid;
		});
		$scope.shoppingcart = newitems;

	}
})
.controller('headerCtrl', function($scope){
	var dayarr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var newDate = new Date();
	var daytoday = dayarr[newDate.getDay()];
	$scope.timenow = daytoday + ", " + newDate.getHours() + ":" + newDate.getMinutes();
})
.controller("controller", function($scope) {
	$scope.alertDeviceInfo = function() {
	  var deviceInfo = ('Device Platform: ' + device.platform + '\n'
	      + 'Device Version: ' + device.version + '\n' + 'Device Model: '
	       + device.model + '\n' + 'Device UUID: ' + device.uuid + '\n');
	  //navigator.notification.alert(deviceInfo);
	  alert('test');
	};

	$scope.alertGeoLocation = function() {
	  var onSuccess = function(position) {
	  alert('Latitude: ' + position.coords.latitude + '\n'
	       + 'Longitude: ' + position.coords.longitude + '\n'
	       + 'Altitude: ' + position.coords.altitude + '\n'
	       + 'Accuracy: ' + position.coords.accuracy + '\n'
	       + 'Altitude Accuracy: ' + position.coords.altitudeAccuracy
	       + '\n' + 'Heading: ' + position.coords.heading + '\n'
	       + 'Timestamp: ' + position.timestamp + '\n'); };
	  navigator.geolocation.getCurrentPosition(onSuccess);
	};

	$scope.beepNotify = function() {
	    navigator.notification.beep(1);
	};

	$scope.vibrateNotify = function() {
	    navigator.notification.vibrate(1000);
	};
});
