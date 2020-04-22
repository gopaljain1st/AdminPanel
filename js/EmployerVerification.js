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
var count;
var arr= new Array();
count=1;
db.collection("Employers").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc)
    {
        arr[count]=doc.id;
        var employer=doc.data();
        if(employer.Valid=='false'&&employer.Block=='false')
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
            var cell15=row.insertCell(15);
            var cell16=row.insertCell(16);

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
            cell15.innerHTML= cell15.innerHTML + "<input type='button' onclick='verified(this);' value='Verified' style='background-color: green; border: none; height: 25px; width: 70px; color: white; font-size: 15px; border-radius: 10px; margin-top: 15px; cursor: pointer'/>";
            cell16.innerHTML= cell16.innerHTML + "<input type='button' value='Block' onclick='block(this);' style='background-color: red; border: none; height: 25px; width: 70px; color: white; font-size: 15px; border-radius: 10px; margin-top: 15px; cursor: pointer'/>";
            count++;
    }
  });
});
function verified(row)
{
  var srno=row.parentNode.parentNode.rowIndex;
  var s=arr[srno];
  const db = firebase.firestore();
  db.collection("Employers").doc(s).update({
    Valid: "true"
})
.then(function() {
    console.log("Employer successfully verified!");
      document.getElementById('dataTable').deleteRow(srno);
      window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployerApplicationList.html";

})
.catch(function(error) {
    console.error("Error updating document: ", error);
});
}
function block(row)
{
  var srno=row.parentNode.parentNode.rowIndex;
  var s=arr[srno];
  const db = firebase.firestore();
  db.collection("Employers").doc(s).update({
    Block: "true"
  })
  .then(function() {
    console.log("Employer successfully Blocked!");
      document.getElementById('dataTable').deleteRow(srno);
      window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployerApplicationList.html";
  })
  .catch(function(error) {
    console.error("Error updating document: ", error);
  });
}
