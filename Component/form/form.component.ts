import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewService } from 'src/app/Services/View/view.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  CreateCustomer!: FormGroup

  constructor(private viewService: ViewService, private router:Router) { }

  ngOnInit(): void {
    this.CreateCustomer = new FormGroup({
     fullname: new FormControl(''),
     street_adress:new FormControl(''),
     phone_number:new FormControl(''),
     email:new FormControl(''),
     delivery_area:new FormControl(''),
     items:new FormControl(''),
    });
  }

  public AddtoCustomer(){
    return this.viewService.createCustomer(this.CreateCustomer.value).subscribe(data=>{
      console.log(data)
      this.gotoCustomerList();
      
    });
  }


  public gotoCustomerList(){
    this.router.navigate(['view']);
  }


  submit(){
    console.log(this.CreateCustomer.value)
    this.AddtoCustomer();
  }




}
