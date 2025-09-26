import {
  ArrowPathIcon,
  ArrowRightIcon,
  CubeTransparentIcon,
  LinkIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import Background from "./laningPageCompo/Background";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="relative bg-[#0F172A] overflow-hidden isolate">
      {/* **Cosmic Background** */}
      <Background />

      {/* **Main Content** */}
      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* **Badge** */}
          <div className="inline-flex items-center gap-x-2 px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-100 text-sm mb-8 backdrop-blur-sm">
            <SparklesIcon className="h-4 w-4 text-indigo-300" />
            <span>Introducing LinkStack</span>
          </div>

          {/* **Headline** */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            <span className="inline-block">
              Organize. Share.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-100">
                Dominate.
              </span>
            </span>
          </h1>

          {/* **Subtitle** */}
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            The most powerful link management platform for creators, businesses,
            and developers.
            <span className="block mt-2 text-indigo-300/80">
              No fluff. Just speed.
            </span>
          </p>

          {/* **CTA Buttons** */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              onClick={() => {
                navigate("/link/dashboard");
              }}
              className="flex items-center gap-x-2 rounded-md bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex items-center gap-x-2 rounded-md px-6 py-3.5 text-sm font-semibold text-white hover:text-indigo-300"
            >
              <ArrowPathIcon className="h-4 w-4" />
              Watch Demo
            </a>
          </div>

          {/* **3D Floating Preview** */}
          <div className="mt-16 mx-auto max-w-3xl">
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
                    linkStack/yourname.com
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
