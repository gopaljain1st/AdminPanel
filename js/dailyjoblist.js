var firebaseConfig =
{
  apiKey: "AIzaSyBHGtDP8iCakWd-q3QkpwLc831I4w0M5oI",
  authDomain: "employeetesting-f03f6.firebaseapp.com",
  databaseURL: "https://employeetesting-f03f6.firebaseio.com",
  projectId: "employeetesting-f03f6",
  storageBucket: "employeetesting-f03f6.appspot.com",
  messagingSenderId: "329996548861",
  appId: "1:329996548861:web:4cbcdddf77d6d75a5f1c94"
};
firebase.initializeApp(firebaseConfig);
var count=1;
var ref = firebase.database().ref('Jobs/');
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
var m = month[today.getMonth()];
today = dd + '-' + m + '-' + yyyy;
console.log(today);
ref.once('value', function(snapshot)
{
  snapshot.forEach(function(childSnapshot)
  {
    var key = childSnapshot.key;
    var ref2 = firebase.database().ref('Jobs/'+key);
    ref2.once('value',function(snapshot)
    {
      snapshot.forEach(function(childSnapshot)
      {
        var jobKey=childSnapshot.key;
        var jobData=childSnapshot.val();
        console.log(jobData.Job_Publish_date);
         if(jobData.Job_Publish_date==today)
         {
           var table = document.getElementById("dataTable");
           var row = table.insertRow(count);
           var cell = row.insertCell(0);
           var cell1 = row.insertCell(1);
           var cell2 = row.insertCell(2);
           var cell3 = row.insertCell(3);
           var cell4 = row.insertCell(4);
           var cell5 = row.insertCell(5);
           var cell6 = row.insertCell(6);
           var cell7 = row.insertCell(7);
           var cell8 = row.insertCell(8);
           var cell9 = row.insertCell(9);
           var cell10 = row.insertCell(10);
           var cell11 = row.insertCell(11);
           cell.innerHTML=count;
           cell1.innerHTML = jobData.Company_name;
           cell2.innerHTML = jobKey;
           cell3.innerHTML = jobData.Job_Amount;
           cell4.innerHTML = jobData.Job_Booking_Radius;
           cell5.innerHTML = jobData.Job_Date;
           cell6.innerHTML = jobData.Job_Desc;
           cell7.innerHTML = jobData.Job_End_Time;
           cell8.innerHTML = jobData.Job_Special;
           cell9.innerHTML = jobData.Job_Start_Time;
           cell10.innerHTML = jobData.Job_Title;
           cell11.innerHTML = jobData.UserId;
           count++;
         }


      });
    });
  });
});
