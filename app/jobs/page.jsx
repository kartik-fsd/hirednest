"use client";
import { Transition } from "@headlessui/react";
import { Bell } from "lucide-react";
import { useState } from "react";

function Jobs() {
  const [email, setEmail] = useState("");
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsNotificationVisible(true);
    setTimeout(() => setIsNotificationVisible(false), 3000);
    setEmail("");
  };

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Job Openings
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          We&apos;re always on the lookout for top talent to join our nest.
        </p>
      </div>

      <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <div className="text-center">
            <Bell className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No open positions
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              We don&apos;t have any open roles right now, but new opportunities
              are always hatching!
            </p>
            <div className="mt-6">
              <form onSubmit={handleSubmit} className="sm:flex justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
                <button
                  type="submit"
                  className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Notify me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isNotificationVisible}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Bell className="h-6 w-6 text-green-400" aria-hidden="true" />
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">
                    Alert Configured
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    We&apos;ll notify you when new jobs are available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </main>
  );
}

export default Jobs;
