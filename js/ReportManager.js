const db = firebase.firestore();
var count=1;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = '8' + '/' + mm + '/' + yyyy; //because at present we dont have daily visitors
today=today.replace(/\b0/g, '');
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeerReportData.html")
{
  db.collection("Employers").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc)
      {
          var employer=doc.data();
          if(employer.Valid=="true")
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
            var cell12 = row.insertCell(12);
            var cell13 = row.insertCell(13);
            var cell14 = row.insertCell(14);

            cell.innerHTML=count;
            cell1.innerHTML = employer.Aadhar_NO;
            cell2.innerHTML = employer.Alternate_contact;
            cell3.innerHTML = employer.City;
            cell4.innerHTML = employer.Comapany_Mail;
            cell5.innerHTML = employer.GSTIN;
            cell6.innerHTML = employer.Location;
            cell7.innerHTML = employer.Name_Of_Company;
            cell8.innerHTML = employer.Type;
            cell9.innerHTML = employer.contact;
            cell10.innerHTML = employer.email;
            cell11.innerHTML = employer.first;
            cell12.innerHTML = employer.last;
            cell13.innerHTML = employer.password;
            cell14.innerHTML = employer.role;
            count++;
          }
      });
  });
}
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeReportData.html")
{
  db.collection("users").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc)
      {
          var employee=doc.data();
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
          var cell12 = row.insertCell(12);
          var cell13 = row.insertCell(13);
          var cell14 = row.insertCell(14);
          var cell19 = row.insertCell(15);
          cell.innerHTML=count;
          cell1.innerHTML = employee.first;
          cell2.innerHTML = employee.last;
          cell3.innerHTML = employee.email;
          cell4.innerHTML = employee.PhoneNumber;
          cell5.innerHTML = employee.PaytmNumber;
          cell6.innerHTML = employee.TezNumber;
          cell7.innerHTML = employee.Address;
          cell8.innerHTML = employee.AdharNumber;
          cell9.innerHTML = employee.BankName;
          cell10.innerHTML = employee.accountNumber;
          cell11.innerHTML = employee.IFSCCODE;
          cell12.innerHTML = employee.Profession;
          //cell13.innerHTML = employee.Enter Collage Address;
        //  cell14.innerHTML = employee.Enter Collage Address;
          cell19.innerHTML = employee.Current_Address;
          count++;
      });
  });
}
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/ManagerReportData.html")
{
  var leadsRef = firebase.database().ref('mainAdmin');
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
}
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeVisitorReport.html")
{
  db.collection("users").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc)
      {
          var employee=doc.data();
          if(today==employee.signedIn)
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
            var cell12 = row.insertCell(12);
            var cell13 = row.insertCell(13);
            var cell14 = row.insertCell(14);
            var cell19 = row.insertCell(15);
            cell.innerHTML=count;
            cell1.innerHTML = employee.first;
            cell2.innerHTML = employee.last;
            cell3.innerHTML = employee.email;
            cell4.innerHTML = employee.PhoneNumber;
            cell5.innerHTML = employee.PaytmNumber;
            cell6.innerHTML = employee.TezNumber;
            cell7.innerHTML = employee.Address;
            cell8.innerHTML = employee.AdharNumber;
            cell9.innerHTML = employee.BankName;
            cell10.innerHTML = employee.accountNumber;
            cell11.innerHTML = employee.IFSCCODE;
            cell12.innerHTML = employee.Profession;
            //cell13.innerHTML = employee.Enter Collage Address;
          //  cell14.innerHTML = employee.Enter Collage Address;
            cell19.innerHTML = employee.Current_Address;
            count++;
          }
      });
  });
}
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeerVisitorReport.html")
{
  db.collection("Employers").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc)
      {
          var employer=doc.data();
          if(today==employer.signedIn)
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
              var cell12 = row.insertCell(12);
              var cell13 = row.insertCell(13);
              var cell14 = row.insertCell(14);

              cell.innerHTML=count;
              cell1.innerHTML = employer.Aadhar_NO;
              cell2.innerHTML = employer.Alternate_contact;
              cell3.innerHTML = employer.City;
              cell4.innerHTML = employer.Comapany_Mail;
              cell5.innerHTML = employer.GSTIN;
              cell6.innerHTML = employer.Location;
              cell7.innerHTML = employer.Name_Of_Company;
              cell8.innerHTML = employer.Type;
              cell9.innerHTML = employer.contact;
              cell10.innerHTML = employer.email;
              cell11.innerHTML = employer.first;
              cell12.innerHTML = employer.last;
              cell13.innerHTML = employer.password;
              cell14.innerHTML = employer.role;
             count++;
          }
      });
  });
}
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/JobApplicationReport.html")
{
  today = dd + '/' + mm + '/' + yyyy;
  today=today.replace(/\b0/g, '');
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
          if(jobData.CurrentDate==today)
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
}
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/JobPostReport.html")
{
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

  var ref = firebase.database().ref('Jobs/');
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
}
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/JobCompleteReport.html")
{
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

            if(jobData.job_status=="Completed")
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
              cell.innerHTML=count;
              cell1.innerHTML = jobKey;
              cell2.innerHTML = jobData.Job_Company;
              cell5.innerHTML = jobData.Job_Date;
              cell3.innerHTML = jobData.Job_Title;
              cell6.innerHTML = jobData.Amount;
              cell4.innerHTML = "";
              count++;
            }
        });
      });
    });
  });
}
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/OnGoingReport.html")
{
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
          if(jobData.job_status=="Live")
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
          }
        });
      });
    });
  });

}
function export2csv(filename)
{
  let data = "";
  const tableData = [];
  const rows = document.querySelectorAll("table tr");
  for (const row of rows) {
    const rowData = [];
    for (const [index, column] of row.querySelectorAll("th, td").entries())
    {
        rowData.push('"' + column.innerText + '"');
    }
    tableData.push(rowData.join(","));
  }
  data += tableData.join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob(['\ufeff', data], { type: 'application/vnd.ms-excel' }));
  a.setAttribute("download", filename+".xls");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
