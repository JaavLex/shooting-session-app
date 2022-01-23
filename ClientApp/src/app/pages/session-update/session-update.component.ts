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

  selectedPerson: any = "none";
  selectedAmmo: any = "none";
  selectedWeapon: any = "none";
  selectedRange: any = "none";

  priceInput: number;
  countInput: number;
  dateInput: any;

  selectedPersonList: Person[] = [];
  selectedAmmoList: Ammunition[] = [];
  selectedWeaponList: Weapon[] = [];

  updateId: number;

  refreshPersonList = () => {
    this.http.get<Person[]>(this.baseUrl + "api/Person").subscribe(
      (result) => {
        this.personList = result.filter(
          (p) =>
            !this.selectedPersonList.find((sp) => p.personId === sp.personId)
        );
      },
      (error) => console.error(error)
    );
  };

  refreshAmmoList = () => {
    this.http.get<Ammunition[]>(this.baseUrl + "api/Ammunition").subscribe(
      (result) => {
        this.ammoList = result.filter(
          (a) =>
            !this.selectedAmmoList.find(
              (sa) => a.ammunitionId === sa.ammunitionId
            )
        );
      },
      (error) => console.error(error)
    );
  };

  refreshWeaponList = () => {
    this.http.get<Weapon[]>(this.baseUrl + "api/Weapon").subscribe(
      (result) => {
        this.weaponList = result.filter(
          (w) =>
            !this.selectedWeaponList.find((sw) => w.weaponId === sw.weaponId)
        );
      },
      (error) => console.error(error)
    );
  };

  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string,
    private route: Router,
    routeparams: ActivatedRoute
  ) {
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

    this.refreshWeaponList();
    this.refreshPersonList();
    this.refreshAmmoList();
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
    if (this.selectedPerson !== "none") {
      this.selectedPersonList.push(this.selectedPerson);
      this.selectedPerson = "none";
      this.refreshPersonList();
    } else {
      alert("You must select a person from the list !");
    }
  };

  personRemoveClick = (id: number) => {
    this.selectedPersonList.splice(
      this.selectedPersonList.findIndex((e) => e.personId === id),
      1
    );
    this.refreshPersonList();
  };

  ammoAddClick = () => {
    if (this.countInput !== undefined || this.selectedAmmo !== "none") {
      this.selectedAmmo.countUsed = this.countInput;
      this.selectedAmmoList.push(this.selectedAmmo);
      this.selectedAmmo = "none";
      this.refreshAmmoList();
      this.countInput = undefined;
    } else {
      alert(
        "You must input an amount of ammo that has been used and select one from the list !"
      );
    }
  };

  ammoRemoveClick = (id: number) => {
    this.selectedAmmoList.splice(
      this.selectedAmmoList.findIndex((e) => e.ammunitionId === id)
    );
    this.refreshAmmoList();
  };

  weaponAddClick = () => {
    if (this.selectedWeapon !== "none") {
      this.selectedWeaponList.push(this.selectedWeapon);
      this.selectedWeapon = "none";
      this.refreshWeaponList();
    } else {
      alert("You must select a weapon from the list !");
    }
  };

  weaponRemoveClick = (id: number) => {
    this.selectedWeaponList.splice(
      this.selectedWeaponList.findIndex((e) => e.weaponId === id)
    );
    this.refreshWeaponList();
  };

  confirmClick = () => {
    if (
      this.dateInput === undefined ||
      this.priceInput === undefined ||
      this.selectedPersonList.length === 0 ||
      this.selectedAmmoList.length === 0 ||
      this.selectedWeaponList.length === 0 ||
      this.selectedRange === "none"
    ) {
      alert("You must fill all fields before submitting !");
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
