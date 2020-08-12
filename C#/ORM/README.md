# ORM Set Up

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

# ORM SET UP Part II

dotnet new web --no-https -o PROJNAME

cd PROJNAME

dotnet watch run    (dont forget this step)

setx ASPNETCORE_ENVIRONMENT Development

mkdir Views Controllers Models wwwroot

dotnet new viewimports -o Views

dotnet add package MySql.Data -v 8.0.16

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

create appsetting.json  (if it hasnt been created or filled out already and MAKE SURE TO RENAME DATABASE)

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

        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Threading.Tasks;
        using Microsoft.AspNetCore.Builder;
        using Microsoft.AspNetCore.Hosting;
        using Microsoft.AspNetCore.Http;
        using Microsoft.Extensions.DependencyInjection;
        using Microsoft.Extensions.Hosting;
        using Microsoft.Extensions.Configuration;
        using Microsoft.EntityFrameworkCore;
        using CRUDelicious.Models;

        namespace CRUDelicious
        {
            public class Startup
            {
                public IConfiguration Configuration {get;}
                public Startup(IConfiguration configuration)
                {
                    Configuration = configuration;
                }
                // This method gets called by the runtime. Use this method to add services to the container.
                // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
                public void ConfigureServices(IServiceCollection services)
                {
                    services.AddSession();
                    services.AddDbContext<MyContext>(options => options.UseMySql (Configuration["DBInfo:ConnectionString"]));
                    services.AddMvc(options => options.EnableEndpointRouting = false);

                }

                // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
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
                }
            }
        }


Set Up HomeController.cs

        using System;
        using System.Linq;
        using System.Collections.Generic;
        using Microsoft.AspNetCore.Mvc;
        using Microsoft.AspNetCore.Http;
        using Microsoft.EntityFrameworkCore;
        using CRUDelicious.Models;

        namespace CRUDelicious.Controllers
        {
            public class CrudController : Controller
            {
                private MyContext _context;

                public CrudController(MyContext context)
                {
                    _context = context;
                }

                [HttpGet("")]
                public IActionResult Index()
                {
                    return View("Index");
                }
            }
        }

Migration Commands

dotnet ef migrations add YourMigrationName

dotnet ef migrations add FirstMigration

dotnet ef database update
