using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ssa_backend.Models;
using ssa_backend.Models.DTO;

namespace ssa_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShootingSessionController : ControllerBase
    {
        private readonly SsaContext _ssaContext;
        private readonly ILogger<ShootingSessionController> _logger;

        public ShootingSessionController(SsaContext ssaContext, ILogger<ShootingSessionController> logger)
        {
            _ssaContext = ssaContext;
            _logger = logger;
        }

        // GET: api/ShootingSession
        [HttpGet]
        public List<IShootingSessionDto> Get()
        {
            var shootingSessions = GetShootingSessionDto()
                     .OrderByDescending(s => s.SessionDate)
                     .ToList();
                
                 return shootingSessions;
        }
        
        // GET: api/ShootingSession/most-recent
        [HttpGet("most-recent")]
        public IShootingSessionDto GetLast()
        {
            var shootingSessions = GetShootingSessionDto()
                    .OrderByDescending(s => s.SessionDate)
                    .FirstOrDefault();

            return shootingSessions;
        }

        [HttpPost]
        public int Post([FromBody] ShootingSession body)
        {
            var session = new ShootingSession(body.SessionDate, body.TotalPrice, body.StallCount, body.ShootingRangeId);
            var shootingSession = _ssaContext.Add(session);
            _ssaContext.SaveChanges();
            
            foreach (var bodySessionParticipant in body.SessionParticipants)
            {
                var sessionParticipant = new SessionParticipant() {}
            }
            
            
            

            return 2;
        }

        private IQueryable<IShootingSessionDto> GetShootingSessionDto()
        {
            return _ssaContext.ShootingSessions
                .Select(s => new IShootingSessionDto()
                {
                    ShootingSessionId = s.ShootingSessionId,
                    SessionDate = s.SessionDate,
                    TotalPrice = s.TotalPrice,
                    ShootingRange = new IRangeSessionDto() {Address = s.ShootingRange.Address, PricePerStall = s.ShootingRange.PricePerStall},
                    SessionParticipants = s.SessionParticipants.Select(sp => sp.Person)
                        .Select(p => new IPersonSessionDto() {Name = p.Name, Age = p.Age})
                        .ToList(),
                    UsedAmmunitions = s.UsedAmmunitions.Select(ua => new IAmmoSessionDto()
                    {
                        AmmoPicture = ua.Ammunition.AmmoPicture,
                        Caliber = ua.Ammunition.Caliber,
                        PricePerPacks = ua.Ammunition.PricePerPacks,
                        CountUsed = ua.CountUsed
                    }).ToList(),
                    UsedWeapons = s.UsedWeapons.Select(uw => uw.Weapon)
                        .Select(w => new IWeaponSessionDto() {WeaponName = w.WeaponName, WeaponPicture = w.WeaponPicture})
                        .ToList(),
                });
        }
    }
}