import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () =>
{
    const router = useRouter();

    useEffect(() =>
    {
        router.back();
    }, []);

    return (
        <div className="text-black">
            <h1>Page Not Found</h1>
            <p>Redirecting...</p>
        </div>
    );
};

export default NotFoundPage;
