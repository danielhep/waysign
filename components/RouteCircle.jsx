export default function RouteCircle ({
  routeName,
  className,
  color,
  type = 'circle'
}) {
  if (type === 'circle') {
    return (
      <div
        style={{ backgroundColor: `${color}` }}
        className={`rounded-full text-7xl aspect-square flex items-center justify-center ${className}`}
      >
        {routeName}
      </div>
    )
  } else if (type === 'square') {
    return (
      <div
        style={{ backgroundColor: `${color}` }}
        className={`rounded-lg text-7xl aspect-square flex items-center justify-center ${className}`}
      >
        {routeName}
      </div>
    )
  }
}
