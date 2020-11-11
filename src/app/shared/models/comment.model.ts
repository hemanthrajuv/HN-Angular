import { Base } from './base.model';

export interface Comment extends Base{
    parent?: number;
    text?: string;
}
