import { useEffect, useState } from "react";

const AttractionsDetailsPage = () => {
    const [attraction, setAttraction] = useState();


    return (
        <>
            <img alt="attraction" src="https://pinoytrend.net/wp-content/uploads/2023/08/shaina-john-lloyd-scaled.jpg" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h1 className="text-2xl font-bold"></h1>
        </>
    );
};

export default AttractionsDetailsPage;