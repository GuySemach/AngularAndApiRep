namespace FinonexServiceApi.DataAccess
{
    public class ApiDataAccess : IApiDataAccess
    {
        static HttpClient client = new HttpClient();
        private readonly IConfiguration _config;

        public ApiDataAccess(IConfiguration config)
        {
            _config = config;
        }
        public async Task<IEnumerable<T>> GetData<T>(string pathUrl)
        {
            string url = _config.GetValue<string>("ApiUrls:FinonexTestApi");
            IEnumerable<T> data = null;
            HttpResponseMessage response = await client.GetAsync(url + pathUrl);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            if (response.IsSuccessStatusCode)
            {
                data = await response.Content.ReadFromJsonAsync<IEnumerable<T>>();
            }
            return data;
        }
    }
}
