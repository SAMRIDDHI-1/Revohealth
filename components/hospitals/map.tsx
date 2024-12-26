"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

interface Hospital {
  id: number
  name: string
  position: [number, number]
  address: string
}

interface MapProps {
  hospitals: Hospital[]
}

export default function Map({ hospitals }: MapProps) {
  return (
    <MapContainer
      center={[40.7128, -74.0060]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {hospitals.map((hospital) => (
        <Marker key={hospital.id} position={hospital.position}>
          <Popup>
            <div>
              <h3 className="font-medium">{hospital.name}</h3>
              <p className="text-sm">{hospital.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}