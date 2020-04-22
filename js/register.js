  firebase.initializeApp(firebaseConfig);
  const auth = firebase.database();
  function signUp()
  {
      window.alert("In Function");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var role = document.getElementById("role")

    auth.ref('admin/'+email.value).set({
        password : password.value,
        role: role.value
    });    
}
 