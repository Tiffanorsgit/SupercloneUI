"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Upload, Play, Download, Library } from "lucide-react"

type Step = "script" | "voice" | "avatar" | "background" | "generate"

const steps = [
  { id: "script", label: "1. Script", title: "Script Generation" },
  { id: "voice", label: "2. Voice", title: "Voice Selection" },
  { id: "avatar", label: "3. Avatar", title: "Avatar Selection" },
  { id: "background", label: "4. Background", title: "Background Selection" },
  { id: "generate", label: "5. Generate", title: "Generate Video" },
]

export function CreateVideo() {
  const [currentStep, setCurrentStep] = useState<Step>("script")
  const [scriptStep, setScriptStep] = useState<"domain" | "motive" | "loading" | "selection">("domain")
  const [formData, setFormData] = useState({
    domain: "",
    motive: "",
    selectedScript: "",
    voice: "",
    avatar: "",
    background: "",
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)
  const [generationStage, setGenerationStage] = useState<"voice" | "avatar" | "rendering" | "complete">("voice")
  const [consentVoice, setConsentVoice] = useState(false)
  const [consentAvatar, setConsentAvatar] = useState(false)

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep)
  const currentStepData = steps[currentStepIndex]

  const handleNext = () => {
    if (currentStep === "script" && scriptStep !== "selection") {
      if (scriptStep === "domain") {
        setScriptStep("motive")
      } else if (scriptStep === "motive") {
        setScriptStep("loading")
        // Simulate loading
        setTimeout(() => setScriptStep("selection"), 2000)
      }
      return
    }

    const nextIndex = currentStepIndex + 1
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id as Step)
    }
  }

  const handleBack = () => {
    if (currentStep === "script" && scriptStep !== "domain") {
      if (scriptStep === "selection") {
        setScriptStep("motive")
      } else if (scriptStep === "motive") {
        setScriptStep("domain")
      }
      return
    }

    const prevIndex = currentStepIndex - 1
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].id as Step)
    }
  }

  const handleGenerate = () => {
    setIsGenerating(true)
    setGenerationProgress(0)
    setGenerationStage("voice")

    // Simulate generation process
    const interval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev < 33) {
          setGenerationStage("voice")
          return prev + 2
        } else if (prev < 66) {
          setGenerationStage("avatar")
          return prev + 2
        } else if (prev < 100) {
          setGenerationStage("rendering")
          return prev + 2
        } else {
          setGenerationStage("complete")
          clearInterval(interval)
          return 100
        }
      })
    }, 100)
  }

  const renderStepContent = () => {
    if (currentStep === "script") {
      if (scriptStep === "domain") {
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="domain" className="text-foreground">
                Channel's Domain
              </Label>
              <Input
                id="domain"
                placeholder="e.g., Technology, Cooking, Education"
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                className="mt-2"
              />
            </div>
          </div>
        )
      } else if (scriptStep === "motive") {
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="motive" className="text-foreground">
                Motive of Video
              </Label>
              <Textarea
                id="motive"
                placeholder="Describe the purpose and key message of your video..."
                value={formData.motive}
                onChange={(e) => setFormData({ ...formData, motive: e.target.value })}
                className="mt-2 min-h-32"
              />
            </div>
          </div>
        )
      } else if (scriptStep === "loading") {
        return (
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Generating Scripts</h3>
            <p className="text-muted-foreground">AI is creating multiple script variations for you...</p>
          </div>
        )
      } else if (scriptStep === "selection") {
        return (
          <div className="space-y-4">
            <p className="text-muted-foreground mb-6">Choose your preferred script variation:</p>
            {[1, 2, 3, 4].map((num) => (
              <Card
                key={num}
                className={`cursor-pointer transition-colors ${
                  formData.selectedScript === `script-${num}`
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setFormData({ ...formData, selectedScript: `script-${num}` })}
              >
                <CardHeader>
                  <CardTitle className="text-sm">Script Variation {num}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This is a sample script variation that would be generated based on your domain and motive. It
                    includes engaging hooks, clear messaging, and a strong call-to-action...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )
      }
    }

    if (currentStep === "voice") {
      return (
        <div className="space-y-6">
          <div>
            <Label className="text-foreground">Select Voice</Label>
            <Select value={formData.voice} onValueChange={(value) => setFormData({ ...formData, voice: value })}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Choose an existing voice" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="voice-1">Professional Male</SelectItem>
                <SelectItem value="voice-2">Professional Female</SelectItem>
                <SelectItem value="voice-3">Casual Male</SelectItem>
                <SelectItem value="voice-4">Casual Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="font-semibold text-foreground mb-4">Or Clone a New Voice</h3>
            <div className="space-y-4">
              <div>
                <Label className="text-foreground">Upload Voice Sample</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Drop your audio file here or click to browse</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="voice-consent"
                  checked={consentVoice}
                  onCheckedChange={(checked) => setConsentVoice(checked as boolean)}
                />
                <Label htmlFor="voice-consent" className="text-sm text-foreground">
                  I have consent to use this voice for AI generation
                </Label>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (currentStep === "avatar") {
      return (
        <div className="space-y-6">
          <div>
            <Label className="text-foreground mb-4 block">Select Avatar</Label>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((num) => (
                <Card
                  key={num}
                  className={`cursor-pointer transition-colors ${
                    formData.avatar === `avatar-${num}`
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setFormData({ ...formData, avatar: `avatar-${num}` })}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <p className="text-sm font-medium">Avatar {num}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="font-semibold text-foreground mb-4">Or Upload Custom Avatar</h3>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Drop your image here or click to browse</p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="avatar-consent"
                  checked={consentAvatar}
                  onCheckedChange={(checked) => setConsentAvatar(checked as boolean)}
                />
                <Label htmlFor="avatar-consent" className="text-sm text-foreground">
                  I have consent to use this image for AI generation
                </Label>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (currentStep === "background") {
      return (
        <div className="space-y-6">
          <div>
            <Label className="text-foreground mb-4 block">Solid Colors</Label>
            <div className="grid grid-cols-6 gap-3">
              {["#000000", "#ffffff", "#059669", "#3b82f6", "#ef4444", "#f59e0b"].map((color) => (
                <div
                  key={color}
                  className={`w-12 h-12 rounded-lg cursor-pointer border-2 ${
                    formData.background === color ? "border-primary" : "border-border"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setFormData({ ...formData, background: color })}
                />
              ))}
            </div>
          </div>

          <div>
            <Label className="text-foreground mb-4 block">Stock Images</Label>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <Card
                  key={num}
                  className={`cursor-pointer transition-colors ${
                    formData.background === `stock-${num}`
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setFormData({ ...formData, background: `stock-${num}` })}
                >
                  <CardContent className="p-2">
                    <div className="aspect-video bg-muted rounded flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Stock {num}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )
    }

    if (currentStep === "generate") {
      if (!isGenerating && generationStage !== "complete") {
        return (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Review Your Video Settings</h3>
            <div className="space-y-3 text-left max-w-md mx-auto mb-8">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Domain:</span>
                <span className="text-foreground">{formData.domain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Script:</span>
                <span className="text-foreground">{formData.selectedScript}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Voice:</span>
                <span className="text-foreground">{formData.voice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avatar:</span>
                <span className="text-foreground">{formData.avatar}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Background:</span>
                <span className="text-foreground">{formData.background}</span>
              </div>
            </div>
            <Button onClick={handleGenerate} size="lg" className="bg-primary hover:bg-primary/90">
              Generate Video
            </Button>
          </div>
        )
      }

      if (isGenerating || generationStage === "complete") {
        return (
          <div className="text-center py-8">
            {generationStage !== "complete" ? (
              <>
                <h3 className="text-xl font-semibold text-foreground mb-6">Generating Your Video</h3>
                <div className="max-w-md mx-auto space-y-4">
                  <Progress value={generationProgress} className="h-2" />
                  <div className="space-y-2">
                    <div
                      className={`flex items-center gap-2 ${generationStage === "voice" ? "text-primary" : "text-muted-foreground"}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${generationStage === "voice" ? "bg-primary animate-pulse" : "bg-muted-foreground"}`}
                      />
                      Generating Voice
                    </div>
                    <div
                      className={`flex items-center gap-2 ${generationStage === "avatar" ? "text-primary" : "text-muted-foreground"}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${generationStage === "avatar" ? "bg-primary animate-pulse" : "bg-muted-foreground"}`}
                      />
                      Syncing Avatar
                    </div>
                    <div
                      className={`flex items-center gap-2 ${generationStage === "rendering" ? "text-primary" : "text-muted-foreground"}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${generationStage === "rendering" ? "bg-primary animate-pulse" : "bg-muted-foreground"}`}
                      />
                      Rendering Video
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-foreground mb-6">Video Generated Successfully!</h3>
                <div className="max-w-md mx-auto mb-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Play className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-6">Your video is ready for preview and download.</p>
                  <div className="flex gap-3 justify-center">
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Library className="w-4 h-4" />
                      Go to Library
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        )
      }
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
          {currentStepData.title}
        </h1>
        <p className="text-muted-foreground">Follow the steps to create your AI-powered video.</p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= currentStepIndex ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`ml-2 text-sm ${index <= currentStepIndex ? "text-foreground" : "text-muted-foreground"}`}
              >
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-12 h-0.5 mx-4 ${index < currentStepIndex ? "bg-primary" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <Card className="bg-card border-border mb-8">
        <CardContent className="p-8">{renderStepContent()}</CardContent>
      </Card>

      {/* Navigation */}
      {!(isGenerating || generationStage === "complete") && (
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === "script" && scriptStep === "domain"}
            className="gap-2 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={
              (currentStep === "script" && scriptStep === "selection" && !formData.selectedScript) ||
              (currentStep === "voice" && !formData.voice) ||
              (currentStep === "avatar" && !formData.avatar) ||
              (currentStep === "background" && !formData.background) ||
              currentStep === "generate"
            }
            className="gap-2"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
