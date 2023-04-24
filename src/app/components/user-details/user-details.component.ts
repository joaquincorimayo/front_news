import {Component, OnInit} from '@angular/core';
import {UserDataService} from "../../services/user-data.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userData: any = '';
  constructor(private userDataService: UserDataService) {

  }
  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.userDataService.getUserFakeData().subscribe(data => {
      this.userData = {
        address: data[0].address,
        balance: data[0].balance,
        created: data[0].created,
        email: data[0].email,
        first: data[0].first,
        last: data[0].last,
      };
    }, error => {
      console.log(error);
    });
  }

}
