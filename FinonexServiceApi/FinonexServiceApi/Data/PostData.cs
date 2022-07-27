namespace FinonexServiceApi.Data
{
    public class PostData : IPostData
    {
        private readonly IApiDataAccess _dac;
        public PostData(IApiDataAccess dac)
        {
            _dac = dac;
        }
        public async Task<IEnumerable<Post>> GetPosts()
        {
            // I guess when you asked for top 10 posts, you mean that it should be order it descending by the postId. 
            var results = await _dac.GetData<Post>("/posts");
            return results.OrderByDescending(x=>x.id).ToList();
        }

    }
}
