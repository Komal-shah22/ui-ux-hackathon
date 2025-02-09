
"use client"; 
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { isSignedIn } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (isSignedIn === false) {
            router.replace("/login");
        } else {
            setIsLoading(false);
        }
    }, [isSignedIn, router]);

    if (isLoading) return <p className="text-center font-extrabold text-2xl text-gray-800">Loading...</p>;

    return <>{children}</>;
};

export default AuthGuard;
