const http = require("http")
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Texto em HTML</h1>')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

