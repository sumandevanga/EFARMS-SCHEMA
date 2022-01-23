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
    public class FarmerLoginController : ControllerBase
    {
        private readonly Context _context;

        public FarmerLoginController(Context context)
        {
            _context = context;
        }
        [HttpPost]
        public IActionResult Farmerlogin(string email,string pwd)
        {
            var currlogin = _context.Farmer_Tables.FirstOrDefault(Farmerlogin => Farmerlogin.email_ID == email && Farmerlogin.password == pwd);
            try
            {
                if (currlogin.password == pwd)
                    return Redirect("~/api/Farmer");
                    //return Content("Login Successful");
                return Content("Login Failed");
            }
            catch (NullReferenceException)
            {
                return Content("Login Failed");
            }





            //if (currlogin.password != "null")
            //    return Redirect("~/api/Farmer");
            ////return Redirect("~/api/Farmerlogin");
            //return Content("login Failed");
        }
    }
}
