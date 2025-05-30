

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { register } from "@/http/api"
import useTokenStore from "@/store"
import { useMutation } from "@tanstack/react-query"
import { LoaderCircle } from "lucide-react"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"

export function SignUpForm() {
  const setToken = useTokenStore((state) => state.setToken);

  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      const data = response.data as { accessToken: string }; // 🔑 Narrowing type
      setToken(data.accessToken);
      navigate('/dashboard/home');
    },
  })

  const handleRegisterSubmit = (event: React.FormEvent) => {
    event.preventDefault() // ⬅️ Prevents page reload

    
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const name = nameRef.current?.value;
    
    console.log('data', {name, email, password})

    if (!name || !email || !password) {
      return alert('please enter name,email and password')
    }

    mutation.mutate({name, email, password});
  }
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
        {mutation.isError && (<span className="text-red-500">{mutation.error.message}</span>)}
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input ref={nameRef} id="name" placeholder="Robin" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
            ref={emailRef}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input ref={passwordRef} id="password" type="password" />
          </div>
          
          <Button onClick={handleRegisterSubmit} type="submit" className="w-full" disabled={mutation.isPending}>
             {mutation.isPending && (
                 <LoaderCircle className="animate-spin" />
             )}
                <span>Create an account</span>
              </Button>
          
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to={"/auth/login"} className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
