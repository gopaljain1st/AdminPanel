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
const db = firebase.firestore();
var count=1;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = '8' + '/' + mm + '/' + yyyy;
today=today.replace(/\b0/g, '');
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeDailyVisitor.html")
{
  db.collection("users").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc)
      {
          var employee=doc.data();
          console.log(today +" : "+ employee.signedIn);
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
else {
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
