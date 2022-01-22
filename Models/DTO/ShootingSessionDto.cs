using System;
using System.Collections.Generic;

namespace ssa_backend.Models.DTO
{
    public class ShootingSessionDto
    {
        public int ShootingSessionId { get; set; }
        public DateTime? SessionDate { get; set; }
        public int TotalPrice { get; set; }
        
        public RangeSessionDto ShootingRange { get; set; }
        public List<PersonSessionDto> SessionParticipants { get; set; }
        public List<AmmoSessionDto> UsedAmmunitions { get; set; }
        public List<WeaponSessionDto> UsedWeapons { get; set; }
    }
    
    public class IShootingRangePostDto
    {
        public DateTime? SessionDate { get; set; }
        public int TotalPrice { get; set; }
    }
}