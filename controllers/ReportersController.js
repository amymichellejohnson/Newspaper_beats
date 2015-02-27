newspaper.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, UtilitiesFactory, BeatsFactory) {
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.BeatsFactory = BeatsFactory
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({name: $scope.reporterName, employmentYears: $scope.employmentYears, dOB: $scope.dOB });
    $scope.reporterName = null;
    $scope.employmentYears = null;
    $scope.dOB = null;
  }
});
