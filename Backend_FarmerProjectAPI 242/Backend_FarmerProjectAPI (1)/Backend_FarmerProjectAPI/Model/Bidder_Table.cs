using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_FarmerProjectAPI.Model
{
    public class Bidder_Table
    {
        [Key]
        public int Bid_ID { get; set; }
        public string full_Name { get; set; }
        public int contact_no { get; set; }
        public string email_ID { get; set; }
        public string add_Line1 { get; set; }
        public string add_line2 { get; set; }
        public string city { get; set; }
        public string State { get; set; }
        public int pincode { get; set; }
        public int account_no { get; set; }
        public string ifsc_code { get; set; }
        public int aadhar_no { get; set; }
        public string pan_no { get; set; }
        public string password { get; set; }
        public string confirm_Password { get; set; }
    }
}
