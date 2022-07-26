
namespace FinonexServiceApi.Data
{
    public interface IPhotoData
    {
        Task<IEnumerable<Photo>> GetAlbumById(int albumId);
        Task<IEnumerable<Photo>> GetPhotos();
    }
}