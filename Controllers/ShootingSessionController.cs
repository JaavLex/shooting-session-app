using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
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
        public List<ShootingSessionDto> Get()
        {
            var shootingSessions = GetShootingSessionDto()
                     .OrderByDescending(s => s.SessionDate)
                     .ToList();
                
                 return shootingSessions;
        }
        
        // GET: api/ShootingSession/most-recent
        [HttpGet("most-recent")]
        public ShootingSessionDto GetLast()
        {
            var shootingSessions = GetShootingSessionDto()
                    .OrderByDescending(s => s.SessionDate)
                    .FirstOrDefault();

            return shootingSessions;
        }
        
        // GET: api/ShootingSession/{id}
        [HttpGet("{id}")]
        public ShootingSessionDto GetById(int id)
        {
            var shootingSessions = GetShootingSessionDto()
                .SingleOrDefault(s => s.ShootingSessionId == id);

            return shootingSessions;
        }

        // DELETE: api/ShootingSession/delete/{id}
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var shootingSessions = _ssaContext.ShootingSessions.FirstOrDefault(s => s.ShootingSessionId == id);
            
            if (shootingSessions == null)
            {
                return BadRequest("ID doesn't correspond to any existing entry.");
            }
            
            _ssaContext.Remove(shootingSessions);
            _ssaContext.SaveChanges();

            return Ok("The session has been successfully deleted.");
        }

        // POST: api/ShootingSession
        // Creates a new session, and linking it with its participants ammunitions and weapons.
        [HttpPost]
        public ActionResult Post([FromBody] ShootingSession body)
        {
            var session = new ShootingSession(body.SessionDate, body.TotalPrice, body.StallCount, body.ShootingRangeId);
            _ssaContext.Add(session);
            _ssaContext.SaveChanges();
            
            foreach (var sessionParticipant in body.SessionParticipants
                         .Select(bodySessionParticipant => new SessionParticipant(session.ShootingSessionId, bodySessionParticipant.PersonId)))
            {
                _ssaContext.Add(sessionParticipant);
            }
            
            foreach (var usedWeapon in body.UsedWeapons
                         .Select(bodyUsedWeapon => new UsedWeapon(session.ShootingSessionId, bodyUsedWeapon.WeaponId)))
            {
                _ssaContext.Add(usedWeapon);
            }
            
            foreach (var usedAmmunition in body.UsedAmmunitions
                         .Select(bodyUsedAmmunition => new UsedAmmunition(session.ShootingSessionId, bodyUsedAmmunition.AmmunitionId, bodyUsedAmmunition.CountUsed)))
            {
                _ssaContext.Add(usedAmmunition);
            }
            
            _ssaContext.SaveChanges();

            return Ok("Successfully created a session");
        }

        // PUT: api/ShootingSession/update/{id}
        // Modifies an already existing session
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] ShootingSession body)
        {
            var shootingSessions = _ssaContext.ShootingSessions
                .SingleOrDefault(s => s.ShootingSessionId == id);

            shootingSessions.SessionDate = body.SessionDate;
            shootingSessions.TotalPrice = body.TotalPrice;
            shootingSessions.StallCount = body.StallCount;
            shootingSessions.ShootingRangeId = body.ShootingRangeId;

            _ssaContext.SaveChanges();

            var currentParticipants = _ssaContext.SessionParticipants
                .Where(sp => sp.ShootingSessionId == id);
            var currentAmmo = _ssaContext.UsedAmmunitions
                .Where(ua => ua.ShootingSessionId == id);
            var currentWeapons = _ssaContext.UsedWeapons
                .Where(uw => uw.ShootingSessionId == id);

            var participantsToAdd = body.SessionParticipants
                .Select(sp => sp.PersonId)
                .Except(currentParticipants.Select(sp => sp.PersonId))
                .ToList();
            var ammoToAdd = body.UsedAmmunitions
                .Select(ua => ua.AmmunitionId)
                .Except(currentAmmo.Select(ua => ua.AmmunitionId))
                .ToList();
            var weaponsToAdd = body.UsedWeapons
                .Select(uw => uw.WeaponId)
                .Except(currentWeapons.Select(uw => uw.WeaponId))
                .ToList();
            
            var participantsToDelete = currentParticipants
                .Select(sp => sp.PersonId).AsEnumerable<int>()
                .Except(body.SessionParticipants.Select(sp => sp.PersonId))
                .ToList();
            var ammoToDelete = currentAmmo
                .Select(ua => ua.AmmunitionId).AsEnumerable<int>()
                .Except(body.UsedAmmunitions.Select(ua => ua.AmmunitionId))
                .ToList();
            var weaponsToDelete = currentWeapons
                .Select(uw => uw.WeaponId).AsEnumerable<int>()
                .Except(body.UsedWeapons.Select(uw => uw.WeaponId))
                .ToList();


            foreach (var sessionParticipant in participantsToAdd
                         .Select(participantId => new SessionParticipant(id, participantId)))
            {
                _ssaContext.Add(sessionParticipant);
            }
            
            foreach (var usedAmmo in ammoToAdd
                         .Select(ammunitionId => new UsedAmmunition(id, ammunitionId,
                             body.UsedAmmunitions.First(ua => ua.AmmunitionId == ammunitionId).CountUsed)))
            {
                _ssaContext.Add(usedAmmo);
            }
            
            foreach (var usedWeapon in weaponsToAdd
                         .Select(weaponId => new UsedWeapon(id, weaponId)))
            {
                _ssaContext.Add(usedWeapon);
            }
            
            foreach (var sessionParticipant in participantsToDelete
                         .Select(participantId => _ssaContext.SessionParticipants
                         .FirstOrDefault(sp => sp.ShootingSessionId == id && sp.PersonId == participantId)))
            {
                if (sessionParticipant == null)
                {
                    return BadRequest("ID doesn't correspond to any existing entry.");
                }
                
                _ssaContext.Remove(sessionParticipant);
            }
            
            foreach (var usedAmmo in ammoToDelete
                         .Select(ammunitionId => _ssaContext.UsedAmmunitions
                             .FirstOrDefault(ua => ua.ShootingSessionId == id && ua.AmmunitionId == ammunitionId)))
            {
                if (usedAmmo == null)
                {
                    return BadRequest("ID doesn't correspond to any existing entry.");
                }
                
                _ssaContext.Remove(usedAmmo);
            }
            
            foreach (var usedWeapon in weaponsToDelete
                         .Select(weaponId => _ssaContext.UsedWeapons
                             .FirstOrDefault(uw => uw.ShootingSessionId == id && uw.WeaponId == weaponId)))
            {
                if (usedWeapon == null)
                {
                    return BadRequest("ID doesn't correspond to any existing entry.");
                }
                
                _ssaContext.Remove(usedWeapon);
            }
            
            _ssaContext.SaveChanges();

            return Ok("Successfully modified a session");
        }

        private IQueryable<ShootingSessionDto> GetShootingSessionDto()
        {
            return _ssaContext.ShootingSessions
                .Select(s => new ShootingSessionDto()
                {
                    ShootingSessionId = s.ShootingSessionId,
                    SessionDate = s.SessionDate,
                    TotalPrice = s.TotalPrice,
                    ShootingRange = new RangeSessionDto()
                    {
                        ShootingRangeId = s.ShootingRangeId,
                        Address = s.ShootingRange.Address, 
                        PricePerStall = s.ShootingRange.PricePerStall
                    },
                    SessionParticipants = s.SessionParticipants.Select(sp => sp.Person)
                        .Select(p => new PersonSessionDto()
                        {
                            PersonId = p.PersonId, 
                            Name = p.Name, 
                            Age = p.Age
                        })
                        .ToList(),
                    UsedAmmunitions = s.UsedAmmunitions.Select(ua => new AmmoSessionDto()
                    {
                        AmmunitionId = ua.AmmunitionId,
                        AmmoPicture = ua.Ammunition.AmmoPicture,
                        Caliber = ua.Ammunition.Caliber,
                        PricePerPacks = ua.Ammunition.PricePerPacks,
                        CountUsed = ua.CountUsed
                    }).ToList(),
                    UsedWeapons = s.UsedWeapons.Select(uw => uw.Weapon)
                        .Select(w => new WeaponSessionDto()
                        {
                            WeaponId = w.WeaponId,
                            WeaponName = w.WeaponName, 
                            WeaponPicture = w.WeaponPicture
                        })
                        .ToList(),
                });
        }
    }
}