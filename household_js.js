/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function show()
{
    alert ("worked");
}
function increment(p)
{
    if (p===1)
    var x=document.getElementById("qty1").innerHTML;
else if (p===2)
    var x=document.getElementById("qty2").innerHTML;
else if (p===3)
    var x=document.getElementById("qty3").innerHTML;
else if (p===4)
    var x=document.getElementById("qty4").innerHTML;
else if (p===5)
    var x=document.getElementById("qty5").innerHTML;
else if (p===6)
    var x=document.getElementById("qty6").innerHTML;
else if (p===7)
    var x=document.getElementById("qty7").innerHTML;
else if (p===8)
    var x=document.getElementById("qty8").innerHTML;
else if (p===9)
    var x=document.getElementById("qty9").innerHTML;
    if (x<10)
    {
      x=parseInt(x);
     x=x+1;
     if (p===1)
    document.getElementById("qty1").innerHTML=x;
else if (p===2)
    document.getElementById ("qty2").innerHTML=x;
else if (p===3)
    document.getElementById ("qty3").innerHTML=x;
else if  (p===4)
    document.getElementById ("qty4").innerHTML=x;
else if (p===5)
    document.getElementById ("qty5").innerHTML=x;
else if (p===6)
    document.getElementById ("qty6").innerHTML=x;
else if (p===7)
    document.getElementById ("qty7").innerHTML=x;
else if (p===8)
    document.getElementById ("qty8").innerHTML=x;
else if (p===9)
    document.getElementById ("qty9").innerHTML=x;
}
}
function decrement(p)
{
    if (p===1)
    var x=document.getElementById ("qty1").innerHTML;
    else if (p===2)
        var x=document.getElementById ("qty2").innerHTML;
    else if (p===3)
        var x=document.getElementById ("qty3").innerHTML;
    else if (p===4)
        var x=document.getElementById ("qty4").innerHTML;
    else if (p===5)
        var x=document.getElementById ("qty5").innerHTML;
    else if (p===6)
        var x=document.getElementById ("qty6").innerHTML;
    else if (p===7)
        var x=document.getElementById ("qty7").innerHTML;
    else if (p===8)
        var x=document.getElementById ("qty8").innerHTML;
    else if (p===9)
        var x=document.getElementById ("qty9").innerHTML;
    if (x>1)
    {
     x=x-1;
     if (p===1)
    document.getElementById("qty1").innerHTML=x; 
else if (p===2)
    document.getElementById("qty2").innerHTML=x;
else if (p===3)
    document.getElementById("qty3").innerHTML=x;
else if (p===4)
    document.getElementById("qty4").innerHTML=x;
else if (p===5)
    document.getElementById("qty5").innerHTML=x;
else if (p===6)
    document.getElementById("qty6").innerHTML=x;
else if (p===7)
    document.getElementById("qty7").innerHTML=x;
else if (p===8)
    document.getElementById("qty8").innerHTML=x;
else if (p===9)
    document.getElementById("qty9").innerHTML=x;
    }
}
function changeimg(p)
{
    if (p===1)
    document.getElementById("add_to_cart1").src="addtocart-green-4.png";
else if (p===2)
    document.getElementById("add_to_cart2").src="addtocart-green-4.png";
else if (p===3)
    document.getElementById("add_to_cart3").src="addtocart-green-4.png";
else if (p===4)
    document.getElementById("add_to_cart4").src="addtocart-green-4.png";
else if (p===5)
    document.getElementById("add_to_cart5").src="addtocart-green-4.png";
else if (p===6)
    document.getElementById("add_to_cart6").src="addtocart-green-4.png";
else if (p===7)
    document.getElementById("add_to_cart7").src="addtocart-green-4.png";
else if (p===8)
    document.getElementById("add_to_cart8").src="addtocart-green-4.png";
else if (p===9)
    document.getElementById("add_to_cart9").src="addtocart-green-4.png";
}
function revertimg(x)
{
    if (x===1)
    document.getElementById("add_to_cart1").src="addtocart-blue-22.png";
else if (x===2)
    document.getElementById("add_to_cart2").src="addtocart-blue-22.png";
else if (x===3)
    document.getElementById("add_to_cart3").src="addtocart-blue-22.png";
else if  (x===4)
    document.getElementById("add_to_cart4").src="addtocart-blue-22.png";
else if (x===5)
    document.getElementById("add_to_cart5").src="addtocart-blue-22.png";
else if (x===6)
    document.getElementById("add_to_cart6").src="addtocart-blue-22.png";
else if (x===7)
    document.getElementById("add_to_cart7").src="addtocart-blue-22.png";
else if (x===8)
    document.getElementById("add_to_cart8").src="addtocart-blue-22.png";
else if (x===9)
    document.getElementById("add_to_cart9").src="addtocart-blue-22.png";
}/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


