import { cn } from "@/lib/utils"
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
import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import { useMutation } from "@tanstack/react-query"
import { login } from "@/http/api"
import { LoaderCircle } from "lucide-react"



export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      console.log('Login Successful')
      navigate('/dashboard/home')
    },
  })

  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault() // ⬅️ Prevents page reload

    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    console.log('data', {email, password})

    if (!email || !password) {
      return alert('please enter email and password')
    }

    mutation.mutate({email, password});
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.<br />
          {mutation.isError && (<span className="text-red-500">{mutation.error.message}</span>)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* ⬇️ Form submits only via handleLoginSubmit */}
          <form onSubmit={handleLoginSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  ref={emailRef}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  autoComplete="email" // ✅ Fix: Adds autocomplete
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  ref={passwordRef}
                  id="password"
                  type="password"
                  autoComplete="current-password" 
                  required
                />
              </div>
              
              <Button onClick={handleLoginSubmit} type="submit" className="w-full" disabled={mutation.isPending}>
             {mutation.isPending && (
                 <LoaderCircle className="animate-spin" />
             )}
                <span>Login</span>
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to={"/auth/register"} className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
