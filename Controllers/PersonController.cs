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
        public List<PersonDto> Get()
        {
            var persons = GetPersonDto()
                .OrderBy(p => p.PersonId)
                .ToList();
                
            return persons;
        }
        
        // GET: api/Person/last
        [HttpGet("last")]
        public PersonDto GetLast()
        {
            var persons = GetPersonDto()
                .OrderBy(p => p.PersonId)
                .FirstOrDefault();
                
            return persons;
        }
        
        // GET: api/Person/{id}
        [HttpGet("{id}")]
        public PersonDto GetById(int id)
        {
            var person = GetPersonDto()
                .SingleOrDefault(p => p.PersonId == id);
                
            return person;
        }
        
        // DELETE: api/Ammunition/delete/{id}
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var person = _ssaContext.Persons.FirstOrDefault(p => p.PersonId == id);
            
            if (person == null)
            {
                return BadRequest("ID doesn't correspond to any existing entry.");
            }
            
            _ssaContext.Remove(person);
            _ssaContext.SaveChanges();

            return Ok("The person has been successfully deleted.");
        }
        
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] Person body)
        {
            var person = _ssaContext.Persons
                .SingleOrDefault(p => p.PersonId == id);

            person.Name = body.Name;
            person.Age = body.Age;

            _ssaContext.SaveChanges();

            return Ok("Person successfully updated");
        }
        
        [HttpPost]
        public ActionResult Post([FromBody] Person body)
        {
            var person = new Person(body.Name, body.Age);
            _ssaContext.Add(person);
            _ssaContext.SaveChanges();

            return Ok("Successfully created a person");
        }
        
        private IQueryable<PersonDto> GetPersonDto()
        {
            return _ssaContext.Persons.Select(p => new PersonDto()
            {
                PersonId = p.PersonId,
                Age = p.Age,
                Name = p.Name
            });
        }
    }
}