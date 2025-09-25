import React from 'react'
import { HeartIcon } from 'lucide-react'
export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            © John Doe {currentYear} • Built with React/Tailwind
          </p>
          <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm">
            <span className="flex items-center">
              Made with <HeartIcon className="h-4 w-4 text-red-500 mx-1" /> in
              Sri Lanka
            </span>
            <span className="mx-2">•</span>
            <a
              href="https://github.com/username/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              View source on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
