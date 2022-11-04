
export interface cardProps {
    id: string;
    name: string;
    short_description: string;
    image: string;
    shopify: string;
}

export interface categoryProps {
    category: string;
    type?: string;
    usage?: string[];
    gain?: string;
    mimo?: string;
}