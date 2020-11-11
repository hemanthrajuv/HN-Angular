import { Base } from './base.model';

export interface Job extends Base{
    text?: string;
    url?: string;
    title?: string;
}
