const icon = (children, size, color) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

export const CoffeeIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
  <line x1="6" y1="2" x2="6" y2="4"/>
  <line x1="10" y1="2" x2="10" y2="4"/>
  <line x1="14" y1="2" x2="14" y2="4"/>
</>, size, color)

export const FlameIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/>
</>, size, color)

export const DropIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
</>, size, color)

export const LeafIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
</>, size, color)

export const LayersIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
  <polyline points="2 17 12 22 22 17"/>
  <polyline points="2 12 12 17 22 12"/>
</>, size, color)

export const StarIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</>, size, color)

export const ShieldIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  <polyline points="9 12 11 14 15 10"/>
</>, size, color)

export const TruckIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <rect x="1" y="3" width="15" height="13" rx="1"/>
  <path d="M16 8h4l3 3v5h-7V8z"/>
  <circle cx="5.5" cy="18.5" r="2.5"/>
  <circle cx="18.5" cy="18.5" r="2.5"/>
</>, size, color)

export const AwardIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <circle cx="12" cy="8" r="6"/>
  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
</>, size, color)

export const MapPinIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
  <circle cx="12" cy="10" r="3"/>
</>, size, color)

export const SparkleIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
  <path d="M20 3v4"/><path d="M22 5h-4"/>
  <path d="M4 17v2"/><path d="M5 18H3"/>
</>, size, color)

export const HeartIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
</>, size, color)

export const PhoneIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <rect x="5" y="2" width="14" height="20" rx="2"/>
  <line x1="12" y1="18" x2="12.01" y2="18"/>
</>, size, color)

export const MessageIcon = ({ size = 22, color = 'currentColor' }) => icon(<>
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
</>, size, color)

export const CheckIcon = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

export const DiamondIcon = ({ size = 8, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <path d="M12 2L2 12l10 10 10-10z"/>
  </svg>
)
