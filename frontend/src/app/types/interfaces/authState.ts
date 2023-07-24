export interface AuthState {
  isLoading: boolean;
  token: string;
  user: {} | null | unknown;
  error: string | null;
}