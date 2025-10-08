import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

export default function ContactSection(){
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D176A] mb-4">Get in Touch</h2>
          <p className="text-gray-500 mb-6 text-base sm:text-lg">
            We appreciate each customer and we are proud that 60% of clients come back to work with us again.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-teal-500 text-lg">📞</span>
            <a href="tel:+15555055050" className="text-[#2D176A] font-medium text-base sm:text-lg hover:text-teal-500 transition">+1 555 505 5050</a>
          </div>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-teal-500 text-lg">✉️</span>
            <a href="mailto:info@designmodo.com" className="text-[#2D176A] font-medium text-base sm:text-lg hover:text-teal-500 transition break-all sm:break-normal">info@designmodo.com</a>
          </div>
          <hr className="my-8 w-full sm:w-2/3" />
          <h3 className="text-xl sm:text-2xl font-semibold text-[#2D176A] mb-2">Find Us on Map</h3>
          <p className="text-gray-500 mb-4 text-sm sm:text-base">Via Salaria, 243, 00199 Rome</p>
          <div className="rounded-lg overflow-hidden w-full max-w-md">
            <MapContainer center={[41.936, 12.511]} zoom={13} style={{ height: "250px", width: "100%" }} className="z-0">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={[41.936, 12.511]}>
                <Popup>Via Salaria, 243, 00199 Rome</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D176A] mb-4">You Can Mail Us</h2>
          <p className="text-gray-500 mb-6 text-base sm:text-lg">We are always looking for a next great project.</p>
          <form className="bg-gray-50 p-6 sm:p-8 rounded-xl flex flex-col gap-4 sm:gap-6">
            <div>
              <label className="block text-[#2D176A] font-semibold mb-2 text-sm sm:text-base">E-mail</label>
              <input type="email" placeholder="Your email" className="w-full border border-gray-300 rounded-full px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2D176A]" required />
            </div>
            <div>
              <label className="block text-[#2D176A] font-semibold mb-2 text-sm sm:text-base">Message</label>
              <textarea placeholder="Drop us a line" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 sm:py-3 h-24 sm:h-28 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2D176A]" required />
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4">
              <div className="flex-1">
                <label className="block text-[#2D176A] font-semibold mb-2 text-sm sm:text-base">Name</label>
                <input type="text" placeholder="Your name" className="w-full border border-gray-300 rounded-full px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2D176A]" required />
              </div>
              <button type="submit" className="bg-[#002D5B] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-[#001A3A] transition duration-300 whitespace-nowrap">Send</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}
