import {
  ArrowPathIcon,
  ArrowRightIcon,
  CubeTransparentIcon,
  LinkIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

import React from "react";

export default function NotFoundPage() {
  return (
    <div className="relative bg-[#0F172A] overflow-hidden  isolate min-h-screen">
      {/* Cosmic Background - identical to hero section */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {/* Grid Mesh */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

          {/* Floating Orbs */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-indigo-500 blur-xl opacity-40"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 h-full flex flex-col items-center justify-center">
        <div className="text-center">
          {/* Error Badge - matches hero section style */}
          <div className="inline-flex items-center gap-x-2 px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-100 text-sm mb-8 backdrop-blur-sm">
            <SparklesIcon className="h-4 w-4 text-indigo-300" />
            <span>Error 404</span>
          </div>

          {/* Glowing 404 Text */}
          <h1 className="text-8xl md:text-9xl font-bold tracking-tight text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-100">
              404
            </span>
          </h1>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Page Not Found{" "}
          </h2>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            The Page you're looking for has not found!!
            <span className="block mt-2 text-indigo-300/80">
              Let's navigate you back home.
            </span>
          </p>

          {/* CTA Button - matches hero section style */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="flex items-center gap-x-2 rounded-md bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Return Home <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-16 mx-auto md:w-2xl max-w-3xl">
            <div className="relative rounded-3xl bg-gradient-to-br from-indigo-900/40 to-indigo-900/20 border border-indigo-500/30 p-1 backdrop-blur-lg shadow-2xl shadow-indigo-500/10">
              {/* Browser Mockup */}
              <div className="rounded-2xl bg-gray-900/80 border border-gray-700/50 overflow-hidden">
                <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-400">
                    links.yourname.com
                  </div>
                </div>

                {/* Link Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                  {[
                    {
                      name: "Portfolio",
                      icon: <CubeTransparentIcon className="h-5 w-5" />,
                      color: "bg-indigo-500",
                    },
                    {
                      name: "GitHub",
                      icon: <LinkIcon className="h-5 w-5" />,
                      color: "bg-purple-500",
                    },
                    {
                      name: "Twitter",
                      icon: <LinkIcon className="h-5 w-5" />,
                      color: "bg-blue-500",
                    },
                    {
                      name: "LinkedIn",
                      icon: <LinkIcon className="h-5 w-5" />,
                      color: "bg-sky-500",
                    },
                    {
                      name: "YouTube",
                      icon: <LinkIcon className="h-5 w-5" />,
                      color: "bg-red-500",
                    },
                    {
                      name: "Contact",
                      icon: <LinkIcon className="h-5 w-5" />,
                      color: "bg-emerald-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-x-3 ${item.color}/10 hover:${item.color}/20 border border-gray-700/50 rounded-lg p-4 cursor-pointer transition-all duration-200`}
                    >
                      <div
                        className={`p-2 rounded-lg ${item.color} text-white`}
                      >
                        {item.icon}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
