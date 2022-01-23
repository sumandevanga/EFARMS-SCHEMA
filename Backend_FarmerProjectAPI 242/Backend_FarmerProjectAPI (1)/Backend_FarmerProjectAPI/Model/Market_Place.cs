using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_FarmerProjectAPI.Model
{
    public class Market_Place
    {
        [Key]
        public string crop_Type { get; set; }
        public string crop_Name { get; set; }
        public int base_Price { get; set; }
        public int curr_Bid { get; set; }
        public int Previous_Bid { get; set; }
    }
}
