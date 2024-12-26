"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Loader2 } from 'lucide-react'

interface TransactionStatusProps {
  isProcessing: boolean
  hash?: string
}

export function TransactionStatus({ isProcessing, hash }: TransactionStatusProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isProcessing) {
      const interval = setInterval(() => {
        setProgress(p => p < 100 ? p + 10 : 100)
      }, 200)
      return () => clearInterval(interval)
    } else {
      setProgress(0)
    }
  }, [isProcessing])

  if (!isProcessing && !hash) return null

  return (
    <Card className="mt-4">
      <CardContent className="pt-4">
        {isProcessing ? (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Processing blockchain transaction...</span>
            </div>
            <Progress value={progress} />
          </div>
        ) : hash ? (
          <div className="space-y-1">
            <p className="text-sm font-medium">Transaction Complete</p>
            <p className="text-xs font-mono text-muted-foreground">{hash}</p>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}