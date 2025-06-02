"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  User,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Bookmark,
  Share2,
  ThumbsUp,
  ChevronRight,
  ChevronLeft,
  Clock,
  Award,
  Gamepad2,
  Radio,
} from "lucide-react";

export default function MultiMediaDashboard() {
  const [activeMediaTab, setActiveMediaTab] = useState("Videos");
  const [activeInteractiveTab, setActiveInteractiveTab] = useState("All");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);

  // Placeholder data (unchanged)
  const videos = [
    {
      id: 1,
      title: "Introduction to AI",
      duration: "15:30",
      thumbnail: "/placeholder.svg?height=180&width=320",
      category: "Technology",
    },
    {
      id: 2,
      title: "The Future of Renewable Energy",
      duration: "22:45",
      thumbnail: "/placeholder.svg?height=180&width=320",
      category: "Science",
    },
    {
      id: 3,
      title: "Mastering React Hooks",
      duration: "18:20",
      thumbnail: "/placeholder.svg?height=180&width=320",
      category: "Programming",
    },
    {
      id: 4,
      title: "Exploring Mars: Latest Discoveries",
      duration: "25:10",
      thumbnail: "/placeholder.svg?height=180&width=320",
      category: "Space",
    },
  ];

  const podcasts = [
    {
      id: 1,
      title: "Tech Talk Weekly",
      duration: "45:00",
      thumbnail: "/placeholder.svg?height=180&width=320",
      category: "Technology",
    },
    {
      id: 2,
      title: "Science Hour",
      duration: "60:00",
      thumbnail: "/placeholder.svg?height=180&width=320",
      category: "Science",
    },
    {
      id: 3,
      title: "Business Insights",
      duration: "30:00",
      thumbnail: "/placeholder.svg?height=180&width=320",
      category: "Business",
    },
    {
      id: 4,
      title: "Health and Wellness",
      duration: "40:00",
      thumbnail: "/placeholder.svg?height=180&width=320",
      category: "Health",
    },
  ];

  const interactiveContent = [
    {
      id: 1,
      title: "Science Trivia Quiz",
      type: "Quiz",
      category: "Science",
      thumbnail: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 2,
      title: "Personality Test",
      type: "Quiz",
      category: "Psychology",
      thumbnail: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 3,
      title: "Memory Challenge Game",
      type: "Game",
      category: "Cognitive",
      thumbnail: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 4,
      title: "Coding Puzzle",
      type: "Game",
      category: "Programming",
      thumbnail: "/placeholder.svg?height=150&width=250",
    },
  ];

  const notifications = [
    { id: 1, title: "New episode of Tech Talk Weekly", type: "podcast" },
    { id: 2, title: "Your daily quiz is ready!", type: "quiz" },
    { id: 3, title: "Trending: The Future of AI", type: "video" },
  ];

  const handlePlayMedia = (media) => {
    setCurrentMedia(media);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            MultiMediaExperience
          </h1>
          <nav className="hidden md:flex space-x-6">
            {["Home", "Discover", "Library"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                aria-label="Search content"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-300" />
            </div>
            <div className="relative">
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 relative"
                onClick={() => setShowNotifications(!showNotifications)}
                aria-label="Toggle notifications"
              >
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notifications.length}
                </span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-20 transform transition-all duration-300 ease-in-out">
                  <div className="py-3">
                    {notifications.map((notification) => (
                      <a
                        key={notification.id}
                        href="#"
                        className="flex items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        {notification.type === "podcast" && (
                          <Radio className="h-5 w-5 mr-3 text-blue-500" />
                        )}
                        {notification.type === "quiz" && (
                          <Gamepad2 className="h-5 w-5 mr-3 text-green-500" />
                        )}
                        {notification.type === "video" && (
                          <Play className="h-5 w-5 mr-3 text-red-500" />
                        )}
                        <p className="text-gray-700 dark:text-gray-200 text-sm">
                          <span className="font-semibold">
                            {notification.title}
                          </span>
                        </p>
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block bg-blue-600 text-white text-center font-semibold py-2 rounded-b-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    See all notifications
                  </a>
                </div>
              )}
            </div>
            <button
              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="User profile"
            >
              <User className="h-6 w-6 mr-2" />
              John Doe
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Media Dashboard */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Media Dashboard
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex">
                {["Videos", "Podcasts", "Interactive"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 text-sm font-medium ${
                      activeMediaTab === tab
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    } transition-colors duration-200`}
                    onClick={() => setActiveMediaTab(tab)}
                    aria-current={activeMediaTab === tab ? "page" : undefined}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Recommended for You
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {(activeMediaTab === "Videos"
                  ? videos
                  : activeMediaTab === "Podcasts"
                  ? podcasts
                  : interactiveContent
                ).map((item) => (
                  <article
                    key={item.id}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200"
                  >
                    <div className="relative">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <button
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                        onClick={() => handlePlayMedia(item)}
                        aria-label={`Play ${item.title}`}
                      >
                        {activeMediaTab !== "Interactive" && (
                          <Play className="h-12 w-12 text-white" />
                        )}
                        {activeMediaTab === "Interactive" && (
                          <Gamepad2 className="h-12 w-12 text-white" />
                        )}
                      </button>
                      {item.duration && (
                        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                          {item.duration}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-base text-gray-900 dark:text-gray-100 mb-2 truncate">
                        {item.title}
                      </h4>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {item.category}
                        </span>
                        <div className="flex space-x-3">
                          <button
                            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                            aria-label="Like content"
                          >
                            <ThumbsUp className="h-5 w-5" />
                          </button>
                          <button
                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                            aria-label="Bookmark content"
                          >
                            <Bookmark className="h-5 w-5" />
                          </button>
                          <button
                            className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                            aria-label="Share content"
                          >
                            <Share2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current Media Player */}
        {currentMedia && (
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {currentMedia.title}
              </h3>
              <button
                className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setCurrentMedia(null)}
                aria-label="Close media player"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <div className="bg-gray-800 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  src={currentMedia.thumbnail || "/placeholder.svg"}
                  alt={currentMedia.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-200"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8" />
                  ) : (
                    <Play className="h-8 w-8" />
                  )}
                </button>
                <button
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  aria-label="Skip back"
                >
                  <SkipBack className="h-6 w-6" />
                </button>
                <button
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  aria-label="Skip forward"
                >
                  <SkipForward className="h-6 w-6" />
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Volume2 className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                <div className="w-32 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                  <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                <div className="w-1/2 h-full bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </section>
        )}

        {/* Personalized Recommendations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            For You
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Based on Your Interests
              </h3>
              <div className="flex space-x-2">
                <button
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
                  aria-label="Previous recommendations"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
                  aria-label="Next recommendations"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...videos, ...podcasts, ...interactiveContent]
                .slice(0, 4)
                .map((item) => (
                  <article
                    key={item.id}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200"
                  >
                    <div className="relative">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <button
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                        aria-label={`Play ${item.title}`}
                      >
                        {item.type === "Quiz" || item.type === "Game" ? (
                          <Gamepad2 className="h-12 w-12 text-white" />
                        ) : (
                          <Play className="h-12 w-12 text-white" />
                        )}
                      </button>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-base text-gray-900 dark:text-gray-100 mb-2 truncate">
                        {item.title}
                      </h4>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {item.category || item.type}
                        </span>
                        <button
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 text-sm font-medium transition-colors duration-200"
                          aria-label={`Play ${item.title}`}
                        >
                          {item.type === "Quiz" || item.type === "Game"
                            ? "Play"
                            : "Watch"}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* User Profile Integration */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Your Activity
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    John Doe
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Content Explorer
                  </p>
                </div>
              </div>
              <button
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium transition-colors duration-200"
                aria-label="View full profile"
              >
                View Full Profile
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-base text-gray-900 dark:text-gray-100 mb-2">
                  Watch History
                </h4>
                <ul className="space-y-2">
                  {videos.slice(0, 3).map((video) => (
                    <li
                      key={video.id}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-200"
                    >
                      <Clock className="h-4 w-4 mr-2 text-gray-400 dark:text-gray-300" />
                      <span className="truncate">{video.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-base text-gray-900 dark:text-gray-100 mb-2">
                  Saved for Later
                </h4>
                <ul className="space-y-2">
                  {podcasts.slice(0, 3).map((podcast) => (
                    <li
                      key={podcast.id}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-200"
                    >
                      <Bookmark className="h-4 w-4 mr-2 text-gray-400 dark:text-gray-300" />
                      <span className="truncate">{podcast.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-base text-gray-900 dark:text-gray-100 mb-2">
                  Achievements
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700 dark:text-gray-200">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    <span>Quiz Master</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-700 dark:text-gray-200">
                    <Award className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Binge Watcher</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-700 dark:text-gray-200">
                    <Award className="h-4 w-4 mr-2 text-green-500" />
                    <span>Podcast Enthusiast</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-base text-gray-900 dark:text-gray-100 mb-2">
                Continue Watching
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {videos.slice(0, 4).map((video) => (
                  <div key={video.id} className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                      aria-label={`Continue watching ${video.title}`}
                    >
                      <Play className="h-8 w-8 text-white" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-600">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold text-gray-100 mb-4">
                MultiMediaExperience
              </h5>
              <p className="text-sm text-gray-400">
                Discover, learn, and engage with our diverse content library.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-100 mb-4">
                Quick Links
              </h5>
              <ul className="space-y-3">
                {["Home", "Discover", "Library", "Profile"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-100 mb-4">
                Support
              </h5>
              <ul className="space-y-3">
                {[
                  "FAQ",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-100 mb-4">
                Connect With Us
              </h5>
              <div className="flex space-x-4">
                {["facebook", "instagram", "twitter"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={`Follow us on ${platform}`}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {platform === "facebook" && (
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      )}
                      {platform === "instagram" && (
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      )}
                      {platform === "twitter" && (
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
            © 2024 MultiMediaExperience. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
