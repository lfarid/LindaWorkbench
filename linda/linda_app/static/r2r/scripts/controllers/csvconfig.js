(function() {
  'use strict';
  angular.module('app').controller('CsvConfigCtrl', function($scope, Csv) {
    $scope.csv = Csv;
    $scope.file = '';
    $scope.progress = {
      value: 0,
      submitting: false
    };
    $scope.success = false;
    $scope.submitted = false;
    $scope.onFileSelect = function($files) {
      return $scope.file = $files[0];
    };
    return $scope.submit = function() {
      return $scope.csv.submitCsvFile($scope.file, $scope.progress).success(function() {
        $scope.submitted = true;
        $scope.success = true;
        $scope.progress.submitting = false;
        return $scope.csv.csvFile = $scope.file;
      }).error(function() {
        $scope.submitted = true;
        $scope.success = false;
        return $scope.progress.submitting = false;
      });
    };
  });

}).call(this);

//# sourceMappingURL=csvconfig.js.map
