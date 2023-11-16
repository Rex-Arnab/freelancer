"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Logo from "@/components/Logo";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const { toast } = useToast();

  const router = useRouter();

  const handleLogin = () => {
    if (email === "hp502156@gmail.com" && password === "FreeLan333.") {
      router.push("/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: "Invalid Credentials",
        description: "Please check your email and password"
      });
    }
  };
  return (
    <main className="min-h-screen flex justify-center items-center p-4 md:p-24 bg-stone-100">
      <section className="w-full md:max-w-sm mx-auto text-center border-2 shadow-xl rounded-xl p-10 flex flex-col justify-center space-y-5 bg-white">
        <Logo className="mx-auto" width={200} height={200} />
        <h1 className="font-bold text-2xl">Welcome Back</h1>
        <div>
          <Input
            type="text"
            placeholder="Email or Username"
            className="w-full"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="relative">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              className="w-full mt-8"
              required
            />
            {
              <button
                className="absolute top-0 right-0 h-full flex items-center px-4"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <Eye size={24} />
                ) : (
                  <EyeOff size={24} opacity={0.5} />
                )}
              </button>
            }
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Remember me
              </label>
            </div>
            <span className="text-primary hover:underline">
              Forgot Password?
            </span>
          </div>
          <Button
            type="submit"
            className="w-full mt-8 rounded"
            onClick={handleLogin}>
            Login
          </Button>
        </div>

        <Separator />

        <p>
          Don&apos;t have an account?{" "}
          <span className="text-primary">Sign Up</span>
        </p>

        <div className="flex items-center justify-between">
          <div className="relative w-full max-w-[150px] h-[50px]">
            <Image
              src="https://www.f-cdn.com/assets/main/en/assets/login-signup/app-store-badges/apple-app-store-badge.png"
              alt="App Store"
              fill
            />
          </div>
          <div className="relative w-full max-w-[150px] h-[50px]">
            <Image
              src="https://www.f-cdn.com/assets/main/en/assets/login-signup/app-store-badges/google-play-store-badge.png"
              alt="Play Store"
              fill
            />
          </div>
        </div>
      </section>
    </main>
  );
}
