import { User } from 'entitie/User';

export enum ArticleBlockType {
    IMAGE= 'IMAGE',
    CODE = 'CODE',
    TEXT = 'TEXT',
}

export enum ArticleViewMode {
    LIST= 'LIST',
    BLOCK = 'BLOCK',
}

export interface ArticleBlockBase {
    id: string;
    type:ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    MEDICINE = 'MEDICINE',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
    user: User;
}
