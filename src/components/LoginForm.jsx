import React from "react";
import { Input } from "@nextui-org/react";
const LoginForm = () => {
  return (
    <div className=" bg-black w-full h-full flex flex-col gap-20 ">
      <h2 className="bg-red-300">Sign In Dribble</h2>
      <form>
        <div className=" bg-slate-500 h-full w-full flex flex-col items-center justify-center  ">
          <div className="flex flex-row gap-4 ">
            <Input
              isRequired
              type="name"
              label="Name"
              placeholder="John"
              className="max-w-xs"
            />
            <Input
              isRequired
              type="username"
              label="Username"
              placeholder="XYZ"
              className="max-w-xs"
            />
          </div>
          <Input
            isRequired
            type="email"
            label="Email"
            placeholder="junior@mail.com"
            className="max-w-xs"
          />
          <Input
            isRequired
            type="password"
            label="Password"
            className="max-w-xs"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
