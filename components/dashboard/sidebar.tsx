"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Activity,
  Calendar,
  FileText,
  Hospital,
  LogOut,
  Shield,
  CreditCard,
  Coins,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: Activity,
  },
  {
    title: "Medical Records",
    href: "/dashboard/records",
    icon: FileText,
  },
  {
    title: "Appointments",
    href: "/dashboard/appointments",
    icon: Calendar,
  },
  {
    title: "Hospitals",
    href: "/dashboard/hospitals",
    icon: Hospital,
  },
  {
    title: "Insurance Claims",
    href: "/dashboard/claims",
    icon: CreditCard,
  },
  {
    title: "Rewards",
    href: "/dashboard/rewards",
    icon: Coins,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-screen border-r bg-card">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">RevoHealth</span>
        </Link>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <span
                    className={cn(
                      "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                      pathname === item.href ? "bg-accent" : "transparent"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="p-4 mt-auto">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/login">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  )
}