firebase.auth().onAuthStateChanged(function (user)
{
   if(user)
   {
     var admin=firebase.database().ref("mainAdmin");
     admin.on("value", function(snapshot)
     {
        var role=snapshot.child(user.uid).child("adminRole").val();
           console.log(role);
        switch (role)
        {
          case "Admin" : if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/loginForm.html")
                         window.location="file:///C:/Users/hp/Desktop/project1/mainproject/AdminPortal.html";
                           break;
          case "Employer Manager" : if(window.location!="file:///C:/Users/hp/Desktop/project1/mainproject/EmployerManager.html")
                                    window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployerManager.html";
                                    break;
          case "Employee Manager" : if(window.location!="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeManager.html")
                                    window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeManager.html";
                                    break;
          case "Job Manager" : window.location="file:///C:/Users/hp/Desktop/New%20folder/new%20project/EmployerManager.html";
                               break;
          case "Reports Manager" : window.location="file:///C:/Users/hp/Desktop/New%20folder/new%20project/EmployerManager.html";
                                   break;
          case "Payout Manager" : window.location="file:///C:/Users/hp/Desktop/New%20folder/new%20project/EmployerManager.html";
                                  break;
        }
     },
     function (errorObject) {
         window.alert("in error");
     });
   }
});
