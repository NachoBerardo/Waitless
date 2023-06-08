import express from 'express';
//Browser can only make get request
const router = express.Router();
const users = [
    {
    comida: "Milanesa",
    adicion : "con Papas",
    precio : 800
    },
    {
        comida: "Fideos",
        adicion : "con Tuco",
        precio : 300
    }
]

//las routes empiezan con /users
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req,res) => {

});
export default router;