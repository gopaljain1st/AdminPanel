
var leadsRef = firebase.database().ref('mainAdmin');
var count=1;
leadsRef.on('value', function(snapshot)
{
    snapshot.forEach(function(childSnapshot)
    {
      var admin = childSnapshot.val();
      var table = document.getElementById("dataTable");
      var row = table.insertRow(count);
      var cell = row.insertCell(0);
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      var cell4 = row.insertCell(4);
      cell.innerHTML=count;
      cell1.innerHTML = admin.adminName;
      cell2.innerHTML = admin.adminEmail;
      cell3.innerHTML = admin.adminPassword;
      cell4.innerHTML = admin.adminRole;
      count++;
    });
});
