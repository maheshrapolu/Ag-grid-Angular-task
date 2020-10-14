import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import {HttpServiceService} from '../http-service.service'
import { from } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any;
  itemsPerPage = 60;
  currentPage = 0;
  p: number = 1;
  constructor(private Service:HttpServiceService,private fb:FormBuilder) { }
  form=this.fb.group({
  id:[],
  name:[],
  salary:[],
  city:[],
  phonenumber:[]
})
  ngOnInit(): void {
    this.GetAll();
  }
GetAll(){
  this.Service.Get_All(this.currentPage, this.itemsPerPage).subscribe(res=>{
    this.data=res['body'];
    
    // console.log("sjahdjks",this.data)
    console.log(this.data,'hi')
  })
}
Post_Data(){
  this.Service.Add_Data(this.form.value).subscribe(res=>{
  this.GetAll();
})
  this.form.reset();
}
delete(a){
  this.Service.Data_Delete(a.id).subscribe(res=>{
    this.GetAll()
  });
}
edit(a){
  this.form.patchValue({
    id: a.id,
    name: a.name,
    salary: a.salary,
    city: a.city,
    phonenumber: a.phonenumber
  })
 
}
update(){
 this.Service.Data_Update(this.form.value).subscribe(res=>{
   this.GetAll()
  });
 this.form.reset();
}
}
