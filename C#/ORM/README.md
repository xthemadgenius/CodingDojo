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
