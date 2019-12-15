const Blockchain = require('./blockchain')

const blockchain = new Blockchain()
blockchain.addBlock({ amount: 4 })
blockchain.addBlock({ amount: 50 })

blockchain.blocks[1].data.amount = 30000 // ataque malicioso

console.log(blockchain.getAllBlocks())

console.log(`\n### The blockchain is valid: ${blockchain.isValid() ? 'YES :D' : 'NO :\'('}`) // false