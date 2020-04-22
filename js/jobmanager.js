var count=1;
var ref = firebase.database().ref('Shortlisting/');
ref.once('value', function(snapshot)
{
  snapshot.forEach(function(childSnapshot)
  {
    var key = childSnapshot.key;
    var ref2 = firebase.database().ref('Shortlisting/'+key);
    ref2.once('value',function(snapshot)
    {
      snapshot.forEach(function(childSnapshot)
      {
        var jobKey=childSnapshot.key;
        var jobData=childSnapshot.val();

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
           cell.innerHTML=count;
           cell1.innerHTML = jobData.User_Id;
           cell2.innerHTML = jobData.Job_Company;
           cell3.innerHTML = jobData.Job_Date;
           cell4.innerHTML = jobData.Job_Title;
           cell5.innerHTML = jobData.Amount;
           cell6.innerHTML = jobData.Start;
           cell7.innerHTML = jobData.End;
           cell8.innerHTML = jobData.job_status;
           cell9.innerHTML = jobData.Location;
           count++;
      });
    });
  });
});
