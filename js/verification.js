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
  db.collection("users").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc)
      {
        var employee=doc.data();
        if(employee.valid=='No'&&employee.block=='No')
        {
           arr[count]=doc.id;
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
            cell15.innerHTML= cell15.innerHTML + "<input type='button' onclick='verified(this);' value='Verified' style='background-color: green; border: none; height: 25px; width: 70px; color: white; font-size: 15px; border-radius: 10px; margin-top: 15px; cursor: pointer'/>";
            cell16.innerHTML= cell16.innerHTML + "<input type='button' onclick='block(this);' value='Block' style='background-color: red; border: none; height: 25px; width: 70px; color: white; font-size: 15px; border-radius: 10px; margin-top: 15px; cursor: pointer'/>";
            count++;
        }

      });
  });
  function verified(row)
  {
    var srno=row.parentNode.parentNode.rowIndex;
    var s=arr[srno];
    const db = firebase.firestore();
    db.collection("users").doc(s).update({
      valid: "Yes"
  })
  .then(function() {
      console.log("Employee successfully verified!");
        document.getElementById('dataTable').deleteRow(srno);
        window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeApplicationList.html";
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
    db.collection("users").doc(s).update({
      block: "Yes"
    })
    .then(function() {
      console.log("Employee successfully Blocked!");
        document.getElementById('dataTable').deleteRow(srno);
        window.location="file:///C:/Users/hp/Desktop/project1/mainproject/EmployeeApplicationList.html";
        
    })
    .catch(function(error) {
      console.error("Error updating document: ", error);
    });
  }
