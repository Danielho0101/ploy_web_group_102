

<?php
$username = $_POST['username'];
$password = $_POST['password'];

?>

<html>
    <head>
    <style>
        h1 {
            text-align:center;
        }
    </style>
    </head>
    <body>
        <h1>Hello member <?php echo $username ?> Wellcome to our shop</h1>
        <h1>This is password <?php echo $password?> .</h1>
    </body>

</html>