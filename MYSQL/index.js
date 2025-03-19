const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")

const app = express()
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

app.get('/', (req, res) => {

    res.render('home')
})

app.post('/books/insertbook', (req, res) => {

    const title = req.body.title
    const pageqty = req.body.pageqty

    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}','${pageqty}')`

    conn.query(query, function (err) {
        if (err) {
            console.log(err)
        }

        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const query = "SELECT * FROM books"

    conn.query(query, function (err, data) {
        if (err) {
            console.log(err)
        }

        const books = data

        res.render('books', { books })

    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect((err) => {
    if (err) {
        console.log(err)
    }
    console.log("Conectado com sucesso!")
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    })
})

