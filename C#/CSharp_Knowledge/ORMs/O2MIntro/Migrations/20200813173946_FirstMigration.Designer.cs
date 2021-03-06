﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using O2MIntro.Models;

namespace O2MIntro.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20200813173946_FirstMigration")]
    partial class FirstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("O2MIntro.Models.Alien", b =>
                {
                    b.Property<int>("AlienId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("HomePlanetId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<DateTime>("UpdatedAt")
                        .HasColumnType("datetime(6)");

                    b.HasKey("AlienId");

                    b.HasIndex("HomePlanetId");

                    b.ToTable("Aliens");
                });

            modelBuilder.Entity("O2MIntro.Models.HomePlanet", b =>
                {
                    b.Property<int>("HomePlanetId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<DateTime>("UpdatedAt")
                        .HasColumnType("datetime(6)");

                    b.HasKey("HomePlanetId");

                    b.ToTable("HomePlanets");
                });

            modelBuilder.Entity("O2MIntro.Models.Alien", b =>
                {
                    b.HasOne("O2MIntro.Models.HomePlanet", "HomePlanet")
                        .WithMany("Aliens")
                        .HasForeignKey("HomePlanetId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
