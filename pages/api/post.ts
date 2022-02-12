// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type MockData = {
    id: string;
    title: string;
    subTitle?: string;
    date: string;
    tags: string[];
};
const MockData: MockData = {
    id: '1',
    title: '예시 블로그 포스팅입니다.',
    subTitle:
        '예시 블로그 포스팅입니다.예시 블로그 포스팅입니다.예시 블로그 포스팅입니다.예시 블로그 포스팅입니다.',
    date: '2022/01/05',
    tags: ['react', 'javaSript'],
};
const mockDatas: MockData[] = new Array(10).fill(MockData);

export default function handler(req: NextApiRequest, res: NextApiResponse<{ post: MockData[] }>) {
    res.status(200).json({ post: mockDatas });
}
