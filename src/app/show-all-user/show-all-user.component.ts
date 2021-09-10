import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-all-user',
  templateUrl: './show-all-user.component.html',
  styleUrls: ['./show-all-user.component.css']
})
export class ShowAllUserComponent implements OnInit {
  Users: any;
  finduser: any;
  product: any;
  findproduct: any;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.fetchuser()
    this.fetchproduct()
  }

  //show all the record from Mongodb .........

  fetchuser(){
    return this.data.getUsers().subscribe((items:any)=> {
      console.log(items)
      this.Users = items;
      this.finduser =this.Users.Result;
  })
  }
  fetchproduct(){
    return this.data.getProduct().subscribe((items:any)=>{
      console.log(items);
      this.product = items;
      this.findproduct = this.product.Result;
    })
  }
}
