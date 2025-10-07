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
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl font-bold text-[#2D176A] mb-4">Get in Touch</h2>
          <p className="text-gray-500 mb-6 max-w-md">
            We appreciate each customer and we are proud that 60% of clients come back to work with us again.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-teal-500 text-lg">📞</span>
            <a href="tel:+15555055050" className="text-[#2D176A] font-medium text-lg">+1 555 505 5050</a>
          </div>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-teal-500 text-lg">✉️</span>
            <a href="mailto:info@designmodo.com" className="text-[#2D176A] font-medium text-lg">info@designmodo.com</a>
          </div>
          <hr className="my-8 w-2/3" />
          <h3 className="text-2xl font-semibold text-[#2D176A] mb-2">Find Us on Map</h3>
          <p className="text-gray-500 mb-2">Via Salaria, 243, 00199 Rome</p>
          <div className="rounded-lg overflow-hidden w-full max-w-md">
            <MapContainer center={[41.936, 12.511]} zoom={13} style={{ height: "200px", width: "100%" }}>
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
          <h2 className="text-4xl font-bold text-[#2D176A] mb-4">You Can Mail Us</h2>
          <p className="text-gray-500 mb-6 max-w-md">We are always looking for a next great project.</p>
          <form className="bg-gray-50 p-8 rounded-xl flex flex-col gap-6">
            <div>
              <label className="block text-[#2D176A] font-semibold mb-1">E-mail</label>
              <input type="email" placeholder="Your email" className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2D176A]" />
            </div>
            <div>
              <label className="block text-[#2D176A] font-semibold mb-1">Message</label>
              <textarea placeholder="Drop us a line" className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#2D176A]" />
            </div>
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <label className="block text-[#2D176A] font-semibold mb-1">Name</label>
                <input type="text" placeholder="Your name" className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2D176A]" />
              </div>
              <button type="submit" className="bg-[#002D5B] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#001A3A] transition whitespace-nowrap">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
