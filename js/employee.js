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
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeDataReport.html")
{
  const db = firebase.firestore();
  var count=1;
  var arr= new Array();
db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc)
    {
      arr[count]=doc.id;
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
if(window.location=="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeManager.html")
{
    const db = firebase.firestore();
    var count=1;
    var arr= new Array();
  db.collection("users").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc)
      {
        arr[count]=doc.id;
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


          var cell15=row.insertCell(16);
          var cell16=row.insertCell(17);
          var cell17=row.insertCell(18);

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
          cell15.innerHTML= cell15.innerHTML + "<input type='button' data-toggle='modal' data-target='#myModal' onclick='update(this);' value='Update' style='background-color: green; border: none; height: 25px; width: 70px; color: white; font-size: 15px; border-radius: 10px; margin-top: 15px; cursor: pointer'/>";
          cell16.innerHTML= cell16.innerHTML + "<input type='button' value='Delete' onclick='mydelete(this);' style='background-color: red; border: none; height: 25px; width: 70px; color: white; font-size: 15px; border-radius: 10px; margin-top: 15px; cursor: pointer'/>";
          if(employee.block=="No")
          cell17.innerHTML= cell17.innerHTML + "<input type='button' value='Block' onclick='block(this);' style='background-color: red; border: none; height: 25px; width: 70px; color: white; font-size: 15px; border-radius: 10px; margin-top: 15px; cursor: pointer'/>";
          else cell17.innerHTML= cell17.innerHTML + "<input type='button' value='Un Block' onclick='unblock(this);'  style='background-color: green; border: none; height: 25px; width: 70px; color: white; font-size: 15px; border-radius: 10px; margin-top: 15px; cursor: pointer'/>";
          count++;
      });
  });
  /*const ref = firebase.database().ref().child('employeeAdminRegestration');

  ref.once('value', function(snapshot) {
snapshot.forEach(function(childSnapshot) {
  var childKey = childSnapshot.key;
  var employee = childSnapshot.val();

});
});*/
  function unblock(x)
  {
    var srno=x.parentNode.parentNode.rowIndex;
    var s=arr[srno];
    const db = firebase.firestore();
    db.collection("users").doc(s).update({
      block: "No"
    })
    .then(function() {
      alert("Employee successfully Un Blocked!");
      window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeManager.html";
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
    db.collection("users").doc(s).update({
      block: "Yes"
    })
    .then(function() {
      alert("Employee successfully Blocked!");
      window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeManager.html";
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
    db.collection("users").doc(s).delete().then(function()
    {
      console.log("Document successfully deleted!");
      alert("Employee Account Deleted");
      document.getElementById('dataTable').deleteRow(x.parentNode.parentNode.rowIndex);
      window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeManager.html";
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
      db.collection("users").doc(s).get().then(function(thisDoc)
      {
        newJson=thisDoc.data();
        document.getElementById('firstName').value=newJson.first;
        document.getElementById('lastName').value=newJson.last;
        document.getElementById('phoneNumber').value=newJson.PhoneNumber;
        document.getElementById('email').value=newJson.email;
        document.getElementById('address').value=newJson.Address;
        document.getElementById('paytmNumber').value=newJson.PaytmNumber;
        document.getElementById('upiNumber').value=newJson.TezNumber;
        document.getElementById('account').value=newJson.accountNumber;
        document.getElementById('IFSCcode').value=newJson.IFSCCODE;
        document.getElementById('bankName').value=newJson.BankName;
        document.getElementById('aadharNumber').value=newJson.AdharNumber;
        var Profession=newJson.Profession;
        var option =document.getElementById('sel1');
        if(Profession=="Job Seeker")
        option.options[0].setAttribute("selected", "selected");
        else if(Profession=="Student")
        {
          option.options[1].setAttribute("selected", "selected");
          document.getElementById("st").style.display= "block";
        //  document.getElementById('college').value=newJson.collegeName;
        //  document.getElementById('collegeaddress').value=newJson.collegeAddress;
        }
        else if(Profession=="Employee")
        {
          option.options[2].setAttribute("selected", "selected");
          document.getElementById("emp").style.display= "block";
        //  document.getElementById('company').value=newJson.companyName;
        //  document.getElementById('companyaddress').value=newJson.companyAddress;
        }
        document.getElementById('currentAddress').value=newJson.Current_Address;
        console.log(newJson.IFSCCODE);
      });
    }
  /*  document.getElementById('save').addEventListener("click", function()
    {
      newJson.first= document.getElementById('firstName').value;
      newJson.last= document.getElementById('lastName').value;
      newJson.Name_Of_Company = document.getElementById('phoneNumber').value;
      newJson.role=document.getElementById('email').value;
      newJson.contact=document.getElementById('address').value;
      newJson.GSTIN=document.getElementById('paytmNumber').value;
      newJson.Aadhar_NO=document.getElementById('upiNumber').value;
      newJson.City=document.getElementById('account').value;
      newJson.Location=document.getElementById('IFSCcode').value;
      newJson.Comapany_Mail=document.getElementById('bankName').value;
      newJson.email=document.getElementById('aadharNumbe').value;
      newJson.password=document.getElementById('sel1').value;
      newJson.Alternate_contact=document.getElementById('alternateContact').value;
      newJson.Type=document.getElementById('type').value;
      const db2 = firebase.firestore();
      var ref=db2.collection("Employers").doc(s);
      ref.update(newJson).then(function(){
        alert("date Updated");
        window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployerManager.html";
      }).catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

    });*/
  }
function add()
  {
    var newJson={};
    var companyaddress,company,college,collegeaddress;
    newJson.firstName=document.getElementById('firstName').value;
    newJson.lastName=document.getElementById('lastName').value;
    newJson.email = document.getElementById('email').value;
    newJson.phoneNumber=document.getElementById('phoneNumber').value;
    newJson.paytmNumber=document.getElementById('paytmNumber').value;
    newJson.upiNumber=document.getElementById('upiNumber').value;
    newJson.account=document.getElementById('account').value;
    newJson.ifsccode=document.getElementById('IFSCcode').value;
    newJson.bankName=document.getElementById('bankName').value;
    var sel1=document.getElementById('sel1').value;
    if(sel1=="Student")
    {
      newJson.profession="Student";
      newJson.professionField1=document.getElementById('college').value;
      newJson.professionField2=document.getElementById('collegeaddress').value;
    }
    else if(sel1=="Employee")
    {
      newJson.profession="Employee";
      newJson.professionField1=document.getElementById('company').value;
      newJson.professionField1=document.getElementById('companyaddress').value;
    }
    else newJson.profession="Job Seeker";
    newJson.currentAddress=document.getElementById('currentAddress').value;
    firebase.database().ref('employeeAdminRegestration/'+newJson.phoneNumber).set(newJson, function(error) {
  if (error) {
    alert.log(error);
  } else {
    window.alert("Employee Regestration successfully 'The Employee will not be show in this list untill he logs into the mobile'");
    }
  });
  }
}
