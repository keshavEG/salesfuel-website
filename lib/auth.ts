import { getAbsoluteURL } from '@/lib/utils';
import axios from "axios";
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
import CredentialsProvider from "next-auth/providers/credentials";
import LinkedInProvider from "next-auth/providers/linkedin";
import { fetcher } from './server/utils';

export const authOptions: NextAuthOptions = {
    session: {
        maxAge: 4 * 60 * 60, // 4 hours
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const user = await fetcher(getAbsoluteURL(`/api2/auth/login`), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email: credentials?.email, password: credentials?.password }),
                    })

                    if (user.error) return null

                    return { ...user.user, tokens: user.tokens };

                } catch (error) {
                    return null

                }
            }
        }),
        GoogleProvider({
            clientId: process.env["GOOGLE_CLIENT_ID"]!,
            clientSecret: process.env["GOOGLE_CLIENT_SECRET"]!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        LinkedInProvider({
            clientId: process.env["LINKEDIN_CLIENT_ID"]!,
            clientSecret: process.env["LINKEDIN_CLIENT_SECRET"]!,
            // token: {
            //     url: "https://example.com/oauth/token",
            //     async request(context) {
            //         // context contains useful properties to help you make the request.
            //         console.log(context);
            //         const code = context.params.code
            //         let res = await axios.post(getAbsoluteURL(`/api2/auth/linkedin`), { code })
            //         data = res.data
            //         // const tokens = await makeTokenRequest(context)
            //         // return { tokens }
            //         return context
            //     }
            // }
        }),

        AzureADProvider({
            clientId: process.env["AZURE_AD_CLIENT_ID"]!,
            clientSecret: process.env["AZURE_AD_CLIENT_SECRET"]!,
            tenantId: process.env["AZURE_AD_TENANT_ID"]!,
            version: "2.0",
            accessTokenUrl: `https://login.microsoftonline.com/${process.env["AZURE_AD_TENANT_ID"]}/oauth2/v2.0/token`,
            authorization: {
                params: {
                    audience: 'common',
                    scope: "openid profile email Contacts.Read Contacts.Read.Shared",
                    response_type: "code"
                }
            }
        }),
        {
            id: 'myProvider',
            name: 'MyProvider',
            type: 'credentials',
            credentials: {
                email: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials): Promise<any> {
                try {
                    const user = await fetch(getAbsoluteURL(`/api2/auth/whoami`), {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${credentials?.['email']}`
                        },
                    }).then((res) => res.json())

                    if (user.error) return null

                    return { user: { ...user }, tokens: user.tokens };

                } catch (error) {
                    return null

                }
            }
        }
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            if (!account) return token
            let data: any = {}
            if (account.provider === "google") {
                let res = await axios.post(getAbsoluteURL(`/api2/auth/google`), { code: account?.access_token })
                data = res.data
            }
            else if (account.provider === "azure-ad") {
                let res = await axios.post(getAbsoluteURL(`/api2/auth/microsoft/token`), { code: account?.id_token })
                data = res.data
            }
            else if (account.provider === "credentials") {
                data = { user: user, tokens: user.tokens }
            }
            else if (account.provider === "linkedin") {
                let res = await axios.post(getAbsoluteURL(`/api2/auth/linkedin?type=access`), { code: account?.access_token })
                data = res.data
            }
            else if (account.provider === "myProvider") {
                data = user
            }
            if (user) {
                token.id = data.user.id
                token.name = data.user.firstName + " " + data.user.lastName
                token.firstName = data.user.firstName
                token.lastName = data.user.lastName
                token.email = data.user.email
                token.profileImageUrl = data.user.profileImageUrl
                token.role = data.user.role
                token.accessToken = data.tokens.access.token
            }

            // NextResponse.redirect(getAbsoluteURL('/')).cookies.set('contact-data-access-token', data.tokens.access.token)
            return token
        },
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name as string
                session.user.firstName = token.firstName as string
                session.user.lastName = token.lastName as string
                session.user.email = token.email as string
                session.user.profileImageUrl = token.profileImageUrl as string
                session.user.role = token.role as string
                session.user.accessToken = token.accessToken as string
            }
            return session
        },
        // async signIn({ account, profile }: any) {

        //     const { data: user } = await axios.post(getAbsoluteURL(`/api2/auth/google`), { code: account.access_token })
        //     console.log(NextResponse);
        //     NextResponse.redirect(getAbsoluteURL('/')).cookies.set('contact-data-access-token', user.tokens.access.token)
        //     return true // Do different verification for other providers that don't have `email_verified`
        // },
    }
}
