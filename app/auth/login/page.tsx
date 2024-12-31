import { LoginForm } from "@/components/auth/login-form";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <Link href="/">
        <ArrowLeftCircle className="absolute top-4 left-4 w-8 h-8" />
      </Link>
      <div className=" h-full flex items-center justify-center ">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
