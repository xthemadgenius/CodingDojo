using Microsoft.EntityFrameworkCore.Migrations;

namespace TVShows.Migrations
{
    public partial class Oops : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Shows",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Shows_UserId",
                table: "Shows",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Shows_Users_UserId",
                table: "Shows",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shows_Users_UserId",
                table: "Shows");

            migrationBuilder.DropIndex(
                name: "IX_Shows_UserId",
                table: "Shows");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Shows");
        }
    }
}
