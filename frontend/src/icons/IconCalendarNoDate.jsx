export const IconCalendarNoDate = ({ size = 14, fillColor = 'none', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill={fillColor}
         style={{color: 'var(--mint-deep)'}}>
        <rect x="3" y="5" width="14" height="12" rx="2" stroke="currentColor"
              strokeWidth="1.5"/>
        <path d="M3 8h14M7 3v3M13 3v3" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round"/>
    </svg>
);