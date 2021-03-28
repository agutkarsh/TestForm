'use strict';

//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputEmail = form.querySelector('#inputEmail');


//config your firebase push
const firebaseConfig = {
    apiKey: "AIzaSyCkraS_u1MgLZ5iPqd2Foer0jbH39J655E",
    authDomain: "form-53a64.firebaseapp.com",
    projectId: "form-53a64",
    storageBucket: "form-53a64.appspot.com",
    messagingSenderId: "711345285407",
    appId: "1:711345285407:web:bea1a3c8e3bbd78b25682a",
    measurementId: "G-LT3JEP50D8"
  };


//create a functions to push
    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }
