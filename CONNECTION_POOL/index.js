const express = require("express")
const exphbs = require("express-handlebars")
const pool = require("./db/conn")

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

    pool.query(query, function (err) {
        if (err) {
            console.log(err)
        }

        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const query = "SELECT * FROM books"

    pool.query(query, function (err, data) {
        if (err) {
            console.log(err)
        }

        const books = data

        res.render('books', { books })

    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id
    const query = `SELECT * FROM books WHERE idbooks = ${id}`

    pool.query(query, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const book = data[0]

        res.render('book', { book })
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id
    const query = `SELECT * FROM books WHERE idbooks = ${id}`

    pool.query(query, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const book = data[0]

        res.render('editbooks', { book })
    })
})

app.post('/books/updatebook', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const query = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE idbooks = ${id}`

    pool.query(query, function (err) {
        if (err) {
            console.log(err)
        }

        res.redirect('/books')
    })
})

app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id

    const query = `DELETE FROM books WHERE idbooks = ${id}`

    pool.query(query, function (err) {
        if (err) {
            console.log(err)
        }

        res.redirect('/books')
    })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})