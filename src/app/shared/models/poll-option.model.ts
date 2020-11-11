import { Base } from './base.model';

export interface PollOption extends Base{
    parent?: number;
    score?: number;
}
