const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//server port & DB uri
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

//express app
const app = express();

//midleware
app.use(cors());
app.use(express.json());

//import routes
const adminRoutes = require('./routes/admins')
const inventoryRoutes = require('./routes/inventory')
const ownerRoutes = require('./routes/owners')
const medicineRoutes = require('./routes/medicines')
const pharmacyRoutes = require('./routes/pharmacies')


app.use('/admins',adminRoutes)
app.use('/inventories',inventoryRoutes)
app.use('/owners',ownerRoutes)
app.use('/medicines',medicineRoutes)
app.use('/pharmacies',pharmacyRoutes)
    

//connect DB
mongoose.connect(uri,{useNewUrlParser: true})
    .then(()=>{
        app.listen(port, ()=>{
            console.log('Connected to DB && server running on port:'+port);
        })
    });