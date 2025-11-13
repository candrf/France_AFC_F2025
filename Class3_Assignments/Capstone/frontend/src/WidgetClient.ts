import axios from "axios";
import {data} from "react-router-dom";

const baseUrl = "http://localhost:8080"
export const getWidgets = async () => {
    const result = await axios.get(baseUrl + '/api/widgets')
    return result.data;
}

export const addWidget = async (widget) => {
    const result = await axios.post(baseUrl + '/api/widgets', widget)
    return result.data;
}

export const deleteWidget = async (id) => {
    const result = await axios.delete(baseUrl + '/api/widgets/' + id);
    return result.status;
}

export const updateWidget = async (id, widget) => {
    const result = await  axios.patch(baseUrl + '/api/widgets/' + id, widget);
    return result.data;
}

export async function uploadImage(file) {
    if (!file) throw new Error("No file provided");

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(baseUrl + "/api/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });

    return response.data.url;
}