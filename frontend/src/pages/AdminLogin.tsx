import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Eye, EyeOff, Shield } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/components/ui/use-toast";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            if (username === "admin" && password === "admin123") {
                toast({
                    title: "Login successful",
                    description: "Welcome to Cyber Bandhu admin panel",
                });
                navigate("/admin/dashboard");
            } else {
                toast({
                    title: "Login failed",
                    description: "Invalid username or password",
                    variant: "destructive",
                });
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
                <div className="container max-w-md">
                    <Card className="w-full">
                        <CardHeader className="space-y-1">
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                    <Shield className="h-6 w-6 text-primary-600" />
                                </div>
                            </div>
                            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
                            <CardDescription className="text-center">Enter your credentials to access the admin dashboard</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleLogin}>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <label htmlFor="username" className="text-sm font-medium">Username</label>
                                        <Input id="username" type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                    </div>
                                    <div className="grid gap-2">
                                        <label htmlFor="password" className="text-sm font-medium">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Input id="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                            <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? (
                                                    <EyeOff size={18} />
                                                ) : (
                                                    <Eye size={18} />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full" disabled={isLoading}>
                                        {isLoading ? "Logging in..." : "Login"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AdminLogin;
