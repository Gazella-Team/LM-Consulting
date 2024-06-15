import Link from "next/link";
import { useState, useEffect } from "react";

export default function CookiePopup() {
    const [popupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setPopupVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setPopupVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setPopupVisible(false);
    };

    return (
        popupVisible && (
            <div className="border bottom-6 flex flex-col gap-6 left-6 shadow-clean p-6 z-[100] bg-white fixed shadow-main/20 border-gray-600/10 rounded-2xl text-gray-600">
                <p className="w-[200px] paragraph text-sm">
                    We use cookies to improve your experience. You can opt out of certain cookies. Find out more in our <span className="text-gray-800 font-medium underline"><Link href={"/legal/privacy"}>privacy policy</Link></span>.
                </p>
                <div className="flex items-center gap-2 paragraph">
                    <button
                        onClick={handleAccept}
                        className="bg-gray-800 border-2 border-gray-800 font-medium text-xs text-white px-4 py-1 rounded-full"
                    >
                        Continue
                    </button>
                    <button
                        onClick={handleReject}
                        className="bg-white border-2 border-gray-800 font-medium text-xs text-gray-800 px-4 py-1 rounded-full hover:bg-gray-800 hover:text-white transition-all"
                    >
                        Reject
                    </button>
                </div>
            </div>
        )
    );
}
