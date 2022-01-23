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
    public class WelcomeBidderController : ControllerBase
    {
        private readonly Context _context;

        public WelcomeBidderController(Context context)
        {
            _context = context;
        }

        // GET: api/WelcomeBidder
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Welcome_Bidder>>> GetWelcome_Bidders()
        {
            return await _context.Welcome_Bidders.ToListAsync();
        }

        // GET: api/WelcomeBidder/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Welcome_Bidder>> GetWelcome_Bidder(string id)
        {
            var welcome_Bidder = await _context.Welcome_Bidders.FindAsync(id);

            if (welcome_Bidder == null)
            {
                return NotFound();
            }

            return welcome_Bidder;
        }

        // PUT: api/WelcomeBidder/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWelcome_Bidder(string id, Welcome_Bidder welcome_Bidder)
        {
            if (id != welcome_Bidder.crop_Type)
            {
                return BadRequest();
            }

            _context.Entry(welcome_Bidder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Welcome_BidderExists(id))
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

        // POST: api/WelcomeBidder
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Welcome_Bidder>> PostWelcome_Bidder(Welcome_Bidder welcome_Bidder)
        {
            _context.Welcome_Bidders.Add(welcome_Bidder);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Welcome_BidderExists(welcome_Bidder.crop_Type))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetWelcome_Bidder", new { id = welcome_Bidder.crop_Type }, welcome_Bidder);
        }

        // DELETE: api/WelcomeBidder/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWelcome_Bidder(string id)
        {
            var welcome_Bidder = await _context.Welcome_Bidders.FindAsync(id);
            if (welcome_Bidder == null)
            {
                return NotFound();
            }

            _context.Welcome_Bidders.Remove(welcome_Bidder);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Welcome_BidderExists(string id)
        {
            return _context.Welcome_Bidders.Any(e => e.crop_Type == id);
        }
    }
}
