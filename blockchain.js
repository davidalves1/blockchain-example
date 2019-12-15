const Block = require('./block')

class Blockchain {
    constructor() {
        this.blocks = [new Block()]
        this.index = 1
    }

    getLasBlock() {
        const lastKey = this.blocks.length - 1
        return this.blocks[lastKey]
    }

    addBlock(data) {
        const index = this.index
        const previousHash = this.getLasBlock().hash
        
        const block = new Block(index, previousHash, data)

        this.index += 1

        this.blocks.push(block)
    }

    getAllBlocks() {
        return this.blocks.map((block) => {
            return {
                index: block.index,
                hash: block.hash,
                data: block.data,
                timestamp: block.timestamp
            }
        })
    }

    getOneBlock(hash) {
        const blocks = this.blocks.filter((block) => {
            return block.hash = hash;
        });

        if (blocks.length === 0) {
            return false;
        }

        return {
            index: block[0].index,
            hash: block[0].hash,
            data: block[0].data,
        }
    }

    isValid() {
        for (let i = 1; i < this.blocks.length; i++) {
            const currentBlock = this.blocks[i]
            const previousBlock = this.blocks[i - 1]
    
            if (currentBlock.hash !== currentBlock.generateHash()) {
                return false
            }
    
            if (currentBlock.index !== previousBlock.index + 1) {
                return false
            }
    
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false
            }
        }
        return true
    }
}

module.exports = Blockchain