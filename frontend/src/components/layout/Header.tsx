import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const servicesRef = useRef<HTMLDivElement>(null);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (window.innerWidth >= 768 && isServicesOpen) {
            setIsServicesOpen(false);
        }
    };

    const toggleServicesMenu = () => {
        setIsServicesOpen((prev) => !prev);
    };

    const handleMouseEnter = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setIsServicesOpen(true);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setIsServicesOpen(false);
        }, 200);
    };

    useEffect(() => {
        if (!isMenuOpen) setIsServicesOpen(false);
    }, [isMenuOpen]);

    return (
        <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary-600">Cyber</span>
                        <span className="text-2xl font-bold text-secondary-500">Bandhu</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium">Home</Link>
                        <div ref={servicesRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition" onClick={toggleServicesMenu}>
                                Services
                                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-primary-600" : ""}`} />
                            </button>
                            {isServicesOpen && (
                                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                    <div className="py-1">
                                        <Link to="/services#form-filling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsServicesOpen(false)}>
                                            Form Filling
                                        </Link>
                                        <Link to="/services#college-help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsServicesOpen(false)}>
                                            College Help
                                        </Link>
                                        <Link to="/services#digital-safety" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsServicesOpen(false)}>
                                            Digital Safety
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link to="/how-it-works" className="text-gray-700 hover:text-primary-600 font-medium">How It Works</Link>
                        <Link to="/join-us" className="text-gray-700 hover:text-primary-600 font-medium">Join Us</Link>
                        <Link to="/faq" className="text-gray-700 hover:text-primary-600 font-medium">FAQ</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</Link>
                    </nav>
                    <div className="hidden md:block">
                        <Button className="bg-secondary-500 hover:bg-secondary-600">Book Now</Button>
                    </div>
                    <div className="md:hidden">
                        <button type="button" className="p-2 rounded-md text-gray-700" onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium px-3 py-2" onClick={toggleMenu}>
                                Home
                            </Link>
                            <div>
                                <button className="flex items-center justify-between w-full text-gray-700 hover:text-primary-600 font-medium px-3 py-2" onClick={toggleServicesMenu}>
                                    Services
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isServicesOpen && (
                                    <div className="pl-4 space-y-2 pt-2">
                                        <Link to="/services#form-filling" className="block text-gray-700 hover:text-primary-600 px-3 py-1" onClick={toggleMenu}>
                                            Form Filling
                                        </Link>
                                        <Link to="/services#college-help" className="block text-gray-700 hover:text-primary-600 px-3 py-1" onClick={toggleMenu}>
                                            College Help
                                        </Link>
                                        <Link to="/services#digital-safety" className="block text-gray-700 hover:text-primary-600 px-3 py-1" onClick={toggleMenu}>
                                            Digital Safety
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link to="/how-it-works" className="text-gray-700 hover:text-primary-600 font-medium px-3 py-2" onClick={toggleMenu}>
                                How It Works
                            </Link>
                            <Link to="/join-us" className="text-gray-700 hover:text-primary-600 font-medium px-3 py-2" onClick={toggleMenu}>
                                Join Us
                            </Link>
                            <Link to="/faq" className="text-gray-700 hover:text-primary-600 font-medium px-3 py-2" onClick={toggleMenu}>
                                FAQ
                            </Link>
                            <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium px-3 py-2" onClick={toggleMenu}>
                                Contact
                            </Link>
                            <Button className="bg-secondary-500 hover:bg-secondary-600 mt-2">Book Now</Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
