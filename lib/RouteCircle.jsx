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
        style={{ backgroundColor: `${color}`, boxShadow: 'inset 0 -3px 0 rgba(255, 255, 255, .4)' }}
        className={`rounded-lg p-2 text-6xl aspect-square flex items-center justify-center ${className}`}
      >
        {routeName}
      </div>
    )
  }
}
