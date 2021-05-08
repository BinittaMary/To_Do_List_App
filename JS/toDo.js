let taskCompletedCount=0;
let alerted=false;

function getDataFromAPI()
   {
   taskCompletedCount=0; 
   alerted=false;
   let spanElem= document.getElementById('UserAlertMsg');
  //  console.log('welcome '+globalvariable);
   spanElem.innerHTML= '<h6></h6>';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) 
      {
        //let response = JSON.parse(this.responseText);
        let taskList = JSON.parse(this.responseText);
        let task ="<table class='table'>";
        let checkBoxID;
        task+="<thead>";
        task+="<tr>";
        task+="<th scope='col'>Completed</th>";
        task+="<th scope='col'>Task </th>";
        task+="</tr>";
        task+="</thead>";
        task+="<tbody>";
        for(var i=0; i<taskList.length; i++)
           {     
            if (taskList[i].completed) 
                {
                    task += "<tr class='table-danger'><td><input class='form-check-input' type='checkbox' disabled checked/> </td>";
                    task += "<td>"+taskList[i].title+"</td></tr>";                 
                }
            else
               {
                checkBoxID="checkBoxID"+i;
                task += "<tr class='table-light'><td><input class='form-check-input' type='checkbox' id='"+checkBoxID+"'  unchecked onchange='clickIdentified(id)'/> </td>";
                task += "<td>"+taskList[i].title+"</td></tr>";                 
               }
           }
       task +="</table></tbody>";
       document.getElementById("output").innerHTML = task;
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
  }

  getDataFromAPI(); 








 function clickIdentified(ID)
{
  var cbStatus = document.getElementById(ID).checked;
      if (cbStatus== true)
       {
        taskCompletedCount+=1;
       }
    else  
      {
       taskCompletedCount-=1;  
      } 
  var promise = new Promise(function(resolve, reject) { 
    if((taskCompletedCount==5) && (!alerted))
      {
      alerted=true;  
      resolve(`<h6>Congrats. You have completed five task today!!!!</h6>`);  
      }
    else if (taskCompletedCount==4)
      {
      if (alerted) 
         {
         console.log('less than')  
         alerted=false;  
         resolve(`<h6></h6>`);
         } 
      }       
  }) 

   promise.then(function(promise_kept_message) { 
    let spanElem= document.getElementById('UserAlertMsg');
    spanElem.innerHTML= promise_kept_message;
    window.scrollTo(0, 0); 
         })
    .catch(function(error) {   
     console.log(error);   })   

}

// function callclick(ID)
// {
//   console.log('inside call click');

// clickIdentified(ID).then(function(promise_kept_message) {  
//   console.log(promise_kept_message); 
//   let spanElem= document.getElementById('UserAlertMsg');
//   spanElem.innerHTML= `<h6>Congrats!. You have completed five task today</h6>`;
//   window.scrollTo(0, 0); 
//       }, function(error) {   
//   console.log(error);   }) 

// }