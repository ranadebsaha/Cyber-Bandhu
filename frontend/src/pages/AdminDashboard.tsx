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
    const [pendingServicesData, setPendingServicesData] = useState([]);
    const [pendingQueryData, setPendingQueryData] = useState([]);
    const [expert, setExpert] = useState([]);

const getPendingServices = async () => {
  try {
    const res = await fetch(`http://localhost:5000/service/pending`, {
      headers: {
        // authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        authorization: `bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MDM0Y2VhYmFjNmFjZmU2M2FlZjE4ZiIsImVtYWlsIjoicmRzQHIuY29tIiwiZG9jIjpbXSwiaGlzdG9yeSI6W10sIl9fdiI6MCwiZGF0ZSI6IjIwMjUtMDQtMTlUMTI6MzU6MDAuMTMyWiJ9LCJpYXQiOjE3NDUwNjYxMDAsImV4cCI6MTc0NTA3MzMwMH0.mtgRmBD18O2VHSpPv10TVDTSLYl5pksDIMf_Ngm1vWQ`,
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
const getPendingQuery = async () => {
  try {
    const res = await fetch(`http://localhost:5000/query/pending`, {
      headers: {
        // authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        authorization: `bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MDM0Y2VhYmFjNmFjZmU2M2FlZjE4ZiIsImVtYWlsIjoicmRzQHIuY29tIiwiZG9jIjpbXSwiaGlzdG9yeSI6W10sIl9fdiI6MCwiZGF0ZSI6IjIwMjUtMDQtMTlUMTI6MzU6MDAuMTMyWiJ9LCJpYXQiOjE3NDUwNjYxMDAsImV4cCI6MTc0NTA3MzMwMH0.mtgRmBD18O2VHSpPv10TVDTSLYl5pksDIMf_Ngm1vWQ`,
      },
    });
    const data = await res.json();
    if (data && Array.isArray(data)) {
      setPendingQueryData(data);
    } else {
        setPendingQueryData([]);
    }
  } catch (err) {
    console.error("Error fetching pending query:", err);
  }
};

const getActiveExperts = async () => {
  try {
    const res = await fetch(`http://localhost:5000/expert/active`, {
      headers: {
        // authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        authorization: `bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MDM0Y2VhYmFjNmFjZmU2M2FlZjE4ZiIsImVtYWlsIjoicmRzQHIuY29tIiwiZG9jIjpbXSwiaGlzdG9yeSI6W10sIl9fdiI6MCwiZGF0ZSI6IjIwMjUtMDQtMTlUMTI6MzU6MDAuMTMyWiJ9LCJpYXQiOjE3NDUwNjYxMDAsImV4cCI6MTc0NTA3MzMwMH0.mtgRmBD18O2VHSpPv10TVDTSLYl5pksDIMf_Ngm1vWQ`
      },
    });
    const data = await res.json();
    if (data && Array.isArray(data)) {
      setExpert(data);
    } else {
      setExpert([]);
    }
  } catch (err) {
    console.error("Error fetching active experts:", err);
  }
};


    useEffect(() => {
        getPendingServices();
  getActiveExperts();
  getPendingQuery();
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
                        <TabsTrigger value="bookings">Pending Services</TabsTrigger>
                        <TabsTrigger value="query">Pending Query</TabsTrigger>
                        <TabsTrigger value="assistants">Digital Experts</TabsTrigger>
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
                                                        <td className="py-2">{booking.user_name }</td>
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
                                                        <form
        onSubmit={async (e) => {
          e.preventDefault();
          const newStatus = e.target.elements.status.value;
          try {
            const res = await fetch(`http://localhost:5000/service/update/${booking._id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                // authorization: `bearer ${localStorage.getItem("token")}`,
                authorization: `bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MDM0Y2VhYmFjNmFjZmU2M2FlZjE4ZiIsImVtYWlsIjoicmRzQHIuY29tIiwiZG9jIjpbXSwiaGlzdG9yeSI6W10sIl9fdiI6MCwiZGF0ZSI6IjIwMjUtMDQtMTlUMTI6MzU6MDAuMTMyWiJ9LCJpYXQiOjE3NDUwNjYxMDAsImV4cCI6MTc0NTA3MzMwMH0.mtgRmBD18O2VHSpPv10TVDTSLYl5pksDIMf_Ngm1vWQ`
              },
              body: JSON.stringify({ status: newStatus }),
            });
            const result = await res.json();
            if (result.success) {
              getPendingServices();
            }
          } catch (err) {
            console.error("Error updating status:", err);
          }
        }}
      >
        <select
          name="status"
          defaultValue={booking.status}
          className="text-xs border rounded px-2 py-1"
        >
          <option value="pending">Pending</option>
          <option value="done">Done</option>
          <option value="rejected">Rejected</option>
        </select>
        <button type="submit" className="ml-2 text-blue-600 text-xs underline">
          Update
        </button>
      </form>
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
                    <TabsContent value="query">
                        <Card>
                            <CardHeader>
                                <CardTitle>Pending Query</CardTitle>
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
                                                    <th className="py-2 text-left font-medium">Subject</th>
                                                    <th className="py-2 text-left font-medium">Message</th>
                                                    <th className="py-2 text-left font-medium">Date</th>
                                                    <th className="py-2 text-left font-medium">Status</th>
                                                    <th className="py-2 text-left font-medium">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {pendingQueryData.map((booking) => (
                                                    <tr key={booking.id} className="border-b">
                                                        <td className="py-2">{booking.f_name +" "+booking.l_name }</td>
                                                        <td className="py-2">{booking.mobile_no}</td>
                                                        <td className="py-2">{booking.email}</td>
                                                        <td className="py-2">{booking.query_name}</td>
                                                        <td className="py-2">{booking.query_des}</td>
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
                                                        <form
  onSubmit={async (e) => {
    e.preventDefault();
    const newStatus = e.target.elements.status.value;
    try {
      const res = await fetch(`http://localhost:5000/query/update/${booking._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        //   authorization: `bearer ${localStorage.getItem("token")}`,
        authorization: `bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MDM0Y2VhYmFjNmFjZmU2M2FlZjE4ZiIsImVtYWlsIjoicmRzQHIuY29tIiwiZG9jIjpbXSwiaGlzdG9yeSI6W10sIl9fdiI6MCwiZGF0ZSI6IjIwMjUtMDQtMTlUMTI6MzU6MDAuMTMyWiJ9LCJpYXQiOjE3NDUwNjYxMDAsImV4cCI6MTc0NTA3MzMwMH0.mtgRmBD18O2VHSpPv10TVDTSLYl5pksDIMf_Ngm1vWQ`
        },
        body: JSON.stringify({ status: newStatus }),
      });
      const result = await res.json();
      if (result.success) {
        getPendingQuery();
      }
    } catch (err) {
      console.error("Error updating query status:", err);
    }
  }}
>
  <select name="status" defaultValue={booking.status} className="text-xs border rounded px-2 py-1">
    <option value="pending">Pending</option>
    <option value="done">Resolved</option>
    <option value="rejected">Rejected</option>
  </select>
  <button type="submit" className="ml-2 text-blue-600 text-xs underline">Update</button>
</form>
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
                                                    <th className="py-2 text-left font-medium">Email</th>
                                                    <th className="py-2 text-left font-medium">Mobile</th>
                                                    <th className="py-2 text-left font-medium">Gender</th>
                                                    <th className="py-2 text-left font-medium">Verified</th>
                                                    <th className="py-2 text-left font-medium">Certified</th>
                                                    <th className="py-2 text-left font-medium">Rating</th>
                                                    <th className="py-2 text-left font-medium">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {expert.map((assistant) => (
                                                    <tr key={assistant.id} className="border-b">
                                                        <td className="py-2">{assistant.name}</td>
                                                        <td className="py-2">{assistant.address}</td>
                                                        <td className="py-2">{assistant.email}</td>
                                                        <td className="py-2">{assistant.mobile_no}</td>
                                                        <td className="py-2">{assistant.gender}</td>
                                                        <td className="py-2">{assistant.verified.toString()}</td>
                                                        <td className="py-2">{assistant.certified.toString()}</td>
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
