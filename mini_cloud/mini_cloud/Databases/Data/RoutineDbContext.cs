using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using mini_cloud.Databases.Entities;

namespace mini_cloud.Databases.Data;

public class RoutineDbContext : DbContext
{
    // 注入基础连接配置
    public RoutineDbContext(DbContextOptions<RoutineDbContext> options) : base(options)
    {
        
    }
    
    public DbSet<Todo> Todos { get; set; }
    public DbSet<ToList> ToLists { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ToList>()
            .HasMany<Todo>(x => x.Todos)
            .WithOne(x=>x.ToList)
            .HasForeignKey(x => x.ToListId)
            .OnDelete(DeleteBehavior.NoAction);
        // 种子数据
        modelBuilder.Entity<ToList>().HasData(
            new ToList
            {
                Id = Guid.Parse("fe4ebf2e-f1e9-48c8-9a52-d297e865c4a1"),
                IconColor = "#97989b",
                Title = "重要"
            },
            new ToList
            {
                Id = Guid.Parse("8897880e-3ffe-4842-9c22-ff3a212448bc"),
                IconColor = "#17289b",
                Title = "我的列表1"
            });
    }
}