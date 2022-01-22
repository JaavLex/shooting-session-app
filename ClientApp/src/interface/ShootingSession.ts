interface ShootingSession {
  sessionDate: Date;
  totalPrice: number;
  stallCount: number;
  shootingRangeId: number;
  sessionParticipants: Person[];
  usedAmmunitions: Ammunition[];
  usedWeapons: Weapon[];
}
