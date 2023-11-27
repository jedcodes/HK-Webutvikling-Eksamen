using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Formula1_API.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedAttributes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Logo",
                table: "Teams");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "FlashCards",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "FlashCards");

            migrationBuilder.AddColumn<string>(
                name: "Logo",
                table: "Teams",
                type: "TEXT",
                nullable: true);
        }
    }
}
