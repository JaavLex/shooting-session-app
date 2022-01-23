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
    public class ShootingRangeController : ControllerBase
    {
        private readonly SsaContext _ssaContext;
        private readonly ILogger<ShootingRangeController> _logger;

        public ShootingRangeController(SsaContext ssaContext, ILogger<ShootingRangeController> logger)
        {
            _ssaContext = ssaContext;
            _logger = logger;
        }

        // GET: api/ShootingRange
        [HttpGet]
        public List<ShootingRangeDto> Get()
        {
            var shootingRanges = GetShootingRangeDto()
                .OrderBy(sr => sr.ShootingRangeId)
                .ToList();
                
            return shootingRanges;
        }
        
        // GET: api/ShootingRange/last
        [HttpGet("last")]
        public ShootingRangeDto GetLast()
        {
            var shootingRanges = GetShootingRangeDto()
                .OrderBy(sr => sr.ShootingRangeId)
                .FirstOrDefault();
                
            return shootingRanges;
        }
        
        // GET: api/ShootingRange/{id}
        [HttpGet("{id}")]
        public ShootingRangeDto GetById(int id)
        {
            var shootingRange = GetShootingRangeDto()
                .SingleOrDefault(sr => sr.ShootingRangeId == id);
                
            return shootingRange;
        }
        
        // DELETE: api/ShootingRange/delete/{id}
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var shootingRange = _ssaContext.ShootingRanges.FirstOrDefault(sr => sr.ShootingRangeId == id);
            
            if (shootingRange == null)
            {
                return BadRequest("ID doesn't correspond to any existing entry.");
            }
            
            _ssaContext.Remove(shootingRange);
            _ssaContext.SaveChanges();

            return Ok("The shooting range has been successfully deleted.");
        }
        
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] ShootingRange body)
        {
            var shootingRange = _ssaContext.ShootingRanges
                .SingleOrDefault(sr => sr.ShootingRangeId == id);

            shootingRange.PricePerStall = body.PricePerStall;
            shootingRange.Address = body.Address;

            _ssaContext.SaveChanges();

            return Ok("Shooting range successfully updated");
        }
        
        [HttpPost]
        public ActionResult Post([FromBody] ShootingRange body)
        {
            var shootingRange = new ShootingRange(body.PricePerStall, body.Address);
            _ssaContext.Add(shootingRange);
            _ssaContext.SaveChanges();

            return Ok("Successfully created a shooting range");
        }

        private IQueryable<ShootingRangeDto> GetShootingRangeDto()
        {
            return _ssaContext.ShootingRanges.Select(sr => new ShootingRangeDto()
            {
                ShootingRangeId = sr.ShootingRangeId,
                Address = sr.Address,
                PricePerStall = sr.PricePerStall
            });
        }
    }
}