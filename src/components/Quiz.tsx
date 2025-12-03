import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RotateCcw, Trophy, Target } from 'lucide-react';
import { quizQuestions } from '../data/slides';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const savedScore = localStorage.getItem('quizScore');
    if (savedScore) {
      console.log('Điểm đã lưu:', savedScore);
    }
  }, []);

  const handleAnswerSelect = (answerIndex) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
    const newAnswers = [...answers, { questionIndex: currentQuestion, answer: selectedAnswer, isCorrect }];
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
        const finalScore = isCorrect ? score + 1 : score;
        localStorage.setItem('quizScore', finalScore);
        localStorage.setItem('quizDate', new Date().toISOString());
      }
    }, 2000);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 90) return { text: 'Xuất sắc!', color: 'text-green-600' };
    if (percentage >= 70) return { text: 'Tốt!', color: 'text-blue-600' };
    if (percentage >= 50) return { text: 'Khá!', color: 'text-yellow-600' };
    return { text: 'Cần cố gắng thêm!', color: 'text-red-600' };
  };

  if (quizCompleted) {
    const scoreMsg = getScoreMessage();
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <div className="mb-6">
              <Trophy className="w-24 h-24 text-yellow-400 mx-auto" />
            </div>

            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Hoàn thành bài kiểm tra!
            </h2>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-8">
              <p className="text-6xl font-bold mb-2">
                {score}/{quizQuestions.length}
              </p>
              <p className="text-xl">điểm</p>
            </div>

            <p className={`text-3xl font-bold mb-8 ${scoreMsg.color}`}>
              {scoreMsg.text}
            </p>

            <div className="mb-8 text-left max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kết quả chi tiết:</h3>
              <div className="space-y-3">
                {answers.map((answer, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      answer.isCorrect ? 'bg-green-50' : 'bg-red-50'
                    }`}
                  >
                    {answer.isCorrect ? (
                      <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                    ) : (
                      <XCircle className="text-red-600 flex-shrink-0" size={20} />
                    )}
                    <span className="text-sm text-gray-700">
                      Câu {index + 1}: {answer.isCorrect ? 'Đúng' : 'Sai'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleRestart}
              className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              <RotateCcw size={20} />
              Làm lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Target className="text-yellow-400" size={24} />
                <h2 className="text-2xl font-bold">Bài kiểm tra</h2>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-200">Câu hỏi</p>
                <p className="text-xl font-bold">
                  {currentQuestion + 1}/{quizQuestions.length}
                </p>
              </div>
            </div>

            <div className="bg-white/20 rounded-full h-2 overflow-hidden">
              <div
                className="bg-yellow-400 h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
              {question.question}
            </h3>

            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const showCorrectAnswer = showResult && isCorrect;
                const showWrongAnswer = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      showCorrectAnswer
                        ? 'border-green-500 bg-green-50'
                        : showWrongAnswer
                        ? 'border-red-500 bg-red-50'
                        : isSelected
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold ${
                          showCorrectAnswer
                            ? 'border-green-500 bg-green-500 text-white'
                            : showWrongAnswer
                            ? 'border-red-500 bg-red-500 text-white'
                            : isSelected
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : 'border-gray-300 text-gray-600'
                        }`}
                      >
                        {showCorrectAnswer ? (
                          <CheckCircle size={20} />
                        ) : showWrongAnswer ? (
                          <XCircle size={20} />
                        ) : (
                          String.fromCharCode(65 + index)
                        )}
                      </div>
                      <span
                        className={`text-lg ${
                          showCorrectAnswer || showWrongAnswer ? 'font-medium' : ''
                        }`}
                      >
                        {option}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {!showResult && (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="w-full bg-blue-900 text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                Xác nhận
              </button>
            )}

            {showResult && (
              <div
                className={`p-6 rounded-xl text-center ${
                  selectedAnswer === question.correctAnswer
                    ? 'bg-green-50 border-2 border-green-500'
                    : 'bg-red-50 border-2 border-red-500'
                }`}
              >
                <p
                  className={`text-2xl font-bold mb-2 ${
                    selectedAnswer === question.correctAnswer
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {selectedAnswer === question.correctAnswer ? 'Chính xác!' : 'Chưa đúng!'}
                </p>
                <p className="text-gray-700">
                  {selectedAnswer === question.correctAnswer
                    ? 'Bạn đã trả lời đúng câu hỏi này.'
                    : `Đáp án đúng là: ${String.fromCharCode(65 + question.correctAnswer)}`}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-block bg-white rounded-full px-6 py-3 shadow-lg">
            <p className="text-gray-700">
              Điểm hiện tại: <span className="font-bold text-blue-900 text-xl">{score}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
