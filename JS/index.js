function navigateToPage(Result, Msg)
{
    console.log("insert navigatetopage");
    if (Result=='Success')
       {           
        document.getElementById("LoginForm").action = 'toDo.html';
        return true;
       }
    else
       {
          
         document.getElementById("LoginForm").action = 'index.html';  
         let spanElem= document.getElementById('LoginAlertMsg');
         spanElem.innerHTML= Msg; 
         return false;  
        // alert('The user authentication failed because of '+ Msg);  
       }
}

function validateLoginData(callback)
{
    console.log("insert validateLoginForm");
    let vUserName = document.getElementById('LoginUserName').value;
    let vPwd   = document.getElementById('LoginPassword').value;
    // let spanElem= document.getElementById('LoginAlertMsg');
    let res="";
    let sHTML="";
    let msg ="";
    if ((vUserName=="") ||(vPwd=="") )
    {
        console.log("empty if"); 
        sHTML = "<div style ='  color:DarkRed '><p>Authentication failed due to the following field(s) are empty :</p> <ul>";
        if (vUserName=="")
         {
            sHTML = sHTML+"<li>Email</li>"; 
         }
         if (vPwd=="")
         {
            sHTML = sHTML+"<li>Password</li>";  
         } 
         sHTML= sHTML+"</ul></div>";
         console.log(sHTML); 
        //  spanElem.innerHTML= sHTML; 
        msg=sHTML;
        //  return false; 
        res='Failed';
    }
    else
    {  
        if ((vUserName=="admin") && (vPwd=="12345")) 
           {
            console.log("valid case"); 
            res='Success';              
           }
        else
           {
            console.log("UserName and Password is wrong"); 
            msg = "<div style ='  color:DarkRed '><p>Authentication failed due to invalid user name or password </div >";
            res='Failed';        
           }
    } 
    return(callback(res, msg));    
}

