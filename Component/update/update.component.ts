import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { View } from 'src/app/Services/View/view';
import { ViewService } from 'src/app/Services/View/view.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id!:number;
  view: View = new View();

  constructor(private viewService:ViewService, 
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    // this.viewService.getCustomerById(this.id).subscribe(data=>{
    //   this.view=data;
    // });
  }

  onSubmit(){
    this.viewService.updateCustomer(this.id, this.view).subscribe(data=>{
      this.gotoViewList();
    });
  }

  gotoViewList(){
    this.router.navigate(['/home/view']);
  }

}
