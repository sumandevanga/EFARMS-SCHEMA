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
    public class FarmerController : ControllerBase
    {
        private readonly Context _context;

        public FarmerController(Context context)
        {
            _context = context;
        }

        // GET: api/Farmer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Farmer_Table>>> GetFarmer_Tables()
        {
            return await _context.Farmer_Tables.ToListAsync();
        }

        // GET: api/Farmer/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Farmer_Table>> GetFarmer_Table(int id)
        {
            var farmer_Table = await _context.Farmer_Tables.FindAsync(id);

            if (farmer_Table == null)
            {
                return NotFound();
            }

            return farmer_Table;
        }

        // PUT: api/Farmer/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFarmer_Table(int id, Farmer_Table farmer_Table)
        {
            if (id != farmer_Table.Farmer_ID)
            {
                return BadRequest();
            }

            _context.Entry(farmer_Table).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Farmer_TableExists(id))
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

        // POST: api/Farmer
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Farmer_Table>> PostFarmer_Table(Farmer_Table farmer_Table)
        {
            _context.Farmer_Tables.Add(farmer_Table);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFarmer_Table", new { id = farmer_Table.Farmer_ID }, farmer_Table);
        }

        // DELETE: api/Farmer/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFarmer_Table(int id)
        {
            var farmer_Table = await _context.Farmer_Tables.FindAsync(id);
            if (farmer_Table == null)
            {
                return NotFound();
            }

            _context.Farmer_Tables.Remove(farmer_Table);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Farmer_TableExists(int id)
        {
            return _context.Farmer_Tables.Any(e => e.Farmer_ID == id);
        }
    }
}
