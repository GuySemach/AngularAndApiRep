
namespace FinonexServiceApi.Data
{
    public interface IPostData
    {
        Task<IEnumerable<Post>> GetPosts();
    }
}