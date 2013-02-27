
/**
 * Dependencia de modulos.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  /**
   * Este es un controlador para Node.js mysql. 
   * Está escrito en JavaScript, no requiere compilación, 
   * y es 100% MIT licencia.
  */
  , mysql = require('mysql');

var app = express();
/** Parámetros de configuración, se establecen con el método app.set(settingName, value). 
 * - Las vistas se almacenan en la carpeta ./views,ademas   que el formato de templates es jade.
 * - Modulos añadidos a nuestra aplicación para dotarla de más funcionalidad. 
 *   Para usarlas se debe utilizar el método app.use(middleware). Vamos a usar:
 *   - bodyParser: facilita el acceso al cuerpo de las peticiones (requests), si son `posts` de formularios, 
 *     o si son json. Su sintaxis puede ser request.body.personName.
 *   - methodOverride: puede utilizar <input type="hidden"> y modificar el método HTTP de la petición. 
 *   - router: se encarga de gestionar las rutas.
 *   - static: permite servir contenido estático, por ejemplo, CSS, imágenes, Javascript, etc. 
       Todo lo que esté en la carpeta ./public se sirva como contenido estático.
 */
app.configure(function(){
  app.set('port', process.env.PORT || 3535);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});
// Anbiente de desarrollo para la aplicacion `development`
app.configure('development', function(){
  app.use(express.errorHandler());
});
// Estableciendo conexión con el motor de base de datos MySQL
function BD(){
  var cliente = mysql.createConnection({
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: 8891,
    database: 'ninjacodetv_noticias'
  });
  // conectando con MySQL requerimiento de este motor
  cliente.connect();
  return cliente;
}

app.get('/', routes.index);
app.get('/users', user.list);

app.post('/guardar', function(req, res){
  // instanciando objeto para la conexión con la base de datos
  var objBD = BD();
  objBD.query("INSERT INTO `noticias`(`titulo`,`contenido`) VALUES ('" + req.body.txtTitulo + "', '"+req.body.txtPublicacion+"')", function(error){
    if(error){
      console.log(error.message);
    }else{
      console.log('Insertado correctamente en la base de datos');
     objBD.end();
    }
  });

  res.send(req.body.txtPublicacion);
  res.end();
});

app.get('/consultar', function(req, res){
  
  var objBD = BD();
  objBD.query("SELECT * FROM publicacion", function(error, resultado, fila){
    res.render('consultar',  { title: 'Consultar', datos: resultado });
  });
  
  
  //res.end();
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
