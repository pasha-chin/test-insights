export const IconRectAlignLeft = ({ size = 14, fillColor = 'none', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill={fillColor}
         style={{color: 'var(--peach-darker)'}}>
        <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor"
              strokeWidth="1.5"/>
        <path d="M7 9h6M7 12h4" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round"/>
    </svg>
);