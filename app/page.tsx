import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black">
                Protect Your
                <span className="block bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Athletic Performance
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                SoleSafe's innovative shoe covers protect your athletic footwear, extending their life and maintaining peak performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/shop-now"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700"
                >
                  Shop Now
                </Link>
                <Link
                  href="/technology"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px]">
              <Image
                src="/product-hero.jpg"
                alt="SoleSafe Product"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-black">Why Choose SoleSafe?</h2>
              <p className="text-xl text-gray-600">
                Innovative features designed for athletes by athletes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black">Universal Fit</h3>
                <p className="text-gray-600">
                  Fits any athletic footwear with our innovative stretch material
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black">Durable Protection</h3>
                <p className="text-gray-600">
                  5mm thick neoprene base layer for maximum protection
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black">Easy Maintenance</h3>
                <p className="text-gray-600">
                  Machine washable and quick-drying materials
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-teal-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Protect Your Athletic Investment?
            </h2>
            <Link
              href="/shop-now"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-blue-600 bg-white hover:bg-gray-50"
            >
              Get Started Today
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
