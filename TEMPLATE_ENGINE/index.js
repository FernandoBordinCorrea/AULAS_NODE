const express = require("express")
const exphbs = require("express-handlebars")
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})
const app = express()

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const itens = ["a","b","c"] 

    res.render('dashboard',{ itens })
})

app.get('/post',(req,res)=>{
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Estou aprendendo Node.js',
        comments: 4,
    }

    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    posts = [
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Estou aprendendo Node.js',
            comments: 4 
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Estou aprendendo PHP',
            comments: 123
        },
        {
            title: 'Aprender C',
            category: 'C',
            body: 'Estou aprendendo C',
            comments: 6
        },
    ]

    res.render('blog', { posts })
})

app.get('/', (req, res) => {
    const users = {
        name: 'Fernando',
        surname: 'Correa',
    }

    const auth = false

    res.render('home',{ users:users, auth })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})