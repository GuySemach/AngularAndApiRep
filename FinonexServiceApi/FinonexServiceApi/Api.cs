using FinonexServiceApi.Models;

namespace FinonexServiceApi
{
    public static class Api
    {
        public static void ConfigureApi(this WebApplication app)
        {
            app.MapGet(pattern: "/api/posts", GetPosts);
            app.MapGet(pattern: "/api/gallery/", GetPhotos);
            app.MapGet(pattern: "/api/album/{id}", GetAlbumById);
        }

        private static async Task<IResult> GetPosts(IPostData data)
        {
            try
            {
                return Results.Ok(await data.GetPosts());
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> GetPhotos(IPhotoData data)
        {
            try
            {
                var result = await data.GetPhotos();
                if (result == null)
                    return Results.NotFound();
                return Results.Ok(result);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> GetAlbumById(int id, IPhotoData data)
        {
            try
            {
                var result = await data.GetAlbumById(id);
                if (result == null)
                    return Results.NotFound();
                return Results.Ok(result);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }
    }
}
