myApp
.controller("splashpageCtrl", function($scope, $timeout, promoitems, newitem, aisle, grocery) {
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
	$scope.aisleitems = aisle;
	$scope.shoppingcart = [];
	//productcat1
	$scope.windowheight = ($(window).height() - 50).toString() + "px";
	$scope.proceednow = function() {
		if ($.isNumeric(ctrl.txtAmt)) {
			budget = ctrl.txtAmt;
			$scope.error = false;
			$scope.pricingdetail = false;
			$scope.productcat1 = true;
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
		$scope.whatsnewpage = false;
		switch(link) {
			case 0:
				$scope.pricingdetail = false;
				$scope.shoppinglinks = true;
				$scope.promoitems = false;
				$scope.aislepage = false;
				$scope.promopage = false;
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
		}
	}
	$scope.gotocat = function(link) {
		switch (link) {
			case "1":
				$scope.groceryitem = grocery.freshproduce();
				alert($scope.groceryitem[0].description);
				break;
			case "2":
				$scope.groceryitem = grocery.meatseafood();
				alert($scope.groceryitem[0].description);
				break;
			case "3":
				$scope.groceryitem = grocery.dairyegg();
				alert($scope.groceryitem[0].description);
				break;
			case "4":
				$scope.groceryitem = grocery.bakery();
				alert($scope.groceryitem[0].description);
				break;
			case "5":
				$scope.groceryitem = grocery.breakfast();
				alert($scope.groceryitem[0].description);
				break;
			case "6":
				$scope.groceryitem = grocery.frozen();
				alert($scope.groceryitem[0].description);
				break;
			case "7":
				$scope.groceryitem = grocery.pantry();
				alert($scope.groceryitem[0].description);
				break;
			case "8":
				$scope.groceryitem = grocery.canneditem();
				alert($scope.groceryitem[0].description);
				break;
			case "9":
				$scope.groceryitem = grocery.driedfood();
				alert($scope.groceryitem[0].description);
				break;
			case "10":
				$scope.groceryitem = grocery.beverage();
				alert($scope.groceryitem[0].description);
				break;
		}
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
