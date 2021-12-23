namespace ssa_backend.Models
{
    public class UsedWeapon
    {
        public UsedWeapon()
        {
        }
        
        public int UsedWeaponId { get; set; }
        
        public int SessionId { get; set; }
        public virtual ShootingSession ShootingSession { get; set; }
        
        public int WeaponId { get; set; }
        public virtual Weapon Weapon { get; set; }
    }
}