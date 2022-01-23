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
    public class LoginController : ControllerBase
    {
        private readonly Context _context;

        public LoginController(Context context)
        {
            _context = context;
        }
        [HttpPost]
        public IActionResult Login(string email,string pwd)
        {
            var curradmin = _context.Admins.FirstOrDefault(admin => admin.email_ID == email && admin.password == pwd);
            try
            {
                if (curradmin.password == pwd)
                    return Content("Login Successful");
                else if (curradmin == null)
                    return Content("Login Failed");
                return Content("Login Failed");
            }
            catch (NullReferenceException)
            {
                return Content("Login Failed");
            }


            //if (curradmin.password == pwd)
            //    return Content("Login Successful");
            //else
            //    return Content("Login Failed");
                //return Redirect("~/api/admin");
            //return Redirect("~/api/login");
            //return Content("Login Failed");
        }
    }
}
