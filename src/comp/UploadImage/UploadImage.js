import React, {useState} from "react";


export const UploadImage = () => {
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
        setPostImage({...postImage, myFile: base64});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(postImage);
    };


    return (<>
            <h1>Image uploading react</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    label="Image"
                    name="myFile"
                    accept=".jpeg, .png, .jpg"
                    onChange={(e) => handleFileUpload(e)}
                />
                <button>Submit</button>
            </form>
            <img src={postImage.myFile} width='500px'/>
        </>
    );
};

