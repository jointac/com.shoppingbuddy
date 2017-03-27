myApp
.controller("splashpageCtrl", function($scope, $timeout, promoitems, newitem, aisle, grocery, productcat) {
	$scope.welcomepage = true;
	$scope.detailpage = false;
	$timeout(function(){
    	$scope.welcomepage = false;
    	$scope.detailpage = true;
    },2500)

    var ctrl = this;
    var budget = 0;
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
	$scope.productpagedetail = false;
	$scope.aisleitems = aisle;
	$scope.shoppingcart = [];
	$scope.productcategory = '';
	$scope.subcategory ='';

	//productcat1
	$scope.windowheight = "100vh";
	$scope.proceednow = function() {
		if ($.isNumeric(ctrl.txtAmt)) {
			budget = ctrl.txtAmt;
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
		$scope.productpagedetail = false;
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
		$scope.productpagedetail = false;
		$scope.productpage = true;
		switch (link) {
			case "1":
				$scope.groceryitem = grocery.freshproduce();
				$scope.productcategory = "FRESH PRODUCE";
				$scope.subcategory = "FRUITS";
				alert($scope.groceryitem[0].description);
				break;
			case "2":
				$scope.groceryitem = grocery.meatseafood();
				$scope.productcategory = "MEAT & SEAFOOD";
				alert($scope.groceryitem[0].description);
				break;
			case "3":
				$scope.groceryitem = grocery.dairyegg();
				$scope.productcategory = "DAIRY & EGGS";
				alert($scope.groceryitem[0].description);
				break;
			case "4":
				$scope.groceryitem = grocery.bakery();
				$scope.productcategory = "BAKERY";
				alert($scope.groceryitem[0].description);
				break;
			case "5":
				$scope.groceryitem = grocery.breakfast();
				$scope.productcategory = "BREAKFAST";
				alert($scope.groceryitem[0].description);
				break;
			case "6":
				$scope.groceryitem = grocery.frozen();
				$scope.productcategory = "FROZEN GOODS";
				alert($scope.groceryitem[0].description);
				break;
			case "7":
				$scope.groceryitem = grocery.pantry();
				$scope.productcategory = "PANTRY";
				alert($scope.groceryitem[0].description);
				break;
			case "8":
				$scope.groceryitem = grocery.canneditem();
				$scope.productcategory = "CANNED GOODS";
				alert($scope.groceryitem[0].description);
				break;
			case "9":
				$scope.groceryitem = grocery.driedfood();
				$scope.productcategory = "PASTA & DRIED GOODS";
				alert($scope.groceryitem[0].description);
				break;
			case "10":
				$scope.groceryitem = grocery.beverage();
				$scope.productcategory = "BEVERAGE";
				$scope.subcategory = "JUICES & HEALTH DRINKS";
				alert($scope.groceryitem[0].description);
				break;
			case "11":
				$scope.groceryitem = grocery.healthbeauty();
				$scope.productcategory = "HEALTH & BEAUTY";
				alert($scope.groceryitem[0].description);
				break;
			case "12":
				$scope.groceryitem = grocery.homecare();
				$scope.productcategory = "HOME CARE";
				alert($scope.groceryitem[0].description);
				break;
		}
	};
	$scope.gotoproduct = function(cat,id){
		$scope.productitem = {};
		var identity = id - 1;
		switch (cat) {
			case "FRESH PRODUCE":
				$scope.productitem = grocery.freshproduce()[identity];
				alert($scope.productitem.description);
				break;
		}
	};
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
