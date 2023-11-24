using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Formula1_API.Migrations
{
    /// <inheritdoc />
    public partial class ChangeAttributes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Driver1Id",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "Driver2Id",
                table: "Teams");

            migrationBuilder.AddColumn<string>(
                name: "Driver1",
                table: "Teams",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Driver2",
                table: "Teams",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Driver1",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "Driver2",
                table: "Teams");

            migrationBuilder.AddColumn<int>(
                name: "Driver1Id",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Driver2Id",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
