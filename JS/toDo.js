let taskCompletedCount=0;

function getDataFromAPI() {
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
                    task += "<tr class='table-primary'><td><input class='form-check-input' type='checkbox' disabled checked/> </td>";
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
  //alert(ID);
  var cbStatus = document.getElementById(ID).checked;
  if (cbStatus== true)
  {
      taskCompletedCount+=1;
  }
  else  
  {
     taskCompletedCount-=1;  
  } 
  if (taskCompletedCount==5)
     {
      alert(taskCompletedCount); 
     }  
}