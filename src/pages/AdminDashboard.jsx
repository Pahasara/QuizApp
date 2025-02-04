import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    timeLimit: '',
    questions: []
  });

  const addQuestion = () => {
    setQuizData(prev => ({
      ...prev,
      questions: [...prev.questions, {
        questionText: '',
        options: ['', '', '', ''],
        correctAnswer: '',
        marks: ''
      }]
    }));
  };

  const updateQuestion = (index, field, value) => {
    setQuizData(prev => {
      const newQuestions = [...prev.questions];
      newQuestions[index] = {
        ...newQuestions[index],
        [field]: value
      };
      return { ...prev, questions: newQuestions };
    });
  };

  const updateOption = (questionIndex, optionIndex, value) => {
    setQuizData(prev => {
      const newQuestions = [...prev.questions];
      const newOptions = [...newQuestions[questionIndex].options];
      newOptions[optionIndex] = value;
      newQuestions[questionIndex] = {
        ...newQuestions[questionIndex],
        options: newOptions
      };
      return { ...prev, questions: newQuestions };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('quizData', JSON.stringify(quizData));
    alert('Quiz saved successfully!');
  };

  return (
    <div className="quiz-creator">
      <h1>Admin Dashboard: Create Quiz</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Quiz Title</label>
          <input
            id="title"
            type="text"
            value={quizData.title}
            onChange={(e) => setQuizData(prev => ({ ...prev, title: e.target.value }))}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={quizData.description}
            onChange={(e) => setQuizData(prev => ({ ...prev, description: e.target.value }))}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="timeLimit">Time Limit (minutes)</label>
          <input
            id="timeLimit"
            type="number"
            min="1"
            value={quizData.timeLimit}
            onChange={(e) => setQuizData(prev => ({ ...prev, timeLimit: e.target.value }))}
            required
          />
        </div>

        <div className="questions-section">
          <h2>Questions</h2>
          {quizData.questions.map((question, qIndex) => (
            <div key={qIndex} className="question-block">
              <div className="form-group">
                <label>Question Text</label>
                <input
                  type="text"
                  value={question.questionText}
                  onChange={(e) => updateQuestion(qIndex, 'questionText', e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Options</label>
                {question.options.map((option, oIndex) => (
                  <input
                    key={oIndex}
                    type="text"
                    value={option}
                    placeholder={`Option ${oIndex + 1}`}
                    onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                    required={oIndex < 2}
                  />
                ))}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Correct Answer (1-4)</label>
                  <input
                    type="number"
                    min="1"
                    max="4"
                    value={question.correctAnswer}
                    onChange={(e) => updateQuestion(qIndex, 'correctAnswer', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Marks</label>
                  <input
                    type="number"
                    min="1"
                    value={question.marks}
                    onChange={(e) => updateQuestion(qIndex, 'marks', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addQuestion}
          className="add-question-btn"
        >
          Add Question
        </button>

        <button
          type="submit"
          className="save-btn"
        >
          Save Quiz
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
