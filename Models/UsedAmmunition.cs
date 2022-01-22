namespace ssa_backend.Models
{
    public class UsedAmmunition
    {
        public UsedAmmunition()
        {
        }

        public UsedAmmunition(int shootingSessionId, int ammunitionId, int countUsed)
        {
            ShootingSessionId = shootingSessionId;
            AmmunitionId = ammunitionId;
            CountUsed = countUsed;
        }
        
        public int UsedAmmunitionId { get; set; }
        public int CountUsed { get; set; }
        
        public int ShootingSessionId { get; set; }
        public virtual ShootingSession ShootingSession { get; set; }
        
        public int AmmunitionId { get; set; }
        public virtual Ammunition Ammunition { get; set; }
    }
}