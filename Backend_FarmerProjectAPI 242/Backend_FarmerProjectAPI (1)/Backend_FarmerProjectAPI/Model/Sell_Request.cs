using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_FarmerProjectAPI.Model
{
    public class Sell_Request
    {
        [Key]
        public int s_ID { get; set; }
        public string crop_Name { get; set; }
        public string crop_Type { get; set; }
        public string fertilizer_type { get; set; }
        public int soil_ph { get; set; }
        public int quantity { get; set; }
        public virtual Sold_History Sold_History { get; set; }
        public virtual Market_Place Market_Place { get; set; }
        public virtual Welcome_Bidder Welcome_Bidder { get; set; }
    }
}
