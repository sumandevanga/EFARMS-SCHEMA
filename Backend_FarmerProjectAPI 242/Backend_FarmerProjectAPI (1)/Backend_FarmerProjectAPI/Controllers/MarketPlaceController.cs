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
    public class MarketPlaceController : ControllerBase
    {
        private readonly Context _context;

        public MarketPlaceController(Context context)
        {
            _context = context;
        }

        // GET: api/MarketPlace
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Market_Place>>> GetMarket_Places()
        {
            return await _context.Market_Places.ToListAsync();
        }

        // GET: api/MarketPlace/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Market_Place>> GetMarket_Place(string id)
        {
            var market_Place = await _context.Market_Places.FindAsync(id);

            if (market_Place == null)
            {
                return NotFound();
            }

            return market_Place;
        }

        // PUT: api/MarketPlace/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMarket_Place(string id, Market_Place market_Place)
        {
            if (id != market_Place.crop_Type)
            {
                return BadRequest();
            }

            _context.Entry(market_Place).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Market_PlaceExists(id))
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

        // POST: api/MarketPlace
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Market_Place>> PostMarket_Place(Market_Place market_Place)
        {
            _context.Market_Places.Add(market_Place);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Market_PlaceExists(market_Place.crop_Type))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMarket_Place", new { id = market_Place.crop_Type }, market_Place);
        }

        // DELETE: api/MarketPlace/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMarket_Place(string id)
        {
            var market_Place = await _context.Market_Places.FindAsync(id);
            if (market_Place == null)
            {
                return NotFound();
            }

            _context.Market_Places.Remove(market_Place);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Market_PlaceExists(string id)
        {
            return _context.Market_Places.Any(e => e.crop_Type == id);
        }
    }
}
