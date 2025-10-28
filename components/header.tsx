"use client";

import Link from "next/link";
import { Menu, X, User, LogOut, Settings } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ThemeButton";
import { useUser } from "@/helpers/user";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { user, loading, error, logout } = useUser();

  // Handle mount to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll animation effect with throttle
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuState && !target.closest('nav') && !target.closest('button')) {
        setMenuState(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuState]);

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      // Small delay for smooth transition
      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 300);
    }
  };

  const getUserInitials = (name?: string, email?: string) => {
    if (name) {
      return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }
    return email ? email[0].toUpperCase() : 'U';
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <header className="h-16">
        {/* Empty header for SSR */}
      </header>
    );
  }

  return (
    <header className="relative">
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-custom-from-custom-500 border-t-transparent"></div>
            <p className="text-sm text-muted-foreground">Loading...</p>
          </div>
        </div>
      )}

      <nav
        data-state={menuState ? "active" : "inactive"}
        className="fixed z-40 w-full px-4 transition-all duration-300"
      >
        <div
          className={cn(
            "mx-auto max-w-7xl transition-all duration-500",
            isScrolled 
              ? "mt-2 rounded-2xl border bg-background/80 backdrop-blur-xl shadow-sm lg:mt-3" 
              : "mt-4 bg-transparent"
          )}
        >
          <div className="flex items-center justify-between px-4 py-3 lg:px-6 lg:py-4">
            {/* Logo */}
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2 transition-transform hover:scale-105"
              onClick={() => setMenuState(false)}
            >
              <div className={cn(
                "flex items-center space-x-2 transition-all duration-300",
                isScrolled ? "scale-95" : "scale-100"
              )}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-custom-500 to-custom-from-custom-500/60">
                  <span className="text-sm font-bold text-custom-from-custom-500">
                    {process.env.NEXT_PUBLIC_APP_NAME?.[0]}
                  </span>
                </div>
                <span className={cn(
                  "font-bold transition-all duration-300",
                  isScrolled ? "text-lg" : "text-xl"
                )}>
                  {process.env.NEXT_PUBLIC_APP_NAME}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Center */}
            {!user && !loading && (
              <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground transition-all duration-200 hover:text-foreground hover:scale-105"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Desktop Actions - Right */}
            <div className="hidden items-center gap-4 lg:flex">
              {loading ? (
                <div className="flex items-center gap-3">
                  <Skeleton className="h-8 w-24 rounded-full" />
                  <Skeleton className="h-9 w-9 rounded-full" />
                </div>
              ) : error ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-destructive">Auth Error</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/auth/login">Login</Link>
                  </Button>
                </div>
              ) : user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground hidden xl:block">
                    Welcome back, <span className="font-medium text-foreground">{user.user_metadata?.name || user.email.split('@')[0]}</span>
                  </span>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="relative h-9 w-9 rounded-full p-0">
                        <Avatar className="h-9 w-9 border-2 border-background">
                          {/* avatar */}
                          <AvatarFallback className="bg-linear-to-br from-custom-500 to-custom-from-custom-500/60 text-custom-from-custom-500-foreground">
                            {getUserInitials(user.user_metadata?.name, user.email)}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium">{user.user_metadata?.name || 'User'}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/profile" className="cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/settings" className="cursor-pointer">
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        onClick={handleLogout}
                        className="cursor-pointer text-destructive focus:text-destructive"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <ModeToggle />
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/auth/login" className="transition-transform hover:scale-105">
                      Login
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="transition-transform hover:scale-105">
                    <Link href="/auth/signup">
                      Get Started
                    </Link>
                  </Button>
                  <ModeToggle />
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className={cn(
                "relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 lg:hidden",
                "hover:bg-accent hover:text-accent-foreground",
                menuState && "bg-accent text-accent-foreground"
              )}
            >
              <Menu className={cn(
                "h-5 w-5 transition-all duration-200",
                menuState && "scale-0 opacity-0"
              )} />
              <X className={cn(
                "absolute h-5 w-5 transition-all duration-200",
                "scale-0 opacity-0",
                menuState && "scale-100 opacity-100"
              )} />
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div className={cn(
            "fixed inset-0 z-30 bg-background/80 backdrop-blur-lg transition-all duration-300 lg:hidden",
            menuState 
              ? "translate-x-0 opacity-100" 
              : "translate-x-full opacity-0"
          )}>
            <div className="flex h-full flex-col pt-20 pb-8">
              {/* Mobile Navigation */}
              <div className="flex-1 px-6">
                {!user && (
                  <div className="mb-8">
                    <h3 className="mb-4 text-sm font-medium text-muted-foreground">Navigation</h3>
                    <ul className="space-y-3">
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className="block py-2 text-lg font-medium transition-all duration-200 hover:text-custom-from-custom-500 hover:translate-x-2"
                            onClick={() => setMenuState(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Mobile User Section */}
                <div className="border-t pt-6">
                  {loading ? (
                    <div className="space-y-4">
                      <Skeleton className="h-12 w-full rounded-lg" />
                      <Skeleton className="h-10 w-full rounded-lg" />
                    </div>
                  ) : error ? (
                    <div className="space-y-4">
                      <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4">
                        <p className="text-sm text-destructive">Authentication Error</p>
                      </div>
                      <Button asChild variant="outline" className="w-full" onClick={() => setMenuState(false)}>
                        <Link href="/auth/login">Try Login Again</Link>
                      </Button>
                    </div>
                  ) : user ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 rounded-lg border p-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-linear-to-br from-custom-500 to-custom-from-custom-500/60 text-custom-from-custom-500-foreground">
                            {getUserInitials(user.user_metadata?.name, user.email)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {user.user_metadata?.name || 'User'}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <Button asChild variant="outline" size="sm" onClick={() => setMenuState(false)}>
                          <Link href="/profile">
                            <User className="mr-2 h-4 w-4" />
                            Profile
                          </Link>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={handleLogout}
                          className="text-destructive border-destructive/20 hover:bg-destructive/10"
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </Button>
                      </div>
                      
                      <div className="flex justify-center pt-4">
                        <ModeToggle />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Button asChild className="w-full" onClick={() => setMenuState(false)}>
                        <Link href="/auth/signup">
                          Get Started Free
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full" onClick={() => setMenuState(false)}>
                        <Link href="/auth/login">
                          Sign In
                        </Link>
                      </Button>
                      <div className="flex justify-center pt-4">
                        <ModeToggle />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed header */}
      <div className={cn(
        "transition-all duration-500",
        isScrolled ? "h-16" : "h-20"
      )} />
    </header>
  );
};