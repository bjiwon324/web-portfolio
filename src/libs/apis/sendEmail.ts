import axios from "axios";
import { EmailFormValues } from "../types";

export const sendEmail = async (data: EmailFormValues) => {
  const formData = new URLSearchParams({
    name: data.name,
    email: data.email,
    message: data.message
  });

  const response = await axios.post(
    "https://script.google.com/macros/s/AKfycbweVRGX08lvG2RIyjFLg7mwmaFFHNNDGfEZwlxX60qnXjuFxrcRobzMJOz-Wgm3EPEj/exec",
    formData.toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  );

  return response.data;
};
