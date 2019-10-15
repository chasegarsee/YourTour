const functions = require('firebase-functions');
const admin = require("firebase-admin");
const express = require("express");

const serviceAccount = require("/Users/FW_Digital_Media/Documents/git/YourTour/BackEnd/your-tour-functions/your-tour-2a49d-firebase-adminsdk-kelob-5de597f5ed.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://your-tour-2a49d.firebaseio.com"
});

const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));


const db = admin.firestore()

app.get('/restaurants', (req, res) => {
    db.collection("restaurants")
        .get()
        .then(data => {
            let restaurants = []
            data.forEach(doc => {
                restaurants.push({
                    restaurantsId: doc.id,
                    ...doc.data()
                })
            });
            return res.json(restaurants);
        })
        .catch((err) => console.error(err))
});

app.post('/restaurant', (req, res) => {
    const newRestaurant = {
        address: req.body.address,
        description: req.body.description,
        genre: req.body.genre,
        name: req.body.name,
        website: req.body.website,
    }
    db.collection("restaurants")
        .add(newRestaurant)
        .then(doc => {
            res.json({ message: `document ${doc.id} created successfully` })
        })
        .catch(err => {
            res.status(500).json({ error: "Something went Wrong" })
            console.error(err)
        })
})



app.get('/packages', (req, res) => {
    db.collection("oneDayPackage")
        .get()
        .then((data) => {
            let packages = []
            data.forEach(doc => {
                packages.push({
                    packagesId: doc.id,
                    ...doc.data()
                })
                console.log("THIS THE DOC", doc)
            });
            return res.json(packages);
        })
        .catch((err) => console.error(err))
});

app.post('/package', (req, res) => {
    const newPackage = {
        attractions: {
            description: req.body.attractions.description,
            name: req.body.attractions.name,
            type: req.body.attractions.type
        },
        bars: {
            description: req.body.bars.description,
            name: req.body.bars.name,
            website: req.body.bars.website
        },
        restaurants: {
            description: req.body.restaurants.description,
            name: req.body.restaurants.name,
            genre: req.body.restaurants.genre,
            website: req.body.restaurants.website
        },
        price: req.body.price
    }
    db.collection("oneDayPackage")
        .add(newPackage)
        .then(doc => {
            res.json({ message: `document ${doc.id} created successfully` })
        })
        .catch(err => {
            res.status(500).json({ error: "Something went Wrong" })
            console.error("Something Whent Wrong", err)
        })
})

exports.api = functions.https.onRequest(app)