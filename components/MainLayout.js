export function MainLayout({ children }) {
    return (
        <>
            <nav>
                <h1>NAVIGATION</h1>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}