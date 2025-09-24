import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Phone,
  Shield,
  AlertTriangle,
  Info,
  Map,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const SafetyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Tourist Safety</h1>
          <p className="text-gray-600 mb-8">
            To enhance your travel experience, here are essential safety
            guidelines, emergency contacts, and real-time alerts while exploring
            Albay.
          </p>

          {/* Hero Image */}
          <div className="relative h-80 rounded-lg overflow-hidden mb-10">
            <img
              src="https://albay.gov.ph/wp-content/uploads/2020/02/joenabells_20200226_120826_0.jpg"
              alt="Safety Travel"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-white text-2xl font-bold">
                Travel Safe in Albay
              </h2>
              <p className="text-white/90">
                Stay informed and prepared during your journey
              </p>
            </div>
          </div>

          {/* Quick Safety Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Phone className="h-10 w-10 text-green-600 mb-2" />
                <h3 className="font-bold mb-1">Emergency Hotline</h3>
                <p className="text-sm text-gray-600">Dial 911 or local police</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-blue-600 mb-2" />
                <h3 className="font-bold mb-1">Safety Guidelines</h3>
                <p className="text-sm text-gray-600">
                  Follow official advisories
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <AlertTriangle className="h-10 w-10 text-red-600 mb-2" />
                <h3 className="font-bold mb-1">Real-Time Alerts</h3>
                <p className="text-sm text-gray-600">
                  Weather & volcanic updates
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-8 mb-10">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Phone className="h-6 w-6 mr-2 text-gray-700" />
                Emergency Contacts
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>National Emergency Hotline: <strong>911</strong></li>
                <li>Albay Provincial Police: <strong>(052) 481-5001</strong></li>
                <li>Legazpi City Disaster Office: <strong>(052) 820-6311</strong></li>
                <li>Bicol Regional Training Hospital: <strong>(052) 742-5161</strong></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-gray-700" />
                Safety Guidelines
              </h2>
              <p className="text-gray-600 mb-4">
                Always prioritize your safety when exploring. Here are some
                helpful tips:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Stay updated on Mayon Volcano advisories.</li>
                <li>Check weather updates before hiking or island trips.</li>
                <li>Carry a basic first-aid kit and personal medicines.</li>
                <li>Respect local regulations and safety zones.</li>
                <li>Keep emergency numbers saved on your phone.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2 text-gray-700" />
                Real-Time Alerts
              </h2>
              <p className="text-gray-600 mb-4">
                Be aware of natural events to ensure a safe trip:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Weather bulletins from PAGASA (Philippine weather agency).</li>
                <li>Volcanic activity updates from PHIVOLCS.</li>
                <li>Typhoon warnings during rainy season (June–November).</li>
                <li>Stay indoors or in safe zones during heavy rains or alerts.</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-red-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Safe, Travel Smart</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Prepared travelers are safe travelers. Always check official
              advisories and keep emergency contacts handy during your trip to
              Albay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>View Live Alerts</Button>
              <Button variant="outline">Download Safety Guide</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SafetyPage;
