// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  var VocabModalInstanceCtrl;

  VocabModalInstanceCtrl = function($scope, $modalInstance, title, items) {
    $scope.title = title;
    $scope.items = items;
    return $scope.select = function(vocab) {
      return $modalInstance.close(vocab);
    };
  };

  angular.module('app').controller('VocabCtrl', function($scope, $modal, Vocab) {
    $scope.vocabs = Vocab.vocabs;
    $scope.addVocab = function(vocab) {
      var v;
      if (vocab && vocab.uri && ((function() {
        var _i, _len, _ref, _results;
        _ref = $scope.vocabs;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          v = _ref[_i];
          if (v.uri === vocab.uri) {
            _results.push(v);
          }
        }
        return _results;
      })()).length === 0) {
        return $scope.vocabs.push(vocab);
      }
    };
    $scope.removeVocab = function(vocab) {
      return $scope.vocabs.pop(vocab);
    };
    return $scope.searchVocab = function() {
      var modalInstance;
      modalInstance = $modal.open({
        templateUrl: '/static/r2r/partials/search_vocab.html',
        controller: VocabModalInstanceCtrl,
        resolve: {
          title: function() {
            return 'Select suitable vocabularies';
          }
        }
      });
      return modalInstance.result.then(function(selected) {
        return $scope.addVocab(selected);
      });
    };
  });

}).call(this);