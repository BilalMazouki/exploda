// app/auth/signup/page.tsx
'use client'
import { LogoIcon } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Eye, EyeOff, Loader2, CheckCircle2, XCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
    const [error, setError] = useState('')
    const [errors, setErrors] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [success, setSuccess] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setErrors([])
        
        try {
            const formData = new FormData(e.target as HTMLFormElement)
            const firstName = formData.get('firstname') as string
            const lastName = formData.get('lastname') as string
            
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: `${firstName} ${lastName}`.trim(),
                    email: formData.get('email'),
                    password: formData.get('pwd')
                })
            })

            const data = await response.json()
            
            if (!response.ok) {
                if (data.errors && Array.isArray(data.errors)) {
                    setErrors(data.errors)
                } else {
                    throw new Error(data.message || 'Signup failed')
                }
                return
            }

            // Success case
            setSuccess(true)
            setTimeout(() => {
                router.push('/auth/verify-email')
            }, 2000)
            
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred')
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-custom-50 to-custom-100 dark:from-gray-900 dark:to-gray-800 px-4">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-gray-700/50 shadow-xl shadow-black/5 p-8 max-w-md w-full text-center animate-in fade-in duration-500">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4 animate-in zoom-in duration-500" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Almost There!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        We've sent a verification link to your email. Please check your inbox to activate your account.
                    </p>
                    <div className="flex gap-3 justify-center">
                        <Button asChild variant="outline">
                            <Link href="/auth/login">Sign In</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/">Go Home</Link>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-custom-50 to-custom-100 dark:from-gray-900 dark:to-gray-800 px-4 py-8">
            <div className="w-full max-w-md">
                <Button
                    asChild
                    variant="ghost"
                    className="mb-6 -ml-3 w-fit hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                >
                    <Link href="/" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to home
                    </Link>
                </Button>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-gray-700/50 shadow-2xl shadow-black/10 overflow-hidden animate-in fade-in duration-500"
                >
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <Link
                                href="/"
                                aria-label="go home"
                                className="mx-auto block w-fit transition-transform hover:scale-105 duration-300"
                            >
                                <LogoIcon />
                            </Link>
                            <h1 className="mb-2 mt-4 text-2xl font-bold bg-linear-to-r from-custom-600 to-custom-700 bg-clip-text text-transparent">
                                Join {process.env.NEXT_PUBLIC_APP_NAME}
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400">Create your account to get started</p>
                        </div>

                        {/* Error Messages */}
                        {(error || errors.length > 0) && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-in slide-in-from-top duration-300 dark:bg-red-900/20 dark:border-red-800">
                                <div className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 shrink-0" />
                                    <div className="text-left">
                                        {error && <p className="text-red-700 dark:text-red-400 text-sm font-medium">{error}</p>}
                                        {errors.length > 0 && (
                                            <ul className="text-red-700 dark:text-red-400 text-sm list-disc list-inside space-y-1">
                                                {errors.map((err, index) => (
                                                    <li key={index}>{err}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstname" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        First name
                                    </Label>
                                    <Input
                                        type="text"
                                        required
                                        name="firstname"
                                        id="firstname"
                                        placeholder="John"
                                        className="transition-all duration-200 focus:ring-2 focus:ring-custom-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50"
                                        disabled={loading}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastname" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Last name
                                    </Label>
                                    <Input
                                        type="text"
                                        required
                                        name="lastname"
                                        id="lastname"
                                        placeholder="Doe"
                                        className="transition-all duration-200 focus:ring-2 focus:ring-custom-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50"
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email address
                                </Label>
                                <Input
                                    type="email"
                                    required
                                    name="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="transition-all duration-200 focus:ring-2 focus:ring-custom-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50"
                                    disabled={loading}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="pwd" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Password
                                </Label>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        name="pwd"
                                        id="pwd"
                                        placeholder="Create a strong password"
                                        className="transition-all duration-200 focus:ring-2 focus:ring-custom-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 pr-10"
                                        disabled={loading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                        disabled={loading}
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            <Button 
                                className="w-full bg-custom-600 hover:bg-custom-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-custom-600/25 transform hover:-translate-y-0.5"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                        Creating Account...
                                    </>
                                ) : (
                                    'Create Account'
                                )}
                            </Button>
                        </div>

                        <div className="my-6 flex items-center">
                            <div className="grow border-t border-gray-300 dark:border-gray-600" />
                            <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">Or continue with</span>
                            <div className="grow border-t border-gray-300 dark:border-gray-600" />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                className="border-gray-300 hover:bg-gray-50 transition-all duration-300 dark:border-gray-600 dark:hover:bg-gray-800"
                                disabled={loading}
                            >
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                </svg>
                                Google
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="border-gray-300 hover:bg-gray-50 transition-all duration-300 dark:border-gray-600 dark:hover:bg-gray-800"
                                disabled={loading}
                            >
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                                    <path fill="#f1511b" d="M12 12h10v10H12z"/>
                                    <path fill="#80cc28" d="M2 12h10v10H2z"/>
                                    <path fill="#00adef" d="M12 2h10v10H12z"/>
                                    <path fill="#fbbc09" d="M2 2h10v10H2z"/>
                                </svg>
                                Microsoft
                            </Button>
                        </div>
                    </div>

                    <div className="px-8 py-4 bg-gray-50/50 border-t border-gray-200/50 dark:bg-gray-800/50 dark:border-gray-700/50">
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                            Already have an account?{' '}
                            <Button
                                asChild
                                variant="link"
                                className="p-0 h-auto font-semibold text-custom-600 hover:text-custom-700 dark:text-custom-400 dark:hover:text-custom-300 transition-colors"
                            >
                                <Link href="/auth/login">Sign In</Link>
                            </Button>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}