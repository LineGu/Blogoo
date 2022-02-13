import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, waitFor } from '@testing-library/react';
import PostList from '@components/post/PostList';
import { mockPostDatas } from '@constants/Mocks';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockData = { post: mockPostDatas };
const server = setupServer(
    rest.get('http://localhost:3000/api/post', (req, res, ctx) => res(ctx.json(mockData))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const QueryWrapper = ({ children }: IParentComponentProps) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

describe('PostList Component', () => {
    it('모든 mock 데이터가 렌더 되는가', async () => {
        const utils = render(
            <QueryWrapper>
                <PostList />
            </QueryWrapper>,
        );

        await waitFor(() => {
            expect(utils.queryAllByText(mockPostDatas[0].title)).toHaveLength(mockPostDatas.length);
        });
    });
});
