export interface Video {
    id: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    views: number;
    tags?: string;
    likes: number;
    dislikes: number;
    User?: any;
    Comments?: (any | null)[];
    userID?: string;
    createdAt?: string;
    updatedAt?: string;
}