"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Plus, Mic, Play } from "lucide-react"

const mockVoices = [
  { id: "voice-001", name: "Professional Male", type: "Default", duration: "Sample" },
  { id: "voice-002", name: "Professional Female", type: "Default", duration: "Sample" },
  { id: "voice-003", name: "Casual Male", type: "Default", duration: "Sample" },
  { id: "voice-004", name: "Casual Female", type: "Default", duration: "Sample" },
]

export function ManageVoices() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
          Manage Voices
        </h1>
        <p className="text-muted-foreground">View and manage your available voices for video creation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {mockVoices.map((voice) => (
          <Card key={voice.id} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Mic className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground">{voice.name}</h3>
                  <p className="text-sm text-muted-foreground">ID: {voice.id}</p>
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">
                    {voice.type}
                  </span>
                </div>
                <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                  <Play className="w-4 h-4" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card border-border">
        <CardContent className="p-8 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-lg mb-2 font-[family-name:var(--font-space-grotesk)]">Add New Voice</CardTitle>
          <p className="text-muted-foreground mb-4">Clone a new voice by uploading an audio sample.</p>
          <Button className="bg-primary hover:bg-primary/90">Upload Voice Sample</Button>
        </CardContent>
      </Card>
    </div>
  )
}
