"use strict";
app.controller('retrieveDataCtrl',  function( SleepDataFactory, $scope){

  $scope.searchText;


SleepDataFactory.getSleepData()
.then((sleepDataArrayObjects) => {

  $scope.sleepData = sleepDataArrayObjects;
  console.log("$scope.sleepData", $scope.sleepData);
});


  $scope.deleteSleepData = function( SleepDataId){
    SleepDataFactory.deleteSleepData(SleepDataId)
    .then((response) => {
        SleepDataFactory.getSleepData()
        .then((sleepDataArrayObjects) => {

            $scope.sleepData = sleepDataArrayObjects;

});
  //it returns a promise
      // .then((sleepData) => {
      //  console.log("This is after delete sleepData:", sleepData);
      });
    // });
  };
  /* body... */

});
