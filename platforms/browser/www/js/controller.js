myApp
.controller("splashpageCtrl", function($scope, $timeout, promoitems) {
	$scope.welcomepage = true;
	$scope.detailpage = false;
	$timeout(function(){
    	$scope.welcomepage = false;
    	$scope.detailpage = true;
    },2500)

    var ctrl = this;
	$scope.error = false;
	$scope.pricingdetail = true;
	$scope.shoppinglinks = false;
	$scope.promoitems = false;
	$scope.proceednow = function() {
		if ($.isNumeric(ctrl.txtAmt)) {
			$scope.error = false;
			$scope.pricingdetail = false;
			$scope.shoppinglinks = true;
			$scope.windowheight = ($(window).height() - 50).toString() + "px";
		} else {
			$scope.error = true;
		}
	}
	$scope.goto = function(link) {
		var $url = 'shoppinglinks';
		$scope.shoppinglinks = false;
		switch(link) {
			case 0:
				$scope.pricingdetail = false;
				$scope.shoppinglinks = true;
				$scope.promoitems = false;
			case 2:
				$url = 'aisle';
				break;
			case 4:
				$scope.promoitems = true;
				$url = 'promoitems';
				$scope.detailheight = (($(window).height() - 50) - 100 - 100).toString() + "px";
				$scope.aisleitems = promoitems;
				break;
		}
	}
		
	//alert($globalbudget);
})
.controller('headerCtrl', function($scope){
	var dayarr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
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
