import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'categoryList'
})

export class CategoryListPipe implements PipeTransform{
    transform(mideaItems: any[]) {
        const categories:string[] =[];
        mideaItems.forEach(mideaItems =>{
            if(categories.indexOf(mideaItems.category) <=1){
                categories.push(mideaItems.category)
            }
        });
        return categories.join(', ')
    }
}