import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
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
import Card from "../../components/Home/Card";

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

 const data = useLoaderData();

  const initialbooks = Array.isArray(data)
    ? data
    : data?.result ?? data?.books ?? data?.data ?? [];

  const [books, setbooks] = useState(initialbooks);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    setLoading(true);

    fetch(`http://localhost:5000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        const results = Array.isArray(data)
          ? data
          : data?.result ?? data?.books ?? data?.data ?? [];
        setbooks(results);
        setLoading(false);
      });
  };


  return (
    <div>
      {/* slider */}
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

      {/* Latest book */}

      <div className="max-w-7xl mx-auto px-4 py-6 mt-10 mb-6">
        <h1 className="text-4xl font-bold mb-4 text-center">Latest Book</h1>

        <form
          onSubmit={handleSearch}
          className="mt-5 mb-10 flex gap-2 justify-center"
        >
          <label className="input rounded-full ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" placeholder="Search" />
          </label>
          <button className="btn bg-green-400 text-white rounded-full">
            {loading ? <div className="loader"></div> : "Search"}
          </button>
        </form>

        {books.length === 0 ? (
          <p className="text-center text-gray-500">No books available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {books.map((book) => (
              <Card key={book._id} book={book} ></Card>
            ))}
          </div>
        )}
      </div>

         
         {/* why Choose */}

       <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose BookCourier?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Experience the future of library services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <TruckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get your books delivered within 24-48 hours
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Secure Service
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Safe and secure handling of all your orders
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Round-the-clock customer service for your needs
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Vast Collection
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access to thousands of books across all genres
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* covarage area */}

       <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Coverage</h2>
            <p className="text-blue-100 text-lg">
              We deliver to major cities across the country
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Coverage Map"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">50+ Cities</h3>
                  <p className="text-blue-100">
                    We're expanding our coverage to serve you better
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">10,000+ Users</h3>
                  <p className="text-blue-100">
                    Join thousands of satisfied readers
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Package className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">50,000+ Deliveries</h3>
                  <p className="text-blue-100">
                    Trusted by readers across the nation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review section */}

       <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Readers Say
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Real stories from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Student',
                review: 'BookCourier has made my academic life so much easier. I can focus on studying while they handle book delivery.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Researcher',
                review: 'The convenience is unmatched. Fast delivery, great selection, and excellent customer service.',
                rating: 5,
              },
              {
                name: 'Emily Davis',
                role: 'Book Enthusiast',
                review: 'I love supporting local libraries while enjoying the comfort of home delivery. Best of both worlds!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.review}"
                </p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Section */}

       <section className="py-20 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Reading Journey?
          </h2>
          <p className="text-blue-100 text-xl mb-8">
            Join thousands of readers who trust BookCourier for their book delivery needs
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>


    </div>
  );
};

export default Home;
