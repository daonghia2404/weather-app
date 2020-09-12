import qs from "querystringify";

const baseUrl = "https://api.openweathermap.org/data/2.5";

const handleResponse = (r) => {
  if (r.status === 401 || r.status === 403) {
    console.log("Unauthenticated");
  } else if (r.status === 500) {
    console.log("Internal server error");
  } else {
    return r.json();
  }
};

export const rest = {
  post: (endpoint, params, header) => {
    const options = {
      method: "POST",
      body: JSON.stringify({ ...params }),
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
    };
    return fetch(baseUrl + endpoint, options).then((r) => {
      return handleResponse(r);
    });
  },

  get: (endpoint, params, header) => {
    const options = {
      method: "GET",
      // headers: {
      //   ...header,
      //   'Content-Type': 'application/json',
      // },
    };
    return fetch(
      `${baseUrl + endpoint}${qs.stringify({ ...params }, true)}`,
      options
    ).then((r) => {
      return handleResponse(r);
    });
  },

  put: (endpoint, params, header) => {
    const options = {
      method: "PUT",
      body: JSON.stringify({ ...params }),
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
    };
    return fetch(baseUrl + endpoint, options).then((r) => {
      return handleResponse(r);
    });
  },

  delete: (endpoint, params, header) => {
    const options = {
      method: "DELETE",
      body: JSON.stringify({ ...params }),
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
    };
    return fetch(baseUrl + endpoint, options).then((r) => {
      return handleResponse(r);
    });
  },

  postFormData: (endpoint, params, header) => {
    const options = {
      method: "POST",
      body: params.formData,
      headers: {
        ...header,
      },
    };
    return fetch(baseUrl + endpoint, options).then((r) => {
      return handleResponse(r);
    });
  },

  putFormData: (endpoint, params, header) => {
    const options = {
      method: "PUT",
      body: params.formData,
      headers: {
        ...header,
      },
    };
    return fetch(baseUrl + endpoint, options).then((r) => {
      return handleResponse(r);
    });
  },
};
