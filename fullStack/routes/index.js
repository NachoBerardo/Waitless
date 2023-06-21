import bodyParser from 'body-parser' ;
import express from 'express' ;
//import usersRoutes from './routes/users.js';
import { getFood, createFood, updateFood, deleteFood} from './database.js'
const app = express () ;// initalize express application. The whole application lies in this function.
const PORT = 5000;

app.use(bodyParser.json()); //saying we will use js data in whole app

//app.use('/users', usersRoutes);

//Trae lo que pido
app.get("/menu", async (req, res) => {
const menus = await getAllFood()
res.send(menus)
})
//Trae lo que quiero según su ID
app.get("/menu/:id", async (req, res) => {
const id = req.params.id
const menu = await getFood(id)
res.send(menu)
})

//Agrega a menu lo que quieras
app.post("/menu", async (req, res) => {
const { title, contents } = req.body
const menu = await createFood(title, contents)
res.status(201).send(menu)
})
//Modifica de menu lo que quieras
app.put("/menu/:id", async (req, res) => {
const id = req.params.id
const { title, contents } = req.body
const menu = await updateFood(title, contents, id)
res.send(menu)
})
//Borra de menu lo que quieras
app.delete("/menu/:id", async (req, res) => {
const id = req.params.id
const success = await deleteFood(id)
res.send({ success })
})

//Alert de que algo no funciona
app.use((err, req, res, next) => {
console.error(err.stack)
res.status(500).send('Something broke 💩')
})

app.listen(PORT, () => 
console.log(`server running on port: http://localhost:${PORT}`));