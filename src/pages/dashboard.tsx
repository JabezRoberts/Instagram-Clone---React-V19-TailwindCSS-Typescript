import { useEffect } from 'react';
import Header from '../components/header.js';
import Timeline from '../components/timeline.js';
import Sidebar from '../components/sidebar/index.js';
import type { DashboardPage } from '../types/pages';

const Dashboard: DashboardPage = () => {
    useEffect(() => {
        document.title = 'Instagram';
    }, []);
       
    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-5xl">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    )
}


export default Dashboard;