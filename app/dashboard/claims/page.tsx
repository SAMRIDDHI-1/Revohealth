"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CreditCard, FileText, AlertCircle, CheckCircle2, Clock } from "lucide-react"

const mockClaims = [
  {
    id: 1,
    title: "Annual Check-up",
    date: "2024-03-01",
    amount: 150.00,
    status: "Approved",
    provider: "City Medical Center",
    claimNumber: "CLM-2024-001",
    progress: 100,
  },
  {
    id: 2,
    title: "Dental Cleaning",
    date: "2024-02-15",
    amount: 85.00,
    status: "Processing",
    provider: "Smile Dental Clinic",
    claimNumber: "CLM-2024-002",
    progress: 60,
  },
  {
    id: 3,
    title: "Blood Tests",
    date: "2024-02-01",
    amount: 200.00,
    status: "Pending",
    provider: "City Medical Center",
    claimNumber: "CLM-2024-003",
    progress: 30,
  },
]

export default function ClaimsPage() {
  const [claims] = useState(mockClaims)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "Processing":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "Pending":
        return <AlertCircle className="h-4 w-4 text-blue-500" />
      default:
        return null
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Insurance Claims</h1>
          <p className="text-muted-foreground">
            Track and manage your insurance claims
          </p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Submit New Claim
        </Button>
      </div>

      <div className="grid gap-4">
        {claims.map((claim) => (
          <Card key={claim.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xl flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                {claim.title}
              </CardTitle>
              <div className="flex items-center space-x-2">
                {getStatusIcon(claim.status)}
                <span className="text-sm font-medium">{claim.status}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Claim Number:</span>
                    <span>{claim.claimNumber}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Date:</span>
                    <span>{claim.date}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Provider:</span>
                    <span>{claim.provider}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Amount:</span>
                    <span>${claim.amount.toFixed(2)}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Processing Progress</span>
                    <span>{claim.progress}%</span>
                  </div>
                  <Progress value={claim.progress} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}