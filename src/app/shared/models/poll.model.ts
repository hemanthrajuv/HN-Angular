import { Base } from './base.model';

export interface Poll extends Base{
    parts?: Array<number>;
    descendants?: number;
    score?: number;
    title?: string;
    text?: string;
}
