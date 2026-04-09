"use client";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  image: string;
  title: string;
  keyPoints: string[];
  url: string;
  icon?: React.ReactNode;
  gradient?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  keyPoints,
  url,
  icon,
  gradient = "from-blue-900 to-purple-600",
}) => {
  return (
    <motion.div className="relative p-4 group max-w-sm mx-auto">
      {/* Featured Image Section with Gradient Border */}
      <div
        className={`relative w-40 h-40 mx-auto z-10 rounded-full p-1 bg-gradient-to-r ${gradient} group-hover:scale-105 transition-all duration-500`}
      >
        <Link href={url} passHref>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </Link>
      </div>
      
      {/* Content Section */}
      <div
        className={`p-6 text-center bg-gradient-to-r ${gradient} min-h-[400px] lg:min-h-[450px] flex items-end justify-center -mt-[140px] pt-32 lg:pt-40`}
        style={{
          clipPath: "polygon(0 30%, 100% 0, 100% 100%, 25% 100%, 0 100%)",
        }}
      >
        <div className="w-full pb-4">
          <h3 className="text-xl font-bold text-white mb-4">
            <Link href={url} className="hover:text-blue-200 transition-colors">
              {title}
            </Link>
          </h3>
          
          {/* Key Points List */}
          <ul className="text-white text-sm mb-4 space-y-2 text-left">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>
          
          <Link href={url} passHref>
            <button className="inline-flex items-center bg-[#193cb8] px-4 py-2  backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 rounded-md">
              Read more
              <Plus className="ml-2 w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;