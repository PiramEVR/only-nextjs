import type {NextApiRequest, NextApiResponse} from 'next'
import posts from '../../_posts/posts.json'

export interface IPost {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function handler(

    req: NextApiRequest,
    res: NextApiResponse<IPost[]>
) {
    res.status(200).json(posts)
}
