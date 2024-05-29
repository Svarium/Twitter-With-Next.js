type TextNode = {
    type: 'text';
    text: string;
    bold?: boolean;
    underline?: boolean;
};

type ParagraphNode = {
    type: 'paragraph';
    children: TextNode[];
};

type ListItemNode = {
    type: 'list-item';
    children: TextNode[];
};

type ListNode = {
    type: 'list';
    format: 'ordered' | 'unordered';
    children: ListItemNode[];
};

type BodyNode = ParagraphNode | ListNode;

type FAQAttributes = {
    title: string;
    body?: BodyNode[];
    slug: string;
    // Agrega otros campos que sean necesarios
};

type FAQPageType = {
    id: number;
    attributes: FAQAttributes;
};