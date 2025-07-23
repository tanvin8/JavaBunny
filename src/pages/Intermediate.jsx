import React from 'react';
import { FaLaptopCode, FaQuestionCircle, FaBook, FaCode } from 'react-icons/fa';

function Intermediate() {
  return (
    <div className="p-[150px] bg-champagne font-quicksand py-[70px]">
      <h1 className="font-bold text-center mb-4 text-blush text-4xl">Intermediate Java Lessons</h1>
      <p className="text-center text-blush text-xl mb-4">Keep leveling up your Java skills!</p>

      <div className="text-left font-bold text-golden space-y-8">

        {/* Unit 8 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 8: Arrays</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">8.1: What is an Array?</p>
              </div>
              <p className="text-lg text-gray-700">Learn how to store many items in one variable using arrays.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">8.2: Declaring Arrays</p>
              </div>
              <p className="text-lg text-gray-700">Write code to create an array in Java.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">8.3: Access & Change</p>
              </div>
              <p className="text-lg text-gray-700">Access elements and change their values in an array.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">8.4: Loop Through Arrays</p>
              </div>
              <p className="text-lg text-gray-700">Use loops to handle each item in an array one by one.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">8.5: Common Array Problems</p>
              </div>
              <p className="text-lg text-gray-700">Solve simple problems using arrays (finding max, counting, etc).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-2xl mr-3 text-green-500" />
                <p className="text-lg">8.6: Unit 8 Quiz</p>
              </div>
              <p className="text-lg text-gray-700">Test your knowledge of arrays in Java.</p>
            </div>
          </div>
        </div>

        {/* Unit 11: Strings Deeper */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 9: Strings Usage</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">9.1: String Methods</p>
              </div>
              <p className="text-lg text-gray-700">Use helpful methods like "length", "toUpperCase", and "substring".</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">9.2: String Concatenation</p>
              </div>
              <p className="text-lg text-gray-700">Combine strings together to make new ones.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-2xl mr-3 text-green-500" />
                <p className="text-lg">9.3: Unit 9 Quiz</p>
              </div>
              <p className="text-lg text-gray-700">Test your knowledge of the usage of Strings.</p>
            </div>
          </div>
        </div>

        {/* Unit 12: Review & Mini Project */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 10: Review & Project</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-2xl mr-3 text-green-500" />
                <p className="text-lg">10.1: Intermediate Quiz</p>
              </div>
              <p className="text-lg text-gray-700">Review what you learned with an intermediate quiz.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaCode className="text-2xl mr-3 text-red-500" />
                <p className="text-lg">10.2: Mini Project: Grade Calculator</p>
              </div>
              <p className="text-lg text-gray-700">Use arrays, loops, and methods to build a simple grade calculator.</p>
            </div>
          </div>
        </div>

        {/* Unit 11 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 11: Course Completiton</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaBook className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">11.1: What's next?</p>
              </div>
              <p className="text-lg text-gray-700">Learn what's next to contiue your Java journey.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Intermediate;