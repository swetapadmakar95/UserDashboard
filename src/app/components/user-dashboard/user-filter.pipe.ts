import { Pipe,PipeTransform } from "@angular/core";
@Pipe({
    name: 'userFilter',
    pure: true,
    standalone:true
})

export class UserFilterPipe implements PipeTransform {
    transform(users:any, searchValue:string):any{ 
        if(!users) return[];
        if(!searchValue) return users;
        searchValue = searchValue.toLowerCase();
        return users.filter((user:any)=>{
            return user.name.toLowerCase().includes(searchValue) ||
            user.email.toLowerCase().includes(searchValue) ||
            user.role.toLowerCase().includes(searchValue);
        })
    }
}