function FooterDashboard() {

    return (
        <>
            <p className="text-center text-xs mt-10 font-mono rise"
               style={{color: 'var(--ink-soft)', animationDelay: '0.5s'}}>
                Данные обновлены сегодня · vk insights · est. {new Date().getFullYear()}
            </p>
        </>
    )
}

export default FooterDashboard