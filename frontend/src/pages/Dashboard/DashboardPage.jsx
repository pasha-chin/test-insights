import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import HeaderCommunity from "../../components/dashboard/HeaderCommunity";
import Cards from "../../components/dashboard/Cards";
import DynamicOfEngagementByDay from "../../components/dashboard/сharts/DynamicOfEngagementByDay";
import TopPosts from "../../components/dashboard/сharts/TopPosts";
import TypeContent from "../../components/dashboard/сharts/TypeContent";
import FooterDashboard from "../../components/dashboard/FooterDashboard";
import ListTopPosts from "../../components/dashboard/сharts/ListTopPosts";
import './Dashboard.css'
function DashboardPage() {

    const { groupId } = useParams()

    const location = useLocation()
    const { data, from, to } = location.state || {}

    console.log(data);

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <HeaderCommunity group={data?.group} from={from} to={to}/>
                <Cards group={data?.group} report={data?.report}/>
                <DynamicOfEngagementByDay report={data?.report}/>
                <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <TopPosts />
                    <TypeContent />
                </section>
                <ListTopPosts />
                <FooterDashboard />
            </div>
        </>
)
}

export default DashboardPage