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
    public class PersonController : ControllerBase
    {
        private readonly SsaContext _ssaContext;
        private readonly ILogger<PersonController> _logger;

        public PersonController(SsaContext ssaContext, ILogger<PersonController> logger)
        {
            _ssaContext = ssaContext;
            _logger = logger;
        }

        // GET: api/Person
        [HttpGet]
        public List<IPersonDto> Get()
        {
            var persons = _ssaContext.Persons.Select(p => new IPersonDto() {PersonId = p.PersonId, Age = p.Age, Name = p.Name})
                .OrderBy(p => p.PersonId)
                .ToList();
                
            return persons;
        }
        
    }
}