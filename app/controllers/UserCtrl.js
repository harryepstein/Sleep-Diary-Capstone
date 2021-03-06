"use strict";

app.controller("UserCtrl", function($scope, $window, AuthFactory, $location) {

    //run these when controller loads
    $scope.account = {
        email: "",
        password: ""
    };

    let logout = () => {
        console.log("logout clicked");
        AuthFactory.logoutUser()
            .then(function(data) {
                console.log("logged out?", data);
                $window.location.url = "#/login";

                $scope.isLoggedIn = false;

            }, function(error) {
                console.log("error occured on logout");
            });
    };

    //when first loaded, make sure no one is logged in
    if (AuthFactory.isAuthenticated()) {
        logout();
    }


    //setup functions to be available to the app for register, login email/password, and google
    $scope.register = () => {
        console.log("you clicked register");
        AuthFactory.createUser({
                email: $scope.account.email,
                password: $scope.account.password
            }) //after the promise is fulfuiled,
            .then((userData) => {
                console.log("UserCtrl newUser:", userData);
                $scope.isLoggedIn = true;
                $scope.login();

                // hide the login after registration, as registration counts as a login


            }, (error) => {
                console.log("Error creating user:", error);
            });
    };

    $scope.login = () => {
        console.log("you clicked login");
        AuthFactory
            .loginUser($scope.account)
            .then(() => {

                $scope.isLoggedIn = true;

                console.log("UserCtrl: user is loggedIn");

                $scope.$apply();

                $window.location.href = "#!/landingPage";
            });
    };

    $scope.loginGoogle = () => {
        console.log("you clicked login with Google");
        AuthFactory.authWithProvider()
            .then(function(result) {
                $scope.isLoggedIn = true;
                var user = result.user.uid;
                console.log("logged in user:", user);


                //Once logged in, go to another view

                $location.path("landingPage");

                $scope.$apply();

            }).catch(function(error) {
                // Handle the Errors.
                console.log("error with google login", error);
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    };

});
