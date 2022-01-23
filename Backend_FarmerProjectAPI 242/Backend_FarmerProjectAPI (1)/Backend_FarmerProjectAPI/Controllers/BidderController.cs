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
    public class BidderController : ControllerBase
    {
        private readonly Context _context;

        public BidderController(Context context)
        {
            _context = context;
        }

        // GET: api/Bidder
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bidder_Table>>> GetBidder_Tables()
        {
            return await _context.Bidder_Tables.ToListAsync();
        }

        // GET: api/Bidder/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bidder_Table>> GetBidder_Table(int id)
        {
            var bidder_Table = await _context.Bidder_Tables.FindAsync(id);

            if (bidder_Table == null)
            {
                return NotFound();
            }

            return bidder_Table;
        }

        // PUT: api/Bidder/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBidder_Table(int id, Bidder_Table bidder_Table)
        {
            if (id != bidder_Table.Bid_ID)
            {
                return BadRequest();
            }

            _context.Entry(bidder_Table).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Bidder_TableExists(id))
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

        // POST: api/Bidder
        [HttpPost]
        public async Task<ActionResult<Bidder_Table>> PostBidder_Table(Bidder_Table bidder_Table)
        {
            _context.Bidder_Tables.Add(bidder_Table);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBidder_Table", new { id = bidder_Table.Bid_ID }, bidder_Table);
        }

        // DELETE: api/Bidder/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBidder_Table(int id)
        {
            var bidder_Table = await _context.Bidder_Tables.FindAsync(id);
            if (bidder_Table == null)
            {
                return NotFound();
            }

            _context.Bidder_Tables.Remove(bidder_Table);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Bidder_TableExists(int id)
        {
            return _context.Bidder_Tables.Any(e => e.Bid_ID == id);
        }
    }
}