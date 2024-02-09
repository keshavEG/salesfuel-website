import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

type UserId = string

declare module "next-auth/jwt" {
    interface JWT {
        id: UserId
        firstName: string
        lastName: string
        profileImageUrl: string
        role: string
        accessToken: string
    }
}

declare module "next-auth" {

    interface User {
        id: UserId
        name: string
        firstName: string
        lastName: string
        email: string
        profileImageUrl: string
        role: string
        tokens: {
            access: {
                token: string
                expires: string
                expiresIn: number
            }
            refresh: {
                token: string
                expires: string
                expiresIn: number
            }
        }
    }
    interface Session {
        user: {
            id: UserId
            name: string
            firstName: string
            lastName: string
            email: string
            profileImageUrl: string
            role: string
            accessToken: string
        } & {
            id: UserId
        }

    }
}
