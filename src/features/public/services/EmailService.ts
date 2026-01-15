import axios from 'axios';


export default class EmailService {
    static async sendEmail(name: string, email: string, phone: string, message: string) {
        try {
            const response = await axios.post("/api/contact-me", { name, email, phone, message }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}