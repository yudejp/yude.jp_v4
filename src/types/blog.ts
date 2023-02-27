export type Blog = {
    id: string,
    title: string,
    createdAt: Date,
    updatedAt: Date,
    publishedAt: Date,
    revisedAt: Date,
    updated: Date,
    content: string,
    tags: Tag[],
}

export type Tag = {
    id: string,
    name: string,
}

export type QueryResult = {
    contents: Blog[],
    limit: number,
    offset: number,
    totalCount: number,
}