import axios from 'axios';

export const getPostList = async (): Promise<{ post: IPostDataDTO[] }> => {
    const { data } = (await axios.get('http://localhost:3000/api/post')) as {
        data: { post: IPostDataDTO[] };
    };

    return data;
};
