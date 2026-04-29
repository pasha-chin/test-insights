import './App.css'
import BackgroundBlobs from './components/layout/BackgroundBlobs'
import Header from './components/layout/Header'
import PageHero from "./components/home/PageHero";
import AnalyzeForm from "./components/home/AnalyzeForm";

function App() {
    return (
        <div className="flex flex-col items-center justify-center w-full grain min-h-screen relative overflow-x-hidden">

            <BackgroundBlobs />

            <div className="relative z-10 w-full">

                <Header />

                <main className="px-6 pb-16 pt-8 md:pt-16">
                    <div className="max-w-2xl mx-auto">

                        <PageHero />
                        <AnalyzeForm />

                    </div>
                </main>

            </div>
        </div>
    )
}

export default App