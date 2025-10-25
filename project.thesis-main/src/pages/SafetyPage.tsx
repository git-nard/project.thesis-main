import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Phone,
  Shield,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

import LiveAlert from "../components/liveAlert";

const SafetyPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-1 w-full px-4 md:px-12 lg:px-24 py-10">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Tourist Safety
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Enhance your travel experience with essential safety guidelines,
            emergency contacts, and real-time alerts while exploring Albay.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[450px] rounded-2xl overflow-hidden mb-14 shadow-lg">
          <img
            src="https://albay.gov.ph/wp-content/uploads/2020/02/joenabells_20200226_120826_0.jpg"
            alt="Safety Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <h2 className="text-white text-3xl font-bold mb-2">
              Travel Safe in Albay
            </h2>
            <p className="text-white/90 text-lg">
              Stay informed and prepared during your journey
            </p>
          </div>
        </div>

        {/* Quick Safety Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-md hover:shadow-lg transition">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <Phone className="h-12 w-12 text-green-600 mb-3" />
              <h3 className="font-bold text-lg mb-1">Emergency Hotline</h3>
              <p className="text-sm text-gray-600">Dial 911 or local police</p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg mb-1">Safety Guidelines</h3>
              <p className="text-sm text-gray-600">
                Follow official advisories
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <AlertTriangle className="h-12 w-12 text-red-600 mb-3" />
              <h3 className="font-bold text-lg mb-1">Real-Time Alerts</h3>
              <p className="text-sm text-gray-600">
                Weather & volcanic updates
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-14 mb-20">
          {/* Emergency Contacts */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <Phone className="h-7 w-7 mr-3 text-gray-700" />
              Emergency Contacts
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
              <li>
                National Emergency Hotline: <strong>911</strong>
              </li>
              <li>
                Albay Provincial Police: <strong>(052) 481-5001</strong>
              </li>
              <li>
                Legazpi City Disaster Office: <strong>(052) 820-6311</strong>
              </li>
              <li>
                Bicol Regional Training Hospital:{" "}
                <strong>(052) 742-5161</strong>
              </li>
            </ul>
          </section>

          {/* Safety Guidelines */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <Shield className="h-7 w-7 mr-3 text-gray-700" />
              Safety Guidelines
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Always prioritize your safety when exploring. Here are some
              helpful tips:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
              <li>Stay updated on Mayon Volcano advisories.</li>
              <li>Check weather updates before hiking or island trips.</li>
              <li>Carry a basic first-aid kit and personal medicines.</li>
              <li>Respect local regulations and safety zones.</li>
              <li>Keep emergency numbers saved on your phone.</li>
            </ul>
          </section>

          {/* Real-Time Alerts */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <AlertTriangle className="h-7 w-7 mr-3 text-gray-700" />
              Real-Time Alerts
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Be aware of natural events to ensure a safe trip:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
              <li>Weather bulletins from PAGASA (Philippine weather agency).</li>
              <li>Volcanic activity updates from PHIVOLCS.</li>
              <li>Typhoon warnings during rainy season (June–November).</li>
              <li>
                Stay indoors or in safe zones during heavy rains or alerts.
              </li>
            </ul>
          </section>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-gradient-to-r from-red-100 via-orange-50 to-yellow-50 p-10 rounded-2xl text-center shadow-md">
          <h2 className="text-3xl font-bold mb-4">Stay Safe, Travel Smart</h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto text-lg">
            Prepared travelers are safe travelers. Always check official
            advisories and keep emergency contacts handy during your trip to
            Albay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* View Live Alerts Button with Dialog */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="lg">View Live Alerts</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Real-Time Alerts for Albay</AlertDialogTitle>
                  <AlertDialogDescription>
                    Stay informed with the latest weather and volcanic updates.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <LiveAlert />
                <div className="mt-4 flex justify-end">
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </div>
              </AlertDialogContent>
            </AlertDialog>

            <Button size="lg" variant="outline">
              Download Safety Guide
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SafetyPage;