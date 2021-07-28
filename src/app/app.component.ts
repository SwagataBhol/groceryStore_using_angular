import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Output() editCLick=new EventEmitter()
  title = 'grocery';
  
  data=[{item:"abc",unit:2,price:10},
  {item:"xyz",unit:2,price:10,},
  {item:"bca",unit:2,price:10}]
  mul=0
  total=0
  myStorage = window.localStorage;
  
  constructor(){
   this.data.forEach(data=>{
      this.total+=data.unit*data.price
      console.log("initial total"+this.total)
      
     
    })
    
  }
  
  
  getValue(titem:string,tunit: any,tprice :any ){
    console.log(typeof(tprice))
    this.total+=(tunit*tprice)
    let arr1={item:titem,unit:tunit,price:tprice}
    this.data.push(arr1) 
    
    this.myStorage.setItem("index", JSON.stringify(this.data));

    
  
  }

  deleteValue(deleteTarget:any,item:any){
    let ele=deleteTarget.parentElement.parentElement
    this.total-=(this.mul=ele.childNodes[3].textContent)
    let ind=this.data.indexOf(item)
    this.data.splice(ind,1)
    console.log(this.data)

    
  }


  editValue(target:any,value:any){
  let ele=target.parentElement.parentElement
  let child=ele.childNodes[0]
   this.mul=ele.childNodes[3].textContent
  
  if(target.textContent=="edit"){
    target.textContent="save"
    child.contentEditable=true
    ele.childNodes[1].contentEditable=true
    ele.childNodes[2].contentEditable=true
   
  }
    else{
      target.textContent="edit"
      child.contentEditable=false
      ele.childNodes[1].contentEditable=false
      ele.childNodes[2].contentEditable=false
      ele.childNodes[3].textContent=(parseInt(ele.childNodes[1].textContent)*parseInt(ele.childNodes[2].textContent))
       this.total-=this.mul
       this.total+=parseInt(ele.childNodes[3].textContent)
    }
  
}
  
}
