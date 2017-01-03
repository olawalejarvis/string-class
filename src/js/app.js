"use strict";
angular.module('stringApp',[])
  .controller('stringController', ['$scope', ($scope) => {
     
    $scope.options = [
      { id: 0, label: 'hasVowels'},
      { id: 1, label: 'toUpper'},
      { id: 2, label: 'toLower'},
      { id: 3, label: 'ucFirst'},
      { id: 4, label: 'isQuestion'},
      { id: 5, label: 'words'},
      { id: 6, label: 'wordCount'},
      { id: 7, label: 'inverseCase'},
      { id: 8, label: 'alternatingCase'},
      { id: 9, label: 'getMiddle'},
      { id: 10, label: 'numberWords'},
      { id: 11, label: 'isDigit' },
      { id: 12, label: 'doubleCheck' },
      { id: 13, label: 'toCurrency' },
      { id: 14, label: 'fromCurrency' }
    ];

    $scope.showResult = (stringQuery, selectedMethod) => {
      if (selectedMethod === undefined) {
        $scope.result = 'Select a Method';
      } 
      else if (stringQuery === undefined) {
        $scope.result = 'Type in string';
      } 
      else {
        $scope.result = $scope.applyMethod(selectedMethod.id, stringQuery);
      }
    };

    $scope.applyMethod = (methodID, query) => {
      switch(methodID){
        case 0:
          return query.hasVowels();
        case 1:
          return query.toUpper();
        case 2:
          return query.toLower();
        case 3:
          return query.ucFirst();
        case 4:
          return query.isQuestion();
        case 5:
          return query.words();
        case 6:
          return query.wordCount();
        case 7:
          return query.inverseCase();
        case 8:
          return query.alternatingCase();
        case 9:
          return query.getMiddle();
        case 10:
          return query.numberWords();
        case 11:
          return query.isDigit();
        case 12:
          return query.doubleCheck();
        case 13:
          return query.toCurrency();
        case 14:
          return query.fromCurrency();
        case 'undefined': 
          return 'Select a Method';
      }
    };	
  }]);