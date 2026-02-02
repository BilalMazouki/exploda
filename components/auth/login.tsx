// app/auth/login/page.tsx
'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Loader2, Eye, EyeOff, ArrowLeft, XCircle } from 'lucide-react'
import { ModeToggle } from '../ThemeButton'

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [errors, setErrors] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        if (error) setError('')
        if (errors.length > 0) setErrors([])
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!formData.email || !formData.password) {
            setError('Please fill in all fields')
            return
        }

        setLoading(true)
        setError('')
        setErrors([])

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json()
            
            if (!res.ok) {
                if (data.errors && Array.isArray(data.errors)) {
                    setErrors(data.errors)
                } else {
                    throw new Error(data.message || 'Login failed')
                }
                return
            }
            
            // Success - redirect to home
            router.push('/')
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-custom-50 to-custom-100 dark:from-gray-900 dark:to-gray-800 px-4 py-8">
            <div className="w-full max-w-md">
                <div className='flex justify-between relative'>
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
                <div className='absolute right-0 top-1 z-15 mr-3'>
                    <ModeToggle/>
                </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-gray-700/50 shadow-2xl shadow-black/10 overflow-hidden animate-in fade-in duration-500">
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold bg-linear-to-r from-custom-600 to-custom-700 bg-clip-text text-transparent mb-2">
                                Welcome back
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400">
                                Sign in to your {process.env.NEXT_PUBLIC_APP_NAME} account
                            </p>
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

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email address
                                    </Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-custom-600 focus:ring-custom-600/20 transition-all duration-200"
                                        disabled={loading}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Password
                                        </Label>
                                        <Button
                                            asChild
                                            variant="link"
                                            size="sm"
                                            className="px-0 text-custom-600 dark:text-custom-400 hover:text-custom-700 dark:hover:text-custom-300 transition-colors"
                                        >
                                            <Link href="/forgot-password">
                                                Forgot password?
                                            </Link>
                                        </Button>
                                    </div>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            required
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Enter your password"
                                            className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-custom-600 focus:ring-custom-600/20 transition-all duration-200 pr-10"
                                            disabled={loading}
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                            onClick={() => setShowPassword(!showPassword)}
                                            disabled={loading}
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-4 w-4" />
                                            ) : (
                                                <Eye className="h-4 w-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-custom-600 hover:bg-custom-700 text-white shadow-lg shadow-custom-600/25 hover:shadow-custom-600/40 transition-all duration-300 transform hover:-translate-y-0.5"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign in to your account'
                                )}
                            </Button>
                        </form>

                   
                    </div>

                </div>
            </div>
        </div>
    )
}