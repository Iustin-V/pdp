import axios from "axios";

export const deleteObject = (data, index) => {

  const config = {
    headers: {
      Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2ZjN2M1N2RlYmYxOTE4ZWI1Mjc5MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njc4MjkyMzB9.BQMlU-SugSbJYCB8Non09NZTArPUAOw1s7rXUWTrOUI",
    },
  };

  const content = [
    ...data.content.slice(0, index),
    ...data.content.slice(index + 1, data.content.length),
  ];
  axios
    .put(`https://api.profadepovesti.ro/api/sections/${data?._id}`, {
      content,
    },config)
    .then(() => {
      window.location.reload();
    })
    .catch(() => {
      alert(
        "An error has occurred while trying to delete, please try again later."
      );
    });
};
