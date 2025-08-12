// src/components/ContentTypeForm.tsx
import { useState } from "react";
import type { FieldType } from "../cmsData";

interface Props {
    onAdd: (
        typeId: string,
        name: string,
        fields: { name: string; type: FieldType }[]
    ) => void;
}

export default function ContentTypeForm({ onAdd }: Props) {
    const [typeId, setTypeId] = useState("");
    const [name, setName] = useState("");
    const [fields, setFields] = useState<{ name: string; type: FieldType }[]>(
        []
    );

    const addField = () => {
        setFields([...fields, { name: "", type: "string" }]);
    };

    const updateField = (
        index: number,
        key: "name" | "type",
        value: string
    ) => {
        const newFields = [...fields];
        (newFields[index] as any)[key] = value;
        setFields(newFields);
    };

    const handleSubmit = () => {
        if (!typeId || !name) return;
        onAdd(typeId, name, fields);
        setTypeId("");
        setName("");
        setFields([]);
    };

    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "1rem",
                marginBottom: "1rem",
            }}
        >
            <h3>Add Content Type</h3>
            <input
                placeholder="Type ID"
                value={typeId}
                onChange={(e) => setTypeId(e.target.value)}
            />
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h4>Fields</h4>
            {fields.map((f, i) => (
                <div key={i}>
                    <input
                        placeholder="Field name"
                        value={f.name}
                        onChange={(e) => updateField(i, "name", e.target.value)}
                    />
                    <select
                        value={f.type}
                        onChange={(e) => updateField(i, "type", e.target.value)}
                    >
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="richtext">Rich Text</option>
                        <option value="image">Image</option>
                        <option value="date">Date</option>
                        <option value="email">Email</option>
                    </select>
                </div>
            ))}
            <button onClick={addField}>Add Field</button>
            <button onClick={handleSubmit}>Save Content Type</button>
        </div>
    );
}
