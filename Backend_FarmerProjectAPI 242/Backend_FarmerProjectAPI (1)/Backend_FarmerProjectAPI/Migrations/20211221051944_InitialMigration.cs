using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend_FarmerProjectAPI.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    email_ID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.email_ID);
                });

            migrationBuilder.CreateTable(
                name: "Bidder_Tables",
                columns: table => new
                {
                    Bid_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    full_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    contact_no = table.Column<int>(type: "int", nullable: false),
                    email_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    add_Line1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    add_line2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    city = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    pincode = table.Column<int>(type: "int", nullable: false),
                    account_no = table.Column<int>(type: "int", nullable: false),
                    ifsc_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    aadhar_no = table.Column<int>(type: "int", nullable: false),
                    pan_no = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    confirm_Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bidder_Tables", x => x.Bid_ID);
                });

            migrationBuilder.CreateTable(
                name: "claim_Forms",
                columns: table => new
                {
                    Insurance_Company = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Policy_No = table.Column<int>(type: "int", nullable: false),
                    Name_Of_Insuree = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Sum_Insured = table.Column<int>(type: "int", nullable: false),
                    Cause_Of_Loss = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_claim_Forms", x => x.Insurance_Company);
                });

            migrationBuilder.CreateTable(
                name: "Farmer_Tables",
                columns: table => new
                {
                    Farmer_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    full_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    contact_no = table.Column<long>(type: "bigint", nullable: false),
                    email_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    add_Line1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    add_line2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    city = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    pincode = table.Column<int>(type: "int", nullable: false),
                    account_no = table.Column<long>(type: "bigint", nullable: false),
                    ifsc_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    aadhar_no = table.Column<long>(type: "bigint", nullable: false),
                    pan_no = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    confirm_Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Farmer_Tables", x => x.Farmer_ID);
                });

            migrationBuilder.CreateTable(
                name: "Market_Places",
                columns: table => new
                {
                    crop_Type = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    crop_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    base_Price = table.Column<int>(type: "int", nullable: false),
                    curr_Bid = table.Column<int>(type: "int", nullable: false),
                    Previous_Bid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Market_Places", x => x.crop_Type);
                });

            migrationBuilder.CreateTable(
                name: "Sold_Histories",
                columns: table => new
                {
                    crop_Type = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    crop_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MSP = table.Column<int>(type: "int", nullable: false),
                    sold_Price = table.Column<int>(type: "int", nullable: false),
                    total_Price = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sold_Histories", x => x.crop_Type);
                });

            migrationBuilder.CreateTable(
                name: "Welcome_Bidders",
                columns: table => new
                {
                    crop_Type = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    crop_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    base_Price = table.Column<int>(type: "int", nullable: false),
                    curr_Bid = table.Column<int>(type: "int", nullable: false),
                    bid_Amount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Welcome_Bidders", x => x.crop_Type);
                });

            migrationBuilder.CreateTable(
                name: "Insurances",
                columns: table => new
                {
                    I_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    season = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    year = table.Column<int>(type: "int", nullable: false),
                    crop = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    area = table.Column<int>(type: "int", nullable: false),
                    sum_Insured = table.Column<int>(type: "int", nullable: false),
                    share_Premium = table.Column<int>(type: "int", nullable: false),
                    premium_Amount = table.Column<int>(type: "int", nullable: false),
                    total_sum = table.Column<int>(type: "int", nullable: false),
                    Insurance_Company = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Claim_FormInsurance_Company = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Insurances", x => x.I_Id);
                    table.ForeignKey(
                        name: "FK_Insurances_claim_Forms_Claim_FormInsurance_Company",
                        column: x => x.Claim_FormInsurance_Company,
                        principalTable: "claim_Forms",
                        principalColumn: "Insurance_Company",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "sell_Requests",
                columns: table => new
                {
                    s_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    crop_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    crop_Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fertilizer_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    soil_ph = table.Column<int>(type: "int", nullable: false),
                    quantity = table.Column<int>(type: "int", nullable: false),
                    Sold_Historycrop_Type = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Market_Placecrop_Type = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Welcome_Biddercrop_Type = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_sell_Requests", x => x.s_ID);
                    table.ForeignKey(
                        name: "FK_sell_Requests_Market_Places_Market_Placecrop_Type",
                        column: x => x.Market_Placecrop_Type,
                        principalTable: "Market_Places",
                        principalColumn: "crop_Type",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_sell_Requests_Sold_Histories_Sold_Historycrop_Type",
                        column: x => x.Sold_Historycrop_Type,
                        principalTable: "Sold_Histories",
                        principalColumn: "crop_Type",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_sell_Requests_Welcome_Bidders_Welcome_Biddercrop_Type",
                        column: x => x.Welcome_Biddercrop_Type,
                        principalTable: "Welcome_Bidders",
                        principalColumn: "crop_Type",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Insurances_Claim_FormInsurance_Company",
                table: "Insurances",
                column: "Claim_FormInsurance_Company");

            migrationBuilder.CreateIndex(
                name: "IX_sell_Requests_Market_Placecrop_Type",
                table: "sell_Requests",
                column: "Market_Placecrop_Type");

            migrationBuilder.CreateIndex(
                name: "IX_sell_Requests_Sold_Historycrop_Type",
                table: "sell_Requests",
                column: "Sold_Historycrop_Type");

            migrationBuilder.CreateIndex(
                name: "IX_sell_Requests_Welcome_Biddercrop_Type",
                table: "sell_Requests",
                column: "Welcome_Biddercrop_Type");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admins");

            migrationBuilder.DropTable(
                name: "Bidder_Tables");

            migrationBuilder.DropTable(
                name: "Farmer_Tables");

            migrationBuilder.DropTable(
                name: "Insurances");

            migrationBuilder.DropTable(
                name: "sell_Requests");

            migrationBuilder.DropTable(
                name: "claim_Forms");

            migrationBuilder.DropTable(
                name: "Market_Places");

            migrationBuilder.DropTable(
                name: "Sold_Histories");

            migrationBuilder.DropTable(
                name: "Welcome_Bidders");
        }
    }
}
