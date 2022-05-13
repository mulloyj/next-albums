import { DefaultSession } from "next-auth";

interface User {
    name?: string;
    accessToken?: string;
}

export interface MySession extends Omit<DefaultSession, "user"> {
    user?: User;
    expires: string;
}