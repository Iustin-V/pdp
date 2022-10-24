import axios from "axios";

export const deleteObject = (data, index) => {
    const content=[...data.content.slice(0,index),...data.content.slice(index+1,data.content.length)]
    axios.put(
        `https://pdp-api.onrender .com/api/sections/${data?._id}`,
        {
            content
        }
    );
    window.location.reload()
};