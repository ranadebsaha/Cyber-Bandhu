import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UsersRound, Calendar, LogOut, BarChart } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const AdminDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const navigate = useNavigate();

    // this would check for a valid auth token
    useEffect(() => {
        // we're just checking if the user navigated here properly
        // you would validate authentication status here
    }, []);

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate("/admin");
    };

    const bookings = [
        { id: 1, name: "Rahul Sharma", service: "Form Filling", date: "2024-04-18", status: "Confirmed", },
        { id: 2, name: "Priya Patel", service: "College Admissions", date: "2024-04-19", status: "Pending", },
        { id: 3, name: "Amit Kumar", service: "Scholarship Application", date: "2024-04-20", status: "Confirmed", },
        { id: 4, name: "Sneha Gupta", service: "Digital Safety", date: "2024-04-21", status: "Cancelled", },
        { id: 5, name: "Vikram Singh", service: "Form Filling", date: "2024-04-22", status: "Confirmed", },
    ];

    const assistants = [
        { id: 1, name: "Ravi Kumar", area: "Jaipur", bookings: 12, rating: 4.8 },
        { id: 2, name: "Sonia Verma", area: "Udaipur", bookings: 8, rating: 4.7 },
        { id: 3, name: "Deepak Sharma", area: "Jodhpur", bookings: 15, rating: 4.9, },
        { id: 4, name: "Nisha Patel", area: "Kota", bookings: 10, rating: 4.6 },
        { id: 5, name: "Arjun Singh", area: "Bikaner", bookings: 7, rating: 4.8 },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-primary-600">Cyber</span>
                            <span className="text-xl font-bold text-secondary-500">Bandhu</span>
                        </div>
                        <span className="ml-4 text-sm bg-gray-200 px-2 py-1 rounded">Admin Panel</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleLogout}>
                        <LogOut className="h-4 w-4 mr-2" />Logout
                    </Button>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                            <Calendar className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">128</div>
                            <p className="text-xs text-gray-500">+8% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Active Assistants</CardTitle>
                            <UsersRound className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">24</div>
                            <p className="text-xs text-gray-500">+2 new this month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <BarChart className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹32,580</div>
                            <p className="text-xs text-gray-500">+12% from last month</p>
                        </CardContent>
                    </Card>
                </div>
                <Tabs defaultValue="bookings" className="mb-6">
                    <TabsList className="mb-4">
                        <TabsTrigger value="bookings">Recent Bookings</TabsTrigger>
                        <TabsTrigger value="assistants">Digital Assistants</TabsTrigger>
                    </TabsList>
                    <TabsContent value="bookings">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Bookings</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[300px]">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b">
                                                    <th className="py-2 text-left font-medium">Name</th>
                                                    <th className="py-2 text-left font-medium">Service</th>
                                                    <th className="py-2 text-left font-medium">Date</th>
                                                    <th className="py-2 text-left font-medium">Status</th>
                                                    <th className="py-2 text-left font-medium">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bookings.map((booking) => (
                                                    <tr key={booking.id} className="border-b">
                                                        <td className="py-2">{booking.name}</td>
                                                        <td className="py-2">{booking.service}</td>
                                                        <td className="py-2">{booking.date}</td>
                                                        <td className="py-2">
                                                            <span
                                                                className={`px-2 py-1 rounded-full text-xs ${booking.status === "Confirmed"
                                                                    ? "bg-green-100 text-green-800"
                                                                    : booking.status === "Pending"
                                                                        ? "bg-yellow-100 text-yellow-800"
                                                                        : "bg-red-100 text-red-800"
                                                                    }`}
                                                            >
                                                                {booking.status}
                                                            </span>
                                                        </td>
                                                        <td className="py-2">
                                                            <Button variant="link" size="sm">View Details</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="assistants">
                        <Card>
                            <CardHeader>
                                <CardTitle>Digital Assistants</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[300px]">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b">
                                                    <th className="py-2 text-left font-medium">Name</th>
                                                    <th className="py-2 text-left font-medium">Area</th>
                                                    <th className="py-2 text-left font-medium">Bookings</th>
                                                    <th className="py-2 text-left font-medium">Rating</th>
                                                    <th className="py-2 text-left font-medium">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {assistants.map((assistant) => (
                                                    <tr key={assistant.id} className="border-b">
                                                        <td className="py-2">{assistant.name}</td>
                                                        <td className="py-2">{assistant.area}</td>
                                                        <td className="py-2">{assistant.bookings}</td>
                                                        <td className="py-2">
                                                            <div className="flex items-center">
                                                                <span className="text-yellow-500">★</span>
                                                                <span className="ml-1">{assistant.rating}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-2">
                                                            <Button variant="link" size="sm">View Profile</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
};

export default AdminDashboard;
