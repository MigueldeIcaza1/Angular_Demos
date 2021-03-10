import { Pipe, PipeTransform } from '@angular/core';
import User from './user.service';

@Pipe({name: 'userFilter', pure: false})
export class UserFilterPipe implements PipeTransform {
    transform(items: User[], filter: boolean): User[] {
        if (!items) {
            return items;
        }
        return items.filter(item => item.IsActive == filter);
    }
}