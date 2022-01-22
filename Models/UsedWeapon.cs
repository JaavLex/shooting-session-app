namespace ssa_backend.Models
{
    public class UsedWeapon
    {
        public UsedWeapon()
        {
        }

        public UsedWeapon(int shootingSessionId, int weaponId)
        {
            ShootingSessionId = shootingSessionId;
            WeaponId = weaponId;
        }
        
        public int UsedWeaponId { get; set; }
        
        public int ShootingSessionId { get; set; }
        public virtual ShootingSession ShootingSession { get; set; }
        
        public int WeaponId { get; set; }
        public virtual Weapon Weapon { get; set; }
    }
}