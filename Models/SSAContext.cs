using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ssa_backend.Models
{
    public class SSAContext : DbContext
    {
        public DbSet<Person> Persons { get; set; }
        public DbSet<Ammunition> Ammunition { get; set; }
        public DbSet<Weapon> Weapons { get; set; }
        public DbSet<ShootingRange> ShootingRanges { get; set; }
        public DbSet<ShootingSession> ShootingSessions { get; set; }
        public DbSet<SessionParticipant> SessionParticipants { get; set; }
        public DbSet<UsedAmmunition> UsedAmmunitions { get; set; }
        public DbSet<UsedWeapon> UsedWeapons { get; set; }
        
        public string DbPath { get; }

        public SSAContext()
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = System.IO.Path.Join(path, "ssa.db");
        }
        
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite($"Data Source={DbPath}");
    }
}