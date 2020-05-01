import axios from "axios";

//methods for interacting with API Auth routes
export default {
   getRepos: () =>
      axios({
         method: 'get',
         url: `https://api.github.com/users/mattchley/repos`,
         headers: {
            'Authorization': `Basic 'b310da4ab369999c52c738e8757be7901ff58d0f'`
         }
      }),
   getCommits: (search) =>
      axios({
         method: 'get',
         url: `https://api.github.com/repos/mattchley/${search}/commits`,
         headers: {
            'Authorization': `Basic 'b310da4ab369999c52c738e8757be7901ff58d0f'`
         }
      }),
};