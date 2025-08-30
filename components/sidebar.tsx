"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Home,
  FileText,
  Video,
  Share2,
  Trash2,
  Mic2,
  UserCircle,
  Library,
  Palette,
  User,
  AudioLines,
  Settings,
} from "lucide-react"
import type { ActivePanel } from "@/app/portal/page"

interface SidebarProps {
  activePanel: ActivePanel
  onPanelChange: (panel: ActivePanel) => void
}

const navigationSections = [
  {
    items: [
      { id: "dashboard" as ActivePanel, label: "Home", icon: Home },
      { id: "templates" as ActivePanel, label: "Templates", icon: FileText },
    ],
  },
  {
    title: "Videos",
    items: [
      { id: "workspace" as ActivePanel, label: "Workspace", icon: Video },
      { id: "shared" as ActivePanel, label: "Shared with me", icon: Share2 },
      { id: "my-videos" as ActivePanel, label: "My videos", icon: Video },
      { id: "trash" as ActivePanel, label: "Trash", icon: Trash2 },
    ],
  },
  {
    title: "AI tools",
    items: [
      { id: "create-video" as ActivePanel, label: "Video dubbing", icon: Mic2 },
      { id: "selfie-avatars" as ActivePanel, label: "Selfie avatars", icon: UserCircle },
    ],
  },
  {
    title: "Assets",
    items: [
      { id: "library" as ActivePanel, label: "Library", icon: Library },
      { id: "brand-kits" as ActivePanel, label: "Brand kits", icon: Palette },
      { id: "manage-avatars" as ActivePanel, label: "Avatars", icon: User },
      { id: "manage-voices" as ActivePanel, label: "Voices", icon: AudioLines },
    ],
  },
]

export function Sidebar({ activePanel, onPanelChange }: SidebarProps) {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-sidebar-foreground font-[family-name:var(--font-space-grotesk)]">
          Ubercorp
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-4 overflow-y-auto">
        {navigationSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-2">
            {section.title && (
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2">
                {section.title}
              </h3>
            )}
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon
                const isActive = activePanel === item.id

                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start gap-3 ${
                      isActive
                        ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                    onClick={() => onPanelChange(item.id)}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Settings and User Profile */}
      <div className="p-4 border-t border-sidebar-border space-y-4">
        <Button
          variant={activePanel === "settings" ? "default" : "ghost"}
          size="sm"
          className={`w-full justify-start gap-3 ${
            activePanel === "settings"
              ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
              : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
          onClick={() => onPanelChange("settings" as ActivePanel)}
        >
          <Settings className="w-4 h-4" />
          Settings
        </Button>

        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/user-profile-illustration.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
