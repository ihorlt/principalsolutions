var myApp = angular.module('myApp', ['ngResource', 'ui.router', 'ngAnimate']);

// configure ui routes
myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    	$urlRouterProvider.otherwise('/en');

    	$stateProvider

    	.state("lang", {
    		url: '/:language',
	        abstract: true,
			resolve: {language: ['$stateParams',function($stateParams){return $stateParams['language'];}]},
			views: {
				'home-header': {
					template: '<div ui-view="home-header"></div>',
				},
                'home-breadcrumb': {
                    template: '<div ui-view="home-breadcrumb"></div>',
                },
                'home-front-top': {
                    template: '<div ui-view="home-front-top"></div>',
                },
                'home-front': {
                    template: '<div ui-view="home-front"></div>',
                },
                'home-front-bottom': {
                    template: '<div ui-view="home-front-bottom"></div>',
                },
				'home-footer': {
					template: '<div ui-view="home-footer"></div>',
				}
			},
			controller: function($scope, $stateParams){
			      console.log($scope.language); 
		    }
    	})

    	.state("lang.index", {
    		url: '',
    		// templateUrl: 'header_footer/en/header.html'
    		views: {
    			'home-header@lang': {
    				templateUrl: function($stateParams){
    					return  'header_footer/' + $stateParams.language + '/header.html';
    				}
    			},
    			'home-front@lang': {
    				template: '<div ps-one-block-document-manager id="docmanagerBlock1" block-three-col-number="blockNumber4"></div>'   
    			             + '<div ps-document-managmentblock-two></div>'
                             + '<div ps-document-managmentblock-three></div>'
                             + '<div ps-send-contacts></div>'
                },
    			'home-footer@lang': {
    				templateUrl: function($stateParams){
    					return  'header_footer/' + $stateParams.language + '/footer.html';
    				}
    			},
                'home-breadcrumb@lang': { template: '<div ps-photo-top-page id="BreadcrumImgBlock9" block-number="1"></div>'},
                'home-front-bottom@lang': { template: ''},
                'home-front-top@lang': { template: ''}
    		}
    	})

    	.state("lang.index.manufacturing", {
    		url: '/manufacturing',
    		views: {
                'home-breadcrumb@lang': { template: '<div ps-photo-top-page id="BreadcrumImgBlock3" block-number="2"></div>'},
    			'home-front-bottom@lang': { template: ''},
    			'home-front-top@lang': { template: ''},
			    'home-front@lang': {
			    	templateUrl: function($stateParams){
    					return  'partials/index.manufacturing.html';
    				},
    				controller: function($scope, $stateParams, GetJsonFile){
    					GetJsonFile('json_data/manufacturing.json').get(function(data) {
	    					$scope.items = ($stateParams.language == "ua") ? data.ua : data.en;
    					});
    				},
			    },
    		}
    	})

    	.state("lang.index.education", {
    		url: '/education',
    		views: {
                'home-breadcrumb@lang': { template: '<div ps-photo-top-page id="BreadcrumImgBlock2" block-number="1"></div>'},
    			'home-front-bottom@lang': { template: ''},
    			'home-front-top': { template: ''},
			    'home-front@lang': {
			    	templateUrl: function($stateParams){
    					return  'partials/index.education.html';
    				},
    				controller: function($scope, $stateParams, GetJsonFile){
    					GetJsonFile('json_data/education.json').get(function(data) {
	    					$scope.items = ($stateParams.language == "ua") ? data.ua : data.en;
    					});
    				},
			    },
    		}
    	})

    	.state("lang.index.transportation", {	
    		url: '/transportation',
    		views: {
                'home-breadcrumb@lang': { template: '<div ps-photo-top-page id="BreadcrumImgBlock4" block-number="2"></div>'},
    			'home-front-bottom@lang': { template: ''},
    			'home-front-top': { template: ''},
			    'home-front@lang': {
			    	templateUrl: function($stateParams){
    					return  'partials/index.transportation.html';
    				},
    				controller: function($scope, $stateParams, GetJsonFile){
    					GetJsonFile('json_data/transportation.json').get(function(data) {
	    					$scope.items = ($stateParams.language == "ua") ? data.ua : data.en;
    					});
    				},
			    },
    		}
    	})

        .state("lang.index.about", {   
            url: '/about',
            views: {
                'home-breadcrumb@lang': { template: '<div ps-photo-top-page id="BreadcrumImgBlock5" block-number="2"></div>'},
                'home-front-top@lang': { template: '<div ps-about-company-one></div>'},
                'home-front-bottom@lang': { template: ''},
                'home-front@lang': { template: '<div ps-send-contacts></div>' },
            }
        })

        .state("lang.index.technologies_mobile", {   
            url: '/technologies_mobile',
            views: {
                'home-breadcrumb@lang': { template: '<div ps-photo-top-page id="BreadcrumImgBlock6" block-number="2"></div>'},
                'home-front-bottom@lang': { template: ''},
                'home-front-top@lang': { template: ''},
                'home-front@lang': { template: ''},
            }
        })

        .state("lang.index.website_design", {   
            url: '/website_design',
            views: {
                'home-breadcrumb@lang': { template: '<div ps-photo-top-page id="BreadcrumImgBlock7" block-number="2"></div>'},
                'home-front-bottom@lang': { template: ''},
                'home-front-top@lang': { template: '<div ps-techtwo></div>'},
                'home-front@lang': {template: '' },
            }
        })

        .state("lang.index.languages_frameworks", {   
            url: '/languages_frameworks',
            views: {
                'home-breadcrumb@lang': { template: '<div ps-photo-top-page id="BreadcrumImgBlock8" block-number="2"></div>'},
                'home-front-bottom@lang': { template: ''},
                'home-front-top@lang': { template: ''},
                'home-front@lang': { template: '<div ps-photo-techone></div>'},
            }
        })

    	.state("lang.index.document_management", {
    		url: '/document_management',
    		views: {
                'home-breadcrumb@lang': { template: '<div ps-photo-top-page id="BreadcrumImgBlock1" block-number="1"></div>'},
    			'home-front-top@lang': { template: '<div ps-one-block-document-manager id="docmanagerBlock2" block-three-col-number="blockNumber1"></div>'
                 + '<div ps-document-managmentblock-two></div>'},
                'home-front-bottom@lang': { template: ''},
			    'home-front@lang': { template: '<div ps-document-managmentblock-three></div>' },
    		}
    	});

    }]);

myApp.run(['$state', '$stateParams', function($state, $stateParams) {
	$state.go('lang.index', {language: 'en'});
}]);

//---------------------------------------------------------------------------------

myApp.factory('GetJsonFile', ['$resource', function($resource) {
  return function(url_string) {return $resource(url_string);}
}]);

//---------------------------------------------------------------------------------

// There are 5 different blocks
myApp.directive('psOneBlockDocumentManager', ['$stateParams', 'GetJsonFile', function($stateParams, GetJsonFile) {
	return {
		replace: true,
		restrict: 'A',
		scope: {
			blockThreeColNumber: "@"
		},
		templateUrl: 'partials/blocks/psOneBlockDocumentManager.html',
		link: function($scope, $element, $attrs, $controllers) {
			GetJsonFile('json_data/psOneBlockDocumentManager.json').get(function(data) {
				$scope.items = ($stateParams.language == "ua") ? data[$attrs.id]['ua'] : data[$attrs.id]['en'];
				$scope.itemclass = data[$attrs.id]['class'];
			});
		}
	}
}]);


// blockNumber can be 1, 2
myApp.directive('psPhotoTopPage', ['$stateParams', 'GetJsonFile', function($stateParams, GetJsonFile) {
	return {
		replace: true,
		restrict: 'A',
		scope: {
			blockNumber: "@"
		},
		templateUrl: 'partials/blocks/psPhotoTopPage.html',
		link: function($scope, $element, $attrs, $controllers) {
			GetJsonFile('json_data/psPhotoTopPage.json').get(function(data) {
				$scope.items = ($stateParams.language == "ua") ? data[$attrs.id]['ua'] : data[$attrs.id]['en'];
                $scope.items.imgpath = data[$attrs.id]['imgpath'];
			});
		}
	}
}]);


myApp.directive('psDocumentManagmentblockTwo', ['$stateParams',  function($stateParams) {
    return { replace: true,  restrict: 'A',  scope: { },
        templateUrl: 'partials/blocks/psDocumentManagmentBlock1.html',
        link: function($scope, $element, $attrs, $controllers) {
                $scope.lang = { val: $stateParams.language }
    }}
}]);

myApp.directive('psDocumentManagmentblockThree', ['$stateParams',  function($stateParams) {
    return { replace: true,  restrict: 'A',  scope: { },
        templateUrl: 'partials/blocks/psDocumentManagmentblockThree.html',
        link: function($scope, $element, $attrs, $controllers) {
                $scope.lang = { val: $stateParams.language }
    }}
}]);

myApp.directive('psAboutCompanyOne', ['$stateParams',  function($stateParams) {
    return { replace: true,  restrict: 'A',  scope: { },
        templateUrl: 'partials/blocks/psAboutCompanyOne.html',
        link: function($scope, $element, $attrs, $controllers) {
                $scope.lang = { val: $stateParams.language }
    }}
}]);

myApp.directive('psSendContacts', ['$stateParams', function($stateParams) {
    return { replace: true,  restrict: 'A',  scope: { }, 
        templateUrl: 'partials/blocks/psSendContacts.html',
        link: function($scope, $element, $attrs, $controllers) {
            $scope.hassend = false;

            $scope.lang = { val: $stateParams.language };

            $scope.submit = function(contact) {
                $scope.hassend = true;
            }

            $scope.reset = function(contact) {
                $scope.hassend = false;
                contact = {};
            }
    }}
}]);


myApp.directive('psPhotoTechone', ['$stateParams',  function($stateParams) {
    return { replace: true,  restrict: 'A',  scope: { },
        templateUrl: 'partials/blocks/psPhotoTechone.html',
        link: function($scope, $element, $attrs, $controllers) {
                $scope.lang = { val: $stateParams.language }
    }}
}]);


myApp.directive('psTechtwo', ['$stateParams',  function($stateParams) {
    return { replace: true,  restrict: 'A',  scope: { },
        templateUrl: 'partials/blocks/psTechtwo.html',
        link: function($scope, $element, $attrs, $controllers) {
                $scope.lang = { val: $stateParams.language }
    }}
}]);
