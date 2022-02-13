type Nullable<T> = T | null;

type NonNullableObj<T> = {
    [K in keyof T]-?: T[K];
};

type DataMap<T> = {
    data: T;
};

interface IParentComponentProps {
    className?: string;
    children: ReactChild;
}

interface IPostDataDTO {
    id: string;
    title: string;
    subTitle?: string;
    date: string;
    tags: string[];
}
