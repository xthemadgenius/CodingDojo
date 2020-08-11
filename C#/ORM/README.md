# ASP 2 Set Up

XX Open Database XX

cd C:\"Program Files"\MySQL\"MySQL Server 8.0"\bin

mysql -u root -p

XX Set Up XX

dotnet new web --no-https -o PROJNAME

XX Error FeedBack XX

Command Line

setx ASPNETCORE_ENVIRONMENT Development

Power Shell

Mac/Linux

export ASPNETCORE_ENVIRONMENT=Development

DotNet Watch

dotnet watch run

(helps uplad application faster)

Set up StartApp.cs

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSession();
            services.AddMvc(options => options.EnableEndpointRouting = false);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseSession(); 
            app.UseRouting();
            app.UseStaticFiles();
            app.UseMvc();
            

            <!-- app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Hello World!");
                });
            }); -->
        }
        
Set up HomeController.cs

        using System;
        using System.Collections.Generic;
        using Microsoft.AspNetCore.Mvc;
        using Microsoft.AspNetCore.Http;
        using NAMESPACE.Models;

        namespace YourNamespace.Controllers     //be sure to use your own project's namespace!
        {
            public class HomeController : Controller
            {
                [HttpGet]    
                [Route("")] 
                public string Index()
                {
                    return "Hello World from HomeController!";
                }
            }
        }


dotnet new mvc

dotnet new viewimports -o Views

dotnet new viewstart -o Views

dotnet add package MySql.Data -v 8.0.16

dotnet tool install dotnet-ef --global

dotnet add package Pomelo.EntityFrameworkCore.MySql --version 3.1.1

dotnet add package Microsoft.EntityFrameworkCore.Design --version 3.1.5

Model Class

        using System;
        using System.ComponentModel.DataAnnotations;
        namespace Monsters.Models
        {
            public class Monster
            {
                [Key]
                public int MonsterId { get; set; }
                public string Name { get; set; }
                public int Height { get; set; }
                public string Description { get; set; }
                public DateTime CreatedAt { get; set; } = DateTime.Now;
                public DateTime UpdatedAt { get; set; } = DateTime.Now;
            }
        }


Context class

Models/Context.cs 
        using Microsoft.EntityFrameworkCore;
        namespace Monster.Models
        { 
            // the MyContext class representing a session with our MySQL 
            // database allowing us to query for or save data
            public class MyContext : DbContext 
            { 
                public Context(DbContextOptions options) : base(options) { }
                // the "Monsters" table name will come from the DbSet variable name
                public DbSet<Monster> Monsters { get; set; }
            }
        }

create appsetting.json

        {
        "Logging": {
            "LogLevel": {
            "Default": "Information"copy,
            "Microsoft": "Warning",
            "Microsoft.Hosting.Lifetime": "Information"
            }
        },
        "AllowedHosts": "*",
            "DBInfo":
            {
                "Name": "MySQLconnect",
                "ConnectionString": "server=localhost;userid=root;password=root;port=3306;database=monsterdb;SslMode=None"
            }
        }

Set up Startup.cs

        using Monster.Models;
        using Microsoft.EntityFrameworkCore;
        namespace Monsters
        {
            public class Startup
            {
                public Startup (IConfiguration configuration)
                {
                    Configuration = configuration;
                }
                public IConfiguration Configuration { get; }
                public void ConfigureServices (IServiceCollection services)
                {
                    services.AddDbContext<mycontext>(options => options.UseMySql (Configuration["DBInfo:ConnectionString"]));
                    services.AddMvc(options => options.EnableEndpointRouting = false);
                }
                public void Configure (IApplicationBuilder app, IWebHostEnvironment env)
                {
                    if (env.IsDevelopment())
                    {
                        app.UseDeveloperExceptionPage();
                    }
                    app.UseStaticFiles();
                    app.UseMvc();
                }
            }
        }

Set Up HomeController.cs

        using Microsoft.EntityFrameworkCore;
        using Monsters.Models;
        using System.Linq;
        // Other using statements
        namespace Monsters.Controllers
        {
            publiccopy class HomeController : Controller
            {
                private MyContext _context;
            
                // here we can "inject" our context service into the constructor
                public HomeController(MyContext context)
                {
                    _context = context;
                }
            
                [HttpGet"")]
                public IActionResult Index()
                {
                    List<Monster> AllMonsters = _context.Monsters.ToList();
                    
                    return View();
                }
            }
        }
