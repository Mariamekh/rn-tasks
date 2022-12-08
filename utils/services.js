const baseUrl = "https://demo.spreecommerce.org/spree_oauth/token";

export const register = ({ email, username, password, confirmPassword }) => {
  const data = {
    username,
    email,
    password1: password,
    password2: confirmPassword,
  };

  return fetch(`${baseUrl}/register`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const login = ({ email, username, password }) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: '{"grant_type":"password","username":"spree@example.com","password":"spree123"}',
  };

  return fetch(
    "https://stoplight.io/mocks/spark-solutions/api-v2/3124958/spree_oauth/token",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response, "zdsdfghjh"))
    .catch((err) => console.error(err));

  // return fetch(`${baseUrl}/login`, {
  //   method: "POST",
  //   body: JSON.stringify({ email, username, password }),
  // });
};
