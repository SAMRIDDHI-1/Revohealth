import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Activity, Calendar, Hospital, FileText, Coins } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">RevoHealth</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary Healthcare on the Blockchain
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Secure, transparent, and efficient healthcare management powered by blockchain technology.
            Take control of your health data and experience seamless healthcare services.
          </p>
          <Button size="lg" asChild>
            <Link href="/login">
              Join RevoHealth <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Activity className="h-8 w-8" />}
            title="Health Monitoring"
            description="Track your vital signs and health metrics in real-time with secure blockchain verification."
          />
          <FeatureCard
            icon={<Calendar className="h-8 w-8" />}
            title="Smart Appointments"
            description="Schedule and manage medical appointments with ease using our intelligent booking system."
          />
          <FeatureCard
            icon={<Hospital className="h-8 w-8" />}
            title="Hospital Network"
            description="Find and connect with healthcare providers in our extensive network of verified hospitals."
          />
          <FeatureCard
            icon={<FileText className="h-8 w-8" />}
            title="Medical Records"
            description="Store and share your medical records securely with complete control over access."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8" />}
            title="Insurance Claims"
            description="Process insurance claims automatically with smart contracts for faster settlements."
          />
          <FeatureCard
            icon={<Coins className="h-8 w-8" />}
            title="Health Rewards"
            description="Earn tokens for maintaining good health and participating in wellness activities."
          />
        </div>
      </main>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}