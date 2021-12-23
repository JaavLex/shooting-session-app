using System.Collections.Generic;

namespace ssa_backend.Models
{
    public class Weapon
    {
        public Weapon()
        {
        }
        
        public int WeaponId { get; set; }
        public string WeaponName { get; set; }
        public string WeaponPicture { get; set; }
        
        public int? AmmoId { get; set; }
        public virtual Ammunition Ammunition { get; set; }
        
        public List<UsedWeapon> UsedWeapons { get; set; }
    }
}