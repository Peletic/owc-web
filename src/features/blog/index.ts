import path from "node:path";

type NonMethodEntries<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type FieldsOnly<T> = Pick<T, NonMethodEntries<T>>

type BlogPostFields = FieldsOnly<BlogPost>

export class BlogPost {
    title: string;
    date: number;
    description: string;
    contents: string;
    id: string;
    thumbnail: string;

    constructor({title, date, description, contents, id, thumbnail}: {title: string, date: number, description: string, contents: string, id: string, thumbnail: string}) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.contents = contents;
        this.id = id;
        this.thumbnail = thumbnail;
    }

    // Let's go with JSON-ifying it for now.
    // TODO: add a more verbose content system
    serialize(): string {
        const fields = Object.fromEntries(Object.entries(this).filter(([_, value]) => typeof value !== 'function'))
        return JSON.stringify(fields);
    }

    static from(data: Object): BlogPost {
        const transformed = data as BlogPostFields
        return new BlogPost(transformed)
    }
}

export const BLOG_DIR_PATH = path.join(process.cwd(), "blog")
