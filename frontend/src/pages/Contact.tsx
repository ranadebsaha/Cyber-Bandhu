import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {

  const [f_name, setF_name] = useState("");
  const [l_name, setL_name] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [query_name, setQuery_name] = useState("");
  const [query_des, setQuery_des] = useState("");
  const [t_c, setT_c] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();


  const collectData = async (e) => {
    e.preventDefault();
    if (!f_name || !l_name || !mobile_no || !email || !query_name || !query_des || !t_c) {
      setError(true);
      return;
    }
    let result = await fetch("http://localhost:5000/query", {
      method: "POST",
      body: JSON.stringify({ f_name, l_name, mobile_no, email, query_name, query_des }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    if (result) {
      toast({
        title: "We will contact you soon",
        description: "Thank you for using Cyber-bandhu",
      });
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
              <p className="text-lg text-gray-600 mb-6">We're here to help you with any questions or to book a service</p>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our support team</p>
                <p className="text-primary-600 font-semibold">+91 9876543210</p>
                <p className="text-gray-500 text-sm mt-2">Available 9:00 AM - 8:00 PM, 7 days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us an email anytime</p>
                <p className="text-primary-600 font-semibold">help@cyberbandhu.in</p>
                <p className="text-gray-500 text-sm mt-2">We'll respond within 24 hours</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Message us directly on WhatsApp</p>
                <p className="text-primary-600 font-semibold">+91 9876543210</p>
                <p className="text-gray-500 text-sm mt-2">Quick responses during business hours</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                        <Input id="firstName" value={f_name} onChange={(e) => setF_name(e.target.value)} placeholder="Your first name" required />
                        {error && !f_name && <span className="text-red-500">Enter First Name</span>}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                        <Input id="lastName" value={l_name} onChange={(e) => setL_name(e.target.value)} placeholder="Your last name" required />
                        {error && !l_name && <span className="text-red-500">Enter Last Name</span>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required />
                        {error && !email && <span className="text-red-500">Enter a valid Email</span>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                        <Input id="phone" value={mobile_no} onChange={(e) => setMobile_no(e.target.value)} placeholder="Your phone number" required />
                        {error && !mobile_no && <span className="text-red-500">Enter a Valid phone No</span>}
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                      <Input id="subject" value={query_name} onChange={(e) => setQuery_name(e.target.value)} placeholder="What is this regarding?" required />
                      {error && !query_name && <span className="text-red-500">Enter Subject</span>}
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                      <Textarea id="message" value={query_des} onChange={(e) => setQuery_des(e.target.value)} placeholder="How can we help you?" className="h-32" required />
                      {error && !query_des && <span className="text-red-500">Enter message</span>}
                    </div>
                    <div className="mb-6">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="terms" type="checkbox" checked={t_c}
                            onChange={(e) => setT_c(e.target.checked)} className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" required />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="text-gray-600">I agree to the{" "}
                            <a href="#" className="text-primary-600 hover:text-primary-500">Privacy Policy</a>
                          </label>
                        </div>

                      </div>
                      {error && !t_c && <span className="text-red-500">Checked Terms and Condition</span>}
                    </div>
                    <Button type="submit" onClick={collectData} className="w-full bg-secondary-500 hover:bg-secondary-600">Send Message</Button>
                  </form>
                </div>
                <div>
                  <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Service</h2>
                    <form>
                      <div className="mb-6">
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Type*</label>
                        <select id="service" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" required>
                          <option value="">Select a service</option>
                          <option value="form-filling">Form Filling Assistance</option>
                          <option value="college-help">College Admissions Help</option>
                          <option value="scholarship">Scholarship Applications</option>
                          <option value="digital-safety">Digital Safety</option>
                          <option value="career-guidance">Career Guidance</option>
                        </select>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Your Location*</label>
                        <Input id="location" placeholder="City/District" required />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date*</label>
                          <Input id="date" type="date" required />
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time*</label>
                          <Input id="time" type="time" required />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                        <Textarea id="notes" placeholder="Tell us more about what you need help with..." className="h-20" />
                      </div>
                      <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700">Book Appointment</Button>
                    </form>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">Our Office</h3>
                    <div className="flex mb-4">
                      <MapPin className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">123 Digital Avenue, Tech Hub, Bharat - 500001</p>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-48 overflow-hidden">
                      <div className="h-full w-full flex items-center justify-center bg-primary-100">
                        <p className="text-primary-600 font-medium">Interactive Map</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">Quick answers to common questions about our services</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2">How quickly can I get an appointment?</h3>
                  <p className="text-gray-600">In most areas, we can schedule an appointment within 24-48hours of your request. For urgent needs, we also offerpriority booking.</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2">What areas do you serve?</h3>
                  <p className="text-gray-600">We currently operate in select districts across multiplestates. Enter your location in the booking form to check ifwe provide services in your area.</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2">How can I change or cancel my appointment?</h3>
                  <p className="text-gray-600">You can change or cancel your appointment by calling ourhelpline or through the appointment management section inour app up to 6 hours before the scheduled time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
