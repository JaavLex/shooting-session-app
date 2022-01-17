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
        public List<IAmmunitionDto> Get()
        {
            var ammos = _ssaContext.Ammunition.Select(a => new IAmmunitionDto()
                {
                    AmmunitionId = a.AmmunitionId,
                    Caliber = a.Caliber,
                    AmmoPicture = a.AmmoPicture,
                    PricePerPacks = a.PricePerPacks
                })
                .OrderBy(a => a.AmmunitionId)
                .ToList();
                
            return ammos;
        }
        
    }
}