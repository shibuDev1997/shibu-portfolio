"use client"

export function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center space-y-4 animate-bounce-in">
        <div className="flex items-center space-x-2">
          <div className="text-primary font-mono text-lg">Loading Portfolio</div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground font-mono animate-pulse">Initializing VS Code environment...</div>
      </div>
    </div>
  )
}
