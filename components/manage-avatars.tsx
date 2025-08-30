"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Plus, Users } from "lucide-react"

const mockAvatars = [
  { id: "avatar-001", name: "Professional Male", type: "Default" },
  { id: "avatar-002", name: "Professional Female", type: "Default" },
  { id: "avatar-003", name: "Casual Male", type: "Default" },
]

export function ManageAvatars() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
          Manage Avatars
        </h1>
        <p className="text-muted-foreground">View and manage your available avatars for video creation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {mockAvatars.map((avatar) => (
          <Card key={avatar.id} className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{avatar.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">ID: {avatar.id}</p>
              <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {avatar.type}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card border-border">
        <CardContent className="p-8 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-lg mb-2 font-[family-name:var(--font-space-grotesk)]">Add New Avatar</CardTitle>
          <p className="text-muted-foreground mb-4">Upload a custom avatar to use in your video creations.</p>
          <Button className="bg-primary hover:bg-primary/90">Upload Avatar</Button>
        </CardContent>
      </Card>
    </div>
  )
}
