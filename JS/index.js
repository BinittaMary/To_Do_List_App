function navigateToPage(Result, Msg)
{
    console.log("insert navigatetopage");
    if (Result=='Success')
       {       
        document.getElementById("LoginForm").action = 'toDo.html';
       }
    else
       {
        document.getElementById("LoginForm").action = 'index.html';       
        // document.write('The user authentication failed because of '+ Msg);  
        let spanElem= document.getElementById('LoginAlertMsg');
        spanElem.innerHTML= Msg; 
        alert('The user authentication failed because of '+ Msg);  
       }
}

function navigate(url)
{
    console.log("insert navigate");
    window.location.href=url;
}


function validateLoginData(callback)
{
    console.log("insert validateLoginForm");
    let vUserName = document.getElementById('LoginUserName').value;
    let vPwd   = document.getElementById('LoginPassword').value;
    //  let spanElem= document.getElementById('LoginAlertMsg');
    let res="";
    let sHTML="";
    let msg ="";
    if ((vUserName=="") ||(vPwd=="") )
    {
        console.log("empty if"); 
        sHTML = "<div style ='  color:red '><p>The following field(s) are empty :</p> <ul>";
        msg ="Mandatory field(s) are empty";
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
        //   spanElem.innerHTML= sHTML;
        res='Failed';
        //  return false;
        // callback(res); 
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
            msg='UserName and Password is wrong';
            res='Failed';                
           }
    } 
    callback(res, msg);    
}

