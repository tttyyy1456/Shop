const path = require('path');
const express = require('express');
const app = express();

// Set a template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
const rootDir = require('./utils/path.js');


const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const errorController = require('./controllers/errorCtrl');


app.use(bodyParser.urlencoded( {extended:true} ));
//Serving CSS (directing path to public folder)
app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(errorController.getNotFound)


//Listening to server
app.listen(8080, ()=>{
    console.log('listening to port 8080')
})