using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Formula1_API.Migrations
{
    /// <inheritdoc />
    public partial class AddNewAttributes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Teams",
                table: "Teams");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<string>(
                name: "Logo",
                table: "Teams",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Points",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Ranking",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Flag",
                table: "Drivers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Points",
                table: "Drivers",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Ranking",
                table: "Drivers",
                type: "INTEGER",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Logo",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "Points",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "Ranking",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "Flag",
                table: "Drivers");

            migrationBuilder.DropColumn(
                name: "Points",
                table: "Drivers");

            migrationBuilder.DropColumn(
                name: "Ranking",
                table: "Drivers");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Teams",
                table: "Teams",
                column: "Id");
        }
    }
}
