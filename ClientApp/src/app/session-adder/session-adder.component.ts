import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-adder',
  templateUrl: './session-adder.component.html',
  styleUrls: ['./session-adder.component.css']
})
export class SessionAdderComponent implements OnInit {
  public personList: Person[] = [];
  public ammoList: Ammunition[] = [];
  public weaponList: Weapon[] = [];
  public shootingRangeList: ShootingRange[] = [];

  selectedPerson: Person;
  selectedAmmo: Ammunition;
  selectedWeapon: Weapon;

  priceInput: number;
  dateInput: Date;

  selectedPersonList: Person[] = [];
  selectedAmmoList: Ammunition[] = [];
  selectedWeaponList: Weapon[] = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Person[]>(baseUrl + 'api/Person').subscribe(result => {
      this.personList = result;
    }, error => console.error(error));

    http.get<Ammunition[]>(baseUrl + 'api/Ammunition').subscribe(result => {
      this.ammoList = result;
    }, error => console.error(error));

    http.get<Weapon[]>(baseUrl + 'api/Weapon').subscribe(result => {
      this.weaponList = result;
    }, error => console.error(error));

    http.get<ShootingRange[]>(baseUrl + 'api/ShootingRange').subscribe(result => {
      this.shootingRangeList = result;
    }, error => console.error(error));
  }

  personAddClick = () => {
    this.selectedPersonList.push(this.selectedPerson);
  }

  ammoAddClick = () => {
    this.selectedAmmoList.push(this.selectedAmmo);
  }

  weaponAddClick = () => {
    this.selectedWeaponList.push(this.selectedWeapon);
  }

  confirmClick = () => {
    this.http.post<any>('https://localhost:5001/api/ShootingSession', 
    { 
      sessionDate: this.dateInput,
      totalPrice: this.priceInput, 
      stallCount: 4, 
      shootingRangeId: 1,
      sessionParticipants: this.selectedPersonList
    }).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
    console.log("Posted !")
  }

  ngOnInit() {
  }

}

interface Person {
  personId: number;
  name: string;
  age: number;
}

interface Ammunition {
  ammunitionId: number;
  caliber: string;
  ammoPicture: string;
  pricePerPack: number;
}

interface Weapon {
  weaponId: number;
  weaponName: string;
  weaponPicture: string;
}

interface ShootingRange {
  shootingRangeId: number;
  address: string;
  pricePerStall: number;
}
