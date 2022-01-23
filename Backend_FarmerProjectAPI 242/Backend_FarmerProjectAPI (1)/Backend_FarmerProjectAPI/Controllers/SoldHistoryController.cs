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
    public class SoldHistoryController : ControllerBase
    {
        private readonly Context _context;

        public SoldHistoryController(Context context)
        {
            _context = context;
        }

        // GET: api/SoldHistory
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sold_History>>> GetSold_Histories()
        {
            return await _context.Sold_Histories.ToListAsync();
        }

        // GET: api/SoldHistory/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Sold_History>> GetSold_History(string id)
        {
            var sold_History = await _context.Sold_Histories.FindAsync(id);

            if (sold_History == null)
            {
                return NotFound();
            }

            return sold_History;
        }

        // PUT: api/SoldHistory/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSold_History(string id, Sold_History sold_History)
        {
            if (id != sold_History.crop_Type)
            {
                return BadRequest();
            }

            _context.Entry(sold_History).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Sold_HistoryExists(id))
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

        // POST: api/SoldHistory
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Sold_History>> PostSold_History(Sold_History sold_History)
        {
            _context.Sold_Histories.Add(sold_History);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Sold_HistoryExists(sold_History.crop_Type))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSold_History", new { id = sold_History.crop_Type }, sold_History);
        }

        // DELETE: api/SoldHistory/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSold_History(string id)
        {
            var sold_History = await _context.Sold_Histories.FindAsync(id);
            if (sold_History == null)
            {
                return NotFound();
            }

            _context.Sold_Histories.Remove(sold_History);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Sold_HistoryExists(string id)
        {
            return _context.Sold_Histories.Any(e => e.crop_Type == id);
        }
    }
}
