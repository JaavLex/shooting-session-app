namespace ssa_backend.Models.DTO
{
    public class IAmmoSessionDto
    {
        public int AmmunitionId { get; set; }
        public string Caliber { get; set; }
        public string AmmoPicture { get; set; }
        public int PricePerPacks { get; set; }
        public int CountUsed { get; set; }
    }
}