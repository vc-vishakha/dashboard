import { Component, OnInit , Input , EventEmitter , Output } from '@angular/core';

import { Customer } from '../customer';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  constructor() { }
  @Input() customer : Customer;
  @Input() name : String;
  @Output() voted = new EventEmitter<boolean | string>();
  didVote : boolean | string = false;  agreeDisagree: string;

  ngOnInit() {
  }

  vote(agreed: boolean) {
    this.agreeDisagree = (agreed ? "Yes" : "No");
    this.voted.emit(agreed);
    this.didVote = true;
  }
  resetVotes(){
    // this.voted.emit("");
    this.didVote = "";  this.agreeDisagree = "";
  }

}
