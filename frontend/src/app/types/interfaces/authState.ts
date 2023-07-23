export interface AuthState {
  isLoading: boolean;
  token: string;
  user: {} | null;
  error: string | null;
}