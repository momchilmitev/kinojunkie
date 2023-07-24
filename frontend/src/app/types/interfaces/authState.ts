export interface AuthState {
  isLoading: boolean;
  token: string;
  user: any;
  error: string | null;
}