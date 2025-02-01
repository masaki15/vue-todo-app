import {defineStore} from 'pinia';

export const useAuthenticationStore = defineStore('isAuthentication', {
    state: () => ({isAuthenticated: false}),
    actions: {
        login() {
            this.isAuthenticated = true;
        },
        logout() {
            this.isAuthenticated = false;
        }
    }
});