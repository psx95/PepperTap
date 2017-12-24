/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validate(){
    var x=document.forms["signup"]["telno"].value;
    var y=document.forms["signup"]["pswd"].value;
    x.toString();
    if (x.length!==10)
    {
        alert("Mobile number should be of 10 digits");
        return false;
    }
        
    for (i=0;i<10;i++)
    {
        if (!(x.charCodeAt(i)>47 && x.charCodeAt(i)<58))
        {
            alert ("Mobile number should only contain digits 0-9");
            return false;
        }
    }
    if (!validatepassword(y))
    {
        return false;
    }
    alert("Thank You! You have been Signed Up Successfully!");
    return true;
}
function validatepassword (password)
{
    var l=password.length;
    var x=password;
    var uc=0; var lc=0;
    var sc=0; var num=0;
 if (l<8)
 {
     alert ("password must be of atleast 8 charcters !");
     return false;
 }
 for (var i=0;i<l;i++)
 {
     if (x.charCodeAt(i)>64 && x.charCodeAt(i)<91)
         uc=1;
     else if (x.charCodeAt(i)>96 && x.charCodeAt(i)<123)
             lc=1;
         else if (x.charCodeAt(i)>47 && x.charCodeAt(i)<58)
             num=1;
         else
         sc=1;
 }
 if (uc!==1 || lc!==1)
 {
     alert ("password must contain characters in mixed case. ");
     return false;
 }
 if (sc===0)
 {
     alert ("password must contain at least one special character.");
     return false;
 }
 if (num===0)
 {
     alert ("password must contain a Nuumeric digit");
        return false;
 }
 return true;
}