import bodyParser from 'body-parser' ;
import express from 'express' ;
import { getAllFoodWithPrisma, getFoodWithPrisma, createFoodWithPrisma, updateFoodWithPrisma, deleteFoodWithPrisma} from '../index.js' 
const app = express (); 
const PORT = 3000;

app.use(bodyParser.json()); 

//Trae lo que pido
app.get("/menu", async (req, res) => {
const menus = await getAllFoodWithPrisma()
res.json(menus)
})

//Trae lo que quiero según su ID
app.get("/menu/:id", async (req, res) => {
const id = req.params.id
const menu = await getFoodWithPrisma(id)
res.json(menu)
})

//Agrega a menu lo que quieras
app.post("/menu/create", async (req, res) => {
const { title, contents } = req.body
const menu = await createFoodWithPrisma(title, contents)
res.status(201).json(menu)
})
//Modifica de menu lo que quieras
app.put("/menu/:id", async (req, res) => {
const id = req.params.id
const { title, contents } = req.body
const menu = await updateFoodWithPrisma(title, contents, id)
res.json(menu)
})
//Borra de menu lo que quieras
app.delete("/menu/:id", async (req, res) => {
const id = req.params.id
const success = await deleteFoodWithPrisma(id)
res.json({ success })
})

//Alert de que algo no funciona
app.use((err, req, res, next) => {
console.error(err.stack)
res.status(500).json('Something broke 💩')
})

app.listen(PORT, () => 
console.log(`server running on port: http://localhost:${PORT}`));