// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mockPostDatas } from '@constants/Mocks';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ post: IPostDataDTO[] }>,
) {
    res.status(200).json({ post: mockPostDatas });
}
