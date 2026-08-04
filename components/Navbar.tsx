'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "./navbar.css";

interface NavItem {
  label: string;
  to: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Events", to: "events" },
  { label: "Gallery", to: "gallery" },
  { label: "Execom", to: "execom" },
  { label: "Achievements", to: "achievements" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Backdrop to catch outside clicks and prevent triggering other elements */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onMouseDown={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(false);
          }}
          aria-hidden="true"
        />
      )}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center" ref={menuRef}>
      <div
        className="w-[92%] mx-auto max-w-[1280px] px-6 flex items-center justify-between
          lg:w-full lg:mx-0
          lg:bg-transparent lg:border-none lg:backdrop-blur-0 lg:shadow-none
          bg-white/5 backdrop-blur-xl border border-white/10 rounded-full py-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
      >
        {/* Logo */}
        <NextLink
          href="/"
          className="cursor-pointer flex items-center"
          aria-label="Go to homepage"
        >
          <Image
            src="/images/logo.png"
            alt="IEDC ICET Logo"
            width={60}
            height={60}
            priority
            style={{ width: 'auto', height: 'auto' }}
          />
        </NextLink>

        {/* Desktop Navigation */}
        <nav className="glass-nav hidden lg:flex items-center gap-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-12 py-4 shadow-lg">
          {navItems.map((item) => 
            item.isExternal ? (
              <NextLink
                key={item.to}
                href={item.to}
                className="nav-link text-[14px] font-medium tracking-[0.02em] text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </NextLink>
            ) : (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth
                duration={450}
                offset={-100}
                spy
                activeClass="active"
                className="nav-link text-[14px] font-medium tracking-[0.02em] text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </ScrollLink>
            )
          )}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            className="hidden lg:inline-flex items-center justify-center rounded-full px-6 py-2.5 text-[14px] font-medium text-white shadow-lg transition hover:scale-105 bg-[var(--primary)] hover:bg-[var(--primary)]"
          >
            Register Now
          </button>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[70px] w-[92%] bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navItems.map((item) =>
                item.isExternal ? (
                  <NextLink
                    key={item.to}
                    href={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[16px] font-medium text-white hover:text-white/70"
                  >
                    {item.label}
                  </NextLink>
                ) : (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth
                    duration={450}
                    offset={-100}
                    spy
                    activeClass="text-white/70"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[16px] font-medium text-white hover:text-white/70 cursor-pointer"
                  >
                    {item.label}
                  </ScrollLink>
                )
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}