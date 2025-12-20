import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  BookOpen,
  TruckIcon,
  Clock,
  Shield,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  Package,
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Borrow Books from Home",
      description:
        "Access thousands of books from your local library without leaving your couch",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Fast & Reliable Delivery",
      description:
        "Get your favorite books delivered to your doorstep within 24-48 hours",
      image:
        "https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Support Local Libraries",
      description:
        "Help your community libraries thrive while enjoying convenient book delivery",
      image:
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative z-0 h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />

            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-200 mb-8">
                    {slide.description}
                  </p>
                  <Link
                    to="/allbooks"
                    className="inline-flex items-center space-x-2 bg-green-400 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    <span>All Books</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 w-3"
              }`}
            />
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Home;
