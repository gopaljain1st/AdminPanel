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

   const auth = firebase.auth();
 
   function signIn(){
     var role = document.getElementById("admin")
    //var email = document.getElementById("email");
    //var password = document.getElementById("password");

    const promise = auth.signInWithRole(admin.value);
    promise.catch(e => alert(e.message));
    
 document.querySelector('#signIn').addEventListener('click',()=>{
    window.location.href='Dashboard.html'
   
});
}
