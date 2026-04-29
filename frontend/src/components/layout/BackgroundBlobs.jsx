export default function BackgroundBlobs() {
    return (
        <>
            <div className="blob" style={{
                background: 'var(--peach)',
                width: '380px',
                height: '380px',
                top: '-100px',
                right: '-80px'
            }}></div>
            <div className="blob" style={{
                background: 'var(--lavender)',
                width: '420px',
                height: '420px',
                bottom: '-120px',
                left: '-100px'
            }}></div>
            <div className="blob" style={{
                background: 'var(--mint)',
                width: '280px',
                height: '280px',
                top: '40%',
                right: '10%',
                opacity: 0.4
            }}></div>
        </>
    )
}