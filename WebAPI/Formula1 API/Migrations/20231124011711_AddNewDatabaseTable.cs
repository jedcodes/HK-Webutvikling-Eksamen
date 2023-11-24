using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Formula1_API.Migrations
{
    /// <inheritdoc />
    public partial class AddNewDatabaseTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FlashCards",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Answer = table.Column<string>(type: "TEXT", nullable: true),
                    Question = table.Column<string>(type: "TEXT", nullable: true),
                    Option1 = table.Column<string>(type: "TEXT", nullable: true),
                    Option2 = table.Column<string>(type: "TEXT", nullable: true),
                    Option3 = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlashCards", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FlashCards");
        }
    }
}
