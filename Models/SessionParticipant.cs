namespace ssa_backend.Models
{
    public class SessionParticipant
    {
        public SessionParticipant()
        {
        }
        
        public int SessionParticipantId { get; set; }
        
        public int SessionId { get; set; }
        public virtual ShootingSession ShootingSession { get; set; }
        
        public int PersonId { get; set; }
        public virtual Person Person { get; set; }
    }
}