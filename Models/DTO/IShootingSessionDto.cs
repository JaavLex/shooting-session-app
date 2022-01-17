using System;
using System.Collections.Generic;

namespace ssa_backend.Models.DTO
{
    public class IShootingSessionDto
    {
        public int ShootingSessionId { get; set; }
        public DateTime? SessionDate { get; set; }
        public int TotalPrice { get; set; }
        
        public IRangeSessionDto ShootingRange { get; set; }
        public List<IPersonSessionDto> SessionParticipants { get; set; }
        public List<IAmmoSessionDto> UsedAmmunitions { get; set; }
        public List<IWeaponSessionDto> UsedWeapons { get; set; }
    }
    
    public class IShootingRangePostDto
    {
        public DateTime? SessionDate { get; set; }
        public int TotalPrice { get; set; }
    }
}