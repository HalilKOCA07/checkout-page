import { createContext, useContext, useState } from "react";

//* 1.adım context oluşturuldu
export const LoginText = createContext();

//* 2. adım context sarmalama için component oluşturuldu
const LoginProvider = (prop) => {
  const [loginIn, setLoginIn] = useState(false);
  console.log(loginIn)
  const values = { loginIn, setLoginIn };
  return(
    <LoginText.Provider value={values}>
        {prop.children}
    </LoginText.Provider>
  )
};

export default LoginProvider

//*3. adım tüketim işlemini basitleştirmek için custom hook oluşturduk

export const useLoginContext = () => {
  return useContext(LoginText)
}
