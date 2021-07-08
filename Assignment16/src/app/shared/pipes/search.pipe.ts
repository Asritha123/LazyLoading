import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(value:any,args:any){   
   if(args=='all'){
           return value; 
      }  
     else  
  {
        var resultval:any=[]   
     for(var i=0;i<value.length;i++)    {   
         if(value[i].name.toLowerCase().includes(args))
            {        resultval.push(value[i])   
         }   
     }
        return resultval; 
   } 
 }
}


