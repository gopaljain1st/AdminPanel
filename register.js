window.alert("js");
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

const auth = firebase.database();
function register()
{
  let name=document.getElementById('name').value;
  let email=document.getElementById('email').value;
  let userName=document.getElementById('userName').value;
  let password=document.getElementById('password').value;
  let role=document.getElementById('role').value;
  writeUserData(name,email,userName,password,role);
}
function writeUserData(name,email,userName,password,role)
{
 var admins=firebase.database().ref('admin');
 admins.once('value', function(snapshot){
          if(snapshot.exists())
          {
            if(!snapshot.hasChild(userName))
            {
              firebase.database().ref('admin/'+userName).set({
                 adminName: name,
                 adminEmail: email,
                 adminPassword: password,
                 adminRole: role
               });
              window.alert("Registeration Successfully");
            }
            else window.alert("Please Select Another userName");
          }
          else {
            firebase.database().ref('admin/'+userName).set({
               adminName: name,
               adminEmail: email,
               adminPassword: password,
               adminRole: role
             });
            window.alert("Registeration Successfully");
          }
 });
}
function check(userName,password)
{
  var admins=firebase.database().ref('admin');
  admins.once('value', function(snapshot){
           if(snapshot.exists())
           {
               if(!snapshot.hasChild(userName))
               return false;
               else {
                     var pass=snapshot.child(userName).child("adminPassword").val();
                     var ans=password.localeCompare(pass);
                     window.alert(pass==password);
                     if(ans==0||pass==password)
                     {
                       window.alert("i am in true");

                       return true;
                     }
                     else return false;
               }
           }
           else {
             return false;
          }
  });
}

function login()
{
   let userName=document.getElementById('userName').value;
   let password=document.getElementById('password').value;
   var admins=firebase.database().ref('admin');
   admins.once('value', function(snapshot){
            if(snapshot.exists())
            {
                if(!snapshot.hasChild(userName))
                window.alert("Please Enter Correct userName and Password");
                else {
                      var pass=snapshot.child(userName).child("adminPassword").val();
                      var role=snapshot.child(userName).child("adminRole").val();
                      if(pass==password)
                      {
                          window.alert("Successfull");
                          switch (role)
                          {
                            case "Admin" : window.location="file:///C:/Users/hp/Desktop/New%20folder/employee%20app/AdminPortal.html";
                                           break;
                          }
                      }
                      else window.alert("Please Enter Correct userName and Password");
                }
            }
            else window.alert("Please Enter Correct userName and Password");
   });
}
