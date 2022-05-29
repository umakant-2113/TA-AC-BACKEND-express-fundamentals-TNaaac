const { json } = require('body-parser');
let express = require('express');

let app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});
app.get('/users/:username',(req,res)=>{
let user= req.params.username;
res.send(user)
})

app.post('/form', (req, res) => {
  console.log(req.body)
});
app.listen(4000, () => {
  console.log('server is listening on port 4k');
});
