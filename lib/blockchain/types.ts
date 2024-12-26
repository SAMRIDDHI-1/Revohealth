export interface Block {
  index: number
  timestamp: number
  data: any
  previousHash: string
  hash: string
  nonce: number
}

export interface Transaction {
  id: string
  type: 'RECORD' | 'CLAIM' | 'APPOINTMENT' | 'ACCESS'
  data: any
  timestamp: number
  signature: string
}

export interface SmartContract {
  address: string
  type: string
  state: any
}