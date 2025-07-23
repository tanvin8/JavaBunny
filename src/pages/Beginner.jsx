import React from 'react';
import { FaLaptopCode, FaQuestionCircle, FaBook, FaCode } from 'react-icons/fa';

function Beginner() {
  return (
    <div className=" p-[150px] bg-champagne font-quicksand py-[70px]">
      <h1 className="text-4xl font-bold text-center mb-4 text-blush">Beginner Java Lessons</h1>
      <p className="text-center text-blush text-xl mb-4">Keep building your Java basics step by step!</p>

      <div className="text-left font-bold text-golden space-y-8">

        {/* Unit 4 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 5: Conditions & Decisions</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">5.1: What are Conditions?</p>
              </div>
              <p className="text-lg text-gray-700">Learn how to make choices in your programs using conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">5.2: If Statements</p>
              </div>
              <p className="text-lg text-gray-700">Write simple `if` statements to check if something is true.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">5.3: Else and Else If</p>
              </div>
              <p className="text-lg text-gray-700">Handle other options using `else` and `else if`.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-2xl mr-3 text-green-500" />
                <p className="text-lg">5.4: Unit 5 Quiz</p>
              </div>
              <p className="text-lg text-gray-700">Check your understanding of Java conditions.</p>
            </div>
          </div>
        </div>

        {/* Unit 5 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 6: Loops</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">6.1: Why Use Loops?</p>
              </div>
              <p className="text-lg text-gray-700">Understand why repeating code is useful and efficient.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">6.2: While Loops</p>
              </div>
              <p className="text-lg text-gray-700">Use `while` loops to repeat actions while a condition is true.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">6.3: For Loops</p>
              </div>
              <p className="text-lg text-gray-700">Learn to repeat actions a certain number of times using `for` loops.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">6.4: Do-While Loops</p>
              </div>
              <p className="text-lg text-gray-700">Run a loop at least once using `do-while`.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">6.5: Nested Loops</p>
              </div>
              <p className="text-lg text-gray-700">Try loops inside other loops if you feel ready!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-2xl mr-3 text-green-500" />
                <p className="text-lg">6.6: Unit 6 Quiz</p>
              </div>
              <p className="text-lg text-gray-700">Quiz yourself on Java loops and repetition.</p>
            </div>
          </div>
        </div>

        {/* Unit 6: Methods */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 7: Methods</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">7.1: What is a Method?</p>
              </div>
              <p className="text-lg text-gray-700">Understand why methods help you organize and reuse code.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">7.2: Create & Call Methods</p>
              </div>
              <p className="text-lg text-gray-700">Learn how to write a simple method and use it in your program.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                <p className="text-lg">7.3: Parameters & Return</p>
              </div>
              <p className="text-lg text-gray-700">Pass data into methods and get results back.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-2xl mr-3 text-green-500" />
                <p className="text-lg">7.4: Unit 7 Quiz</p>
              </div>
              <p className="text-lg text-gray-700">Quiz yourself on Java methods.</p>
            </div>
            
          </div>
        </div>

        {/* Unit 7 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 8: Review & Practice</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-2xl mr-3 text-green-500" />
                <p className="text-lg">8.1: Beginner Review Quiz</p>
              </div>
              <p className="text-lg text-gray-700">Wrap up your beginner lessons with a quiz!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaCode className="text-2xl mr-3 text-red-500" />
                <p className="text-lg">8.2: Mini Project: Guessing Game</p>
              </div>
              <p className="text-lg text-gray-700">Practice using conditions and loops by building a guessing game.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Beginner;
