using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_FarmerProjectAPI.Model
{
    public class Sold_History
    {
        [Key]
        public string crop_Type { get; set; }
        public string crop_Name { get; set; }
        public int MSP { get; set; }
        public int sold_Price { get; set; }
        public int total_Price { get; set; }

    }
}
