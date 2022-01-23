using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend_FarmerProjectAPI.Data;
using Backend_FarmerProjectAPI.Model;

namespace Backend_FarmerProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class claimFormController : ControllerBase
    {
        private readonly Context _context;

        public claimFormController(Context context)
        {
            _context = context;
        }

        // GET: api/claimForm
        [HttpGet]
        public async Task<ActionResult<IEnumerable<claim_Form>>> Getclaim_Forms()
        {
            return await _context.claim_Forms.ToListAsync();
        }

        // GET: api/claimForm/5
        [HttpGet("{id}")]
        public async Task<ActionResult<claim_Form>> Getclaim_Form(int id)
        {
            var claim_Form = await _context.claim_Forms.FindAsync(id);

            if (claim_Form == null)
            {
                return NotFound();
            }

            return claim_Form;
        }

        // PUT: api/claimForm/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putclaim_Form(int id, claim_Form claim_Form)
        {
            if (id != claim_Form.Policy_No)
            {
                return BadRequest();
            }

            _context.Entry(claim_Form).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!claim_FormExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/claimForm
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<claim_Form>> Postclaim_Form(claim_Form claim_Form)
        {
            _context.claim_Forms.Add(claim_Form);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getclaim_Form", new { id = claim_Form.Policy_No }, claim_Form);
        }

        // DELETE: api/claimForm/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteclaim_Form(int id)
        {
            var claim_Form = await _context.claim_Forms.FindAsync(id);
            if (claim_Form == null)
            {
                return NotFound();
            }

            _context.claim_Forms.Remove(claim_Form);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool claim_FormExists(int id)
        {
            return _context.claim_Forms.Any(e => e.Policy_No == id);
        }
    }
}
