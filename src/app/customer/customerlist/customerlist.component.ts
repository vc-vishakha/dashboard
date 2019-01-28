import { Component, OnInit,ViewChild } from '@angular/core';

import { CUSTOMER } from '../customer';
import { CustomerdetailComponent } from '../customerdetail/customerdetail.component';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  id: string;
  name: string;
  age: string;
}

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  // use ViewChild to invoke child component methods & properties
  @ViewChild(CustomerdetailComponent)
  private childComp : CustomerdetailComponent;

  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { 
    const users = [
      {
        id: '1',
        name: 'abc',
        age: '21'
      },
      {
        id: '2',
        name: 'xyz',
        age: '25'
      },
      {
        id: '3',
        name: 'pqr',
        age: '19'
      },
      {
        id: '4',
        name: 'pqr',
        age: '19'
      },
      {
        id: '5',
        name: 'pqr',
        age: '19'
      },
      {
        id: '6',
        name: 'pqr',
        age: '19'
      },
    ]
    this.dataSource = new MatTableDataSource(users);
  }

  customerList = CUSTOMER; // customer listing from customer component 
  agreed = 0;
  disagreed = 0;

  ngOnInit() {
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  resetVotes(){
    this.childComp.resetVotes();// invoke parent method from child method
    this.agreed = 0;
    this.disagreed = 0;
  }
}
