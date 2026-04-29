import { lazy, Suspense } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import HeaderCommunity from "../../components/dashboard/HeaderCommunity";
import Cards from "../../components/dashboard/Cards";
import FooterDashboard from "../../components/dashboard/FooterDashboard";
import ListTopPosts from "../../components/dashboard/сharts/ListTopPosts";
import './Dashboard.css'

const DynamicOfEngagementByDay = lazy(() => import("../../components/dashboard/сharts/DynamicOfEngagementByDay"))
const TopPosts = lazy(() => import("../../components/dashboard/сharts/TopPosts"))
const TypeContent = lazy(() => import("../../components/dashboard/сharts/TypeContent"))

function DashboardPage() {

    const location = useLocation()
    const stored = sessionStorage.getItem('dashboardData')
    const { data, from, to } = location.state || (stored ? JSON.parse(stored) : {})

    if( !data ) {
        return <Navigate to="/" replace />
    }

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <HeaderCommunity group={data?.group} from={from} to={to}/>
                <Cards group={data?.group} report={data?.report}/>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <DynamicOfEngagementByDay report={data?.report}/>
                    <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        <TopPosts report={data?.report} />
                        <TypeContent report={data?.report} />
                    </section>
                </Suspense>
                <ListTopPosts report={data?.report} />
                <FooterDashboard />
            </div>
        </>
)
}

export default DashboardPage