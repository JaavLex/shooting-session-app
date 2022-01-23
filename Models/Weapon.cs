using System.Collections.Generic;

namespace ssa_backend.Models
{
    public class Weapon
    {
        public Weapon()
        {
        }

        public Weapon(string weaponName, string weaponPicture, int? ammunitionId)
        {
            WeaponName = weaponName;
            WeaponPicture = weaponPicture;
            AmmunitionId = ammunitionId;
        }
        
        public int WeaponId { get; set; }
        public string WeaponName { get; set; }
        public string WeaponPicture { get; set; }
        
        public int? AmmunitionId { get; set; }
        public virtual Ammunition Ammunition { get; set; }
        
        public List<UsedWeapon> UsedWeapons { get; set; }
    }
}