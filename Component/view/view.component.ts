import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { View } from 'src/app/Services/View/view';
import { ViewService } from 'src/app/Services/View/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  view!: View[]
  constructor(private viewService: ViewService,private router:Router) { }
  ngOnInit(): void {
    this.getView();
    
  }
  public getView(){
    this.viewService.getCustomerList().subscribe(data=>{
      console.log(data);
      this.view=data;
    });
  } 

  //delete customer
  public deleteCustomer(id: number){
    return this.viewService.deleteCustomer(id).subscribe(data=>{
      console.log(data);
      this.getView();
    })
  }

  public ViewCustomer(email: String){
    return this.viewService.getCustomerByEmail(email).subscribe(data=>{
      console.log(data);
      this.getView();
    })
  }



public updatecustomer(id:number){
  this.router.navigate(['update',{id}]);
}



}
