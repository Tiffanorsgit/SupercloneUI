"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Dashboard } from "@/components/dashboard"
import { CreateVideo } from "@/components/create-video"
import { MyVideos } from "@/components/my-videos"
import { ManageProfiles } from "@/components/manage-profiles"
import { ManageAvatars } from "@/components/manage-avatars"
import { ManageVoices } from "@/components/manage-voices"
import { KnowledgeBase } from "@/components/knowledge-base"
import { Settings } from "@/components/settings"

export type ActivePanel =
  | "dashboard"
  | "templates"
  | "workspace"
  | "shared"
  | "my-videos"
  | "trash"
  | "create-video"
  | "selfie-avatars"
  | "library"
  | "brand-kits"
  | "manage-avatars"
  | "manage-voices"
  | "settings"
  | "manage-profiles"
  | "knowledge-base"

export default function PortalPage() {
  const [activePanel, setActivePanel] = useState<ActivePanel>("dashboard")

  const renderActivePanel = () => {
    switch (activePanel) {
      case "dashboard":
        return <Dashboard onCreateVideo={() => setActivePanel("create-video")} />
      case "templates":
        return <PlaceholderPanel title="Templates" description="Browse and use video templates" />
      case "workspace":
        return <PlaceholderPanel title="Workspace" description="Your active projects and drafts" />
      case "shared":
        return <PlaceholderPanel title="Shared with me" description="Videos shared by other users" />
      case "my-videos":
        return <MyVideos />
      case "trash":
        return <PlaceholderPanel title="Trash" description="Deleted videos (recoverable for 30 days)" />
      case "create-video":
        return <CreateVideo />
      case "selfie-avatars":
        return <PlaceholderPanel title="Selfie Avatars" description="Create avatars from your selfies" />
      case "library":
        return <PlaceholderPanel title="Library" description="Your media assets and resources" />
      case "brand-kits":
        return <PlaceholderPanel title="Brand Kits" description="Manage your brand colors, fonts, and logos" />
      case "manage-avatars":
        return <ManageAvatars />
      case "manage-voices":
        return <ManageVoices />
      case "settings":
        return <Settings />
      case "manage-profiles":
        return <ManageProfiles />
      case "knowledge-base":
        return <KnowledgeBase />
      default:
        return <Dashboard onCreateVideo={() => setActivePanel("create-video")} />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activePanel={activePanel} onPanelChange={setActivePanel} />
      <main className="flex-1 overflow-auto">{renderActivePanel()}</main>
    </div>
  )
}

function PlaceholderPanel({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-muted-foreground text-lg mb-8">{description}</p>
          <div className="bg-muted/50 rounded-lg p-8 border-2 border-dashed border-muted-foreground/20">
            <p className="text-muted-foreground">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}
