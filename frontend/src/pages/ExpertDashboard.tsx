import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UsersRound, Calendar, LogOut, BarChart } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

const ExpertDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const navigate = useNavigate();
    const [pendingServicesData, setPendingServicesData] = useState([]);
    const [myPendingServicesData, setMyPendingServicesData] = useState([]);
    const { toast } = useToast();
    const expertId = localStorage.getItem("expert_id");

    const getPendingServices = async () => {
        try {
            const res = await fetch(`http://localhost:5000/service/pending`, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
                    // authorization: `bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MDM0Y2VhYmFjNmFjZmU2M2FlZjE4ZiIsImVtYWlsIjoicmRzQHIuY29tIiwiZG9jIjpbXSwiaGlzdG9yeSI6W10sIl9fdiI6MCwiZGF0ZSI6IjIwMjUtMDQtMTlUMTQ6MzU6MzMuMjg2WiJ9LCJpYXQiOjE3NDUwNzMzMzMsImV4cCI6MTc0NTA4MDUzM30.Jd30UgjHsWSo9eaIYNpPNO7las9dK_5Qn8bS8qxCuoc`,
                },
            });
            const data = await res.json();
            if (data && Array.isArray(data)) {
                setPendingServicesData(data);
            } else {
                setPendingServicesData([]);
            }
        } catch (err) {
            console.error("Error fetching pending services:", err);
        }
    };

    const getMyPendingServices = async () => {
        try {
            const res = await fetch(`http://localhost:5000/service/pending/${expertId}`, {
            // const res = await fetch(`http://localhost:5000/service/pending/6803303885661ad3ef87f7a5`, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
                    // authorization: `bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MDM0Y2VhYmFjNmFjZmU2M2FlZjE4ZiIsImVtYWlsIjoicmRzQHIuY29tIiwiZG9jIjpbXSwiaGlzdG9yeSI6W10sIl9fdiI6MCwiZGF0ZSI6IjIwMjUtMDQtMTlUMTQ6MzU6MzMuMjg2WiJ9LCJpYXQiOjE3NDUwNzMzMzMsImV4cCI6MTc0NTA4MDUzM30.Jd30UgjHsWSo9eaIYNpPNO7las9dK_5Qn8bS8qxCuoc`,
                },
            });
            const data = await res.json();
            if (data && Array.isArray(data)) {
                setMyPendingServicesData(data);
            } else {
                setMyPendingServicesData([]);
            }
        } catch (err) {
            console.error("Error fetching pending services:", err);
        }
    };

    const handleAcceptService = async (serviceId) => {
        try {
          const res = await fetch(`http://localhost:5000/service/update/${serviceId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
            //   authorization: `bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MDM0Y2VhYmFjNmFjZmU2M2FlZjE4ZiIsImVtYWlsIjoicmRzQHIuY29tIiwiZG9jIjpbXSwiaGlzdG9yeSI6W10sIl9fdiI6MCwiZGF0ZSI6IjIwMjUtMDQtMTlUMTQ6MzU6MzMuMjg2WiJ9LCJpYXQiOjE3NDUwNzMzMzMsImV4cCI6MTc0NTA4MDUzM30.Jd30UgjHsWSo9eaIYNpPNO7las9dK_5Qn8bS8qxCuoc`,
            },
            body: JSON.stringify({ expert_id: expertId }),
          });
      
          const result = await res.json();
          if (result) {
            toast({
                title: "Service accepted successfully!",
              });
            getPendingServices();
          } else {
            toast({
                title: "Failed to accept the service.",
              });
          }
        } catch (err) {
          console.error(err);
          toast({
            title: "Something went wrong.",
          });
        }
      };
      
      const handleDoneClick = (taskId) => {
        navigate(`/expert/update-service/${taskId}`);
      };

    useEffect(() => {
        getPendingServices();
        getMyPendingServices();
    }, []);

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate("/admin");
    };


    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-primary-600">Cyber</span>
                            <span className="text-xl font-bold text-secondary-500">Bandhu</span>
                        </div>
                        <span className="ml-4 text-sm bg-gray-200 px-2 py-1 rounded">Expert Panel</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleLogout}>
                        <LogOut className="h-4 w-4 mr-2" />Logout
                    </Button>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Expert Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                            <Calendar className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">28</div>
                            <p className="text-xs text-gray-500">+10% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Pending Services</CardTitle>
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
                            <div className="text-2xl font-bold">₹1,580</div>
                            <p className="text-xs text-gray-500">+32% from last month</p>
                        </CardContent>
                    </Card>
                </div>
                <Tabs defaultValue="bookings" className="mb-6">
                    <TabsList className="mb-4">
                        <TabsTrigger value="bookings">Pending Services</TabsTrigger>
                        <TabsTrigger value="mybookings">My pending Services</TabsTrigger>
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
                                                    <th className="py-2 text-left font-medium">Mobile</th>
                                                    <th className="py-2 text-left font-medium">Email</th>
                                                    <th className="py-2 text-left font-medium">Service</th>
                                                    <th className="py-2 text-left font-medium">Description</th>
                                                    <th className="py-2 text-left font-medium">Address</th>
                                                    <th className="py-2 text-left font-medium">Date</th>
                                                    <th className="py-2 text-left font-medium">Status</th>
                                                    <th className="py-2 text-left font-medium">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {pendingServicesData.map((booking) => (
                                                    <tr key={booking.id} className="border-b">
                                                        <td className="py-2">{booking.user_name}</td>
                                                        <td className="py-2">{booking.mobile_no}</td>
                                                        <td className="py-2">{booking.email}</td>
                                                        <td className="py-2">{booking.service_name}</td>
                                                        <td className="py-2">{booking.service_des}</td>
                                                        <td className="py-2">{booking.address}</td>
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
                                                            <div className="mt-2 flex gap-4">
                                                                <button
                                                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                                                    // onClick={() => handleShowDetails(service)}
                                                                >
                                                                    Show Details
                                                                </button>

                                                                <button
                                                                    className="bg-green-600 text-white px-3 py-1 rounded"
                                                                    onClick={() => handleAcceptService(booking._id)}
                                                                >
                                                                    Accept
                                                                </button>
                                                            </div>
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
                    <TabsContent value="mybookings">
                        <Card>
                            <CardHeader>
                                <CardTitle>My pending Services</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[300px]">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b">
                                                    <th className="py-2 text-left font-medium">Name</th>
                                                    <th className="py-2 text-left font-medium">Mobile</th>
                                                    <th className="py-2 text-left font-medium">Email</th>
                                                    <th className="py-2 text-left font-medium">Service</th>
                                                    <th className="py-2 text-left font-medium">Description</th>
                                                    <th className="py-2 text-left font-medium">Address</th>
                                                    <th className="py-2 text-left font-medium">Date</th>
                                                    <th className="py-2 text-left font-medium">Status</th>
                                                    <th className="py-2 text-left font-medium">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {myPendingServicesData.map((booking) => (
                                                    <tr key={booking.id} className="border-b">
                                                        <td className="py-2">{booking.user_name}</td>
                                                        <td className="py-2">{booking.mobile_no}</td>
                                                        <td className="py-2">{booking.email}</td>
                                                        <td className="py-2">{booking.service_name}</td>
                                                        <td className="py-2">{booking.service_des}</td>
                                                        <td className="py-2">{booking.address}</td>
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
                                                            <div className="mt-2 flex gap-4">
                                                                <button
                                                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                                                    // onClick={() => handleShowDetails(service)}
                                                                >
                                                                    Show Details
                                                                </button>

                                                                <button
                                                                    className="bg-green-600 text-white px-3 py-1 rounded"
                                                                    onClick={() => handleDoneClick(booking._id)}
                                                                >
                                                                    Done
                                                                </button>
                                                            </div>
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

export default ExpertDashboard;
