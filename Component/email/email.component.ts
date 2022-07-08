import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { View } from 'src/app/Services/View/view';
import { ViewService } from 'src/app/Services/View/view.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  email!:String;
  view: View = new View();

  constructor(private viewService:ViewService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.email= this.route.snapshot.params['id']
    
  }
  onSubmit(){
    this.viewService.getCustomerByEmail(this.email,).subscribe(data=>{
      this.gotoView();
    });
  }

  gotoView(){
    this.router.navigate(['/home/view']);
  }

}
