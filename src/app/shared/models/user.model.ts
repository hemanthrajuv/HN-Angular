export interface User{
    id: string;
    delay?: string;
    created: number;
    karma: number;
    about?: string;
    submitted?: Array<number>;
}
