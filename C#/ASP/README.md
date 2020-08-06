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

Set up Start App

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(options => options.EnableEndpointRouting = false);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseRouting();
            app.UseMvc();
            

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Hello World!");
                });
            });
        }