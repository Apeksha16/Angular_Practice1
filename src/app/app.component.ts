import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'UserManagement';
  isAddPopup: boolean = false;
  userName: string = "";
  designation: string = "";
  mobileNumber: string = "";
  emailId: string = "";
  address: string = "";
  userInfo: any[] = [];

  addUserDetails = new FormGroup({
    userName: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
    emailId: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  });


  onAddUser() {
    this.isAddPopup = !this.isAddPopup;
  }
  onSaveUser() {
    if (this.addUserDetails.valid) {
      this.userInfo.push(this.addUserDetails.value);
      this.addUserDetails.reset();
      this.isAddPopup = false;
    }

  }
  onViewUserDetail(userInfo: any) {
    this.userName = userInfo.userName;
    this.designation = userInfo.designation;
    this.mobileNumber = userInfo.mobileNumber;
    this.emailId = userInfo.emailId;
    this.address = userInfo.address;

  }
  clearDetails() {
    this.userName = "";
    this.designation = "";
    this.mobileNumber = "";
    this.emailId = "";
    this.address = "";
  }


}
