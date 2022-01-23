using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_FarmerProjectAPI.Model
{
    public class claim_Form
    {
        [Key]
        public string Insurance_Company { get; set; }
        public int Policy_No { get; set; }
        public string Name_Of_Insuree { get; set; }
        public int Sum_Insured { get; set; }
        public string Cause_Of_Loss { get; set; }
    }
}
