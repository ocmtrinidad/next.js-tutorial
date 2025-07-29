import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // absolute overrides parent's title
    absolute: "Login - Next.js Tutorial",
  },
};

const Login = () => {
  return <h1>Login</h1>;
};

export default Login;
