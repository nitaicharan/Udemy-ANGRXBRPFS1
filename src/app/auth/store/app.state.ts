import { RegisterState } from './states/register.state';
import { LoginState } from './states/login.state';

export interface AuthState {
    register: RegisterState;
    login: LoginState;
}