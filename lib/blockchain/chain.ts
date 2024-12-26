import { Block, Transaction } from './types'
import { generateHash, signTransaction } from './utils'
import { contracts } from './contracts'

class Blockchain {
  private chain: Block[]
  private pendingTransactions: Transaction[]
  private contracts: typeof contracts

  constructor() {
    this.chain = [this.createGenesisBlock()]
    this.pendingTransactions = []
    this.contracts = contracts
  }

  private createGenesisBlock(): Block {
    return {
      index: 0,
      timestamp: Date.now(),
      data: 'Genesis Block',
      previousHash: '0',
      hash: generateHash('Genesis Block'),
      nonce: 0,
    }
  }

  async addMedicalRecord(data: any): Promise<string> {
    const transaction: Transaction = {
      id: generateHash(JSON.stringify(data)),
      type: 'RECORD',
      data,
      timestamp: Date.now(),
      signature: signTransaction(data),
    }
    
    this.pendingTransactions.push(transaction)
    await this.mineBlock() // Simulate mining
    return transaction.id
  }

  async processInsuranceClaim(claim: any): Promise<void> {
    const transaction: Transaction = {
      id: generateHash(JSON.stringify(claim)),
      type: 'CLAIM',
      data: claim,
      timestamp: Date.now(),
      signature: signTransaction(claim),
    }
    
    this.pendingTransactions.push(transaction)
    await this.mineBlock()
    
    // Update claim status in smart contract
    this.contracts.claims.state.claimStatus.set(claim.id, 'PROCESSING')
  }

  async updateRewardBalance(address: string, amount: number): Promise<void> {
    const currentBalance = this.contracts.rewards.state.balances.get(address) || 0
    this.contracts.rewards.state.balances.set(address, currentBalance + amount)
  }

  private async mineBlock(): Promise<void> {
    // Simulate block mining with delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const block: Block = {
      index: this.chain.length,
      timestamp: Date.now(),
      data: this.pendingTransactions,
      previousHash: this.chain[this.chain.length - 1].hash,
      hash: '',
      nonce: 0,
    }
    
    block.hash = generateHash(JSON.stringify(block))
    this.chain.push(block)
    this.pendingTransactions = []
  }

  getChain(): Block[] {
    return this.chain
  }

  verifyChain(): boolean {
    return true // Simplified verification
  }
}

// Export singleton instance
export const blockchain = new Blockchain()