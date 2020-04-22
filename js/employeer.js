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
  var arr= new Array();
db.collection("Employers").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc)
    {
        arr[count]=doc.id;
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
          var cell15=row.insertCell(15);
          var cell16=row.insertCell(16);
          var cell17=row.insertCell(17);

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
          cell15.innerHTML= cell15.innerHTML + "<input type='button' data-toggle='modal' data-target='#myModal' onclick='update(this);' value='Update' style='background-color: green; border: none; height: 25px; width: 70px; color: white; font-size: 15px; border-radius: 10px; margin-top: 15px; cursor: pointer'/>";
          cell16.innerHTML= cell16.innerHTML + "<input type='button' value='Delete' onclick='mydelete(this);' style='background-color: red; border: none; height: 25px; width: 70px; color: white; font-size: 15px; border-radius: 10px; margin-top: 15px; cursor: pointer'/>";

          if(employer.Block=="false")
          cell17.innerHTML= cell17.innerHTML + "<input type='button' value='Block' onclick='block(this);' style='background-color: red; border: none; height: 25px; width: 70px; color: white; font-size: 15px; border-radius: 10px; margin-top: 15px; cursor: pointer'/>";
          else
          cell17.innerHTML= cell17.innerHTML + "<input type='button' value='Un Block' onclick='unblock(this);' style='background-color: green; border: none; height: 25px; width: 70px; color: white; font-size: 15px; border-radius: 10px; margin-top: 15px; cursor: pointer'/>";
          count++;
        }

        });
});
function unblock(x)
{
  var srno=x.parentNode.parentNode.rowIndex;
  var s=arr[srno];
  const db = firebase.firestore();
  db.collection("Employers").doc(s).update({
    Block: "false"
  })
  .then(function() {
    alert("Employer successfully Un Blocked!");
    window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeerList.html";
  })
  .catch(function(error) {
    console.error("Error updating document: ", error);
  });
}
function block(x)
{
  var srno=x.parentNode.parentNode.rowIndex;
  var s=arr[srno];
  const db = firebase.firestore();
  db.collection("Employers").doc(s).update({
    Block: "true"
  })
  .then(function() {
    alert("Employer successfully Blocked!");
    window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeerList.html";
  })
  .catch(function(error) {
    console.error("Error updating document: ", error);
  });
}
function mydelete(row)
{
  var srno=row.parentNode.parentNode.rowIndex;
  var s=arr[srno];
  const db = firebase.firestore();
  db.collection("Employers").doc(s).delete().then(function()
  {
    console.log("Document successfully deleted!");
    alert("User Deleted");
    document.getElementById('dataTable').deleteRow(x.parentNode.parentNode.rowIndex);
    window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeerList.html";
}).catch(function(error) {
    console.error("Error removing document: ", error);
});

}
function update(row)
{
  srno=row.parentNode.parentNode.rowIndex;
  var s=arr[srno];
  var newJson={};
  if(s!=null)
  {
    const db = firebase.firestore();
    db.collection("Employers").doc(s).get().then(function(thisDoc)
    {
      newJson=thisDoc.data();
      document.getElementById('name').value=newJson.first;
      document.getElementById('lastname').value=newJson.last;
      document.getElementById('company').value=newJson.Name_Of_Company;
      document.getElementById('role').value=newJson.role;
      document.getElementById('pnumber').value=newJson.contact;
      document.getElementById('companygstin').value=newJson.GSTIN;
      document.getElementById('aadhar').value=newJson.Aadhar_NO;
      document.getElementById('city').value=newJson.City;
      document.getElementById('location').value=newJson.Location;
      document.getElementById('companyemail').value=newJson.Comapany_Mail;
      document.getElementById('email').value=newJson.email;
      document.getElementById('password').value=newJson.password;
      document.getElementById('alternateContact').value=newJson.Alternate_contact;
      document.getElementById('type').value=newJson.Type;
    });
  }
  document.getElementById('save').addEventListener("click", function()
  {
    newJson.first= document.getElementById('name').value;
    newJson.last= document.getElementById('lastname').value;
    newJson.Name_Of_Company = document.getElementById('company').value;
    newJson.role=document.getElementById('role').value;
    newJson.contact=document.getElementById('pnumber').value;
    newJson.GSTIN=document.getElementById('companygstin').value;
    newJson.Aadhar_NO=document.getElementById('aadhar').value;
    newJson.City=document.getElementById('city').value;
    newJson.Location=document.getElementById('location').value;
    newJson.Comapany_Mail=document.getElementById('companyemail').value;
    newJson.email=document.getElementById('email').value;
    newJson.password=document.getElementById('password').value;
    newJson.Alternate_contact=document.getElementById('alternateContact').value;
    newJson.Type=document.getElementById('type').value;
    const db2 = firebase.firestore();
    var ref=db2.collection("Employers").doc(s);
    ref.update(newJson).then(function(){
      alert("date Updated");
      window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeerList.html";
    }).catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});

  });
}
function add()
{
  var newJson={};
  newJson.firstName = document.getElementById('name').value;
  newJson.lastName = document.getElementById('lastname').value;
  newJson.company = document.getElementById('company').value;
  newJson.role=document.getElementById('role').value;
  newJson.pnumber=document.getElementById('pnumber').value;
  newJson.companygstin=document.getElementById('companygstin').value;
  newJson.aadhar=document.getElementById('aadhar').value;
  newJson.city=document.getElementById('city').value;
  newJson.location=document.getElementById('location').value;
  newJson.companyemail=document.getElementById('companyemail').value;
  newJson.email=document.getElementById('email').value;
  newJson.password=document.getElementById('password').value;
  newJson.Alternate_contact=document.getElementById('alternateContact').value;
  newJson.Type=document.getElementById('type').value;

  firebase.database().ref('employerAdminRegestration/'+newJson.pnumber).set(newJson, function(error) {
if (error) {
  alert.log(error);
} else {
  window.alert("Employer Regestration successfully 'The Employer will not be show in this list untill he logs into the mobile'");
  }
});
}
