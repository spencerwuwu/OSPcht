// Define a new module for our app. The array holds the names of dependencies if any.
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			url: 'subpage/astronomy.html',
			title: '天文'
		},
		{
			url: 'subpage/classical_mechanics.html',
			title: '古典力學'
		},
		{
			url: 'subpage/education.html',
			title: '教育'
		},
		{
			url: 'subpage/electricity_magnetism.html',
			title: '電磁學'
		},
		{
			url: 'subpage/fluid_mech.html',
			title: '流體力學'
		},
		{
			url: 'subpage/general_physics.html',
			title: '普通物理'
		},
		{
			url: 'subpage/math_tools.html',
			title: '數學'
		},
		{
			url: 'subpage/modern_physics.html',
			title: '近代物理'
		},
		{
			url: 'subpage/optics.html',
			title: '光學'
		},
		{
			url: 'subpage/oscillations_and_waves.html',
			title: '振盪與波動'
		},
		{
			url: 'subpage/quantum_physics.html',
			title: '量子物理'
		},
		{
			url: 'subpage/relativity.html',
			title: '相對論'
		},
		{
			url: 'subpage/thermo_and_stat_mech.html',
			title: '熱力學與統計力學'
		},
		{
			url: 'subpage/other_sciences.html',
			title: '其他科學'
		},
	];

}