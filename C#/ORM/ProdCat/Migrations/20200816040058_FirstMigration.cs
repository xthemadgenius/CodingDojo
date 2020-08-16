using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProdCat.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TheCategories",
                columns: table => new
                {
                    CategoryId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    UpdatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TheCategories", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "TheProducts",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Price = table.Column<decimal>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    UpdatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TheProducts", x => x.ProductId);
                });

            migrationBuilder.CreateTable(
                name: "TheAssociations",
                columns: table => new
                {
                    AssociationId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ProductId = table.Column<int>(nullable: false),
                    getProductProductId = table.Column<int>(nullable: true),
                    CategoryId = table.Column<int>(nullable: false),
                    getCategoryCategoryId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TheAssociations", x => x.AssociationId);
                    table.ForeignKey(
                        name: "FK_TheAssociations_TheCategories_getCategoryCategoryId",
                        column: x => x.getCategoryCategoryId,
                        principalTable: "TheCategories",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_TheAssociations_TheProducts_getProductProductId",
                        column: x => x.getProductProductId,
                        principalTable: "TheProducts",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TheAssociations_getCategoryCategoryId",
                table: "TheAssociations",
                column: "getCategoryCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_TheAssociations_getProductProductId",
                table: "TheAssociations",
                column: "getProductProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TheAssociations");

            migrationBuilder.DropTable(
                name: "TheCategories");

            migrationBuilder.DropTable(
                name: "TheProducts");
        }
    }
}
