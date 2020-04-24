module.exports = (/*options*/) => {
  // Use options.server to access http.Server. Example with socket.io:
  //     const io = require('socket.io')(options.server)
  //   const app = require('express')()
  //   var fs = require('fs');

  var express = require("express");
  var fs = require("fs");
  var cors = require('cors');

  var whitelist = ['http://localhost:800', 'http://locahost*']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
  


  const app = express();
  app.use(cors());
  var obj = {
    org: "carz",
    lic: "KAAFAQQQQDDAS",
    users: [
      {
        name: "Charan",
        img: "https://i.pravatar.cc/300",
        org: "finance",
        plate: "KA 01 6648",
        model: "2018",
        status: "warning",
        history: [
          { date: '02-02-2020', Type: "Oil Change", Comments: "All Service Done" },
          { date: '01-09-2019', Type: "Brake Pad Change", Comments: "Car Cleaning done with all the brakes chacked and replaced as per needed" },
          { date: '03-05-2019', Type: "First Service Checkup", Comments: "Car Cleaning done with all the brakes chacked and replaced as per needed" },
        ],
        duedate: '2020-03-25T17:13:53.596+05:30'
      },
      {
        name: "varun",
        img: "https://i.pravatar.cc/300",
        org: "sales",
        plate: "KA 02 5668",
        model: "2019",
        status: "checkmark-done-outline",
        history: [
          { date: '03-05-2019', Type: "First Service Checkup", Comments: "Car Cleaning done with all the brakes chacked and replaced as per needed" },
        ],
        duedate: '2020-05-20T17:13:53.596+05:30'
      },
      {
        name: "arun",
        img: "https://i.pravatar.cc/300",
        org: "marketing",
        plate: "AP 05 1423",
        model: "2013",
        status: "checkmark-done-outline",
        history: [
          { date: '03-05-2019', Type: "First Service Checkup", Comments: "Car Cleaning done with all the brakes chacked and replaced as per needed" },
        ],
        duedate: '2021-04-20T17:13:53.596+05:30'
      },
      {
        name: "kapil",
        img: "https://i.pravatar.cc/300",
        org: "finance",
        plate: "KA 03 1011",
        model: "2020",
        status: "checkmark-done-outline",
        history: [
          { date: '03-05-2019', Type: "First Service Checkup", Comments: "Car Cleaning done with all the brakes chacked and replaced as per needed" },
        ],
        duedate: '2019-10-20T17:13:53.596+05:30'
      },
      {
        name: "vamsi",
        img: "https://i.pravatar.cc/300",
        org: "sales",
        plate: "KA 06 6435",
        model: "2018",
        status: "warning",
        history: [
          { date: '03-05-2019', Type: "First Service Checkup", Comments: "Car Cleaning done with all the brakes chacked and replaced as per needed" },
        ],
        duedate: '2021-05-04T17:13:53.596+05:30'
      },
      {
        name: "keshava",
        img: "https://i.pravatar.cc/300",
        org: "NA",
        plate: "KA 02 6648",
        model: "2019",
        status: "checkmark-done-outline",
        history: [
          { date: '03-05-2019', Type: "First Service Checkup", Comments: "Car Cleaning done with all the brakes chacked and replaced as per needed" },
        ],
        duedate: '2019-10-12T17:13:53.596+05:30'
      },
      {
        name: "Dheeraj",
        img: "https://i.pravatar.cc/300",
        org: "finance",
        plate: "KA 03 2237",
        model: "2020",
        status: "checkmark-done-outline",
        history: [
          { date: '03-05-2019', Type: "First Service Checkup", Comments: "Car Cleaning done with all the brakes chacked and replaced as per needed" },
        ],
        duedate: '2020-06-07T17:13:53.596+05:30'
      },
      {
        name: "Charan",
        img: "https://i.pravatar.cc/300",
        org: "finance",
        plate: "KA 01 6648",
        model: "2018",
        status: "warning",
        history: [
          { date: '03-05-2019', Type: "First Service Checkup", Comments: "Car Cleaning done with all the brakes chacked and replaced as per needed" },
        ],
        duedate: '2019-12-17T17:13:53.596+05:30'
      },
      {
        name: "vidya",
        img: "https://i.pravatar.cc/300",
        org: "finance",
        plate: "KA 05 2231",
        model: "2018",
        status: "checkmark-done-outline",
        history: [
          { date: '03-05-2019', Type: "First Service Checkup", Comments: "Car Cleaning done with all the brakes chacked and replaced as per needed" },
        ],
        duedate: '2020-06-20T17:13:53.596+05:30'
      },
      {
        name: "manju",
        img: "https://i.pravatar.cc/300",
        org: "finance",
        plate: "KA 01 0148",
        model: "2019",
        status: "checkmark-done-outline",
        history: [
          { date: '03-05-2019', Type: "First Service Checkup", Comments: "Car Cleaning done with all the brakes chacked and replaced as per needed" },
        ],
        duedate: '2020-07-20T17:13:53.596+05:30'
      }
    ]
  };

  app.use(express.json());
  var json = JSON.stringify(obj);
  console.log("da");

  fs.writeFile("sample.json", json, function(err) {
    if (err) throw err;
    console.log("File Created done");
  });

  // app.listen(4000, () => {
  //   fs.writeFile("sample.json", json, function(err) {
  //     if (err) throw err;
  //     console.log("done");
  //   });
  //   console.log("Running on port 4000");
  // });

  app.get("/get", (req, res) => {
    console.log("das");
    var contents = fs.readFileSync("sample.json", "utf8");
    console.log(contents);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(contents);
  });

  app.get("/", (req, res) => {
    // Use req.log (a `pino` instance) to log JSON:
    req.log.info({ message: "Hello  Appsody!" });
    // res.send('Hello from Apd!');
    res.json({ Running: [{ Greeting: "Server up and running" }] });
  });

  app.post("/submit", (req, res) => {
    var arrayOfObjects;
    res.setHeader('Access-Control-Allow-Origin', '*');

    console.log("\n\n\nCharan : ",req.body)
  console.log("\n\nreached\n")
    // req.log.info({ message: "Hello f Appsody!" });
    fs.readFile('sample.json', 'utf-8', function(err, data) {
      if (err) throw err
    
      arrayOfObjects = JSON.parse(data)
      // arrayOfObjects.users.push(
      //   {
      //     name: "A",
      //     img: "https://i.pravatar.cc/300",
      //     org: "finance",
      //     plate: "KA 01 6648",
      //     model: "2018",
      //     status: "warning"
      //   }
      // )
      arrayOfObjects.users.push(req.body)

      console.log(arrayOfObjects)

      fs.writeFile("sample.json", JSON.stringify(arrayOfObjects), function (err) {
        if (err) throw err;
        console.log("File Created done");
        res.status(200);
        // res.json({ "a": "b" });
        
        var contents = fs.readFileSync("sample.json", "utf8");
        console.log(contents);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(contents);
      });
    })

  });

  return app;
};
