import React, { useState } from "react";

import { StyledUploadImage } from "./UploadImageStyle";

export const UploadImage = (props) => {
  const [postImage, setPostImage] = useState({
    myFile: "",
  });

  const url = "http://localhost:5000/uploads";
  const createImage = (newImage) => console.log(newImage);

  const createPost = async (post) => {
    try {
      await createImage(post);
    } catch (error) {
      console.log(error.message);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage);
  };
  console.log("props.objData", props.objData);
  console.log("props.usedImage", props.usedImage);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        <button
          onClick={() =>
            props?.uploadFunction(
              postImage.myFile,
              props?.objData,
              props?.index,
              true
            )
          }
        >
          Submit
        </button>
      </form>
      <StyledUploadImage
        existingImage={
          postImage.myFile ||
          props?.usedImage[props.index]?.image ||
          props?.usedImage[props.index]?.icon ||
          props?.usedImage[props.index]?.avatar
        }
        src={
          postImage.myFile.length !== 0
            ? postImage.myFile
            : props?.usedImage[props.index]?.image ||
              props?.usedImage[props.index]?.icon ||
              props?.usedImage[props.index]?.avatar
        }
      />
    </>
  );
};
