export type FieldType =
    | "string"
    | "number"
    | "richtext"
    | "image"
    | "date"
    | "email";

export interface FieldDefinition {
    name: string;
    type: FieldType;
    required?: boolean;
}

export interface ContentType {
    name: string;
    fields: FieldDefinition[];
}

export interface CMSData {
    contentTypes: Record<string, ContentType>;
    items: Record<string, any[]>;
}

export const initialCMSData: CMSData = {
    contentTypes: {},
    items: {},
};
