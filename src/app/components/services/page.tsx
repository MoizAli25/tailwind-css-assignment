"use client"

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adventure Travels | Home</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>

    

      {/* Services Section */}
      <section className="max-w-4xl mx-auto my-12 p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-4xl font-serif text-center uppercase mb-4 tracking-wide">Our Services</h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          We offer a variety of adventure packages:
        </p>
        <ul className="list-none space-y-4">
          {['Mountain Treks', 'Scuba Diving', 'Desert Safari', 'Wildlife Safari', 'Custom Adventure Packages'].map((service, index) => (
            <li
              key={index}
              className="bg-white p-4 border-b border-gray-300 text-center text-xl hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Packages</h2>
          <p className="text-lg mb-12">
            Choose a pricing plan that fits your needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Gold', price: '$499', destinations: 2, features: ['Food: Breakfast', 'N/A Ticket', 'Endless Support'] },
              { title: 'Platinum', price: '$849', destinations: 5, features: ['Food: Breakfast & Lunch', 'One Way Ticket', 'Endless Support'] },
              { title: 'Titanium', price: '$1299', destinations: 10, features: ['Food: All Meals', 'Both Side Ticket', 'Endless Support'] },
            ].map((pkg, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-center text-blue-400">{pkg.title}</h3>
                <p className="text-center mt-2 text-3xl">{pkg.price}</p>
                <ul className="mt-4 space-y-2 text-center">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                    Book Now!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2024 Adventure Travels</p>
      </footer>
    </>
  );
}
