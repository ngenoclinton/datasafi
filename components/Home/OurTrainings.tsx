"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  ArrowUpRight,
  Database,
  Shield,
  BarChart,
  Zap,
  Heart,
  MessageSquare,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

export default function  Trainings() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 py-16">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-6xl p-6 md:p-10">   
        {/* Trainings Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-[#0a2540]">Trainings</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {trainingCategories.map((category, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all"
                whileHover={{ y: -5, backgroundColor: "#f9fafb" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {category.icon}
                  <span className="text-sm font-medium text-gray-800">
                    {category.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Training categories data
const trainingCategories = [
  {
    name: "Business Intelligence",
    icon: <BarChart className="h-4 w-4 text-blue-500" />,
  },
  {
    name: "Information Security",
    icon: <Shield className="h-4 w-4 text-blue-500" />,
  },
  {
    name: "Financial Management",
    icon: <Globe className="h-4 w-4 text-blue-500" />,
  },
  {
    name: "Energy Sector",
    icon: <Zap className="h-4 w-4 text-blue-500" />,
  },
  {
    name: "Occupational Safety & Health Management",
    icon: <Heart className="h-4 w-4 text-red-500" />,
  },
  {
    name: "Occupational First Aid",
    icon: <Heart className="h-4 w-4 text-red-500" />,
  },
  {
    name: "Fire Safety Management",
    icon: <Zap className="h-4 w-4 text-orange-500" />,
  },
  {
    name: "Disaster Preparedness",
    icon: <Shield className="h-4 w-4 text-orange-500" />,
  },
  {
    name: "Gender Mainstreaming",
    icon: <Users className="h-4 w-4 text-purple-500" />,
  },
  {
    name: "Strategic Communication",
    icon: <MessageSquare className="h-4 w-4 text-blue-500" />,
  },
  {
    name: "Relationship Management",
    icon: <Users className="h-4 w-4 text-blue-500" />,
  },
  {
    name: "Customer Experience",
    icon: <Users className="h-4 w-4 text-green-500" />,
  },
  {
    name: "Environmental Impact Assessment",
    icon: <Globe className="h-4 w-4 text-green-500" />,
  },
];
