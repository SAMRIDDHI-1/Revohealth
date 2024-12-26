"use client"

import { useState } from 'react'
import { blockchain } from '@/lib/blockchain/chain'
import { generateHash, signTransaction } from '@/lib/blockchain/utils'

export function useBlockchain() {
  const [isProcessing, setIsProcessing] = useState(false)

  const uploadMedicalRecord = async (record: any) => {
    setIsProcessing(true)
    try {
      const hash = await blockchain.addMedicalRecord(record)
      return hash
    } finally {
      setIsProcessing(false)
    }
  }

  const submitClaim = async (claim: any) => {
    setIsProcessing(true)
    try {
      await blockchain.processInsuranceClaim(claim)
    } finally {
      setIsProcessing(false)
    }
  }

  const earnRewards = async (address: string, amount: number) => {
    setIsProcessing(true)
    try {
      await blockchain.updateRewardBalance(address, amount)
    } finally {
      setIsProcessing(false)
    }
  }

  return {
    isProcessing,
    uploadMedicalRecord,
    submitClaim,
    earnRewards,
    generateHash,
    signTransaction,
  }
}