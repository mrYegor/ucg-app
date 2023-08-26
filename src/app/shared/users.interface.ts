export interface User {
    username?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    user_type?: string
}

export interface UsersList {
    users: User[];
}

export interface UserAction {
    user: User;
    action: string;
}