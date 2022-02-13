const MockData: IPostDataDTO = {
    id: '1',
    title: '예시 블로그 포스팅입니다.',
    subTitle:
        '예시 블로그 포스팅입니다.예시 블로그 포스팅입니다.예시 블로그 포스팅입니다.예시 블로그 포스팅입니다.예시 블로그 포스팅입니다.예시 블로그 포스팅입니다.예시 블로그 포스팅입니다.예시 블로그 포스팅입니다.',
    date: '2022/01/05',
    tags: ['react', 'javaSript'],
};

export const mockPostDatas: IPostDataDTO[] = new Array(10)
    .fill(MockData)
    .map((data, idx) => ({ ...data, id: String(idx) }));
