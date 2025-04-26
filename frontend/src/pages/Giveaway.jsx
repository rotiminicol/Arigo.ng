import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, AlertCircle, Loader2, Check, X, Trophy, Gift, ChevronRight } from 'lucide-react';

const GreenGiveaway = () => {
  // States for different views
  const [currentView, setCurrentView] = useState('registration'); // registration, quiz, results
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timer, setTimer] = useState(null);
  
  // Quiz questions
  const questions = [
    {
      question: "What is the capital of Nigeria?",
      options: ["Lagos", "Abuja", "Kano", "Port Harcourt"],
      correctAnswer: "Abuja"
    },
    {
      question: "Which river is the longest in Nigeria?",
      options: ["Niger River", "Benue River", "Osun River", "Cross River"],
      correctAnswer: "Niger River"
    },
    {
      question: "What year did Nigeria gain independence?",
      options: ["1960", "1963", "1957", "1975"],
      correctAnswer: "1960"
    },
    {
      question: "Which Nigerian won the Nobel Prize for Literature?",
      options: ["Chinua Achebe", "Wole Soyinka", "Chimamanda Adichie", "Ben Okri"],
      correctAnswer: "Wole Soyinka"
    },
    {
      question: "What is Nigeria's largest export?",
      options: ["Cocoa", "Oil", "Cotton", "Groundnuts"],
      correctAnswer: "Oil"
    },
    {
      question: "How many states are in Nigeria?",
      options: ["36", "24", "30", "42"],
      correctAnswer: "36"
    },
    {
      question: "Which of these is NOT one of Nigeria's official languages?",
      options: ["English", "Swahili", "Hausa", "Yoruba"],
      correctAnswer: "Swahili"
    },
    {
      question: "Which Nigerian city is known as the 'Centre of Excellence'?",
      options: ["Abuja", "Lagos", "Kano", "Ibadan"],
      correctAnswer: "Lagos"
    },
    {
      question: "What colors are on the Nigerian flag?",
      options: ["Red and Blue", "Green and White", "Black and Yellow", "Blue and White"],
      correctAnswer: "Green and White"
    },
    {
      question: "Which Nigerian footballer won the African Footballer of the Year award 5 times?",
      options: ["Jay-Jay Okocha", "Nwankwo Kanu", "John Obi Mikel", "Rashidi Yekini"],
      correctAnswer: "Nwankwo Kanu"
    }
  ];

  const startTimer = () => {
    clearInterval(timer);
    setTimeLeft(30);
    const newTimer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleNextQuestion(null);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    setTimer(newTimer);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setCurrentView('quiz');
      startTimer();
    } catch (error) {
      alert('An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleAnswerSelection = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    const answerData = {
      question: questions[currentQuestion].question,
      selectedAnswer,
      correctAnswer: questions[currentQuestion].correctAnswer,
      isCorrect
    };
    
    setAnswers(prev => [...prev, answerData]);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    handleNextQuestion(selectedAnswer);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      startTimer();
    } else {
      clearInterval(timer);
      setCurrentView('results');
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
    setCurrentView('registration');
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  };

  // Registration Form View
  const RegistrationForm = () => (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center h-full animate-fadeIn px-4">
      <div className="bg-green-700 rounded-xl shadow-xl w-full p-8 md:p-12">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-green-600 rounded-full p-4 mr-4">
            <Gift className="h-12 w-12 text-green-200" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">₦1,000 Giveaway</h1>
            <p className="text-green-200 text-lg">Answer questions, win instant cash!</p>
          </div>
        </div>
        
        <div className="bg-green-600/50 rounded-lg p-4 mb-8">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <Check className="h-5 w-5 mr-2 text-green-300" />
            How It Works
          </h2>
          <ol className="space-y-2 text-green-100">
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1</span>
              <span>Register with your details</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2</span>
              <span>Answer 10 quick questions</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3</span>
              <span>Score 7+ to win ₦1,000 instantly!</span>
            </li>
          </ol>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="transition-all duration-300 hover:translate-y-1">
            <label htmlFor="name" className="block mb-2 font-medium text-lg">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-green-600 border border-green-500 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 text-lg"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="transition-all duration-300 hover:translate-y-1">
            <label htmlFor="email" className="block mb-2 font-medium text-lg">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-green-600 border border-green-500 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 text-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="transition-all duration-300 hover:translate-y-1">
            <label htmlFor="phone" className="block mb-2 font-medium text-lg">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-green-600 border border-green-500 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 text-lg"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="flex items-center pt-2">
            <AlertCircle size={20} className="text-green-300 mr-2 flex-shrink-0" />
            <p className="text-sm text-green-200">
              By entering, you agree to our Terms & Conditions and Privacy Policy.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-green-500 py-4 rounded-lg font-bold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:bg-green-400 text-lg ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin h-6 w-6 mr-2" />
                Submitting...
              </>
            ) : (
              <>
                Start Quiz <ArrowRight size={24} className="ml-2" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );

  // Quiz View
  const QuizView = () => (
    <div className="w-full h-full flex flex-col animate-fadeIn">
      {/* Quiz header */}
      <div className="bg-green-700 py-4 px-6 flex justify-between items-center shadow-lg">
        <div className="flex items-center">
          <span className="text-xl font-bold">Question {currentQuestion + 1}/10</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Check className="h-5 w-5 text-green-300 mr-2" />
            <span className="font-medium">{score} correct</span>
          </div>
          <div className={`rounded-full px-4 py-1 font-medium flex items-center ${timeLeft < 10 ? 'bg-red-500 animate-pulse' : 'bg-green-600'}`}>
            <span className="mr-1">Time:</span>
            <span className="text-xl font-bold">{timeLeft}s</span>
          </div>
        </div>
      </div>
      
      {/* Question container */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Question */}
        <div className="md:w-1/2 bg-green-700 p-6 md:p-12 flex items-center justify-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{questions[currentQuestion].question}</h2>
            <div className="bg-green-600/50 p-4 rounded-lg">
              <p className="text-green-200">Select the correct answer below. You have {timeLeft} seconds remaining.</p>
            </div>
          </div>
        </div>
        
        {/* Options */}
        <div className="md:w-1/2 bg-green-800 p-6 md:p-12">
          <div className="grid grid-cols-1 gap-4 h-full">
            {questions[currentQuestion].options.map((option, index) => (
              <button 
                key={index}
                onClick={() => handleAnswerSelection(option)}
                className="w-full text-left p-4 rounded-lg bg-green-700 hover:bg-green-600 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white flex items-center"
              >
                <span className="bg-green-600 h-8 w-8 rounded-full flex items-center justify-center mr-3 font-bold text-lg">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-lg font-medium">{option}</span>
                <ChevronRight className="ml-auto text-green-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="bg-green-900 h-2">
        <div 
          className="bg-green-500 h-full transition-all duration-300"
          style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  // Results View
  const ResultsView = () => (
    <div className="w-full h-full flex flex-col animate-fadeIn">
      {/* Results header */}
      <div className="bg-green-700 py-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Quiz Results</h2>
        <p className="text-green-200">You scored {score} out of 10</p>
      </div>
      
      {/* Main content */}
      <div className="flex-1 bg-green-800 flex flex-col md:flex-row">
        {/* Result summary */}
        <div className="md:w-1/2 p-6 md:p-12 flex flex-col">
          <div className="bg-green-700 rounded-xl shadow-lg p-8 mb-6 text-center">
            {score >= 7 ? (
              <>
                <div className="bg-green-500 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
                <div className="bg-green-600 p-3 rounded-lg mb-4">
                  <p className="text-3xl font-bold">₦1,000</p>
                  <p className="text-green-200">Prize Won!</p>
                </div>
                <p className="text-lg">
                  You answered {score} questions correctly! Well contact you via email with your prize details.
                </p>
              </>
            ) : (
              <>
                <div className="bg-red-500 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <X className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Almost There!</h3>
                <p className="text-lg mb-4">
                  You answered {score} questions correctly, but needed 7 to win.
                </p>
                <div className="bg-green-600 p-3 rounded-lg">
                  <p className="text-green-200">Dont give up! Try again for a chance to win ₦1,000.</p>
                </div>
              </>
            )}
          </div>
          
          <button
            onClick={resetQuiz}
            className="bg-green-500 py-4 rounded-lg font-bold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:bg-green-400 text-lg mt-auto"
          >
            Play Again <ArrowRight size={24} className="ml-2" />
          </button>
        </div>
        
        {/* Answer review */}
        <div className="md:w-1/2 bg-green-700 p-6 md:p-12">
          <h3 className="text-xl font-bold mb-4">Question Review</h3>
          <div className="space-y-3 overflow-y-auto max-h-96 pr-2">
            {answers.map((answer, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg ${answer.isCorrect ? 'bg-green-600' : 'bg-red-900'} transition-all duration-300 hover:translate-x-1`}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 ${answer.isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                    {answer.isCorrect ? <Check size={14} /> : <X size={14} />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Q{index + 1}: {answer.question}</p>
                    <p className="text-sm">
                      <span className="block">Your answer: <span className={answer.isCorrect ? 'text-green-300 font-medium' : 'text-red-300'}>{answer.selectedAnswer}</span></span>
                      
                      {!answer.isCorrect && (
                        <span className="block mt-1">
                          Correct answer: <span className="text-green-300 font-medium">{answer.correctAnswer}</span>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen h-screen flex flex-col bg-gradient-to-b from-green-600 to-green-800 text-white overflow-hidden">
      {/* Header with Back Button - Only visible on registration and results screens */}
      {(currentView === 'registration' || currentView === 'results') && (
        <header className="p-4">
          <button 
            onClick={currentView !== 'registration' ? () => resetQuiz() : () => window.history.back()} 
            className="flex items-center text-white hover:text-green-200 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="mr-2" />
            <span className="font-medium">{currentView !== 'registration' ? 'Start Over' : 'Back'}</span>
          </button>
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {currentView === 'registration' && <RegistrationForm />}
        {currentView === 'quiz' && <QuizView />}
        {currentView === 'results' && <ResultsView />}
      </main>

      {/* Footer - Only visible on registration and results screens */}
      {(currentView === 'registration' || currentView === 'results') && (
        <footer className="p-4 text-center text-green-200 text-sm">
          © {new Date().getFullYear()} Arigo NG. All rights reserved.
        </footer>
      )}
    </div>
  );
};

export default GreenGiveaway;