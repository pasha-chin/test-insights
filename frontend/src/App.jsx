import { Routes, Route } from 'react-router-dom'
import './App.css'
import BackgroundBlobs from './components/layout/BackgroundBlobs'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/Dashboard/DashboardPage'

function App() {
    return (
        <div className="flex flex-col items-center justify-center w-full grain min-h-screen relative overflow-hidden">

            <BackgroundBlobs />

            <div className="relative z-10 w-full">

                <Header />

                <main className="px-6 pb-16 pt-8 md:pt-16">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/dashboard/:groupId" element={<DashboardPage />} />
                    </Routes>
                </main>

            </div>
        </div>
    )
}

export default App