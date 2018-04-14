var app = angular.module('valpeiperiai',[]);
app.controller('top',['$scope','mode',function ($scope,mode) {
	$scope.mode = mode;
}]);
app.controller('gallery',['$scope','mode',function ($scope,mode) {
	$scope.wallpapers = [
		{"name":"tuscio", "description":"Gyvenimo cikliškumui pabrėžti.", "sizes":["huge", "facebook"]},
		{"name":"stroshna", "description":"Naujas katalogas jau parduotuvėse.", "sizes":["huge", "facebook"]},
		{"name":"davai", "description":"Nu please nu.", "sizes":["huge", "facebook"]},
		{"name":"velnias","description":"Velnias slypi detalėse. Ir dėvi Pradą.", "sizes": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]},
		{"name":"biedni","description":"Teisybė yra vertybė. Parodyk tai visiems šiuo valpeiperiu. Įkvėptas stalo žaidimų ir merfio dėsnių.", "sizes": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]},
		{"name":"durdomas","description":"Pripažinimas yra pirmas žingsnis. Levandų spalva drioksteli subtilia prabanga.", "sizes": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]},
		{"name":"kontora","description":"Prasti popieriai? Netvarka? Viskas vyksta ne pagal planą?", "sizes": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]},
		{"name":"laivas","description":"Skandalinga frazė - skandalingam gyvenimui.", "sizes": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]},
		{"name":"paslauga","description":"Meškų paslaugos dažnai lieka neįvertintos.", "sizes": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]}
	];
	$scope.resolutions = [
		{"name":"1024 x 768","number":"01"},
		{"name":"1280 x 960","number":"02"},
		{"name":"1280 x 1024","number":"03"},
		{"name":"1600 x 1200","number":"04"},
		{"name":"1280 x 720","number":"05"},
		{"name":"1280 x 800","number":"06"},
		{"name":"1440 x 900","number":"07"},
		{"name":"1680 x 1050","number":"08"},
		{"name":"1920 x 1080","number":"09"},
		{"name":"1920 x 1200","number":"10"},
		{"name":"Iš didelio neiškris","number":"huge"},
		{"name":"FB Cover", "number":"facebook"}
	];

	function getResolution(number) {
		for (var i = 0; i < $scope.resolutions.length; i++) {
			if ($scope.resolutions[i].number == number) {
				return $scope.resolutions[i];
			}
		}
	};

	$scope.getResolutionName = function(number) {
		return getResolution(number).name;
	}

	$scope.mode = mode;
}]);
app.service('mode',[function() {
	this.isCheap = true;
}]);
