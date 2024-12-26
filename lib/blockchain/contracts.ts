import { SmartContract } from './types'

export const contracts = {
  records: {
    address: '0x1234...5678',
    type: 'MedicalRecords',
    state: {
      accessControl: new Map(),
      recordHashes: new Set(),
    },
  },
  claims: {
    address: '0x5678...1234',
    type: 'InsuranceClaims',
    state: {
      claimStatus: new Map(),
      verifiedProviders: new Set(),
    },
  },
  rewards: {
    address: '0x9abc...def0',
    type: 'HealthRewards',
    state: {
      balances: new Map(),
      achievements: new Map(),
    },
  },
} as Record<string, SmartContract>