import { Component, OnInit } from '@angular/core';
import { UserLookup } from './models/user-lookup';
import { UserLookupData } from './data/user-lookup-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  public userLookupData: UserLookup[] = UserLookupData;
  public userFields: Object = { text: 'USER_DESC', value: 'USER_ID' };
  public userRequired: boolean;
  public repType: number;

  async ngOnInit() {
    this.userRequired = true;
    this.repType = 1;

  }
  onRepTypeChange($event) {
    if ($event.value == 1) {
      this.userRequired = true;
    } else {
      this.userRequired = false;
    }
  }

}
