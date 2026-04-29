import PageHero from "../components/home/PageHero"
import AnalyzeForm from "../components/home/AnalyzeForm"
function HomePage() {
    return (
        <>
            <div className="max-w-2xl mx-auto">
                <PageHero />
                <AnalyzeForm />
            </div>
        </>
    )
}

export default HomePage