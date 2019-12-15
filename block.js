const shajs = require('sha.js')

class Block {
	constructor(index = 0, previousHash = null, data = {msg: 'Genesys Block'}) {
		this.index = index
		this.previousHash = previousHash	
		this.data = data
		this.timestamp = new Date()
		this.hash = this.generateHash()
	}

	generateHash() {
		const str = `${this.index}${this.previousHash}${JSON.stringify(this.data)}${this.timestamp}`
		return shajs('sha256').update(str).digest('hex')
	}
}

module.exports = Block