"use strict";

var app = angular.module("SleepDataTracker", ["ngRoute", "720kb.datepicker"]);

app.config( function($routeProvider) {
  $routeProvider

  // START AT THE LANDING PAGE
  .when('/', {
    templateUrl: './partials/landingPage.html',
    controller: 'LandingPagesCtrl'
  })

  .when('/eveningDiary', {
    templateUrl: './partials/eveningDiary.html',
    controller: 'EveningDiaryCtrl'
  })

  .when('/morningDiary', {
    templateUrl: './partials/morningDiary.html',
    controller: 'MorningDiaryCtrl'
  })


  .when('/getData', {
    templateUrl: './partials/sleepData.html',
    controller: 'retrieveDataCtrl'
  })

  .when('/login', {
    templateUrl: './partials/login.html',
    controller: 'UserCtrl'
  })

  .when('/sleepDataItem/morning/:sleepDataItem/edit', {
    templateUrl: './partials/morningDiary.html',
    controller: 'editMorningCtrl'
  })

  .when('/landingPage', {
    templateUrl: './partials/landingPage.html',
    controller: 'LandingPagesCtrl'
  })

  .when('/sleepDataItem/evening/:sleepDataItem/edit', {
    templateUrl: './partials/eveningDiary.html',
    controller: 'editEveningCtrl'
  })
  .otherwise({ redirectTo: '/' });
});





/************************************************************
DO STUFF WHEN IT LOADS; INITIALIZE FIREBASE WITH CREDENTIALS
*************************************************************/

app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
});
