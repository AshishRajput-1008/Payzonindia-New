// app/contexts/NavbarColorContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavbarColorContextType {
  navbarGradient: string;
  setNavbarGradient: (gradient: string) => void;
  paymentGradient: string;
  setPaymentGradient: (gradient: string) => void;
  logoGradient: string;
  setLogoGradient: (gradient: string) => void;
}

const NavbarColorContext = createContext<NavbarColorContextType | undefined>(
  undefined
);

export const NavbarColorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Default: Blue gradients
  const [navbarGradient, setNavbarGradient] = useState(
    "from-blue-700 via-blue-700 to-blue-600"
  );
  const [paymentGradient, setPaymentGradient] = useState(
    "from-blue-600 to-blue-700"
  );
  const [logoGradient, setLogoGradient] = useState(
    "from-blue-900 via-blue-700 to-blue-600"
  );

  return (
    <NavbarColorContext.Provider
      value={{
        navbarGradient,
        setNavbarGradient,
        paymentGradient,
        setPaymentGradient,
        logoGradient,
        setLogoGradient,
      }}
    >
      {children}
    </NavbarColorContext.Provider>
  );
};

export const useNavbarColor = () => {
  const context = useContext(NavbarColorContext);
  if (context === undefined) {
    throw new Error("useNavbarColor must be used within a NavbarColorProvider");
  }
  return context;
};

// Sector gradient configurations
export const sectorGradients = {
  "it-services": {
    navbar: "from-blue-700 via-blue-700 to-blue-600",
    payment: "from-blue-600 to-blue-700",
    logo: "from-blue-900 via-blue-700 to-blue-600",
  },
  "cyber-security": {
    navbar: "from-red-700 via-red-700 to-red-600",
    payment: "from-red-600 to-red-700",
    logo: "from-red-900 via-red-700 to-red-600",
  },
  "skills-development": {
    navbar: "from-purple-700 via-purple-700 to-purple-600",
    payment: "from-purple-600 to-purple-700",
    logo: "from-purple-900 via-purple-700 to-purple-600",
  },
  "organic-farming": {
    navbar: "from-green-700 via-green-700 to-green-600",
    payment: "from-green-600 to-green-700",
    logo: "from-green-900 via-green-700 to-green-600",
  },
  "toys-industries": {
    navbar: "from-pink-600 via-pink-600 to-purple-600",
    payment: "from-pink-500 to-purple-500",
    logo: "from-pink-700 via-pink-600 to-purple-600",
  },
  "artificial-jewellery": {
    navbar: "from-amber-700 via-amber-700 to-yellow-700",
    payment: "from-amber-600 to-yellow-600",
    logo: "from-amber-900 via-amber-700 to-yellow-700",
  },
  "spices-vegetables": {
    navbar: "from-orange-700 via-orange-700 to-red-700",
    payment: "from-orange-600 to-red-600",
    logo: "from-orange-900 via-orange-700 to-red-700",
  },
  "divine-industries": {
    navbar: "from-orange-700 via-orange-700 to-amber-700",
    payment: "from-orange-600 to-amber-600",
    logo: "from-orange-900 via-orange-700 to-amber-700",
  },
  clothing: {
    navbar: "from-indigo-700 via-indigo-700 to-purple-700",
    payment: "from-indigo-600 to-purple-600",
    logo: "from-indigo-900 via-indigo-700 to-purple-700",
  },
  electronics: {
    navbar: "from-cyan-700 via-cyan-700 to-blue-700",
    payment: "from-cyan-600 to-blue-600",
    logo: "from-cyan-900 via-cyan-700 to-blue-700",
  },


FMCG: {
  navbar: "from-emerald-600 via-green-600 to-teal-600",
  payment: "from-emerald-500 to-teal-500",
  logo: "from-emerald-700 via-green-600 to-teal-600",
},

  // Add this payment page configuration
  payment: {
    navbar: "from-cyan-600 via-emerald-600 to-blue-600",
    payment: "from-cyan-500 to-emerald-500",
    logo: "from-cyan-400 to-emerald-400",
  },
  // Add this investor page configuration
  "investor ": {
    navbar: "from-purple-500 via-emerald-500 to-blue-400",
    payment: "from-purple-600 to-blue-600",
    logo: "from-purple-400 to-blue-400",
  },

  "mainITSector": {
    navbar: "from-blue-600 to-cyan-600",
    payment: "from-blue-500 to-cyan-500",
    logo: "from-blue-600 to-cyan-600",
  },
  ourTeams: {
    navbar: "from-pink-600 to-purple-600",
    payment: "from-pink-600 to-purple-600",
    logo: "from-pink-600 to-purple-600",
  },
// VENTURES - Modern Tech & Business Aesthetics

"Digital-marketing": {
  navbar: "from-fuchsia-600 via-pink-600 to-orange-600",
  payment: "from-fuchsia-500 to-orange-500",
  logo: "from-fuchsia-700 via-pink-600 to-orange-600",
},

"E-commerce": {
  navbar: "from-emerald-600 via-teal-600 to-cyan-600",
  payment: "from-emerald-500 to-cyan-500",
  logo: "from-emerald-700 via-teal-600 to-cyan-600",
},

Fintech: {
  navbar: "from-slate-700 via-blue-700 to-indigo-700",
  payment: "from-slate-600 to-indigo-600",
  logo: "from-slate-800 via-blue-700 to-indigo-700",
},

// ASSOCIATION - Professional & Trust-Building Colors

Media: {
  navbar: "from-red-700 via-orange-600 to-amber-600",
  payment: "from-red-600 to-amber-600",
  logo: "from-red-800 via-orange-700 to-amber-700",
},

"Social-Welfare": {
  navbar: "from-green-600 via-lime-600 to-orange-600",
  payment: "from-green-500 to-orange-500",
  logo: "from-green-700 via-lime-600 to-orange-600",
},


"Finance-Audits": {
  navbar: "from-blue-900 via-blue-800 to-indigo-900",
  payment: "from-blue-800 to-indigo-800",
  logo: "from-blue-950 via-blue-900 to-indigo-900",
},
  // from-cyan-500/10 to-emerald-500/10

  "default": {
    navbar: "from-blue-700 via-blue-700 to-blue-600",
    payment: "from-blue-600 to-blue-700",
    logo: "from-blue-900 via-blue-700 to-blue-600",
  },
};
