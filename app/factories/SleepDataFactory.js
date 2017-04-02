"use strict";
app.factory('SleepDataFactory', function ($q, $http, FBCreds) {




let getSleepData = () => {
  let sleepData = [];
return $q((resolve, reject) => {


 $http.get(`${FBCreds.databaseURL}/SleepData.json`)
    .then((SleepDataList) => {


    var itemCollection = SleepDataList.data;

          Object.keys(itemCollection).forEach(function(key){
            itemCollection[key].id=key;
            sleepData.push(itemCollection[key]);
            // sleepObjects.push(itemCollection[key]);

            // console.log("$scope.sleepData", $scope.sleepData);

console.log(sleepData);
      resolve(sleepData);

          });



});
});
};



let getOneSleepData = function (sleepObjectId) {
  return $q( (resolve, reject) => {
    $http.get(`${FBCreds.databaseURL}/SleepData/${sleepObjectId}.json`)
    .then((SleepData) => {
      resolve(SleepData);
    });

    /* body... */
  });


  /* body... */
};



let postSleepData = function(sleepObject) {
    return $q((resolve, reject) => {
$http.post(`${FBCreds.databaseURL}/SleepData.json`, angular.toJson(sleepObject))

  .then((SleepDataList) => {

    resolve(SleepDataList);

  })

  .catch((error) => {
    reject(error);
  });
});
};


  let updateSleepData = function(id, sleepObject){


    console.log("Thus follows the sleepObject:", sleepObject);
    return $q((resolve, reject) => {
$http.patch(`${FBCreds.databaseURL}/SleepData/${id}.json`, angular.toJson(sleepObject))

  .then((SleepDataList) => {

    resolve(SleepDataList);

  })


  .catch((error) => {
    reject(error);

  });
    });
  };




let deleteSleepData = function (sleepObjectId) {
  return $q( (resolve, reject) => {
    $http.delete(`${FBCreds.databaseURL}/SleepData/${sleepObjectId}.json`)
    .then((SleepData) => {
      resolve(SleepData);


    })
    .catch((error) => {
      reject(error);
    });
  });


  /* body... */
};



return {getSleepData, getOneSleepData, postSleepData, updateSleepData, deleteSleepData};
});
