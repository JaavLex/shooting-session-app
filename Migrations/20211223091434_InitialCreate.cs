using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ssa_backend.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ammunition",
                columns: table => new
                {
                    AmmunitionId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Caliber = table.Column<string>(type: "TEXT", nullable: true),
                    AmmoPicture = table.Column<string>(type: "TEXT", nullable: true),
                    PricePerPacks = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ammunition", x => x.AmmunitionId);
                });

            migrationBuilder.CreateTable(
                name: "Persons",
                columns: table => new
                {
                    PersonId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Age = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Persons", x => x.PersonId);
                });

            migrationBuilder.CreateTable(
                name: "ShootingRanges",
                columns: table => new
                {
                    ShootingRangeId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PricePerStall = table.Column<int>(type: "INTEGER", nullable: false),
                    Address = table.Column<string>(type: "TEXT", nullable: true),
                    ShootingRangeId1 = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShootingRanges", x => x.ShootingRangeId);
                    table.ForeignKey(
                        name: "FK_ShootingRanges_ShootingRanges_ShootingRangeId1",
                        column: x => x.ShootingRangeId1,
                        principalTable: "ShootingRanges",
                        principalColumn: "ShootingRangeId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Weapons",
                columns: table => new
                {
                    WeaponId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    WeaponName = table.Column<string>(type: "TEXT", nullable: true),
                    WeaponPicture = table.Column<string>(type: "TEXT", nullable: true),
                    AmmoId = table.Column<int>(type: "INTEGER", nullable: true),
                    AmmunitionId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Weapons", x => x.WeaponId);
                    table.ForeignKey(
                        name: "FK_Weapons_Ammunition_AmmunitionId",
                        column: x => x.AmmunitionId,
                        principalTable: "Ammunition",
                        principalColumn: "AmmunitionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ShootingSessions",
                columns: table => new
                {
                    ShootingSessionId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SessionDate = table.Column<DateTime>(type: "TEXT", nullable: true),
                    TotalPrice = table.Column<int>(type: "INTEGER", nullable: false),
                    StallCount = table.Column<int>(type: "INTEGER", nullable: false),
                    ShootingRangeId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShootingSessions", x => x.ShootingSessionId);
                    table.ForeignKey(
                        name: "FK_ShootingSessions_ShootingRanges_ShootingRangeId",
                        column: x => x.ShootingRangeId,
                        principalTable: "ShootingRanges",
                        principalColumn: "ShootingRangeId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SessionParticipants",
                columns: table => new
                {
                    SessionParticipantId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SessionId = table.Column<int>(type: "INTEGER", nullable: false),
                    ShootingSessionId = table.Column<int>(type: "INTEGER", nullable: true),
                    PersonId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SessionParticipants", x => x.SessionParticipantId);
                    table.ForeignKey(
                        name: "FK_SessionParticipants_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "PersonId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SessionParticipants_ShootingSessions_ShootingSessionId",
                        column: x => x.ShootingSessionId,
                        principalTable: "ShootingSessions",
                        principalColumn: "ShootingSessionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UsedAmmunitions",
                columns: table => new
                {
                    UsedAmmunitionId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CountUsed = table.Column<int>(type: "INTEGER", nullable: false),
                    SessionId = table.Column<int>(type: "INTEGER", nullable: false),
                    ShootingSessionId = table.Column<int>(type: "INTEGER", nullable: true),
                    AmmoId = table.Column<int>(type: "INTEGER", nullable: false),
                    AmmunitionId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsedAmmunitions", x => x.UsedAmmunitionId);
                    table.ForeignKey(
                        name: "FK_UsedAmmunitions_Ammunition_AmmunitionId",
                        column: x => x.AmmunitionId,
                        principalTable: "Ammunition",
                        principalColumn: "AmmunitionId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UsedAmmunitions_ShootingSessions_ShootingSessionId",
                        column: x => x.ShootingSessionId,
                        principalTable: "ShootingSessions",
                        principalColumn: "ShootingSessionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UsedWeapons",
                columns: table => new
                {
                    UsedWeaponId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SessionId = table.Column<int>(type: "INTEGER", nullable: false),
                    ShootingSessionId = table.Column<int>(type: "INTEGER", nullable: true),
                    WeaponId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsedWeapons", x => x.UsedWeaponId);
                    table.ForeignKey(
                        name: "FK_UsedWeapons_ShootingSessions_ShootingSessionId",
                        column: x => x.ShootingSessionId,
                        principalTable: "ShootingSessions",
                        principalColumn: "ShootingSessionId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UsedWeapons_Weapons_WeaponId",
                        column: x => x.WeaponId,
                        principalTable: "Weapons",
                        principalColumn: "WeaponId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SessionParticipants_PersonId",
                table: "SessionParticipants",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_SessionParticipants_ShootingSessionId",
                table: "SessionParticipants",
                column: "ShootingSessionId");

            migrationBuilder.CreateIndex(
                name: "IX_ShootingRanges_ShootingRangeId1",
                table: "ShootingRanges",
                column: "ShootingRangeId1");

            migrationBuilder.CreateIndex(
                name: "IX_ShootingSessions_ShootingRangeId",
                table: "ShootingSessions",
                column: "ShootingRangeId");

            migrationBuilder.CreateIndex(
                name: "IX_UsedAmmunitions_AmmunitionId",
                table: "UsedAmmunitions",
                column: "AmmunitionId");

            migrationBuilder.CreateIndex(
                name: "IX_UsedAmmunitions_ShootingSessionId",
                table: "UsedAmmunitions",
                column: "ShootingSessionId");

            migrationBuilder.CreateIndex(
                name: "IX_UsedWeapons_ShootingSessionId",
                table: "UsedWeapons",
                column: "ShootingSessionId");

            migrationBuilder.CreateIndex(
                name: "IX_UsedWeapons_WeaponId",
                table: "UsedWeapons",
                column: "WeaponId");

            migrationBuilder.CreateIndex(
                name: "IX_Weapons_AmmunitionId",
                table: "Weapons",
                column: "AmmunitionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SessionParticipants");

            migrationBuilder.DropTable(
                name: "UsedAmmunitions");

            migrationBuilder.DropTable(
                name: "UsedWeapons");

            migrationBuilder.DropTable(
                name: "Persons");

            migrationBuilder.DropTable(
                name: "ShootingSessions");

            migrationBuilder.DropTable(
                name: "Weapons");

            migrationBuilder.DropTable(
                name: "ShootingRanges");

            migrationBuilder.DropTable(
                name: "Ammunition");
        }
    }
}
