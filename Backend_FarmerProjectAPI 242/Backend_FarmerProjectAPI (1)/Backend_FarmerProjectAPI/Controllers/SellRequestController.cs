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
    public class SellRequestController : ControllerBase
    {
        private readonly Context _context;

        public SellRequestController(Context context)
        {
            _context = context;
        }

        // GET: api/SellRequest
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sell_Request>>> Getsell_Requests()
        {
            return await _context.sell_Requests.ToListAsync();
        }

        // GET: api/SellRequest/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Sell_Request>> GetSell_Request(int id)
        {
            var sell_Request = await _context.sell_Requests.FindAsync(id);

            if (sell_Request == null)
            {
                return NotFound();
            }

            return sell_Request;
        }

        // PUT: api/SellRequest/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSell_Request(int id, Sell_Request sell_Request)
        {
            if (id != sell_Request.s_ID)
            {
                return BadRequest();
            }

            _context.Entry(sell_Request).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Sell_RequestExists(id))
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

        // POST: api/SellRequest
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Sell_Request>> PostSell_Request(Sell_Request sell_Request)
        {
            _context.sell_Requests.Add(sell_Request);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSell_Request", new { id = sell_Request.s_ID }, sell_Request);
        }

        // DELETE: api/SellRequest/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSell_Request(int id)
        {
            var sell_Request = await _context.sell_Requests.FindAsync(id);
            if (sell_Request == null)
            {
                return NotFound();
            }

            _context.sell_Requests.Remove(sell_Request);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Sell_RequestExists(int id)
        {
            return _context.sell_Requests.Any(e => e.s_ID == id);
        }
    }
}
