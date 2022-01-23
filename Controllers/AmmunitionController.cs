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
    public class AmmunitionController : ControllerBase
    {
        private readonly SsaContext _ssaContext;
        private readonly ILogger<AmmunitionController> _logger;

        public AmmunitionController(SsaContext ssaContext, ILogger<AmmunitionController> logger)
        {
            _ssaContext = ssaContext;
            _logger = logger;
        }

        // GET: api/Ammunition
        [HttpGet]
        public List<AmmunitionDto> Get()
        {
            var ammos = GetAmmunitionDto()
                .OrderBy(a => a.AmmunitionId)
                .ToList();
                
            return ammos;
        }
        
        // GET: api/Ammunition/last
        [HttpGet("last")]
        public AmmunitionDto GetLast()
        {
            var ammo = GetAmmunitionDto()
                .OrderBy(a => a.AmmunitionId)
                .FirstOrDefault();
                
            return ammo;
        }
        
        // GET: api/Ammunition/{id}
        [HttpGet("{id}")]
        public AmmunitionDto GetById(int id)
        {
            var ammo = GetAmmunitionDto()
                .SingleOrDefault(a => a.AmmunitionId == id);
                
            return ammo;
        }
        
        // DELETE: api/Ammunition/delete/{id}
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var ammo = _ssaContext.Ammunition.FirstOrDefault(a => a.AmmunitionId == id);
            
            if (ammo == null)
            {
                return BadRequest("ID doesn't correspond to any existing entry.");
            }
            
            _ssaContext.Remove(ammo);
            _ssaContext.SaveChanges();

            return Ok("The ammo has been successfully deleted.");
        }
        
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] Ammunition body)
        {
            var ammo = _ssaContext.Ammunition
                .SingleOrDefault(a => a.AmmunitionId == id);

            ammo.Caliber = body.Caliber;
            ammo.AmmoPicture = body.AmmoPicture;
            ammo.PricePerPacks = body.PricePerPacks;

            _ssaContext.SaveChanges();

            return Ok("Weapon successfully updated");
        }
        
        [HttpPost]
        public ActionResult Post([FromBody] Ammunition body)
        {
            var ammo = new Ammunition(body.Caliber, body.AmmoPicture, body.PricePerPacks);
            _ssaContext.Add(ammo);
            _ssaContext.SaveChanges();

            return Ok("Successfully created a weapon");
        }
        
        private IQueryable<AmmunitionDto> GetAmmunitionDto()
        {
            return _ssaContext.Ammunition.Select(a => new AmmunitionDto()
            {
                AmmunitionId = a.AmmunitionId,
                Caliber = a.Caliber,
                AmmoPicture = a.AmmoPicture,
                PricePerPacks = a.PricePerPacks
            });
        }
        
    }
}