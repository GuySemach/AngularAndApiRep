using FinonexServiceApi;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IApiDataAccess, ApiDataAccess>();
builder.Services.AddSingleton<IPhotoData, PhotoData>();
builder.Services.AddSingleton<IPostData, PostData>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: "AllowOrigin",
        builder =>
        {
            builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
        });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.ConfigureApi();
app.UseCors("AllowOrigin");

app.Run();