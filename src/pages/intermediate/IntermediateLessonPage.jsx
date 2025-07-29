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
      '1-4': { q1: 'Games', q2: 'System.out.println', q3: ';'},
      '2-6': { q1: 'String', q2: 'true/false', q3: '+' },
      '3-3': { q1: 'Scanner', q2: 'nextLine', q3: 'System.in' },
      '4-2': { q1: 'System.out.println', q2: 'Scanner', q3: 'Debugging' }
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
      <p className="text-lg mb-3 text-blue-900">
        🎉 <strong>Welcome to Java!</strong> Java is one of the most widely used programming languages in the world. It was first released by Sun Microsystems in 1995, thanks to a brilliant engineer named <span className="text-green-700 font-semibold">James Gosling</span>. His team wanted to solve a big challenge: how can we write one program that runs on any computer, whether it’s a tiny phone or a giant server?
      </p>
      <p className="text-lg mb-3">
        This led to Java’s famous slogan: <span className="text-red-700 font-bold">“Write Once, Run Anywhere.”</span> That means you write your code just once, and it will work on Windows, Mac, Linux — almost anything with a screen! 📱💻🌍 This is why Java became so popular for building big, important systems like bank software, mobile apps, websites, and even games like <span className="text-green-700 font-semibold">Minecraft</span>.
      </p>
      <p className="text-lg mb-3">
        Today, millions of developers use Java every day. Companies trust it because it’s stable, safe, and constantly improved by a huge community. By learning Java, you’re opening doors to create apps, games, and tools that people can use around the world. 🌟 You’ll soon see how powerful it is to write code that anyone can run anywhere!
      </p>
      <img className="w-64 my-4" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmJyYjdtaTNyZHRlMWcxN2V4MHNkNHZ5NGV6am1oYXNobjlneXp3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ws6T5PN7wHv3cY8xy8/giphy.gif" alt="Java logo spinning" />
      <p className="text-lg">
        Ready to learn? Let’s go step by step — by the end, you’ll be a Java explorer! 🚀
      </p>
    </div>
  );
  } else if (lessonId === '9-2') {
    content = (
    <div className="p-6">
      <p className="text-lg mb-3 text-blue-900">
        🛠️ <strong>How to Start Coding in Java</strong><br/>
        To write Java programs, you need two main tools: a <span className="text-green-700 font-semibold">JDK</span> and an <span className="text-purple-700 font-semibold">IDE</span>. The <strong>JDK (Java Development Kit)</strong> is what makes your computer understand Java. It helps you turn your code into instructions that the computer can run.
      </p>
      <p className="text-lg mb-3">
        Next, you need an <strong>IDE (Integrated Development Environment)</strong>. Think of this as your special notebook and toolbox for coding. An IDE makes writing code easier by adding colors, suggestions, and ways to run your programs with just one click! Popular IDEs are <span className="text-purple-700">IntelliJ IDEA</span>, <span className="text-purple-700">Eclipse</span>, or <span className="text-purple-700">VS Code</span> with a Java plugin.
      </p>
      <p className="text-lg mb-3">
        📝 <strong>How to set it up:</strong> First, download the JDK for free from Oracle’s website. Then, pick an IDE and install it on your computer. Once both are ready, you can start writing real Java code! ✨ Learning how to install these tools may seem tricky at first, but it’s worth it. Every developer does it — and once you’re set up, the magic begins!
      </p>
      <p className="text-lg mb-3">
        <strong>You won't need to install an IDE to use this site, but it can still be helpful going forward!</strong>
      </p>
      <img className="w-64 my-4" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3lvOGFkeDNvZHFmcGJocTNlb2hiaXY2emZoNGhlNnc2dGN5N3BkYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HO2cuakPoSngvitf0M/giphy.gif" alt="Cat typing code" />
      <p className="text-lg">
        📚 <em>Tip:</em> If you ever feel stuck, remember: Google and YouTube tutorials are your friends. Many people have learned Java before you — you’re never alone!
      </p>
    </div>
  );
  } else if (lessonId === '9-3') {

  content = (
    <div className="p-6">
      <p className="text-lg mb-4 text-blue-900">
        <strong>Let’s write your first Java program!</strong>  
        In Java, you write instructions inside a <span className="text-green-700">class</span>. The program starts running at the <span className="text-purple-700">main</span> method.  
        To show a message on the screen, you use <code className="bg-gray-200 px-1">System.out.println()</code>.
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
    System.out.println("Hello, World!");
  }
}`}
        </pre>
      )}

      <p className="text-lg mb-3">
        Try it below! Paste the starting code into the code editor, change the text inside the quotes and execute it. Dont forget the <code>;</code> at the end!
      </p>
      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    //Enter code here!
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
}else if (lessonId === '9-4') {

  content = (
    <div className="p-6">
      <p className="text-lg mb-4 text-blue-900">
        <strong>Let’s write your first Java program!</strong>  
        In Java, you write instructions inside a <span className="text-green-700">class</span>. The program starts running at the <span className="text-purple-700">main</span> method.  
        To show a message on the screen, you use <code className="bg-gray-200 px-1">System.out.println()</code>.
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
    System.out.println("Hello, World!");
  }
}`}
        </pre>
      )}

      <p className="text-lg mb-3">
        Try it below! Paste the starting code into the code editor, change the text inside the quotes and execute it. Dont forget the <code>;</code> at the end!
      </p>
      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    //Enter code here!
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
}else if (lessonId === '9-5') {

  content = (
    <div className="p-6">
      <p className="text-lg mb-4 text-blue-900">
        <strong>Let’s write your first Java program!</strong>  
        In Java, you write instructions inside a <span className="text-green-700">class</span>. The program starts running at the <span className="text-purple-700">main</span> method.  
        To show a message on the screen, you use <code className="bg-gray-200 px-1">System.out.println()</code>.
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
    System.out.println("Hello, World!");
  }
}`}
        </pre>
      )}

      <p className="text-lg mb-3">
        Try it below! Paste the starting code into the code editor, change the text inside the quotes and execute it. Dont forget the <code>;</code> at the end!
      </p>
      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    //Enter code here!
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
}else if (lessonId === '9-6') {
    content = (
  <div className="p-6">
    <div className="mb-6">
      <p className="font-bold mb-2">1. What is Java commonly used for?</p>
      <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Cooking')} /> Cooking</label><br/>
      <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Games')} /> Games</label><br/>
      <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Gardening')} /> Gardening</label><br/>
      <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Painting')} /> Painting</label>
      {quizFeedback.q1 && <p className="text-sm mt-1">{quizFeedback.q1}</p>}
    </div>

    <div className="mb-6">
      <p className="font-bold mb-2">2. Which shows text on the screen?</p>
      <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'System.out.println')} /> System.out.println</label><br/>
      <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'System.read')} /> System.read</label><br/>
      <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'Scanner.in')} /> Scanner.in</label><br/>
      <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'Input.show')} /> Input.show</label>
      {quizFeedback.q2 && <p className="text-sm mt-1">{quizFeedback.q2}</p>}
    </div>

    <div className="mb-6">
      <p className="font-bold mb-2">3. What ends a statement in Java?</p>
      <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', '.')} /> . (dot)</label><br/>
      <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', ',')} /> , (comma)</label><br/>
      <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', ';')} /> ; (semicolon)</label><br/>
      <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', ':')} /> : (colon)</label>
      {quizFeedback.q3 && <p className="text-sm mt-1">{quizFeedback.q3}</p>}
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
