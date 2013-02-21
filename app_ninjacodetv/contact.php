<!DOCTYPE html>
<html>
<head>
    <title>Ninjacode.tv</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maxium-scale=1" />
    <link rel="stylesheet" type="text/css" href="./assets/css/jquery.mobile-1.2.0.min.css" />
    <link rel="stylesheet" type="text/css" href="./assets/css/jquery.mobile.theme-1.2.0.min.css">
    <script type="text/javascript" src="./assets/js/jquery.js"></script>
    <script type="text/javascript" src="./assets/js/jquery.mobile-1.2.0.js"></script>
    <script type="text/javascript" src="./assets/js/initial.js"></script>
</head>
<body>
	<!-- first page: home -->
	<div data-role="dialog">
      <div data-role="header">
            <h1>Contactenos</h1>
        </div>
        <div data-role="content">
            <h1>Gracias por su contacto</h1>
            <?php
                // Validation
                phpcredits();
            ?>

            <a data-role="button" data-inverse="true" href="index.html">Cerrar</a>
        </div>
    </div>
</body>
</html>