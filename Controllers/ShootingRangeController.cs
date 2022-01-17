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
        public List<IShootingRangeDto> Get()
        {
            var shootingRanges = _ssaContext.ShootingRanges.Select(sr => new IShootingRangeDto()
                {
                    ShootingRangeId = sr.ShootingRangeId,
                    Address = sr.Address,
                    PricePerStall = sr.PricePerStall
                })
                .OrderBy(sr => sr.ShootingRangeId)
                .ToList();
                
            return shootingRanges;
        }
        
    }
}