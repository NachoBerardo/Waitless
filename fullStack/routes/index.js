import bodyParser from 'body-parser' ;
import express from 'express' ;
//import usersRoutes from './routes/users.js';

const app = express () ;// initalize express application. The whole application lies in this function.
const PORT = 5000;

app.use(bodyParser.json()); //saying we will use js data in whole app

//app.use('/users', usersRoutes);

app.get("/notes", async (req, res) => {
    const notes = await getNotes()
    res.send(notes)
  })
  
  app.get("/notes/:id", async (req, res) => {
    const id = req.params.id
    const note = await getNote(id)
    res.send(note)
  })
  
  app.post("/notes", async (req, res) => {
    const { title, contents } = req.body
    const note = await createNote(title, contents)
    res.status(201).send(note)
  })
  
  app.put("/notes/:id", async (req, res) => {
    const id = req.params.id
    const { title, contents } = req.body
    const note = await updateNote(title, contents, id)
    res.send(note)
  })
  
  app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id
    const success = await deleteNote(id)
    res.send({ success })
  })
  
  
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
  })
  
  app.listen(PORT, () => 
    console.log(`server running on port: http://localhost:${PORT}`));