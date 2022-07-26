namespace FinonexServiceApi.Data
{
    public class PhotoData : IPhotoData
    {
        private readonly IApiDataAccess _srv;
        public PhotoData(IApiDataAccess srv)
        {
            _srv = srv;
        }

        /// <summary>
        /// Get all photos
        /// </summary>
        /// <returns>Photos</returns>
        public async Task<IEnumerable<Photo>> GetPhotos()
        {
            
            var results = await _srv.GetData<Photo>("/photos");
            return results;
        }

        /// <summary>
        /// retrieve all photos and filter only the photos from the required album id
        /// </summary>
        /// <param name="albumId"></param>
        /// <returns>Photos by albumId</returns>
        public async Task<IEnumerable<Photo>> GetAlbumById(int albumId)
        {
            var results = await _srv.GetData<Photo>("/photos");
            return results.Where(x=>x.albumId == albumId).ToList();
        }

        
    }
}
