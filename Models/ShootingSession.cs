using System;
using System.Collections.Generic;

namespace ssa_backend.Models
{
    public class ShootingSession
    {
        public ShootingSession()
        {
        }
        
        public int ShootingSessionId { get; set; }
        public DateTime? SessionDate { get; set; }
        public int TotalPrice { get; set; }
        public int StallCount { get; set; }
        
        public int ShootingRangeId { get; set; }
        public virtual ShootingRange ShootingRange { get; set; }
        
        public List<SessionParticipant> SessionParticipants { get; set; }
        public List<UsedAmmunition> UsedAmmunitions { get; set; }
        public List<UsedWeapon> UsedWeapons { get; set; }
    }
}