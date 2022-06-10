import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/404 Error with a cute animal-rafiki.png'
const NotFound = () => {
    return (
      <div class="relative text-center">
        <div className="h-96 flex justify-center">
                <img
                    className='h-full w-auto'
                    src={img} alt="404" />
        </div>
        <Link
          to="/"
          class="inline-flex items-center px-5 py-3 mt-8 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500"
        >
          Go To Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="flex-shrink-0 w-4 h-4 ml-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    );
};

export default NotFound;