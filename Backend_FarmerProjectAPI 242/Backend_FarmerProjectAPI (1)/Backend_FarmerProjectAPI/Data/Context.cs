using Microsoft.EntityFrameworkCore;
using Backend_FarmerProjectAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_FarmerProjectAPI.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
        public DbSet<Admin> Admins { set; get; }
        public DbSet<Bidder_Table> Bidder_Tables { set; get; }
        public DbSet<Farmer_Table> Farmer_Tables { get; set; }
        public DbSet<Insurance> Insurances { get; set; }
        public DbSet<Market_Place>Market_Places  { get; set; }
        public DbSet<Sell_Request> sell_Requests { get; set; }
        public DbSet<Sold_History> Sold_Histories { get; set; }
        public DbSet<Welcome_Bidder> Welcome_Bidders { get; set; }
        public DbSet<claim_Form> claim_Forms { set; get; }
    }
}
