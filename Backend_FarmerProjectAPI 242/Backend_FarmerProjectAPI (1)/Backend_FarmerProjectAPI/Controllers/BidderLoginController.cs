using Backend_FarmerProjectAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_FarmerProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BidderLoginController : ControllerBase
    {
        private readonly Context _context;

        public BidderLoginController(Context context)
        {
            _context = context;
        }
        [HttpPost]
        public IActionResult Bidderlogin(string email,string pwd)
        {
            var currlogin = _context.Bidder_Tables.FirstOrDefault(Bidderlogin => Bidderlogin.email_ID == email && Bidderlogin.password == pwd);
            try
            {
                if (currlogin.password == pwd)
                    return Content("Login Successful");
                return Content("Login Failed");
            }
            catch (NullReferenceException)
            {
                return Content("Login Failed");
            }

            //if (currlogin.password != "null")
            //    return Redirect("~/api/Bidder");
            //return Content("login Falied");
        }
    }
}
