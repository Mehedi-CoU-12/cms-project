import React, { useEffect, useState } from "react";
import ContentTypes from "./components/ContentTypes";
import { initailCMSData } from "./cmsData";

function App() {
    const [cmsData, setCmsData] = useState<any>(initailCMSData);

    const addCmsData = (typeId: any, name: any, fields: any) => {
        setCmsData({
            ...cmsData,
            contentTypes: {
                ...cmsData.contentTypes,
                [typeId]: { name, fields },
            },
        });
    };

    useEffect(() => {
        console.log('CMS Data:', cmsData);
    }, [cmsData]);

    return (
        <div style={{ margin: "30px" }}>
            <h1>Mini CMS (Dynamic Schema)</h1>
            <ContentTypes addOn={addCmsData} />
        </div>
    );
}

export default App;
