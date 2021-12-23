using System.Collections.Generic;

namespace ssa_backend.Models
{
    public class Ammunition
    {
        public Ammunition()
        {
        }
        
        public int AmmunitionId { get; set; }
        public string Caliber { get; set; }
        public string AmmoPicture { get; set; }
        public int PricePerPacks { get; set; }
        
        public List<Weapon> Weapons { get; set; }
        public List<UsedAmmunition> UsedAmmunitions { get; set; }
    }
}