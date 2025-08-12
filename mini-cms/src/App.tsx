// src/App.tsx
import { useState } from "react";
import ContentTypeForm from "./components/ContentTypeForm";
import ItemForm from "./components/ItemForm";
import CMSViewer from "./components/CMSViewer";
import { initialCMSData, type CMSData, type FieldType } from "./cmsData";

export default function App() {
    const [cmsData, setCmsData] = useState<CMSData>(initialCMSData);

    const addContentType = (
        typeId: string,
        name: string,
        fields: { name: string; type: FieldType }[]
    ) => {
        setCmsData((prev) => ({
            ...prev,
            contentTypes: {
                ...prev.contentTypes,
                [typeId]: { name, fields },
            },
            items: {
                ...prev.items,
                [typeId]: [],
            },
        }));
    };

    const addItem = (typeId: string, item: any) => {
        setCmsData((prev) => ({
            ...prev,
            items: {
                ...prev.items,
                [typeId]: [...(prev.items[typeId] || []), item],
            },
        }));
    };

    return (
        <div style={{ padding: "1rem" }}>
            <h1>Mini CMS (Dynamic Schema)</h1>
            <ContentTypeForm onAdd={addContentType} />

            {Object.entries(cmsData.contentTypes).map(
                ([typeId, contentType]) => (
                    <ItemForm
                        key={typeId}
                        typeId={typeId}
                        contentType={contentType}
                        onAdd={addItem}
                    />
                )
            )}
            <CMSViewer cmsData={cmsData} />
        </div>
    );
}
