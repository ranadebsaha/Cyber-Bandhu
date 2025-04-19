import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    UserPlus,
    LogIn,
    BookCheck,
    Clock,
    Users,
    HeartHandshake,
    GraduationCap,
    PhoneCall,
} from "lucide-react";

const AssistantPortal = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Become a Cyber Bandhu Assistant
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Join our network of digital assistants and help students across
                                India navigate the digital world while earning.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-secondary-500 hover:bg-secondary-600"
                                >
                                    <Link to="/assistant/register">
                                        <UserPlus className="mr-2" />
                                        Register as Assistant
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link to="/assistant/login">
                                        <LogIn className="mr-2" />
                                        Assistant Login
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-primary-600 text-2xl font-bold">₹</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Earn Money</h3>
                                <p className="text-gray-600">
                                    Get paid for helping students with their digital needs.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-primary-600 text-2xl font-bold">
                                        🎓
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Flexible Schedule
                                </h3>
                                <p className="text-gray-600">
                                    Work on your own terms and choose your availability.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-primary-600 text-2xl font-bold">
                                        🌟
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
                                <p className="text-gray-600">
                                    Help bridge the digital divide in your community.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            How to Become a Digital Assistant
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <UserPlus className="h-8 w-8 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">1. Register</h3>
                                <p className="text-gray-600">
                                    Complete your profile with basic information
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <GraduationCap className="h-8 w-8 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">2. Training</h3>
                                <p className="text-gray-600">
                                    Complete our comprehensive training program
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BookCheck className="h-8 w-8 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">3. Verification</h3>
                                <p className="text-gray-600">
                                    Get verified and start accepting requests
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HeartHandshake className="h-8 w-8 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">4. Start Helping</h3>
                                <p className="text-gray-600">
                                    Begin assisting students in your area
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                What You'll Learn
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold mb-4">Digital Skills</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                            <span>Online form filling best practices</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                            <span>Document management and organization</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                            <span>Digital security and privacy</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                            <span>Effective communication techniques</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                            <span>Problem-solving approaches</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                            <span>Customer service excellence</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-primary-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-8">
                                We're Here to Support You
                            </h2>
                            <p className="text-gray-600 mb-12">
                                Our team is available to help you every step of the way on your
                                journey as a Digital Assistant.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="h-6 w-6 text-primary-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Community Support</h3>
                                    <p className="text-gray-600 text-sm">
                                        Connect with other Digital Assistants
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Clock className="h-6 w-6 text-primary-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">24/7 Help</h3>
                                    <p className="text-gray-600 text-sm">
                                        Access help whenever you need it
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <PhoneCall className="h-6 w-6 text-primary-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Direct Support</h3>
                                    <p className="text-gray-600 text-sm">
                                        Get help from our support team
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-primary-600 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">
                                Ready to Make a Difference?
                            </h2>
                            <p className="text-primary-100 mb-8">
                                Join our network of Digital Assistants and help bridge the
                                digital divide in your community.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" variant="secondary">
                                    <Link to="/assistant/register">
                                        <UserPlus className="mr-2" />
                                        Register Now
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-white text-white hover:bg-white hover:text-primary-600"
                                >
                                    <Link to="/contact">Contact Us</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AssistantPortal;
