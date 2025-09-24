import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FooterProps {
  logoSrc?: string;
  companyName?: string;
  description?: string;
  contactInfo?: {
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
  };
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  quickLinks?: Array<{
    label: string;
    href: string;
  }>;
  exploreLinks?: Array<{
    label: string;
    href: string;
  }>;
}

const Footer = ({
  logoSrc = "/vite.svg",
  companyName = "Albay Tourism",
  description = "Discover the beauty of Albay, Philippines - home to the majestic Mayon Volcano, stunning landscapes, rich culture, and unforgettable experiences.",
  contactInfo = {
    address: "Provincial Capitol, Legazpi City, Albay, Philippines",
    phone: "+63 (052) 123 4567",
    email: "info@albaytourism.ph",
    website: "www.albaytourism.ph",
  },
  socialLinks = {
    facebook: "https://facebook.com/albaytourism",
    twitter: "https://twitter.com/albaytourism",
    instagram: "https://instagram.com/albaytourism",
  },
  quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  exploreLinks = [
    { label: "Tourist Spots", href: "/spots" },
    { label: "Hotels & Resorts", href: "/hotels" },
    { label: "Restaurants", href: "/restaurants" },
    { label: "Interactive Map", href: "/map" },
    { label: "Events & Festivals", href: "/events" },
  ],
}: FooterProps) => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <img src={logoSrc} alt={companyName} className="mr-3 h-8 w-8" />
              <h2 className="text-xl font-bold">{companyName}</h2>
            </div>
            <p className="text-sm text-gray-400">{description}</p>

            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-700 p-2 hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-700 p-2 hover:bg-blue-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-700 p-2 hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={`quick-${index}`}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Explore Albay</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link, index) => (
                <li key={`explore-${index}`}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.address && (
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-400">
                    {contactInfo.address}
                  </span>
                </li>
              )}
              {contactInfo.phone && (
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-gray-400" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              )}
              {contactInfo.email && (
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-gray-400" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              )}
              {contactInfo.website && (
                <li className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-gray-400" />
                  <a
                    href={`https://${contactInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {contactInfo.website}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="max-w-md">
              <h3 className="text-lg font-semibold">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-gray-400">
                Stay updated with the latest attractions and events in Albay
              </p>
            </div>
            <div className="flex w-full max-w-md flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Developed with ❤️ for the promotion of tourism in Albay, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
