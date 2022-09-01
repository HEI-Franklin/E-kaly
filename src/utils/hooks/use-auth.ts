import { useContext } from "react";
import { AuthService } from "../../providers/types/AuthProvider";
import { AuthContext } from "../context/auth";

export const useAuth = () => (
  useContext(AuthContext) as AuthService
);;
