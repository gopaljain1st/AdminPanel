$(document).ready(function() {
    $('.nav-trigger').click(function() {
        $('.side-nav').toggleClass('visible');
    });
});

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBHGtDP8iCakWd-q3QkpwLc831I4w0M5oI",
  authDomain: "employeetesting-f03f6.firebaseapp.com",
  databaseURL: "https://employeetesting-f03f6.firebaseio.com",
  projectId: "employeetesting-f03f6",
  storageBucket: "employeetesting-f03f6.appspot.com",
  messagingSenderId: "329996548861",
  appId: "1:329996548861:web:4cbcdddf77d6d75a5f1c94"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var con = firebase.database().ref('Admin');
  document.getElementById("form").addEventListener("submit",(e)=>{
     e.preventDefault();

           var userInfo = con.push();

        userInfo.set({
           name : getId("name"),
           email: getId("email"),
           userName:getId("userName"),
           password:getId("password"),
           role:getId("role")
        });
        alert("Registration Successfull");
        console.log("Registration Successfull");
        document.getElementById("form").reset();
    });

    function getId(id){
        return document.getElementById(id).value;
    }
