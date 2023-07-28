require("dotenv").config()

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.models')
const jwt = require('jsonwebtoken')
app.use(cors());
app.use(express.json());

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

mongoose.connect('mongodb://127.0.0.1:27017/data');  

app.post('/api/signup', async (req, res) => {

 
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordRepeat: req.body.passwordRepeat, 
    });

    res.json({ status: 'ok' });
  } catch (err) {
    res.json({ status: 'error', error: 'Duplicated email' }); 
  }
});

app.post('/api/login', async (req, res) => {
 
  const user = await User.findOne({
    name: req.body.name,
    password: req.body.password,
})
if(user){
  const token = jwt.sign({
       name: req.body.name,
       email: req.body.email,
      
  }, 'secret123')
  return res.json({status:'ok', user: true})
}else {
  return res.json({status: 'error', user: false})
}
});

//stripe cecktout 
app.post("/create-checkout-session", async (req, res) => {
  try {
    const storeItems = {
      1: { priceInCents: 2000, name: "T-shirt" },
      2: { priceInCents: 3000, name: "Cap" },
      // Add more items as needed
    };

    console.log("Request items:", req.body.items);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems[item.id];
        if (!storeItem) {
          throw new Error(`Item with id ${item.id} not found in storeItems.`);
        }

        return {
          price_data: {
            currency: "zar",
            product_data: {
              name: item.name, // Use the 'name' property from the item sent in the request
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    console.log("Session:", session);

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


app.listen(8000, () => {
  console.log('server started'); 
});
 