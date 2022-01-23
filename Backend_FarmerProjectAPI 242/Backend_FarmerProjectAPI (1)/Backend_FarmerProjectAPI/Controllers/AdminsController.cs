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
    public class AdminsController : ControllerBase
    {
        private readonly Context _context;

        public AdminsController(Context context)
        {
            _context = context;
        }

        // GET: api/Admins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmins()
        {
            return await _context.Admins.ToListAsync();
        }

        // GET: api/Admins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(string id)
        {
            var admin = await _context.Admins.FindAsync(id);

            if (admin == null)
            {
                return NotFound();
            }

            return admin;
        }

        // PUT: api/Admins/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutAdmin(string id, Admin admin)
        //{
        //    if (id != admin.email_ID)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(admin).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!AdminExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/Admins
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<Admin>> PostAdmin(Admin admin)
        //{
        //    _context.Admins.Add(admin);
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (AdminExists(admin.email_ID))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtAction("GetAdmin", new { id = admin.email_ID }, admin);
        //}

        //// DELETE: api/Admins/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteAdmin(string id)
        //{
        //    var admin = await _context.Admins.FindAsync(id);
        //    if (admin == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Admins.Remove(admin);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool AdminExists(string id)
        {
            return _context.Admins.Any(e => e.email_ID == id);
        }
    }
}
