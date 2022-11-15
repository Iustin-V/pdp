import axios from "axios";

export const deleteObject = (data, index) => {
  const content = [
    ...data.content.slice(0, index),
    ...data.content.slice(index + 1, data.content.length),
  ];
  axios
    .put(`https://api.profadepovesti.ro/api/sections/${data?._id}`, {
      content,
    })
    .then(() => {
      window.location.reload();
    })
    .catch(() => {
      alert(
        "An error has occurred while trying to delete, please try again later."
      );
    });
};
