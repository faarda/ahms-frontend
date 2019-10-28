import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        firebase: null,
        user: null,
        next: null
    },
    mutations:{
        SET_USER_DATA: (state, user) => {
            state.user = {
                name: user.displayName,
                email: user.email 
            }
        }
    },
    getters:{
        isLoggedIn: (state) => {
            return state.user !== null;
        }
    },
    actions:{
        createUser: (context, payload) => {
            let firebase = context.state.firebase;

            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(data => {
                let isNewUser = data.additionalUserInfo.isNewUser;
                let user = data.user;
                if(isNewUser){
                    user.updateProfile({
                        displayName: payload.name
                    }).then(function (data) {
                        context.state.user.name = payload.name;
                        console.log("new data", data);
                        // Update successful.
                    }, function (error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;

                        alert(errorMessage);
                        // An error happened.
                    });
                }
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                alert(errorMessage);
            });
        },
        loginUser: (context, payload) => {
            let firebase = context.state.firebase;

            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...

                alert(errorMessage);
            });
        }
    }
});