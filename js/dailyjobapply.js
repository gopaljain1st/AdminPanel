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
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
today=today.replace(/\b0/g, '');
firebase.initializeApp(firebaseConfig);
var count=1;
var ref = firebase.database().ref('Apply/');
ref.once('value', function(snapshot)
{
  snapshot.forEach(function(childSnapshot)
  {
    var employerId = childSnapshot.key;
    var ref2 = firebase.database().ref('Apply/'+employerId);
    ref2.once('value',function(snapshot)
    {
      snapshot.forEach(function(childSnapshot)
      {
        var jobKey=childSnapshot.key;
        var jobData=childSnapshot.val();
        console.log(jobData.CurrentDate);
        if(jobData.CurrentDate==today)
        {var table = document.getElementById("dataTable");
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
        cell.innerHTML=count;
        cell1.innerHTML = employerId;
        cell2.innerHTML = jobKey;
        cell3.innerHTML = jobData.employeeId;
        cell4.innerHTML = jobData.status;
        cell5.innerHTML = jobData.specialInstruction;
        cell6.innerHTML = jobData.userLangauge;
        cell7.innerHTML = jobData.userLocation;
        cell8.innerHTML = jobData.userName;
        cell9.innerHTML = jobData.userPhoneNumber;
        cell10.innerHTML = jobData.userUpiId;
        count++;
        }
      });
    });
  });
});
