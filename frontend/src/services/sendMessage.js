import axios from "axios";
const URL = "https://www.kswlee.com/contact";
// const URL = "http://localhost:3001/contact";

const sendMessage = async (name, email, subject, message) => {
  try {
    const response = await axios.post(URL, {
      name,
      email,
      subject,
      message,
    });
    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error.message);
  }
};

export default sendMessage;
