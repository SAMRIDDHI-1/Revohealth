"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Coins, Gift, Trophy, Award } from "lucide-react"

const mockRewards = [
  {
    id: 1,
    title: "Fitness Champion",
    description: "Complete 30 days of exercise tracking",
    points: 500,
    progress: 80,
    icon: Trophy,
  },
  {
    id: 2,
    title: "Wellness Warrior",
    description: "Attend 5 preventive check-ups",
    points: 300,
    progress: 60,
    icon: Award,
  },
  {
    id: 3,
    title: "Health Explorer",
    description: "Try 3 different wellness activities",
    points: 200,
    progress: 33,
    icon: Gift,
  },
]

export default function RewardsPage() {
  const [balance] = useState(1250)
  const [rewards] = useState(mockRewards)

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Health Rewards</h1>
          <p className="text-muted-foreground">
            Earn tokens for maintaining good health
          </p>
        </div>
        <Card className="w-fit">
          <CardContent className="flex items-center space-x-2 py-3">
            <Coins className="h-5 w-5 text-yellow-500" />
            <div>
              <p className="text-sm font-medium">Balance</p>
              <p className="text-2xl font-bold">{balance} RHT</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rewards.map((reward) => {
          const Icon = reward.icon
          return (
            <Card key={reward.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Icon className="mr-2 h-5 w-5 text-primary" />
                    {reward.title}
                  </span>
                  <span className="text-sm font-normal">
                    {reward.points} RHT
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {reward.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span>{reward.progress}%</span>
                    </div>
                    <Progress value={reward.progress} />
                  </div>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Rewards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Health Store Voucher",
                points: 1000,
                description: "Get $50 off at partner health stores",
              },
              {
                title: "Gym Membership",
                points: 2000,
                description: "One month free at partner gyms",
              },
              {
                title: "Wellness Workshop",
                points: 500,
                description: "Access to exclusive wellness workshops",
              },
            ].map((reward, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="font-medium">{reward.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {reward.description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm font-medium">{reward.points} RHT</span>
                  <Button size="sm" variant="outline">Redeem</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}