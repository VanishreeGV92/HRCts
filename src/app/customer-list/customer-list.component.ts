import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers : string[] = [] ;

  ngOnInit() {
  }

  addCustomer(customerName :string){
    if(customerName.trim()){
      this.customers.push(customerName.trim());
    }
  }

}
