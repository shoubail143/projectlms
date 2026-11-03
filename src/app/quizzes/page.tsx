'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Microscope, Users, Award, CheckCircle, XCircle } from 'lucide-react';

export default function QuizzesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  // English Quiz Questions
  const englishQuestions = [
    {
      id: 1,
      question: 'Which of the following is a noun?',
      options: ['Run', 'Beautiful', 'Happiness', 'Quickly'],
      correct: 2,
      explanation: 'Happiness is a noun. "Run" is a verb, "Beautiful" is an adjective, and "Quickly" is an adverb.',
    },
    {
      id: 2,
      question: 'What is the past tense of "go"?',
      options: ['Goed', 'Gone', 'Went', 'Going'],
      correct: 2,
      explanation: 'The past tense of "go" is "went". "Goed" is not a valid word, "gone" is the past participle, and "going" is the present participle.',
    },
    {
      id: 3,
      question: 'Which sentence is grammatically correct?',
      options: [
        'She go to school every day',
        'She goes to school every day',
        'She going to school every day',
        'She gone to school every day',
      ],
      correct: 1,
      explanation: 'The correct sentence is "She goes to school every day." The subject "she" requires the third person singular verb "goes".',
    },
    {
      id: 4,
      question: 'What does "eloquent" mean?',
      options: ['Silent', 'Fluent and persuasive in speaking', 'Angry', 'Happy'],
      correct: 1,
      explanation: 'Eloquent means fluent, persuasive, and expressive in speaking or writing.',
    },
    {
      id: 5,
      question: 'Choose the correct spelling:',
      options: ['Occassion', 'Ocasion', 'Occasion', 'Ocasion'],
      correct: 2,
      explanation: 'The correct spelling is "Occasion" with two "c"s and one "s".',
    },
  ];

  // Sciences Quiz Questions
  const sciencesQuestions = [
    {
      id: 1,
      question: 'What is the chemical symbol for Gold?',
      options: ['Go', 'Gd', 'Au', 'Ag'],
      correct: 2,
      explanation: 'The chemical symbol for Gold is "Au", derived from its Latin name "Aurum".',
    },
    {
      id: 2,
      question: 'Which planet is closest to the Sun?',
      options: ['Venus', 'Mercury', 'Earth', 'Mars'],
      correct: 1,
      explanation: 'Mercury is the closest planet to the Sun, followed by Venus.',
    },
    {
      id: 3,
      question: 'What is the speed of light?',
      options: ['3 × 10⁸ m/s', '3 × 10⁹ m/s', '3 × 10⁷ m/s', '3 × 10¹⁰ m/s'],
      correct: 0,
      explanation: 'The speed of light is approximately 3 × 10⁸ meters per second (299,792,458 m/s).',
    },
    {
      id: 4,
      question: 'Which gas do plants primarily use for photosynthesis?',
      options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
      correct: 2,
      explanation: 'Plants use carbon dioxide (CO₂) during photosynthesis, along with water and sunlight.',
    },
    {
      id: 5,
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
      correct: 1,
      explanation: 'The mitochondria is known as the powerhouse of the cell because it produces ATP (energy) for the cell.',
    },
  ];

  // Future Mentors Quiz Questions
  const mentorsQuestions = [
    {
      id: 1,
      question: 'What is the most important skill for a future mentor?',
      options: ['Being strict', 'Empathy and listening', 'Having all the answers', 'Being authoritative'],
      correct: 1,
      explanation: 'Empathy and listening are crucial for mentors to understand and support their mentees effectively.',
    },
    {
      id: 2,
      question: 'How should a mentor handle mistakes from mentees?',
      options: [
        'Punish them immediately',
        'Use them as learning opportunities',
        'Ignore them',
        'Tell others about them',
      ],
      correct: 1,
      explanation: 'Great mentors view mistakes as learning opportunities and help mentees understand and grow from them.',
    },
    {
      id: 3,
      question: 'What does effective mentoring require?',
      options: [
        'One-time advice',
        'Consistent communication and support',
        'Only criticism',
        'Frequent meetings without preparation',
      ],
      correct: 1,
      explanation: 'Effective mentoring requires consistent communication, support, and preparation for meaningful growth.',
    },
    {
      id: 4,
      question: 'How can a mentor build trust with their mentee?',
      options: [
        'By being unpredictable',
        'By following through on commitments',
        'By sharing personal failures and vulnerabilities',
        'Both B and C',
      ],
      correct: 3,
      explanation: 'Trust is built through following through on commitments and sharing personal experiences, including failures.',
    },
    {
      id: 5,
      question: 'What is the ultimate goal of a mentor?',
      options: [
        'To make mentees dependent',
        'To showcase their own expertise',
        'To empower mentees to become independent and successful',
        'To control mentees\' decisions',
      ],
      correct: 2,
      explanation: 'The ultimate goal of mentoring is to empower individuals to achieve their potential and become independent.',
    },
  ];

  const quizzes = [
    {
      id: 'english',
      title: '📚 English Quiz',
      description: 'Test your English language skills with questions on grammar, vocabulary, and spelling.',
      icon: BookOpen,
      color: 'from-blue-400 to-blue-600',
      questions: englishQuestions,
    },
    {
      id: 'sciences',
      title: '🔬 Sciences Quiz',
      description: 'Challenge yourself with science questions covering physics, chemistry, and biology.',
      icon: Microscope,
      color: 'from-green-400 to-green-600',
      questions: sciencesQuestions,
    },
    {
      id: 'mentors',
      title: '👥 Future Mentors Quiz',
      description: 'Learn about mentorship and prepare for a future career as a mentor.',
      icon: Users,
      color: 'from-purple-400 to-purple-600',
      questions: mentorsQuestions,
    },
  ];

  const currentQuiz = quizzes.find(q => q.id === selectedCategory);
  const currentQuestion = currentQuiz?.questions[currentQuestionIndex];

  const handleStartQuiz = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizCompleted(false);
    setScore(0);
  };

  const handleAnswerClick = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);

    if (currentQuestion?.correct === answerIndex) {
      setScore(score + 1);
    }

    // Move to next question or complete quiz
    if (currentQuestionIndex < (currentQuiz?.questions.length || 0) - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 800);
    } else {
      setTimeout(() => {
        setQuizCompleted(true);
      }, 800);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizCompleted(false);
    setScore(0);
  };

  const handleBackToCategory = () => {
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizCompleted(false);
    setScore(0);
  };

  if (!selectedCategory) {
    // Category Selection Screen
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b-2 border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold text-amber-900">🌟 COURSA</Link>
              <h2 className="text-xl font-bold text-amber-900">Quiz System</h2>
              <Link href="/" className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg transition font-semibold">
                Home
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 border-b-2 border-amber-200">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">📝 Interactive Quizzes</h1>
            <p className="text-amber-700 text-lg font-medium">
              Test your knowledge and learn with our interactive quiz system. Choose a category and challenge yourself!
            </p>
          </div>
        </section>

        {/* Quiz Categories */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quizzes.map(quiz => {
                const Icon = quiz.icon;
                return (
                  <div
                    key={quiz.id}
                    className="bg-white/70 backdrop-blur-sm border-2 border-amber-200 rounded-xl overflow-hidden hover:border-amber-400 transition shadow-lg group"
                  >
                    {/* Quiz Header */}
                    <div className={`bg-gradient-to-r ${quiz.color} h-32 flex items-center justify-center group-hover:scale-105 transition`}>
                      <Icon className="w-16 h-16 text-white opacity-80" />
                    </div>

                    {/* Quiz Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-amber-950 mb-2">{quiz.title}</h3>
                      <p className="text-amber-700 text-sm mb-4 line-clamp-3">{quiz.description}</p>

                      <div className="flex items-center justify-between mb-6 pb-6 border-t-2 border-amber-200 pt-4">
                        <span className="text-amber-700 font-semibold">
                          {quiz.questions.length} Questions
                        </span>
                        <span className="text-amber-600 text-sm">
                          5-10 mins
                        </span>
                      </div>

                      <button
                        onClick={() => handleStartQuiz(quiz.id)}
                        className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
                      >
                        Start Quiz
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-amber-200 bg-white/50 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto text-center text-amber-700">
            <p>© 2024 LMS Pro. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }

  if (quizCompleted) {
    // Quiz Completed Screen
    const percentage = Math.round((score / (currentQuiz?.questions.length || 1)) * 100);
    const passed = percentage >= 60;

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b-2 border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-amber-900">🌟 COURSA</Link>
            <Link href="/" className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg transition font-semibold">
              Home
            </Link>
          </div>
        </header>

        {/* Results Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            {/* Score Card */}
            <div className="bg-white/70 backdrop-blur-sm border-2 border-amber-200 rounded-2xl p-12 text-center shadow-xl mb-8">
              {passed ? (
                <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
              ) : (
                <XCircle className="w-24 h-24 text-red-500 mx-auto mb-6" />
              )}

              <h1 className="text-4xl font-bold text-amber-950 mb-4">
                {passed ? '🎉 Congratulations!' : '📚 Good Try!'}
              </h1>

              <div className="mb-8">
                <p className="text-amber-700 text-lg mb-4 font-medium">Your Score</p>
                <div className="text-6xl font-bold text-amber-700 mb-2">
                  {percentage}%
                </div>
                <p className="text-amber-600 text-lg">
                  {score} out of {currentQuiz?.questions.length} correct
                </p>
              </div>

              <div className={`inline-block px-6 py-3 rounded-lg font-semibold text-white mb-8 ${passed ? 'bg-green-500' : 'bg-orange-500'}`}>
                {passed ? 'PASSED ✓' : 'NEED IMPROVEMENT'}
              </div>

              {/* Answers Review */}
              <div className="mt-8 pt-8 border-t-2 border-amber-200 text-left">
                <h3 className="text-xl font-bold text-amber-950 mb-6">Answer Review</h3>
                <div className="space-y-4">
                  {currentQuiz?.questions.map((q, idx) => (
                    <div
                      key={q.id}
                      className={`p-4 rounded-lg ${
                        userAnswers[idx] === q.correct
                          ? 'bg-green-50 border-2 border-green-300'
                          : 'bg-red-50 border-2 border-red-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {userAnswers[idx] === q.correct ? (
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <p className="font-semibold text-amber-950 mb-2">{q.question}</p>
                          <p className="text-sm text-amber-700">
                            <strong>Your answer:</strong> {q.options[userAnswers[idx] || 0]}
                          </p>
                          {userAnswers[idx] !== q.correct && (
                            <p className="text-sm text-amber-700 mt-1">
                              <strong>Correct answer:</strong> {q.options[q.correct]}
                            </p>
                          )}
                          <p className="text-sm text-amber-600 mt-2 italic">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRetakeQuiz}
                className="flex-1 bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 rounded-lg transition"
              >
                Retake Quiz
              </button>
              <button
                onClick={handleBackToCategory}
                className="flex-1 border-2 border-amber-700 text-amber-800 hover:bg-amber-50 font-semibold py-3 rounded-lg transition"
              >
                Choose Different Quiz
              </button>
              <Link
                href="/"
                className="flex-1 border-2 border-amber-700 text-amber-800 hover:bg-amber-50 font-semibold py-3 rounded-lg transition text-center"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Quiz Taking Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={handleBackToCategory}
              className="text-amber-700 hover:text-amber-900 transition flex items-center gap-2 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            <h2 className="text-xl font-bold text-amber-900">{currentQuiz?.title}</h2>
            <Link href="/" className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg transition font-semibold">
              Home
            </Link>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white/50 border-b-2 border-amber-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-amber-900">
              Question {currentQuestionIndex + 1} of {currentQuiz?.questions.length}
            </span>
            <span className="text-sm font-semibold text-amber-700">
              Score: {score}
            </span>
          </div>
          <div className="w-full bg-amber-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-amber-600 to-amber-700 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / (currentQuiz?.questions.length || 1)) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Question Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm border-2 border-amber-200 rounded-2xl p-8 shadow-lg">
            {/* Question */}
            <h2 className="text-2xl font-bold text-amber-950 mb-8">{currentQuestion?.question}</h2>

            {/* Options */}
            <div className="space-y-4">
              {currentQuestion?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={userAnswers[currentQuestionIndex] !== undefined && userAnswers[currentQuestionIndex] !== null}
                  className={`w-full p-4 text-left rounded-lg transition border-2 font-semibold ${
                    userAnswers[currentQuestionIndex] === index
                      ? userAnswers[currentQuestionIndex] === currentQuestion.correct
                        ? 'border-green-500 bg-green-50 text-green-900'
                        : 'border-red-500 bg-red-50 text-red-900'
                      : userAnswers[currentQuestionIndex] !== undefined && userAnswers[currentQuestionIndex] !== null && index === currentQuestion.correct
                      ? 'border-green-500 bg-green-50 text-green-900'
                      : 'border-amber-200 bg-white hover:border-amber-400 text-amber-950'
                  } ${userAnswers[currentQuestionIndex] !== undefined && userAnswers[currentQuestionIndex] !== null ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      userAnswers[currentQuestionIndex] === index
                        ? userAnswers[currentQuestionIndex] === currentQuestion.correct
                          ? 'border-green-500 bg-green-500'
                          : 'border-red-500 bg-red-500'
                        : 'border-amber-400'
                    }`}>
                      {userAnswers[currentQuestionIndex] === index && (
                        <CheckCircle className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Explanation */}
            {userAnswers[currentQuestionIndex] !== undefined && userAnswers[currentQuestionIndex] !== null && (
              <div className="mt-6 p-4 bg-amber-50 border-2 border-amber-200 rounded-lg">
                <p className="text-sm text-amber-900">
                  <strong>Explanation:</strong> {currentQuestion?.explanation}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-amber-200 bg-white/50 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center text-amber-700">
          <p>© 2024 LMS Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
