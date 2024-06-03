const database = 'BD3-NoSQL-Produtos'

const collection = 'bd3-nosql-atv7'

use(database)

// MAIOR QUE 700
db[collection].find({"preco": {$gt: 700}})

// MENOR QUE 450
db[collection].find({"preco": {$lt: 450}})

// MAIOR OU IGUAL A 500 E MENOR OU IGUAL A 950
db[collection].find({ "preco": { $lte: 950, $gte: 500 } })

// TESTE DE REQUISIÇÃO SEM CRITÉRIO DE BUSCA, MAS POR EXCLUSÃO DE CAMPOS (INCLUINDO UM CAMPO "ÚNICO")
// db[collection].find(
//     {}, //DEFININDO UM CRITÉRIO (NULO) PRA BUSCA
//     {"_id" : 0, "codigo" : 0, "imagem" : 0, "categoria": 0} //DEFININDO ELEMENTOS COMO FALSE PARA EXCLUIR DA BUSCA
// )