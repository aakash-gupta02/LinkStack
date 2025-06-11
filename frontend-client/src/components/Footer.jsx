import { XMarkIcon, CodeBracketIcon, ChatBubbleLeftRightIcon, BuildingOffice2Icon, ArrowUpIcon } from "@heroicons/react/24/solid";

const navigation = [
  {
    name: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "API", href: "/api" },
    ],
  },
  {
    name: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    name: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="relative bg-[#0F172A] pt-16 pb-8 overflow-hidden">
      {/* Cosmic Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
      {/* Subtle Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-indigo-500/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {navigation.map((section) => (
            <div key={section.name}>
              <h3 className="text-base font-semibold text-indigo-100">
                {section.name}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-indigo-200 hover:text-indigo-300 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-base font-semibold text-indigo-100">
              Connect
            </h3>
            <div className="mt-4 flex space-x-4">
              {[
                { icon: XMarkIcon, href: "https://x.com/linkstack" },
                { icon: CodeBracketIcon, href: "https://github.com/linkstack" },
                { icon: ChatBubbleLeftRightIcon, href: "https://discord.gg/linkstack" },
                { icon: BuildingOffice2Icon, href: "https://linkedin.com/company/linkstack" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-indigo-500/30 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-indigo-200">
            © 2025 LinkStack. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#top"
              className="flex items-center gap-x-1 text-sm font-medium text-indigo-200 hover:text-indigo-300 transition-colors duration-200"
            >
              Back to top
              <ArrowUpIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}