using System.Collections.Generic;

namespace ssa_backend.Models
{
    public class ShootingRange
    {
        public ShootingRange()
        {
        }
        
        public int ShootingRangeId { get; set; }
        public int PricePerStall { get; set; }
        public string Address { get; set; }
    }
}