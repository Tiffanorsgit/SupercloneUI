"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"

export function ManageProfiles() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
          Manage Profiles
        </h1>
        <p className="text-muted-foreground">Create and manage different user profiles for your videos.</p>
      </div>

      <Card className="bg-card border-border">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Plus className="w-8 h-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-xl mb-4 font-[family-name:var(--font-space-grotesk)]">Coming Soon</CardTitle>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Profile management functionality will be available in a future update. You'll be able to create and
            customize different user profiles for your video content.
          </p>
          <Button disabled variant="outline">
            Create Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
