import React, { useEffect, useState } from "react";

function ContentTypes({ addOn }) {
    const [typeId, setTypeId] = useState("");
    const [name, setName] = useState("");
    const [fields, setFields] = useState<any>([]);

    const addField = () => {
        setFields([...fields, { name: "", type: "string" }]);
    };

    const updateField = (index, value, key) => {
        const newFields = [...fields];

        newFields[index][key] = value;
        setFields(newFields);
    };

    const saveContent = () => {
        if (!typeId || !name) return;

        addOn(typeId, name, fields);
        setTypeId("");
        setName("");
        setFields([]);
    };

    return (
        <div style={{ border: "dotted", padding: "30px" }}>
            <h3>Add content type</h3>
            <div>
                <input
                    type="number"
                    value={typeId}
                    onChange={(e) => setTypeId(e.target.value)}
                    placeholder="Type ID"
                />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                />
            </div>

            {fields.map((value, i) => {
                return (
                    <div key={i}>
                        <input
                            type="text"
                            placeholder="Field Name"
                            onChange={(e) =>
                                updateField(i, e.target.value, "name")
                            }
                        />
                        <select
                            onChange={(e) =>
                                updateField(i, e.target.value, "type")
                            }
                        >
                            <option value="string">String</option>
                            <option value="number">Number</option>
                            <option value="email">Email</option>
                        </select>
                    </div>
                );
            })}

            <button onClick={addField}>Add Field</button>
            <button onClick={saveContent}>Save Content Type</button>
        </div>
    );
}

export default ContentTypes;
