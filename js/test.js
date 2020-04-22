if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/AdminPortal.html"
|| window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/Dashboard.html")
{
  var user = firebase.auth().currentUser;
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
function login()
{
   let email=document.getElementById('email').value;
   let password=document.getElementById('password').value;
firebase.auth().signInWithEmailAndPassword(email, password).then(function(response)
{
  var user = firebase.auth().currentUser;
  var admin=firebase.database().ref("mainAdmin");
  admin.on("value", function(snapshot)
  {
     var role=snapshot.child(user.uid).child("adminRole").val();
     window.alert("Login Successfull");
     switch (role)
     {
       case "Admin" : window.location="file:///C:/Users/hp/Desktop/project1/mainproject/AdminPortal.html";
                      break;
       case "Employer Manager" : window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployerManager.html";
                                 break;
       case "Employee Manager" : window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeManager.html";
                                 break;
       case "Job Manager" : window.location="file:///C:/Users/hp/Desktop/project1/mainproject/JobManager.html";
                            break;
       case "Reports Manager" : window.location="file:///C:/Users/hp/Desktop/project1/mainproject/ReportManager.html";
                                break;
       case "Payout Manager" : window.location="file:///C:/Users/hp/Desktop/project1/mainproject/PayoutManager.html";
                               break;
       case "Role Manager" :   window.location="file:///C:/Users/hp/Desktop/project1/mainproject/RoleManager.html";
                                                       break;
     }
  },
  function (errorObject) {
      window.alert("in error");
  });
   }).catch(function(error)
   {
     window.alert(error.code+" : "+error.message);
   });
}
function logout()
{
  firebase.auth().signOut().then(function()
  {
  console.log('Signed Out');
  alert("Successfull Singout");
  window.location="file:///C:/Users/hp/Desktop/project1/mainproject/loginForm.html";
}, function(error) {
  console.error('Sign Out Error', error);
});
}
