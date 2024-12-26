import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Activity, Heart, Thermometer, Droplets } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, John Doe
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Heart Rate"
          value="72 BPM"
          description="Normal range"
          icon={<Heart className="h-4 w-4 text-rose-500" />}
        />
        <MetricCard
          title="Blood Pressure"
          value="120/80"
          description="Optimal"
          icon={<Activity className="h-4 w-4 text-emerald-500" />}
        />
        <MetricCard
          title="Temperature"
          value="98.6°F"
          description="Normal"
          icon={<Thermometer className="h-4 w-4 text-blue-500" />}
        />
        <MetricCard
          title="Blood Oxygen"
          value="98%"
          description="Excellent"
          icon={<Droplets className="h-4 w-4 text-indigo-500" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Your scheduled medical visits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  date: "Mar 15, 2024",
                  time: "10:00 AM",
                  doctor: "Dr. Sarah Johnson",
                  type: "Annual Check-up",
                },
                {
                  date: "Mar 22, 2024",
                  time: "2:30 PM",
                  doctor: "Dr. Michael Chen",
                  type: "Dental Cleaning",
                },
              ].map((appointment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div>
                    <p className="font-medium">{appointment.type}</p>
                    <p className="text-sm text-muted-foreground">
                      {appointment.doctor}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{appointment.date}</p>
                    <p className="text-sm text-muted-foreground">
                      {appointment.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest updates on your health records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "Medical Record Shared",
                  description: "With Dr. Sarah Johnson",
                  date: "Today, 9:30 AM",
                },
                {
                  action: "Insurance Claim Approved",
                  description: "Claim #1234 - Annual Check-up",
                  date: "Yesterday, 3:45 PM",
                },
                {
                  action: "New Test Results",
                  description: "Blood Work Analysis",
                  date: "Mar 10, 2:15 PM",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MetricCard({
  title,
  value,
  description,
  icon,
}: {
  title: string
  value: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}