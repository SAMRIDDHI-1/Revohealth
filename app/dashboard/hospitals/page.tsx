"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Hospital, Search } from "lucide-react"
import dynamic from "next/dynamic"

const Map = dynamic(() => import("@/components/hospitals/map"), {
  ssr: false,
})

const mockHospitals = [
  {
    id: 1,
    name: "City Medical Center",
    address: "123 Healthcare Ave",
    specialties: ["Cardiology", "Neurology", "Pediatrics"],
    rating: 4.8,
    position: [40.7128, -74.0060] as [number, number],
  },
  {
    id: 2,
    name: "General Hospital",
    address: "456 Medical Drive",
    specialties: ["Orthopedics", "Oncology", "Surgery"],
    rating: 4.6,
    position: [40.7580, -73.9855] as [number, number],
  },
]

export default function HospitalsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [hospitals] = useState(mockHospitals)

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Find Hospitals</h1>
          <p className="text-muted-foreground">
            Discover and connect with healthcare providers
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search hospitals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Hospital Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] rounded-lg border">
              <Map hospitals={hospitals} />
            </div>
          </CardContent>
        </Card>

        {hospitals.map((hospital) => (
          <Card key={hospital.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Hospital className="mr-2 h-5 w-5" />
                {hospital.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{hospital.address}</p>
                <div className="flex flex-wrap gap-2">
                  {hospital.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm">Rating: {hospital.rating}/5.0</span>
                  <Button>View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}