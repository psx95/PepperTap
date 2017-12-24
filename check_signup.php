<!DOCTYPE html>
<?php
	session_start();
?>

<html>
 <head>
        <link rel="stylesheet" text="stylesheet/css" href="Hompage_css.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="homepage_js" type="text/javascript"></script>
        <script type="text/javascript">
            function redirect(){
               window.location.assign("Signu_Up.html");
          }
            window.onload=function (){
                document.getElementById("image_acc").onclick=function (){
                   // document.getElementById("bdy").style.opacity=0.4;
                    document.getElementById("overlay").style.display='inline';
                };
            };
        </script>
    </head>
 <body id="bdy">
        <div id="top_bar" class ="nav_bar">
            <a href="home.html">
                <div id="peppertap_logo"><img src="peppertap_logo.png"></div></a>
            <div id="search_bar">
                <input type="text" class="nav_bar" placeholder="Looking for something.. ?" id="input_search">
                <img src="search.png" height="60px" width="50px" id="magnifier">
            </div>
            <div id="account"><img src="Account.png" height="70px" width="130px" id="image_acc"></div>
            <div id ="mycart"><img src="mycart.png" height="40px" width="60px"></div>
        </div>
        <br><br><br>
        <br><br><br>
        <hr>
        <br><br><br><br>
 <?php 

	$host="localhost"; 		
	$username="root"; 		
	$password=""; 			
	$db_name="login"; 		
	$tbl_name="signup"; 	
	
	$conn =mysqli_connect($host,$username,$password,$db_name);
	if (mysqli_connect_error()) 
	{
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}



	$fname=$_POST['fname']; 
    $lname=$_POST['lname'];
	$mobile=$_POST['mobile']; 
	$pswd=$_POST['pswd']; 
	$cpswd=$_POST['cpswd']; 
	$adrs=$_POST['adrs']; 

	
	$fname = stripslashes($fname);	
	$lname = stripslashes($lname);
	$mobile = stripslashes($mobile);
	$pswd = stripslashes($pswd);
	$cpswd = stripslashes($cpswd);
	$adrs = stripslashes($adrs);
	$fname = mysqli_real_escape_string($conn, $fname);
	$lname = mysqli_real_escape_string($conn, $lname);
	$mobile = mysqli_real_escape_string($conn, $mobile);
	$pswd = mysqli_real_escape_string($conn, $pswd);
	$cpswd = mysqli_real_escape_string($conn, $cpswd);
	$adrs = mysqli_real_escape_string($conn, $adrs);
	$sql = "insert into $tbl_name(fname,lname,mobile,pswd,cpswd,adrs)values('$fname','$lname','$mobile','$pswd','$cpswd','$adrs')";


	if ($conn->query($sql) === TRUE) {
    echo "Welcome to the PEPPER TAP family";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

	 
	
	?>

	
</body>
</html>

