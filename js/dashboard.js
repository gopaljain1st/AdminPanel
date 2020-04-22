var uid;
firebase.auth().onAuthStateChanged(function (user)
{
   if(user)
   {
    uid=user.uid;
   }
});
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/Dashboard.html")
{
  var user = firebase.auth().currentUser;
  console.log(user);
  var admin=firebase.database().ref("mainAdmin");
  admin.on("value", function(snapshot)
  {
     var user = firebase.auth().currentUser;
     var value=snapshot.child(user.uid).child("adminName").val();
     document.getElementById("adminName").innerHTML=value;
     console.log(value);
  },
  function (errorObject) {
      window.alert("in error");
  });
}
function register()
{
  let name=document.getElementById('name').value;
  let email=document.getElementById('email').value;
  let password=document.getElementById('password').value;
  let role=document.getElementById('role').value;
  writeUserData(name,email,password,role);
}
function writeUserData(name,email,password,role)
{
  var adminemail,adminpassword;
  firebase.database().ref('mainAdmin/'+uid).on('value',function(snap) {
    var data=snap.val();
    adminemail=data.adminEmail;
    adminpassword=data.adminPassword;
  });
 firebase.auth().createUserWithEmailAndPassword(email,password).then(function(response)
{
      var user = firebase.auth().currentUser;
      firebase.database().ref('mainAdmin/'+user.uid).set({
       adminName: name,
       adminEmail: email,
       adminPassword: password,
       adminRole: role
   }, function(error) {
    if (error) {
      alert.log(error);
    } else {
      window.alert("Registeration Successfully");
      firebase.auth().signOut().then(function()
      {
      console.log('Signed Out');
      firebase.auth().signInWithEmailAndPassword(adminemail, adminpassword).then(function(response){
        window.location="file:///C:/Users/hp/Desktop/project1/mainproject/RoleManager.html";
      }).catch(function(error)
      {
        window.alert(error.code+" : "+error.message);
      });
    }, function(error) {
      console.error('Sign Out Error', error);
    });
    }
  })
}).catch(function(error){
  window.alert(error.code+" : "+error.message);
});
}
