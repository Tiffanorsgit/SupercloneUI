"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Share, Play } from "lucide-react"

const mockVideos = [
  {
    id: 1,
    title: "Tech Product Review",
    createdAt: "2024-01-15",
    thumbnail: "/tech-product-review-video-thumbnail.png",
  },
  {
    id: 2,
    title: "Cooking Tutorial",
    createdAt: "2024-01-12",
    thumbnail: "/cooking-tutorial-thumbnail.png",
  },
  {
    id: 3,
    title: "Educational Content",
    createdAt: "2024-01-10",
    thumbnail: "/educational-content-video-thumbnail.png",
  },
  {
    id: 4,
    title: "Marketing Campaign",
    createdAt: "2024-01-08",
    thumbnail: "/marketing-campaign-thumbnail.png",
  },
  {
    id: 5,
    title: "Product Demo",
    createdAt: "2024-01-05",
    thumbnail: "/product-demo-thumbnail.png",
  },
  {
    id: 6,
    title: "Brand Story",
    createdAt: "2024-01-03",
    thumbnail: "/brand-story-thumbnail.png",
  },
]

export function MyVideos() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
          My Videos
        </h1>
        <p className="text-muted-foreground">Manage and download your created videos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVideos.map((video) => (
          <Card key={video.id} className="bg-card border-border overflow-hidden">
            <div className="relative group">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button size="sm" variant="secondary" className="gap-2">
                  <Play className="w-4 h-4" />
                  Preview
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-card-foreground mb-2">{video.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">Created on {video.createdAt}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
                <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                  <Share className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
