# ASP

XX Set Up XX

dotnet new web --no-https -o PROJNAME

XX Error FeedBack XX

Command Line

setx ASPNETCORE_ENVIRONMENT Development

Power Shell 

[Environment]::SetEnvironmentVariable("ASPNETCORE_ENVIRONMENT","Development","User")

Mac/Linux

export ASPNETCORE_ENVIRONMENT=Development

DotNet Watch

dotnet watch run 

(helps uplad application faster)

Set up StartApp.cs

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(options => options.EnableEndpointRouting = false);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseRouting();
            app.UseStaticFiles();
            app.UseMvc();
            

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Hello World!");
                });
            });
        }

Set up HomeController.cs

        using Microsoft.AspNetCore.Mvc;
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


creates a new MVC

dotnet new mvc

dotnet new viewimports -o Views

dotnet new viewstart -o Views
