<!DOCTYPE html>
<html ng-app="myApp">
<head>
<meta charset="ISO-8859-1">
<title>Home page for angular js</title>
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
</head>
<body>

<nav class="navbar navbar-default">
  <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Angular Routing</a>
      </div>

      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
         <li><a href="#registration"><i class="fa fa-shield"></i> Registartion</a></li>
        <li><a href="#login"><i class="fa fa-shield"></i>Login</a></li> 
      </ul>
    </div>

</nav>

  <div id="main">
    <div ng-view></div>
    
  </div>

 <!-- <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
 <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.min.js"></script> -->
 <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>
 <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular-route.min.js"></script>
 <script src="js/app.js"></script>
 <script src="user/userServices.js"></script>
 <script src="user/userController.js"></script>
</body>
</html>