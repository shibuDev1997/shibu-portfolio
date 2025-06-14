"use client"

export function FloatingShapes() {
  const shapes = [
    {
      id: 1,
      className: "w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64",
      gradient: "from-purple-400/20 to-pink-400/20",
      position: "top-1/4 left-1/4",
      duration: "20s",
      delay: "0s",
    },
    {
      id: 2,
      className: "w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48",
      gradient: "from-blue-400/20 to-cyan-400/20",
      position: "top-3/4 right-1/4",
      duration: "25s",
      delay: "5s",
    },
    {
      id: 3,
      className: "w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36",
      gradient: "from-green-400/20 to-teal-400/20",
      position: "bottom-1/4 left-1/3",
      duration: "18s",
      delay: "10s",
    },
    {
      id: 4,
      className: "w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32",
      gradient: "from-yellow-400/20 to-orange-400/20",
      position: "top-1/2 right-1/3",
      duration: "22s",
      delay: "3s",
    },
    {
      id: 5,
      className: "w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52",
      gradient: "from-indigo-400/20 to-purple-400/20",
      position: "bottom-1/3 right-1/2",
      duration: "30s",
      delay: "8s",
    },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.className} ${shape.position} bg-gradient-to-br ${shape.gradient} rounded-full blur-xl animate-float`}
          style={{
            animationDuration: shape.duration,
            animationDelay: shape.delay,
          }}
        />
      ))}
    </div>
  )
}
