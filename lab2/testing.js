// const http = require("http");
// console.log("http");
const express = require("express");
const app = express();
app.use(express.json());

const users =[
  {id: 1, value: "first"},
  {id: 2, value: "sec"},
  {id: 3, value: "third"},
  {id: 4, value: "forth"}
]
app.get("/", (req, res) =>{
  res.send("<h1>hello</h1>")
})
app.get("/users", (req, res) =>{
  res.send(users)
})
// app.get("/users/:id/:name", (req, res) =>{
//   const{id, name} = req.params;
//   res.send(id + "" +name)
// })
// app.get("/users/:id", (req, res) =>{
//   const{id} = req.params;
//   const user = users.find((user) =>
//     user.id === +id);
//
//   res.send(user)
// });
// app.post("/users", (req, res) =>{
//   const{id, name} = req.body.id;
//   const id = user[users.length-1].id+1;
//   users.push()
//   console.log(id, name);
//   res.send("hhh");
//   //req.body.name
//   //users.push()
// })
// app.post("/users", (req, res) =>{
//   const{name} = req.body;
//   const id = users[users.length-1].id+1;
//   users.push({id, name})
//   console.log(id, name);
//   res.send(users);
//   //req.body.name
//   //users.push()
// })
// app.get("/users", (req, res) => {
//   const{name} = req.body;
//   const id = req.params.id;
//   delete users[users + id];
//   res.send(users);
// } )

// app.delete("/users", (req, res) => {
// const{id} = req.params;
// //  const id = users[users.length-1].id;
//   users.splice(id, 1);
//   res.send(users);
// } )

/*--------delete-------*/
/*--------another wrong delete-------*/
// app.delete("/users/:id", (req, res) => {
//  const id = req.params.id-1;
//   //const{value} = req.body;
//   users.splice(id,1);
//   res.send(users);
// } )


app.delete("/users/:id", (req, res) => {
 const id = req.params.id;
  //const{value} = req.body;
  // const index = users.findIndex(function(users){
  //   return users.id === id;
  // })
  const index = users.findIndex(users => users.id === id );
  users.splice(index, 1);
  res.send(users);
} )


/*------another delete------*/

// app.delete("/users", (req, res) => {
// const{name} = req.body;
// const id = req.params.id;
//   users.splice(id,1);
//   res.send(users);
// } )

/*-----wrong delete-----*/

// app.delete("/user", (req, res) => {
// const{name} = req.body;
// const id = req.params;
// const user = users.find((user) =>
//   user.id === users.splice(id,1))
//   res.send(user);
// } )


/*------edit------*/

app.put("/users/:id", (req, res) => {
 const id = req.params.id;
  const{value} = req.body;
const index = users.find(users => users.id === id );
  //const id = users[users.length-1].id-1;
  users[index]["value"] = req.body.value;
  res.send(users);
} )

// app.put("/users/:id", (req, res) => {
//  const id = req.params.id;
//   const{value} = req.body;
//
//   // const index = users.findIndex(function(users){
//   //   return users.id === id;
//   // })
//   const index = users.findIndex(users => users.id === id );
//   users.splice(index, 1, value);
//   res.send(users);
// } )

app.listen(5000, (error)=>{
  console.log("listening");
})

// const server = http.createServer();
// const user =[
// {id: 1, value: "first"},
// {id: 2, value: "second"},
// {id: 3, value: "third"},
// {id: 4, value: "forth"}
// ]
//   server.on("request",  (req, res)=>{
//     //console.log("request from the client");
//     //console.log(req);
//     if (req.url==="/user" && req.method === "GET") {
//       res.write(JSON.stringify(user));
//       res.end()
//     }
//     res.write("<h1>Hello</h1>");
//     res.end();
//   }
// )
//
// server.listen(3000);
