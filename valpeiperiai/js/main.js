var app = angular.module('valpeiperiai',[]);
app.controller('top',['$scope','mode',function ($scope,mode) {
	$scope.mode = mode;
}]);
app.controller('gallery',['$scope','mode',function ($scope,mode) {
	$scope.wallpapers = [
		{"name":"talent","description":"You really can't make up for a lack of talent with effort. ¯\\_(ツ)_/¯"},
		{"name":"velnias","description":"Velnias slypi detalėse. Ir dėvi Pradą."},
		{"name":"biedni","description":"Teisybė yra vertybė. Parodyk tai visiems šiuo valpeiperiu. Įkvėptas stalo žaidimų ir merfio dėsnių."},
		{"name":"durdomas","description":"Pripažinimas yra pirmas žingsnis. Levandų spalva drioksteli subtilia prabanga."},
		{"name":"kontora","description":"Prasti popieriai? Netvarka? Viskas vyksta ne pagal planą?"},
		{"name":"laivas","description":"Skandalinga frazė - skandalingam gyvenimui."},
		{"name":"paslauga","description":"Meškų paslaugos dažnai lieka neįvertintos."}
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
		{"name":"1920 x 1200","number":"10"}
	];
	$scope.mode = mode;
}]);
app.service('mode',[function() {
	this.isCheap = true;
}]);