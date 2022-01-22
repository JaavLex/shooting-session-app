import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-session-update",
  templateUrl: "./session-update.component.html",
  styleUrls: ["./session-update.component.css"],
})
export class SessionUpdateComponent implements OnInit {
  public personList: Person[] = [];
  public ammoList: Ammunition[] = [];
  public weaponList: Weapon[] = [];
  public shootingRangeList: ShootingRange[] = [];
  public updateSession: ShootingSession;

  selectedPerson: Person;
  selectedAmmo: Ammunition;
  selectedWeapon: Weapon;
  selectedRange: any;

  priceInput: number;
  countInput: number;
  dateInput: any;

  selectedPersonList: Person[] = [];
  selectedAmmoList: Ammunition[] = [];
  selectedWeaponList: Weapon[] = [];

  updateId: number;

  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") baseUrl: string,
    private route: Router,
    routeparams: ActivatedRoute
  ) {
    http.get<Person[]>(baseUrl + "api/Person").subscribe(
      (result) => {
        this.personList = result;
      },
      (error) => console.error(error)
    );

    http.get<Ammunition[]>(baseUrl + "api/Ammunition").subscribe(
      (result) => {
        this.ammoList = result;
      },
      (error) => console.error(error)
    );

    http.get<Weapon[]>(baseUrl + "api/Weapon").subscribe(
      (result) => {
        this.weaponList = result;
      },
      (error) => console.error(error)
    );

    http.get<ShootingRange[]>(baseUrl + "api/ShootingRange").subscribe(
      (result) => {
        this.shootingRangeList = result;
      },
      (error) => console.error(error)
    );

    routeparams.params.subscribe((p) => (this.updateId = +p["id"]));

    http
      .get<ShootingSession>(
        `https://localhost:5001/api/ShootingSession/${this.updateId}`
      )
      .subscribe(
        (result) => {
          this.updateSession = result;
          this.selectedPersonList = result.sessionParticipants;
          this.selectedAmmoList = result.usedAmmunitions;
          this.selectedWeaponList = result.usedWeapons;
          this.priceInput = result.totalPrice;
          this.dateInput = this.formatDate(result.sessionDate);
          this.selectedRange = result.shootingRange.shootingRangeId;
        },
        (error) => console.error(error)
      );
  }

  formatDate(date: Date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  personAddClick = () => {
    this.selectedPersonList.push(this.selectedPerson);
    console.log(this.selectedPersonList);
    this.personList = this.personList.filter((p) =>
      this.selectedPersonList.find((sp) => p.personId !== sp.personId)
    );
  };

  personRemoveClick = (id: number) => {
    this.selectedPersonList.splice(
      this.selectedPersonList.findIndex((e) => e.personId === id),
      1
    );
    this.personList = this.personList.filter((p) =>
      this.selectedPersonList.find((sp) => p.personId !== sp.personId)
    );
  };

  ammoAddClick = () => {
    if (this.countInput !== undefined) {
      this.selectedAmmo.countUsed = this.countInput;
      this.selectedAmmoList.push(this.selectedAmmo);
      this.ammoList = this.ammoList.filter((a) =>
        this.selectedAmmoList.find((sa) => a.ammunitionId !== sa.ammunitionId)
      );
      this.countInput = undefined;
    } else {
      alert("You must input an amount of ammo that has been used !");
    }
  };

  ammoRemoveClick = (id: number) => {
    this.selectedAmmoList.splice(
      this.selectedAmmoList.findIndex((e) => e.ammunitionId === id)
    );
    this.ammoList = this.ammoList.filter((a) =>
      this.selectedAmmoList.find((sa) => a.ammunitionId !== sa.ammunitionId)
    );
  };

  weaponAddClick = () => {
    this.selectedWeaponList.push(this.selectedWeapon);
    this.weaponList = this.weaponList.filter((w) =>
      this.selectedWeaponList.find((sw) => w.weaponId !== sw.weaponId)
    );
  };

  weaponRemoveClick = (id: number) => {
    this.selectedWeaponList.splice(
      this.selectedWeaponList.findIndex((e) => e.weaponId === id)
    );
    this.weaponList = this.weaponList.filter((w) =>
      this.selectedWeaponList.find((sw) => w.weaponId !== sw.weaponId)
    );
  };

  confirmClick = () => {
    if (
      this.dateInput === undefined ||
      this.priceInput === undefined ||
      this.selectedPersonList.length === 0 ||
      this.selectedAmmoList.length === 0 ||
      this.selectedWeaponList.length === 0
    ) {
      alert("You must fill all fields before submitting !");
      console.log(
        this.dateInput +
          " " +
          this.priceInput +
          " " +
          this.selectedPersonList.length +
          " " +
          this.selectedAmmoList.length +
          " " +
          this.selectedWeaponList.length
      );
    } else {
      this.http
        .put<any>(
          `https://localhost:5001/api/ShootingSession/update/${this.updateId}`,
          {
            sessionDate: this.dateInput,
            totalPrice: this.priceInput,
            stallCount: 4,
            shootingRangeId: this.selectedRange,
            sessionParticipants: this.selectedPersonList,
            usedAmmunitions: this.selectedAmmoList,
            usedWeapons: this.selectedWeaponList,
          }
        )
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.error(error)
        );
      this.route.navigate(["/"]);
    }
  };

  ngOnInit() {}
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
  countUsed: number;
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

interface ShootingSession {
  sessionDate: Date;
  totalPrice: number;
  stallCount: number;
  shootingRange: ShootingRange;
  sessionParticipants: Person[];
  usedAmmunitions: Ammunition[];
  usedWeapons: Weapon[];
}
