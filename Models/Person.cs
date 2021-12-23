using System.Collections.Generic;

namespace ssa_backend.Models
{
    public class Person
    {
        public Person()
        {
        }
        
        public int PersonId { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }

        public List<SessionParticipant> SessionParticipants { get; set; }
    }
}