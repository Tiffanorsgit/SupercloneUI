"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export function KnowledgeBase() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
          Knowledge Base
        </h1>
        <p className="text-muted-foreground">Access documentation, tutorials, and support resources.</p>
      </div>

      <Card className="bg-card border-border">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-xl mb-4 font-[family-name:var(--font-space-grotesk)]">Coming Soon</CardTitle>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Our comprehensive knowledge base with tutorials, FAQs, and documentation will be available in a future
            update.
          </p>
          <Button disabled variant="outline">
            Browse Articles
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
