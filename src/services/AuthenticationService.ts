import {useAuthenticationStore} from '../store/AuthenticationStore.ts';
import pinia from '../store';
import type {IAuthenticationService} from './IAuthenticationService.ts';

export class AuthenticationService implements IAuthenticationService {
    private authenticationStore = useAuthenticationStore(pinia);

    public login(email: string, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (email === 'hogehoge@co.jp' && password === 'hogehoge') {
                this.authenticationStore.login();
                resolve();
            } else {
                this.authenticationStore.logout();
                reject();
            }
        })
    };
}