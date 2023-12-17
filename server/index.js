const express = require("express");
const app =express();
const cors = require("cors");
const pool = require("./database");
const bcrypt = require("bcrypt");

//middleware
app.use(cors());
app.use(express.json());

app.post("/adduser",(req,res) =>{
    const username = req.body["username"];
    const password = req.body["password"];


    //not really necessary,just to check whether there is error
    console.log("Username:" + username);
    console.log("Password:" + password);

    const insertSTMT =`INSERT INTO accounts( username, password ) VALUES ('${username}' ,'${password}');`
    pool.query(insertSTMT).then((response) =>{
        console.log("Data Saved");
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    }); 

    console.log(req.body); 
    res.send("Response Recieved: " + req.body);
});
app.post("/checkuser", async (req, res) => {
  try {
    const { username, password } = req.body;

    const selectSTMT = " SELECT * FROM accounts WHERE username = $1 AND password = $2";
    const user = await pool.query(selectSTMT, [username, password]);

    if (user.rows.length === 1) {
      res.json({ isValid: true, message: "Login successful" });
    } else {
      res.json({ isValid: false, message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ isValid: false, message: "Server error" });
  }
});
//post meet
app.post("/meet",(req,res)=>{
    
    const parentname =req.body["parentname"];
    const petname = req.body["petname"];
    const meetdate = req.body["meetdate"];
    const phonenumber =req.body["phonenumber"];
    const description =req.body["description"];

   
    console.log("parentname" + parentname);
    console.log("petname" + petname);
    console.log("meetdate" + meetdate);
    console.log("phonenumber" + phonenumber);
    console.log("description" + description);

    const insertSTMT = `INSERT INTO meet (parentname, petname, meetdate, phonenumber, description) VALUES ('${parentname}', '${petname}', '${meetdate}', '${phonenumber}', '${description}');`
    pool.query(insertSTMT).then((response) =>{
        console.log("Data Saved");
        console.log(response);
})
.catch((err) => {
    console.log(err);
});



console.log(req.body); 
res.send("Response Recieved: " + req.body);
});
//real meet
app.post("/realmeet",(req,res)=>{
    
  const parentname =req.body["parentname"];
  const petname = req.body["petname"];
  const category = req.body["category"];
  const meetdate = req.body["meetdate"];
  const phonenumber =req.body["phonenumber"];
  const description =req.body["description"];

 
  console.log("parentname" + parentname);
  console.log("petname" + petname);
  console.log("category" + category);
  console.log("meetdate" + meetdate);
  console.log("phonenumber" + phonenumber);
  console.log("description" + description);

  const insertSTMT = `INSERT INTO realmeet (parentname, petname, category, meetdate, phonenumber, description) VALUES ('${parentname}', '${petname}','${category}' ,'${meetdate}', '${phonenumber}', '${description}');`
  pool.query(insertSTMT).then((response) =>{
      console.log("Data Saved");
      console.log(response);
})
.catch((err) => {
  console.log(err);
});

console.log(req.body); 
res.send("Response Recieved: " + req.body);
});
app.post("/cat", (req, res) => {
  const catname = req.body["catname"];
  const gender = req.body["gender"];
  const age = req.body["age"];
  const location = req.body["location"];
  const ownername = req.body["ownername"];
  const phonenumber = req.body["phonenumber"];

  const insertSTMT = `INSERT INTO cat (catname, gender, age, location, ownername, phoneno) VALUES ('${catname}', '${gender}', '${age}', '${location}', '${ownername}', '${phonenumber}') RETURNING cat_id;`;

  pool.query(insertSTMT)
    .then((response) => {
      const insertedCatId = response.rows[0].cat_id;
      console.log("Data Saved. Inserted cat_id:", insertedCatId);
      console.log(response);
      res.send("Data Saved. Inserted cat_id: " + insertedCatId);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error saving data.");
    });
});



//get dogs

app.get("/dog",async(req, res)=>{
  try{
    const petData =await pool.query("SELECT * FROM dog");
    const catdata =await pool.query("SELECT * FROM cat");
    const birddata =await pool.query("SELECT * FROM bird");
    console.log(petData.rows);
 
    res.json(petData.rows)
    

  }
  catch(err)
  {
    console.error(err.message)
  }
})
app.get("/cat",async(req, res)=>{
  try{
    const catdata =await pool.query("SELECT * FROM cat");
    console.log(catdata.rows);
 
    res.json(catdata.rows)
    

  }
  catch(err)
  {
    console.error(err.message)
  }
});
app.get("/bird",async(req, res)=>{
  try{
    const birddata =await pool.query("SELECT * FROM bird");
    console.log(birddata.rows);
 
    res.json(birddata.rows)
    

  }
  catch(err)
  {
    console.error(err.message)
  }
});
//get meet
app.get("/meet",async(req, res)=>{
  try{
    const meetdata =await pool.query("SELECT * FROM meet");
    console.log(meetdata.rows);
 
    res.json(meetdata.rows)
    

  }
  catch(err)
  {
    console.error(err.message)
  }
});


app.get("/realmeet",async(req, res)=>{
  try{
    const meetdata =await pool.query("SELECT * FROM realmeet");
    console.log(meetdata.rows);
 
    res.json(meetdata.rows)
    

  }
  catch(err)
  {
    console.error(err.message)
  }
});


//delete meet

app.delete("/meet/:id",async(req, res)=>{
  try{
    const {id} =req.params;
    const deletemeet =await pool.query("DELETE FROM meet WHERE meet_id =$1",[id]);
   
 
    res.json('Todo was deleted');
    

  }
  catch(err)
  {
    console.error(err.message)
  }
});


//update meet

app.put("/meet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {description} =req.body;
    const updatemeet = await pool.query("UPDATE meet SET description =$1 WHERE meet_id=$2",[description,id]);
    res.json("Todo was updated");
  } catch (err) {
    console.error(err.message);
    
  }
  
});




app.listen(5000, () => {
    console.log("server has started on port 5000");
});