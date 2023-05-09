const express  = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express(); 

const port = process.env.PORT || 3000; 


require('dotenv').config();

/*middlewares --- a middleware is a function that will have all the access for requesting an object, 
responding to an object and moving to the next middleware function in the app request- response cycle.*/ 
app.use(express.urlencoded( { extended: true }));
app.use(express.static('public')); //a folder to store images and other files 
app.use(expressLayouts);  

app.set('layout', './layouts/main'); 
app.set('view engine', 'ejs'); //we are using ejs as an view Engine others are hbs 

//we create our routes, a route is how my application responds to a client request via URI or HTTP requests(GET, POST, PUT, DELETE)
const routes = require('./server/routes/sellinNaijaRoutes.js')
app.use('/', routes)

app.listen(port,() => console.log(`Server running at localhost: port ${port}`))
