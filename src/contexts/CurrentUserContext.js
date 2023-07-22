import { createContext } from "react"

const defaultUser = {
  name: "",
  about: "",
  avatar: "",
};

export const CurrentUserContext = createContext(defaultUser);