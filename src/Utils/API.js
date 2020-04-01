import axios from "axios";

//methods for interacting with API Auth routes
export default {
   getRepos: () =>
      axios.get(`https://api.github.com/users/mattchley/repos`),
};
