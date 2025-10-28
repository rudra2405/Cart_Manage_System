import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        {/* About Us */}
        <div>
          <h2 className="font-bold text-lg mb-3">About us</h2>
          <div className="flex flex-col space-y-2">
            <Link to="/electronics" className="hover:underline">
              Electronics
            </Link>
            <Link to="/home-appliances" className="hover:underline">
              Home appliances
            </Link>
            <Link to="/furnitures" className="hover:underline">
              Furnitures
            </Link>
            <Link to="/offers" className="hover:underline">
              Offers
            </Link>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="font-bold text-lg mb-3">Contact us</h2>
          <div className="flex flex-col space-y-2">
            <Link to="/electronics" className="hover:underline">
              Electronics
            </Link>
            <Link to="/home-appliances" className="hover:underline">
              Home appliances
            </Link>
            <Link to="/furnitures" className="hover:underline">
              Furnitures
            </Link>
            <Link to="/offers" className="hover:underline">
              Offers
            </Link>
          </div>
        </div>

        {/* Our Brand */}
        <div>
          <h2 className="font-bold text-lg mb-3">Our brand</h2>
          <div className="flex flex-col space-y-2">
            <Link to="/electronics" className="hover:underline">
              Electronics
            </Link>
            <Link to="/home-appliances" className="hover:underline">
              Home appliances
            </Link>
            <Link to="/furnitures" className="hover:underline">
              Furnitures
            </Link>
            <Link to="/offers" className="hover:underline">
              Offers
            </Link>
          </div>
        </div>

        {/* Office Address */}
        <div>
          <h2 className="font-bold text-lg mb-3">Our Office Address</h2>
          <p>
            7QVR+3RX, Jagnath Plot,
            <br /> Rajkot, Gujarat 360001
          </p>
          <p className="mt-2">
            <span className="font-semibold">Hours:</span> Open – Closes 8PM
          </p>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm text-gray-300 mt-6 border-t border-gray-600 pt-4">
        © 2012-2025 All rights reserved company
      </div>
    </footer>
  );
}
