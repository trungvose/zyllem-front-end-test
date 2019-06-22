
export abstract class Article {
    title: string;
    author: string;
    publishedAt: string; //date time in ISO format 
    url: string;
    type: ArticleType;
}

export enum ArticleType {
    NORMAL = 1,
    FEATURED = 2,
}