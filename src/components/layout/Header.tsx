import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Settings, Moon, Sun, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const productsMenu = [
  { name: "Healthcare Leads", href: "/healthcare-leads", description: "Access verified healthcare professionals" },
  { name: "B2B Leads", href: "/b2b-leads", description: "High-quality B2B contact data" },
  { name: "ICP Tech", href: "/icp-tech", description: "Target ideal customer profiles" },
  { name: "White Label", href: "/whitelabel", description: "Customize solutions with your brand" },
];

const dataMenu = [
  { name: "Healthcare Data", href: "/healthcare-data", description: "Comprehensive healthcare datasets" },
  { name: "Tech Install Base", href: "/tech-install-base", description: "Technology usage intelligence" },
  { name: "B2B Custom Data", href: "/b2b-custom-data", description: "Tailored B2B data solutions" },
  { name: "Industry Data", href: "/industry-data", description: "Sector-specific business data" },
  { name: "Professionals Data", href: "/professionals-data", description: "Verified professional contacts" },
  { name: "Data Enrichment", href: "/data-enrichment", description: "Enhance your existing data" },
];

const solutionsMenu = [
  { name: "Solutions Overview", href: "/solutions", description: "Explore all our solutions" },
];

const resourcesMenu = [
  { name: "Blog", href: "/blog", description: "Insights and industry trends" },
  { name: "Resources", href: "/resources", description: "Guides and whitepapers" },
];

const companyMenu = [
  { name: "About Us", href: "/about", description: "Learn about our mission" },
  { name: "Contact", href: "/contact", description: "Get in touch with us" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f1419] border-b border-border/20">
      <nav className="container-custom flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-primary w-8 h-8 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-white">
              Sales<span className="text-primary">Prospex.io</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {/* Home Dropdown (Products) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white/80 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-white">
                Home
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <div className="grid gap-3">
                    {productsMenu.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Data Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white/80 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-white">
                Data
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <div className="grid gap-3">
                    {dataMenu.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white/80 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-white">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <div className="grid gap-3">
                    {resourcesMenu.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Company Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white/80 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-white">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <div className="grid gap-3">
                    {companyMenu.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            className="gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6"
          >
            Contact Us
          </Button>
          
          <div className="h-5 w-px bg-border/40"></div>
          
          <Button variant="ghost" size="sm" className="gap-2 text-white/70 hover:text-white hover:bg-white/5">
            <User className="h-4 w-4" />
            Log in
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-white/70 hover:text-white hover:bg-white/5">
                <Settings className="h-[18px] w-[18px]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Language</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="h-9 w-9 text-white/70 hover:text-white hover:bg-white/5"
          >
            {isDarkMode ? (
              <Sun className="h-[18px] w-[18px]" />
            ) : (
              <Moon className="h-[18px] w-[18px]" />
            )}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0f1419] border-b border-border/20"
          >
            <div className="container-custom py-4 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-white/50 px-3">PRODUCTS</p>
                {productsMenu.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-semibold text-white/50 px-3">DATA</p>
                {dataMenu.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-semibold text-white/50 px-3">COMPANY</p>
                {companyMenu.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-border/20 pt-4 space-y-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Contact Us
                </Button>
                <Button variant="ghost" size="sm" className="w-full gap-2 text-white/70 hover:text-white">
                  <User className="h-4 w-4" />
                  Log in
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
