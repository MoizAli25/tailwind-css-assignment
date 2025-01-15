export default function About() {
    return (
      <div>
       
  
        {/* About Section */}
        <section className="container mx-auto my-10 px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">About Us</h2>
            <p className="text-lg text-gray-600 mt-3">
              Founded in <strong>2010</strong>, Adventure Travels has been delivering
              extraordinary travel experiences for over a decade.
            </p>
          </div>
  
          {/* Content */}
          <div className="flex flex-wrap items-center">
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <p className="mb-6 text-lg text-gray-700">
                Adventure Travels was established by passionate explorers committed to
                sharing their love for adventure and nature. Our goal is to create
                unique journeys that connect travelers with breathtaking landscapes and
                cultures worldwide.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>Over 700 Successful Trips:</strong> We’ve organized hundreds
                  of unforgettable trips, creating cherished memories for travelers.
                </li>
                <li>
                  <strong>Safety & Quality:</strong> We prioritize your safety and
                  comfort while delivering the highest quality of service.
                </li>
                <li>
                  <strong>Expert Guides:</strong> Our team consists of expert guides
                  passionate about helping you experience the wonders of the world.
                </li>
                <li>
                  <strong>Customizable Trips:</strong> We offer tailor-made packages to
                  match your travel preferences and needs.
                </li>
              </ul>
            </div>
  
            {/* Image Content */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center">
              <img
                src="/travel-concept-with-landmarks.jpg"
                alt="Adventure Image"
                className="rounded shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-4 text-center">
          <p>&copy; 2024 Adventure Travels</p>
        </footer>
      </div>
    );
  }
  