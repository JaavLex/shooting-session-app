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
    public class WeaponController : ControllerBase
    {
        private readonly SsaContext _ssaContext;
        private readonly ILogger<WeaponController> _logger;

        public WeaponController(SsaContext ssaContext, ILogger<WeaponController> logger)
        {
            _ssaContext = ssaContext;
            _logger = logger;
        }

        // GET: api/Weapon
        [HttpGet]
        public List<WeaponDto> Get()
        {
            var weapons = GetWeaponDto()
                .OrderBy(w => w.WeaponId)
                .ToList();
                
            return weapons;
        }
        
        [HttpGet("last")]
        public WeaponDto GetLast()
        {
            var weapon = GetWeaponDto()
                .OrderBy(w => w.WeaponId)
                .FirstOrDefault();
                
            return weapon;
        }
        
        [HttpGet("{id}")]
        public WeaponDto GetById(int id)
        {
            var weapon = GetWeaponDto()
                .SingleOrDefault(w => w.WeaponId == id);

            return weapon;
        }
        
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var weapon = _ssaContext.Weapons.FirstOrDefault(w => w.WeaponId == id);
            
            if (weapon == null)
            {
                return BadRequest("ID doesn't correspond to any existing entry.");
            }
            
            _ssaContext.Remove(weapon);
            _ssaContext.SaveChanges();

            return Ok("The weapon has been successfully deleted.");
        }

        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] Weapon body)
        {
            var weapons = _ssaContext.Weapons
                .SingleOrDefault(w => w.WeaponId == id);

            weapons.WeaponName = body.WeaponName;
            weapons.WeaponPicture = body.WeaponPicture;
            weapons.AmmunitionId = body.AmmunitionId;

            _ssaContext.SaveChanges();

            return Ok("Weapon successfully updated");
        }

        [HttpPost]
        public ActionResult Post([FromBody] Weapon body)
        {
            var weapon = new Weapon(body.WeaponName, body.WeaponPicture, body.AmmunitionId);
            _ssaContext.Add(weapon);
            _ssaContext.SaveChanges();

            return Ok("Successfully created a weapon");
        }
        
        private IQueryable<WeaponDto> GetWeaponDto()
        {
            return _ssaContext.Weapons.Select(w => new WeaponDto()
            {
                WeaponId = w.WeaponId,
                WeaponName = w.WeaponName,
                WeaponPicture = w.WeaponPicture,
                Ammunition = new AmmunitionDto()
                {
                    AmmunitionId = w.Ammunition.AmmunitionId,
                    AmmoPicture = w.Ammunition.AmmoPicture,
                    Caliber = w.Ammunition.Caliber,
                    PricePerPacks = w.Ammunition.PricePerPacks
                }
            });
        }
    }
}