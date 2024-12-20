"use client"
import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
    const { user } = useUser();
    return <div className="flex justify-center">Dobrodosao {user?.fullName}</div>;
};

export default Dashboard;