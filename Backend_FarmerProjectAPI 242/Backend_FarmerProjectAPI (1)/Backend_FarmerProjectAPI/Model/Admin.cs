using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_FarmerProjectAPI.Model
{
    public class Admin
    {
        [Key]
        public string email_ID { get; set; }
        public string password { get; set; }

    }
}
