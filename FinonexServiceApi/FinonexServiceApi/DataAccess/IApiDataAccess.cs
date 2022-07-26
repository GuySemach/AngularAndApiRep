
namespace FinonexServiceApi.DataAccess
{
    public interface IApiDataAccess
    {
        Task<IEnumerable<T>> GetData<T>(string pathUrl);
    }
}