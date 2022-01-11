using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ssa_backend.Models;

namespace ssa_backend.Controllers
{
    [Route("api/ammo")]
    [ApiController]
    public class AmmunitionController : ControllerBase
    {
        private readonly SSAContext _context;

        public AmmunitionController(SSAContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Ammunition> Get()
        {
            var ammoList = _context.Ammunition.ToList();
            return ammoList;
        }
        
    }
}