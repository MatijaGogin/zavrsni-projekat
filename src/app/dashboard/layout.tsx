import { ReactNode } from "react";
import { UserButton } from "@clerk/nextjs";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div>
            <UserButton />
            {children}
        </div>
    );
};

export default DashboardLayout;
