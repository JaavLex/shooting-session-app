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
            var weapons = _ssaContext.Weapons.Select(w => new WeaponDto()
                {
                    WeaponId = w.WeaponId,
                    WeaponName = w.WeaponName,
                    WeaponPicture = w.WeaponPicture,
                    AmmunitionId = w.AmmunitionId
                })
                .OrderBy(w => w.WeaponId)
                .ToList();
                
            return weapons;
        }
        
    }
}