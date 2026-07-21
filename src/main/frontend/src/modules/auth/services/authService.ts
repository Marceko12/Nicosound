import axios from  "axios";

const API_URL = "http://localhost:8081/api/auth";


export interface LoginRequest{
    email:string;
    password:string;
}

export interface LoginResponse{
    token:string;
}

export const login = async(
    data:LoginRequest
)=>{
    const response = await axios.post<LoginResponse>(
        `${API_URL}/login`,
        data
    );

    return response.data;
}