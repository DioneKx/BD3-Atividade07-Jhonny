const database = 'BD3-NoSQL-Produtos'

const collection = 'bd3-nosql-atv7'

use(database)

const data = [
    {
        "codigo": "1",
        "produto": "Cerveja",
        "preco": 600.50,
    },
    {
        "codigo": "2",
        "produto": "Fralda",
        "preco": 500,
    },
    {
        "codigo": "3",
        "produto": "Livros",
        "preco": 400,
    },
    {
        "codigo": "4",
        "produto": "Frutas",
        "preco": 1000,
    },
    {
        "codigo": "5",
        "produto": "Vinho",
        "preco": 750.20,
    },
    {
        "codigo": "6",
        "produto": "Pão",
        "preco": 900,
    },
    {
        "codigo": "7",
        "produto": "Bola de Futsal",
        "preco": 150.20,
    },
    {
        "codigo": "8",
        "produto": "Chocolate Rochê",
        "preco": 800,
    },
    {
        "codigo": "9",
        "produto": "Tic-Tac",
        "preco": 250.99,
    },
    {
        "codigo": "10",
        "produto": "Bola de Cristal",
        "preco": 850,
    },
]

//INSERÇÃO DE MULTIPLOS DOCUMENTOS DE DADOS NA COLLECTION
db[collection].insertMany(data);