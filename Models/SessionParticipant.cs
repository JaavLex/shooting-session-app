namespace ssa_backend.Models
{
    public class SessionParticipant
    {
        public SessionParticipant()
        {
        }

        public SessionParticipant(int shootingSessionId, int personId)
        {
            ShootingSessionId = shootingSessionId;
            PersonId = personId;
        }
        
        public int SessionParticipantId { get; set; }
        
        public int ShootingSessionId { get; set; }
        public virtual ShootingSession ShootingSession { get; set; }
        
        public int PersonId { get; set; }
        public virtual Person Person { get; set; }
    }
}