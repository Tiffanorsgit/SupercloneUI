"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, FileText, Crown, Plus } from "lucide-react"

interface DashboardProps {
  onCreateVideo: () => void
}

export function Dashboard({ onCreateVideo }: DashboardProps) {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
          Dashboard
        </h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your video creation activity.</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Total Videos</CardTitle>
            <Video className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">24</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Total Scripts</CardTitle>
            <FileText className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">47</div>
            <p className="text-xs text-muted-foreground">+12 from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Account Tier</CardTitle>
            <Crown className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Pro</div>
            <p className="text-xs text-muted-foreground">Unlimited videos</p>
          </CardContent>
        </Card>
      </div>

      {/* Create Video CTA */}
      <Card className="bg-card border-border">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-card-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
              Ready to create your next video?
            </h2>
            <p className="text-muted-foreground">
              Use our AI-powered tools to generate professional videos in minutes.
            </p>
          </div>

          <Button
            onClick={onCreateVideo}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
          >
            Create a New Video
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
