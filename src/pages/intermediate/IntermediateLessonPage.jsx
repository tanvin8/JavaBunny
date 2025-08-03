import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { lessons } from './intermediate-lessons';

export default function IntermediateLessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const index = lessons.findIndex((l) => l.id === lessonId);
  const lesson = lessons[index];
  const nextLesson = lessons[index + 1];
  const prevLesson = lessons[index - 1];
  const [showHint, setShowHint] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFeedback, setQuizFeedback] = useState({});
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);
  const [showHint3, setShowHint3] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const [code, setCode] = useState(`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello!");
  }
}`);
  const [output, setOutput] = useState('');
  
  useEffect(() => {
    setTimeout(() => {
      if (window.pym && window.pym.autoInit) {
        window.pym.autoInit();
      }
    }, 0);
  }, [lessonId]);

  useEffect(() => {
    setQuizAnswers({});
    setQuizFeedback({});
    setCode(`public class Main {
  public static void main(String[] args) {
    //Enter your code here
  }
}`);
    setOutput('');
  }, [lessonId]);

  if (!lesson) return <p>Lesson not found!</p>;

  const handleQuizChange = (q, value) => {
    setQuizAnswers({ ...quizAnswers, [q]: value });
  };

  const submitQuiz = () => {
    const answerKey = {
      '9-6': { q1: 'int[] numbers = new int[5];', q2: 'scores[2]', q3: 'for loop', q4: 'The number of items in the array'},
      '10-3': { q1: 'String', q2: 'true/false', q3: '+' },
      '11-1': { q1: 'Scanner', q2: 'nextLine', q3: 'System.in' }
    }[lessonId] || {};

    const feedback = {};
    Object.entries(answerKey).forEach(([q, correct]) => {
      const userAnswer = quizAnswers[q];
      if (userAnswer === correct) {
        feedback[q] = `✅ Correct!`;
      } else {
        feedback[q] = `❌ Not quite. Correct: ${correct}`;
      }
    });

    setQuizFeedback(feedback);
  };

  const runCode = async () => {
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language: 'java', code })
      });
      const result = await response.json();
      setOutput(result.output || result.error);
    } catch (err) {
      setOutput('Error running code.');
    }
  };

  let content;

  /** === UNIT 9 === **/
  if (lessonId === '9-1') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-3">
        Imagine you want to store your top 5 favorite numbers. Instead of making 5 separate variables (number1, number2, etc.), you use an array to keep them all together. It’s like having a row of mailboxes, each with its own number!
      </p>
      <p className="text-lg mb-3">
        In Java, an array holds multiple values of the same type, like all <code>int</code>s or all <code>String</code>s. You can then use an index (starting at 0) to get or change each item.
      </p>
      <p className="text-lg mb-3 font-bold">Here’s how you create an int array for 5 numbers:</p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`int[] favoriteNumbers = new int[5];`}
      </pre>

      <p className="text-lg mb-3">
        This line says: "Make a new array named <code>favoriteNumbers</code> that can hold 5 integers."
      </p>

      <p className="text-lg mb-3 font-bold">To put values in, you can do:</p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`favoriteNumbers[0] = 7;  // first box
favoriteNumbers[1] = 42; // second box`}
      </pre>

      <p className="text-lg mb-3">
        And to get the value from the third box, use:
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`int thirdNumber = favoriteNumbers[2];`}
      </pre>

      <p className="text-lg mb-3">
        Remember, arrays start counting at 0, so <code>favoriteNumbers[0]</code> is the first item.
      </p>

      <p className="text-lg mb-3 font-bold">Here’s a quick example putting it all together:</p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    int[] favoriteNumbers = new int[5];
    favoriteNumbers[0] = 7;
    favoriteNumbers[1] = 42;
    favoriteNumbers[2] = 3;
    favoriteNumbers[3] = 12;
    favoriteNumbers[4] = 99;

    System.out.println("My favorite number is " + favoriteNumbers[1]);
  }
}`}
      </pre>

      <p className="text-lg mb-3">
        When you run this, it prints: <code>My favorite number is 42</code>
      </p>

      <p className="text-lg">
        Arrays help you organize many pieces of related data efficiently. Next, you’ll learn how to loop through arrays to process each item easily!
      </p>
    </div>
  );
  } else if (lessonId === '9-2') {
  content = (
    <div className="p-6">

      <p className="text-lg mb-3">
        To declare an array, tell Java the type and how many items it will hold:
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`int[] numbers = new int[3]; // creates an int array with 3 spots`}
      </pre>

      
      <p className="text-lg mb-3">
        To initialize values, use the index (starting at 0):
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`numbers[1] = "20";`}
      </pre>

      <p className="text-lg mb-3">
        You can also create and fill it right away:
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`String[] fruits = {"apple", "banana", "cherry"};`}
      </pre>


      <p className="text-lg mb-3 font-bold">
        Practice: Declare an int array of size 3, set the second item to 10, and print it!
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    // Write your code here
  }
}`}
      </pre>

      <button
        onClick={() => setShowHint(!showHint)}
        className="bg-yellow-500 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-600"
      >
        {showHint ? 'Hide Example' : 'Show Example'}
      </button>

      {showHint && (
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    int[] numbers = new int[3];
    numbers[2] = 10;
    System.out.println(numbers[2]);
  }
}`}
        </pre>
      )}


      <div
        data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae"
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      ></div>
    </div>
  );
  } else if (lessonId === '9-3') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-3">
        <strong>Accessing Array Elements</strong>
        <ul className="list-disc list-inside mt-1">
          <li><code>names[0]</code> gets the first element → "Alice"</li>
          <li><code>System.out.println(nums[2]);</code> prints the third value</li>
        </ul>
      </p>

      <p className="text-lg mb-3">
        <strong>Changing Values</strong>
        <ul className="list-disc list-inside mt-1">
          <li><code>names[1] = "Ben";</code> replaces "Bob" with "Ben"</li>
          <li>Use <code>=</code> to overwrite a specific index</li>
        </ul>
      </p>

      <p className="text-lg mb-3">
        <strong>Array Length</strong><br/>
        Use <code>array.length</code> to get the number of elements. Note: no parentheses!
        <br/><code>System.out.println(names.length);</code> → 3
      </p>

      <p className="text-lg mb-3">
        <strong>Calling or Printing</strong>
        <ul className="list-disc list-inside mt-1">
          <li><code>System.out.println(names[2]);</code> → prints one element</li>
        </ul>
      </p>

      <button
        onClick={() => setShowHint(!showHint)}
        className="bg-yellow-500 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-600"
      >
        {showHint ? 'Hide Example' : 'Show Example'}
      </button>

      {showHint && (
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    String[] colors = {"Red", "Green", "Blue"};
    
    System.out.println("Total colors: " + colors.length); // .length tells us how many elements
  }
}`}
        </pre>
      )}

      <p className="text-lg mb-3">
        <strong>Try It Yourself:</strong><br/>
        Using the starter code, declare and initialize an array and print the length:
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    // Declare and modify an array here
  }
}`}
      </pre>

      <div
        data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae"
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      ></div>
    </div>
  );
} else if (lessonId === '9-4') {

  content = (
    <div className="p-6">
      <p className="text-lg mb-4 text-blue-900">
        <strong>Looping Through Arrays in Java</strong><br />
        Arrays let you store multiple values of the same type in one variable. You can use loops to go through each item in the array and perform actions on them.
      </p>

      <p className="mb-3">
        The <code className="bg-gray-200 px-1">for</code> loop is most common for arrays. It lets you repeat actions for each index. Java also offers a simpler "enhanced for loop" that goes through each element directly.
      </p>

      <button
        onClick={() => setShowHint(!showHint)}
        className="bg-yellow-500 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-600"
      >
        {showHint ? 'Hide Examples' : 'Show Examples'}
      </button>

      {showHint && (
        <pre className="bg-gray-100 p-3 rounded mb-4 whitespace-pre-wrap">
{`// Traditional for loop:
String[] fruits = {"Apple", "Banana", "Cherry"};
for (int i = 0; i < fruits.length; i++) {
  System.out.println(fruits[i]);
}

// Enhanced for loop (for-each):
for (String fruit : fruits) {
  System.out.println(fruit);
}`}
        </pre>
      )}

      <p className="text-lg mb-3">
        Try it below! Fill in the loop to print out each number in the array. Change or add values if you like!
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    int[] numbers = {3, 7, 1, 9, 4};

    // Loop through and print each number
    // Your code here
  }
}`}
      </pre>

      <div
        data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae"
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      ></div>
    </div>
  );
} else if (lessonId === '9-5') {
  content = (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black-800 mb-4">Common Array Problems in Java</h2>

      {/* Max Value */}
      <h3 className="text-xl font-semibold text-black-700 mt-6 mb-2">1. Find the Maximum Value</h3>
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    int[] numbers = {4, 9, 2, 17, 6};
    int max = numbers[0];

    for (int i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }

    System.out.println("Max value: " + max);
  }
}

`}
      </pre>
      <p className="mb-4">
         This code starts by assuming the first value is the max. It loops through the rest of the array and updates <code>max</code> whenever it finds a larger number.
      </p>

      {/* Count Occurrences */}
      <h3 className="text-xl font-semibold text-black-700 mt-6 mb-2"> 2. Count Occurrences of a Value</h3>
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    int[] scores = {1, 3, 4, 3, 5, 3};
    int count = 0;

    for (int score : scores) {
      if (score == 3) {
        count++;
      }
    }

    System.out.println("Number of 3s: " + count);
  }
}

`}
      </pre>
      <p className="mb-4">
        This code uses a <code>for-each</code> loop to go through the array and count how many times the number 3 appears.
      </p>

      {/* Sum All Elements */}
      <h3 className="text-xl font-semibold text-black-700 mt-6 mb-2">3. Sum All Elements</h3>
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    int[] values = {2, 4, 6, 8};
    int sum = 0;

    for (int value : values) {
      sum += value;
    }

    System.out.println("Sum: " + sum);
  }
}

`}
      </pre>
      <p className="mb-4">
        This loop adds up every number in the array using <code>sum += value</code>. A common pattern when processing numbers.
      </p>

      {/* Average */}
      <h3 className="text-xl font-semibold text-black-700 mt-6 mb-2">4. Calculate Average</h3>
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    int[] grades = {90, 85, 80};
    int total = 0;

    for (int grade : grades) {
      total += grade;
    }

    double average = (double) total / grades.length;
    System.out.println("Average: " + average);
  }
}

`}
      </pre>
      <p className="mb-4">
        Sum all values first, then divide by <code>grades.length</code>. Use <code>(double)</code> to make sure the division isn’t rounded.
      </p>

      {/* Search for a Value */}
      <h3 className="text-xl font-semibold text-black-700 mt-6 mb-2">5. Check if a Value Exists</h3>
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    int[] data = {7, 12, 19, 23};
    int target = 19;
    boolean found = false;

    for (int num : data) {
      if (num == target) {
        found = true;
        break;
      }
    }
    System.out.println("Found? " + found);
  }
}
`}
      </pre>
      <p className="mb-4">
        This loop checks if <code>target</code> is in the array. If found, it sets <code>found</code> to true and exits early using <code>break</code>.
      </p>

      <p className="mb-4 text-xl">
        Try it yourself! Copy the examples into the code editor below and examine the outputs.
      </p>

      <div
        data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae"
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      ></div>

    </div>
  );
}
 else if (lessonId === '9-6') {
  content = (
    <div className="p-6">
      <div className="mb-6">
        <p className="font-bold mb-2">1. What is the correct way to declare an array of integers in Java?</p>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'int numbers = [5];')} /> int numbers = [5];</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'array int numbers = 5;')} /> array int numbers = 5;</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'int[] numbers = new int[5];')} /> int[] numbers = new int[5];</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'int numbers[] = 5;')} /> int numbers[] = 5;</label><br/>
        {quizFeedback.q1 && <p className="text-sm mt-1">{quizFeedback.q1}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">2. How do you access the third element of an array called <code>scores</code>?</p>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'scores[2]')} /> scores[2]</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'scores(3)')} /> scores(3)</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'scores{2}')} /> scores{2}</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'scores[3]')} /> scores[3]</label>
        {quizFeedback.q2 && <p className="text-sm mt-1">{quizFeedback.q2}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">3. Which loop is commonly used to go through every element in an array?</p>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'if statement')} /> if statement</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'for loop')} /> for loop</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'switch case')} /> switch case</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'do-while loop')} /> do-while loop</label><br/>
        {quizFeedback.q3 && <p className="text-sm mt-1">{quizFeedback.q3}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">4. What does <code>array.length</code> return?</p>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'The last item in the array')} /> The last item in the array</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'Always 10')} /> Always 10</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'The index of the last element')} /> The index of the last element</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'The number of items in the array')} /> The number of items in the array</label><br/>
        {quizFeedback.q4 && <p className="text-sm mt-1">{quizFeedback.q4}</p>}
      </div>

      <button onClick={submitQuiz} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Submit Quiz</button>
    </div>
  );
}


/** === UNIT 10 === **/

else if (lessonId === '10-1') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-4">
        In Java, a <strong>variable</strong> is like a labeled jar that holds information.
        You must tell Java what type of info each jar can hold — these are called <strong>data types</strong>.
      </p>
      <p className="text-lg mb-3">
        For example:
        <ul className="list-disc ml-6 mb-3">
          <li><code>int</code>: whole numbers like <code>5</code> or <code>-42</code></li>
          <li><code>double</code>: decimals like <code>3.14</code> or <code>-0.01</code></li>
          <li><code>String</code>: text, always in double quotes — <code>"Hello!"</code></li>
          <li><code>boolean</code>: true or false — <code>true</code>, <code>false</code></li>
        </ul>
      </p>
      <p className="text-lg mb-3">
        Declaring means creating the jar and putting something inside:
      </p>
      <pre className="bg-gray-100 p-3 rounded mb-3">
{`int age = 16;
double height = 5.8;
String name = "Sam";
boolean isStudent = true;`}
      </pre>
      <p className="text-lg mb-3">
        Choosing clear variable names helps you and others understand what they store.
      </p>
      <img className="w-64 my-4" src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Funny cat coding" />
    </div>
  );
}

else if (lessonId === '10-2') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-4 text-blue-900">
        <strong>Let’s practice with</strong> <code>int</code> and <code>double</code>. Below is a starting structure — paste it into the code editor and execute to see your result!
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    // Declare an int called age
    // Declare a double called height
    // Print them both
  }
}`}
      </pre>

      <button
        onClick={() => setShowHint(!showHint)}
        className="bg-yellow-500 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-600"
      >
        {showHint ? 'Hide Example' : 'Show Example'}
      </button>

      {showHint && (
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    int age = 16;
    double height = 5.8;
    System.out.println(age);
    System.out.println(height);
  }
}`}
        </pre>
      )}

      <div data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae" />

    </div>
  );
}else if (lessonId === '10-3') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-4 text-blue-900">
        Java can do math with: <code>+</code> <code>-</code> <code>*</code> <code>/</code>.
        These symbols mean add, subtract, multiply, and divide.
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`int a = 2;
int b = 3;
int sum = a + b; `}
      </pre>

      <p className="text-lg mb-3">
        Try it: declare your own values and print some operations using the starter code!
      </p>
      <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    // Write code here
  }
}`}
      </pre>

      <button
        onClick={() => setShowHint(!showHint)}
        className="bg-yellow-500 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-600"
      >
        {showHint ? 'Hide Example' : 'Show Example'}
      </button>

      {showHint && (
        <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    int a = 10;
    int b = 2;
    System.out.println(a + b);
    System.out.println(a - b);
    System.out.println(a * b);
    System.out.println(a / b);
  }
}`}
        </pre>
      )}

      <div data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae" />

    </div>
  );
}

// === UNIT 11 ===

else if (lessonId === '11-1') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-3">
        <strong>Let’s get interactive!</strong> In Java, you can ask the user questions and grab their answers with the <code>Scanner</code> class.
      </p>

      <p className="text-lg mb-3 ">
        First, import Scanner:
        <br />
        <code>import java.util.Scanner;</code>
      </p>

      <p className="text-lg mb-3">
        Then, make a Scanner object:
        <br />
        <code>Scanner input = new Scanner(System.in);</code>
      </p>

      <p className="text-lg mb-3">
        Here are some ways to get info:
        <ul className="list-disc pl-6">
          <li><code>nextLine()</code> → an entire sentence 🌟</li>
          <li><code>next()</code> → a single word ✏️</li>
          <li><code>nextInt()</code> → whole numbers 🔢</li>
          <li><code>nextDouble()</code> → decimals 🧮</li>
        </ul>
      </p>

      <p className="text-lg mb-3">
        Concatenation means joining text together.  
        In Java, you can combine Strings and other variables using <code>+</code>.  
        For example:
        <br/>
        <code>System.out.println("Hello " + name);</code>
        <br/>
        Here, <code>"Hello "</code> and the value of <code>name</code> are combined into one message!
      </p>

      <p className="text-lg mb-3 font-bold">Here’s a quick example:</p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    System.out.print("Enter the day: ");
    String day = input.nextLine();

    System.out.println("Today is " + day + "!");
  }
}`}
      </pre>

      <p className="text-lg">
        The result of this code block would be <code>"Today is [day]!"</code>
      </p>

       <img className="w-64 my-4" src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aGFwb2RmbmVzdTZjN3AxY21kZDFyM2NlZjE2dHd0cW05dnBrYWx1dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jqMyza0N8JbAl2WjPO/giphy.gif" alt="Input GIF" />
    </div>
  );
} else if (lessonId === '11-2') {
  content = (
    <div className="p-6">
      <div className="mb-6">
        <p className="font-bold mb-2">1. Which class reads user input?</p>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Input')} /> Input</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Printer')} /> Printer</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Scanner')} /> Scanner</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Output')} /> Output</label><br/>
        {quizFeedback.q1 && <p className="text-sm mt-1">{quizFeedback.q1}</p>}
      </div>
      <div className="mb-6">
        <p className="font-bold mb-2">2. Which method reads a whole line?</p>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'nextLine')} /> nextLine()</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'printLine')} /> printLine()</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'next')} /> next()</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'line')} /> line()</label><br/>
        {quizFeedback.q2 && <p className="text-sm mt-1">{quizFeedback.q2}</p>}
      </div>
      <div className="mb-6">
        <p className="font-bold mb-2">3. What goes in Scanner's parentheses?</p>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'System.in')} /> System.in</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'System.out')} /> System.out</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'System.in')} /> System</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'System.out')} /> Output</label><br/>
        {quizFeedback.q3 && <p className="text-sm mt-1">{quizFeedback.q3}</p>}
      </div>
      <button onClick={submitQuiz} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"> Submit Quiz</button>
    </div>
  );
}
// === UNIT 12 ===

 else if (lessonId === '12-1') {
  content = (
    <div className="p-6">
      <div className="mb-6">
        <p className="font-bold mb-2">1. Which keyword prints output?</p>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'System.out.println')} /> System.out.println</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Scanner')} /> Scanner</label>
        {quizFeedback.q1 && <p className="text-sm mt-1">{quizFeedback.q1}</p>}
      </div>
      <div className="mb-6">
        <p className="font-bold mb-2">2. Which class reads input?</p>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'Scanner')} /> Scanner</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'System')} /> System</label>
        {quizFeedback.q2 && <p className="text-sm mt-1">{quizFeedback.q2}</p>}
      </div>
      <div className="mb-6">
        <p className="font-bold mb-2">3. What is fixing code called?</p>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'Debugging')} /> Debugging</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'Designing')} /> Designing</label>
        {quizFeedback.q3 && <p className="text-sm mt-1">{quizFeedback.q3}</p>}
      </div>
      <button onClick={submitQuiz} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Submit Quiz</button>
    </div>
  );
} 

  return (
    <div className="p-[80px] bg-champagne font-quicksand py-[50px]">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-lg mb-8">{lesson.content}</p>
      {content}
      <div className="flex justify-between mt-12">
        {prevLesson ? (
          <Link to={`/intermediate/${prevLesson.id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">← Back</Link>
        ) : (
          <button onClick={() => navigate(-1)} className="inline-block bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">← Back</button>
        )}
        {nextLesson ? (
          <Link to={`/intermediate/${nextLesson.id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next →</Link>
        ) : (
          <p className="text-green-700 font-bold text-xl">Congratulations on completing every lesson in JavaBunny!</p>
        )}
      </div>
    </div>
  );
}
