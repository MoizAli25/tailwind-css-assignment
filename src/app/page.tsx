import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adventure Travels | Home</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      

      {/* Carousel */}
      <div className="relative">
        <div className="carousel-item active relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/landscape-tropical-vacation-palm-summer.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold">Maldives</h1>
            <p className="text-gray-300 mt-2">We had such a great time in Maldives!</p>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <section className="container mx-auto my-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Welcome to Adventure Travels</h2>
        <p className="text-lg text-gray-700 mb-8">
          We offer thrilling travel experiences around the world. Whether you're looking to trek through mountains, dive in tropical waters, or explore deserts, we have something for everyone.
        </p>

        {/* Customer Testimonials Section */}
        <h3 className="text-2xl font-semibold mb-4">Customer Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded shadow-lg">
            <h4 className="text-xl font-bold text-blue-500">Emily R.</h4>
            <p className="mt-2">"The mountain trek was a life-changing experience. Highly recommend Adventure Travels!"</p>
          </div>
          <div className="p-4 border rounded shadow-lg">
            <h4 className="text-xl font-bold text-blue-500">James M.</h4>
            <p className="mt-2">"Scuba diving in the Maldives was breathtaking. Adventure Travels made it seamless and unforgettable."</p>
          </div>
          <div className="p-4 border rounded shadow-lg">
            <h4 className="text-xl font-bold text-blue-500">Sarah K.</h4>
            <p className="mt-2">"The desert safari was thrilling! Perfectly organized and such a unique experience."</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-red-800 text-white py-12" id="services">
        <div className="container mx-auto text-center p-5 rounded-xl max-w-screen-lg">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Mountain Treks</h3>
              <p>Experience breathtaking views and thrilling hikes in the world’s most stunning mountain ranges.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Scuba Diving</h3>
              <p>Dive into crystal-clear waters and explore vibrant marine life in tropical destinations.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Desert Safari</h3>
              <p>Embark on thrilling desert safaris and discover the beauty of expansive sand dunes.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Wildlife Safari</h3>
              <p>Witness majestic wildlife up close in their natural habitats with expert guides.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Custom Packages</h3>
              <p>Design your dream adventure with customizable travel packages tailored to your preferences.</p>
            </div>
          </div>
          <a href="/components/services" className="mt-8 inline-block bg-red-600 text-white py-2 px-6 rounded hover:bg-red-500">Discover More</a>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto my-12" id="about">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-lg text-gray-700">Founded in 2010, Adventure Travels has been delivering extraordinary travel experiences for over a decade.</p>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
              Adventure Travels was established by passionate explorers committed to sharing their love for adventure and nature. Our goal is to create unique journeys that connect travelers with breathtaking landscapes and cultures worldwide.
            </p>
            <ul className="list-disc list-inside">
              <li><strong>Over 700 Successful Trips:</strong> We’ve organized hundreds of unforgettable trips, creating cherished memories for travelers.</li>
              <li><strong>Safety & Quality:</strong> We prioritize your safety and comfort while delivering the highest quality of service.</li>
              <li><strong>Expert Guides:</strong> Our team consists of expert guides passionate about helping you experience the wonders of the world.</li>
              <li><strong>Customizable Trips:</strong> We offer tailor-made packages to match your travel preferences and needs.</li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src="/travel-concept-with-landmarks.jpg" alt="Adventure Image" className="rounded shadow-lg" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-12" id="contact">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">Let's get in touch. Send us a message:</p>
          <form className="max-w-xl mx-auto space-y-4">
            <input type="text" placeholder="Name" className="w-full border p-2 rounded" required />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
            <input type="text" placeholder="Subject" className="w-full border p-2 rounded" required />
            <textarea placeholder="Message" className="w-full border p-2 rounded" rows={4} required></textarea>
            <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 Adventure Travels</p>
      </footer>
    </>
  );
}
