namespace FinonexServiceApi.Data
{
    public class PostData : IPostData
    {
        private readonly IApiDataAccess _dac;
        public PostData(IApiDataAccess dac)
        {
            _dac = dac;
        }
        public Task<IEnumerable<Post>> GetPosts() =>
                        _dac.GetData<Post>("/posts");
    }
}
