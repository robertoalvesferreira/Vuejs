import { http } from "./config";

export default {
  index: token => {
    return http.get("users", {
      headers: { Authorization: "Bearer ".concat(token) }
    });
  },

  store: user => {
    return http.post("users", user);
  }
};
