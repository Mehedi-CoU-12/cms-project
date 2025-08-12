// src/components/ItemForm.tsx
import { useState } from "react";
import type { ContentType } from "../cmsData";

interface Props {
    typeId: string;
    contentType: ContentType;
    onAdd: (typeId: string, item: any) => void;
}

export default function ItemForm({ typeId, contentType, onAdd }: Props) {
    const [item, setItem] = useState<any>({});

    const handleChange = (fieldName: string, value: any) => {
        setItem({ ...item, [fieldName]: value });
    };

    const handleSubmit = () => {
        onAdd(typeId, { id: Date.now().toString(), ...item });
        setItem({});
    };

    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "1rem",
                marginBottom: "1rem",
            }}
        >
            <h3>Add Item to {contentType.name}</h3>
            {contentType.fields.map((f) => (
                <div key={f.name}>
                    <label>{f.name}: </label>
                    <input
                        type={f.type === "number" ? "number" : "text"}
                        value={item[f.name] || ""}
                        onChange={(e) => handleChange(f.name, e.target.value)}
                    />
                </div>
            ))}
            <button onClick={handleSubmit}>Save Item</button>
        </div>
    );
}
4 