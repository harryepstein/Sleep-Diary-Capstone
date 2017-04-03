"use strict";
app.controller('retrieveDataCtrl', function(SleepDataFactory, $scope, $location) {


    // var getRandomBackgroundColor = function () {

    //         return {
    //             "background-color: '#' + Math.floor(Math.random()*16777215).toString(16)"
    //         }
    //     };
    console.log("scope.filteredData:", $scope.filteredData);

    $scope.searchText;


    SleepDataFactory.getSleepData()
        .then((sleepDataArrayObjects) => {

            $scope.sleepData = sleepDataArrayObjects;
            console.log("$scope.sleepData", $scope.sleepData);
        });


    $scope.deleteSleepData = function(SleepDataId) {
        SleepDataFactory.deleteSleepData(SleepDataId)
            .then((response) => {
                SleepDataFactory.getSleepData()
                    .then((sleepDataArrayObjects) => {

                        $scope.sleepData = sleepDataArrayObjects;
                        $location.url("/getData");
                    });

                //it returns a promise
                // .then((sleepData) => {
                //  console.log("This is after delete sleepData:", sleepData);
            });
        // });
    };
    /* body... */

});
