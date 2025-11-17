import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, XCircle, Award } from 'lucide-react';
import { questions } from '@/data/questions';
import { useStore } from '@/stores/useStore';

export function Assessment() {
  const { addAssessmentScore, userProgress } = useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleSubmit = () => {
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowExplanation(true);
    addAssessmentScore(currentQuestion.id, correct);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setShowExplanation(false);
      setIsCorrect(null);
    }
  };

  const totalAnswered = userProgress.assessmentScores.length;
  const totalCorrect = userProgress.assessmentScores.filter((s) => s.correct).length;
  const scorePercentage = totalAnswered > 0 ? (totalCorrect / totalAnswered) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Assessment</h1>
        <p className="text-muted-foreground">
          Test your knowledge of diagnostic and stabilization principles
        </p>
      </div>

      {/* Score Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Your Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{totalAnswered}</div>
              <div className="text-sm text-muted-foreground">Questions Answered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">{totalCorrect}</div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{scorePercentage.toFixed(0)}%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={currentQuestion.difficulty === 'easy' ? 'secondary' : currentQuestion.difficulty === 'medium' ? 'default' : 'destructive'}>
              {currentQuestion.difficulty}
            </Badge>
            <Badge variant="outline">{currentQuestion.type.toUpperCase()}</Badge>
          </div>
          <CardTitle className="text-xl leading-relaxed">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentQuestion.type === 'mcq' && currentQuestion.options && (
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrectAnswer = option === currentQuestion.correctAnswer;
                const showCorrectness = showExplanation && isSelected;

                return (
                  <div
                    key={index}
                    onClick={() => !showExplanation && setSelectedAnswer(option)}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      isSelected && !showExplanation
                        ? 'bg-primary/10 border-primary'
                        : showExplanation && isCorrectAnswer
                        ? 'bg-green-500/10 border-green-500'
                        : showExplanation && isSelected && !isCorrectAnswer
                        ? 'bg-destructive/10 border-destructive'
                        : 'border-border hover:bg-accent'
                    } ${showExplanation ? 'cursor-default' : ''}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm">{option}</span>
                      {showExplanation && isCorrectAnswer && (
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      )}
                      {showCorrectness && !isCorrect && (
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!showExplanation ? (
            <Button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className="w-full"
            >
              Submit Answer
            </Button>
          ) : (
            <>
              <Card className={`border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-destructive'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        Correct!
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-destructive" />
                        Incorrect
                      </>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{currentQuestion.explanation}</p>
                </CardContent>
              </Card>

              <Button
                onClick={handleNext}
                className="w-full"
                disabled={currentQuestionIndex === questions.length - 1}
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Completed!'}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
