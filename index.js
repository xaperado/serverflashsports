import express from 'express';
import noticia from './noticia.js';
import campeonatos from './campeonatos.js';
import cors from 'cors'

const port = process.env.PORT || 3333;


const app = express();
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
 res.json(noticia);
})
app.get('/campeonatos', (req, res) => {
  res.json(campeonatos);  
})

app.listen(port, ()=> {
  console.log("rodando porta 3333")
})