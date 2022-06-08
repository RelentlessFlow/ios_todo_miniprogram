using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mini_cloud.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ToLists",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    IconColor = table.Column<string>(type: "TEXT", nullable: false),
                    Title = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ToLists", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Todos",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Remark = table.Column<string>(type: "TEXT", nullable: false),
                    DateTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Flag = table.Column<bool>(type: "INTEGER", nullable: false),
                    Complete = table.Column<bool>(type: "INTEGER", nullable: false),
                    ToListId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Todos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Todos_ToLists_ToListId",
                        column: x => x.ToListId,
                        principalTable: "ToLists",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "ToLists",
                columns: new[] { "Id", "IconColor", "Title" },
                values: new object[] { new Guid("8897880e-3ffe-4842-9c22-ff3a212448bc"), "#17289b", "我的列表1" });

            migrationBuilder.InsertData(
                table: "ToLists",
                columns: new[] { "Id", "IconColor", "Title" },
                values: new object[] { new Guid("fe4ebf2e-f1e9-48c8-9a52-d297e865c4a1"), "#97989b", "重要" });

            migrationBuilder.CreateIndex(
                name: "IX_Todos_ToListId",
                table: "Todos",
                column: "ToListId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Todos");

            migrationBuilder.DropTable(
                name: "ToLists");
        }
    }
}
