namespace ssa_backend.Models
{
    public class UsedAmmunition
    {
        public UsedAmmunition()
        {
        }
        
        public int UsedAmmunitionId { get; set; }
        public int CountUsed { get; set; }
        
        public int SessionId { get; set; }
        public virtual ShootingSession ShootingSession { get; set; }
        
        public int AmmoId { get; set; }
        public virtual Ammunition Ammunition { get; set; }
    }
}