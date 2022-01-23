import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-session-adder",
  templateUrl: "./session-adder.component.html",
  styleUrls: ["./session-adder.component.css"],
})
export class SessionAdderComponent implements OnInit {
  public personList: Person[] = [];
  public ammoList: Ammunition[] = [];
  public weaponList: Weapon[] = [];
  public shootingRangeList: ShootingRange[] = [];

  selectedPerson: any = "none";
  selectedAmmo: any = "none";
  selectedWeapon: any = "none";
  selectedRange: any = "none";

  priceInput: number;
  countInput: number;
  dateInput: Date;

  selectedPersonList: Person[] = [];
  selectedAmmoList: any[] = [];
  selectedWeaponList: Weapon[] = [];

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
    private route: Router
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
      this.selectedPersonList.findIndex((e) => e.personId === id)
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
        .post<ShootingSession>("https://localhost:5001/api/ShootingSession", {
          sessionDate: this.dateInput,
          totalPrice: this.priceInput,
          stallCount: 4,
          shootingRangeId: this.selectedRange,
          sessionParticipants: this.selectedPersonList,
          usedAmmunitions: this.selectedAmmoList,
          usedWeapons: this.selectedWeaponList,
        })
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
