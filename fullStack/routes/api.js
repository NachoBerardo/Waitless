import bodyParser from 'body-parser' ;
import express from 'express' ;
import { getAllFood, getFood, createFood, updateFood, deleteFood} from '../index.js' 
const app = express (); 
const PORT = 5000;

app.use(bodyParser.json()); 

//Trae lo que pido
app.get("/menu", async (req, res) => {
const menus = await getAllFood()
res.js(menus)
})
//Trae lo que quiero según su ID
app.get("/menu/:id", async (req, res) => {
const id = req.params.id
const menu = await getFood(id)
res.js(menu)
})

//Agrega a menu lo que quieras
app.post("/menu/create", async (req, res) => {
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