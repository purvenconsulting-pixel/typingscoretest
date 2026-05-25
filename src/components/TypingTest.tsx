'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const sampleTexts = [
  "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and has been used by typists for over a century to practice their skills. Speed and accuracy are both important when measuring typing proficiency.",
  "Programming requires attention to detail and patience. Every semicolon, bracket, and variable name matters. Good developers write clean code that is easy to read and maintain. Practice typing code regularly to improve your programming speed.",
  "Technology continues to evolve at a rapid pace. From artificial intelligence to quantum computing, new innovations emerge every day. Staying current with these developments requires continuous learning and adaptation to new tools.",
  "The art of effective communication begins with clear writing. Whether composing emails, reports, or creative works, the ability to type quickly and accurately saves valuable time. Regular practice builds muscle memory for common words.",
  "Data science combines statistics, programming, and domain expertise to extract insights from information. Python and R are popular languages in this field. Machine learning models can predict outcomes based on historical patterns.",
  "Remote work has transformed how teams collaborate across distances. Video conferencing, instant messaging, and project management tools keep distributed teams connected. Typing speed directly impacts productivity in digital workplaces.",
];

const timeOptions = [15, 30, 60, 120];

interface TestResult {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  totalChars: number;
  time: number;
}

export default function TypingTest() {
  const [selectedTime, setSelectedTime] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [typedText, setTypedText] = useState('');
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [result, setResult] = useState<TestResult | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomText = useCallback(() => {
    // Combine multiple texts for longer sessions
    const shuffled = [...sampleTexts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3).join(' ');
  }, []);

  const resetTest = useCallback(() => {
    setIsRunning(false);
    setIsFinished(false);
    setTypedText('');
    setCorrectChars(0);
    setIncorrectChars(0);
    setTimeLeft(selectedTime);
    setResult(null);
    setCurrentText(getRandomText());
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [selectedTime, getRandomText]);

  useEffect(() => {
    setCurrentText(getRandomText());
  }, [getRandomText]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (isFinished) {
      const elapsed = selectedTime - timeLeft || selectedTime;
      const minutes = elapsed / 60;
      const words = correctChars / 5;
      const wpm = Math.round(words / minutes) || 0;
      const totalChars = correctChars + incorrectChars;
      const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;
      setResult({ wpm, accuracy, correctChars, incorrectChars, totalChars, time: elapsed });
    }
  }, [isFinished, correctChars, incorrectChars, selectedTime, timeLeft]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (!isRunning && !isFinished && value.length > 0) {
      setIsRunning(true);
    }

    if (isFinished) return;

    const newTyped = value;
    let correct = 0;
    let incorrect = 0;

    for (let i = 0; i < newTyped.length; i++) {
      if (i < currentText.length) {
        if (newTyped[i] === currentText[i]) {
          correct++;
        } else {
          incorrect++;
        }
      }
    }

    setTypedText(newTyped);
    setCorrectChars(correct);
    setIncorrectChars(incorrect);

    // Auto-finish if all text typed
    if (newTyped.length >= currentText.length) {
      setIsRunning(false);
      setIsFinished(true);
    }
  };

  const handleTimeSelect = (time: number) => {
    setSelectedTime(time);
    setTimeLeft(time);
    setIsRunning(false);
    setIsFinished(false);
    setTypedText('');
    setCorrectChars(0);
    setIncorrectChars(0);
    setResult(null);
    setCurrentText(getRandomText());
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const liveWPM = isRunning
    ? Math.round((correctChars / 5) / ((selectedTime - timeLeft) / 60)) || 0
    : 0;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Time Selection */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-sm font-medium text-gray-500 mr-2">Duration:</span>
        {timeOptions.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeSelect(time)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedTime === time
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {time}s
          </button>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <div className="text-3xl font-bold text-primary-600 font-mono">
            {isRunning ? liveWPM : result ? result.wpm : 0}
          </div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">WPM</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <div className={`text-3xl font-bold font-mono ${timeLeft <= 10 && isRunning ? 'text-red-500' : 'text-gray-900'}`}>
            {formatTime(timeLeft)}
          </div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">Time Left</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <div className="text-3xl font-bold text-green-600 font-mono">
            {result ? result.accuracy : typedText.length > 0 ? Math.round((correctChars / (correctChars + incorrectChars)) * 100) || 0 : 100}%
          </div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">Accuracy</div>
        </div>
      </div>

      {/* Text Display */}
      <div
        className="bg-white rounded-xl border border-gray-200 p-6 mb-4 font-mono text-lg leading-relaxed cursor-text min-h-[150px] relative"
        onClick={() => inputRef.current?.focus()}
      >
        {currentText.split('').map((char, index) => {
          let className = 'typing-char ';
          if (index < typedText.length) {
            className += typedText[index] === char ? 'correct' : 'incorrect';
          } else if (index === typedText.length) {
            className += 'current';
          } else {
            className += 'text-gray-400';
          }
          return (
            <span key={index} className={className}>
              {char}
            </span>
          );
        })}
      </div>

      {/* Hidden Input */}
      <textarea
        ref={inputRef}
        value={typedText}
        onChange={handleInput}
        disabled={isFinished}
        className="sr-only"
        autoFocus
        aria-label="Type the text shown above"
      />

      {/* Instructions / Results */}
      {!isRunning && !isFinished && (
        <p className="text-center text-gray-500 text-sm mb-4">
          Click on the text above and start typing to begin the test
        </p>
      )}

      {result && (
        <div className="bg-gradient-to-br from-primary-50 to-indigo-50 rounded-xl border border-primary-200 p-6 mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">🎉 Test Complete!</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{result.wpm}</div>
              <div className="text-xs text-gray-500">Words Per Minute</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{result.accuracy}%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{result.correctChars}</div>
              <div className="text-xs text-gray-500">Correct Characters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">{result.incorrectChars}</div>
              <div className="text-xs text-gray-500">Errors</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {result.wpm >= 80 ? '🏆 Excellent! You type faster than most professionals!' :
               result.wpm >= 60 ? '👏 Great job! You have above-average typing speed.' :
               result.wpm >= 40 ? '👍 Good work! Keep practicing to improve further.' :
               '💪 Keep practicing! Regular typing exercises will help you improve.'}
            </p>
          </div>
        </div>
      )}

      {/* Reset Button */}
      <div className="text-center">
        <button
          onClick={resetTest}
          className="px-6 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
        >
          {isFinished ? '🔄 Try Again' : '↻ Reset Test'}
        </button>
      </div>
    </div>
  );
}
