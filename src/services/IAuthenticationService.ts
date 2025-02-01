export interface IAuthenticationService {
    login(email: string, password: string): Promise<void>;
    // logout(): Promise<void>;
    // isAuthenticated(): Promise<boolean>;
}