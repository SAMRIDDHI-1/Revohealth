"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Lock, Share2, Upload } from "lucide-react"

const mockRecords = [
  {
    id: 1,
    title: "Annual Physical Examination",
    date: "2024-03-01",
    doctor: "Dr. Sarah Johnson",
    type: "Examination",
    hash: "0x7d8f...3e2a",
    shared: ["Dr. Michael Chen"],
  },
  {
    id: 2,
    title: "Blood Test Results",
    date: "2024-02-15",
    doctor: "Dr. Michael Chen",
    type: "Laboratory",
    hash: "0x3a9c...8f1b",
    shared: [],
  },
  {
    id: 3,
    title: "COVID-19 Vaccination",
    date: "2024-01-10",
    doctor: "Dr. Emily Wong",
    type: "Vaccination",
    hash: "0x2b5d...9e4c",
    shared: ["Dr. Sarah Johnson"],
  },
]

export default function RecordsPage() {
  const [records] = useState(mockRecords)

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Medical Records</h1>
          <p className="text-muted-foreground">
            Manage your secure medical records on the blockchain
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" /> Upload Record
        </Button>
      </div>

      <div className="grid gap-4">
        {records.map((record) => (
          <Card key={record.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xl flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                {record.title}
              </CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Lock className="mr-2 h-4 w-4" />
                  Permissions
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Date:</span>
                  <span>{record.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Doctor:</span>
                  <span>{record.doctor}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Type:</span>
                  <span>{record.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Blockchain Hash:</span>
                  <span className="font-mono">{record.hash}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shared With:</span>
                  <span>{record.shared.length ? record.shared.join(", ") : "None"}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}