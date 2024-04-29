declare namespace Express {
    export interface Request {
       user?: {
        id: string
        email: string
        username: string
        password: string
        role: {
            id: number
            name: string
        }
       }
    }
}