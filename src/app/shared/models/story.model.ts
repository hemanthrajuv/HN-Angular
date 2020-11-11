import { Base } from './base.model';

export interface Story extends Base{
    descendants?: number;
    score?: number;
    title?: string;
    url?: string;
    text?: string;
}
