import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button } from "@/components/ui/button";
import QuizControls from "./quizControls";
import { setAnswer } from "@/redux/features/quizSlice";

function Question() {
  const dispatch = useAppDispatch();

  const { questions, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];
  // console.log(userAnswer);

  const handleAnswerChange = (ans: string) => {
    dispatch(
      setAnswer({
        questionIndex: currentQuestionIndex,
        answer: ans,
      })
    );
    // console.log(ans);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          {/* <CardDescription>{}</CardDescription> */}
        </CardHeader>

        <CardContent>
          <div>
            {currentQuestion.options.map((option, index) => (
              <Button
                variant={option === currentAnswer ? "default" : "outline"}
                onClick={() => handleAnswerChange(option)}
                className="w-full mt-3"
                size={"lg"}
                key={index}
              >
                {" "}
                {option}
              </Button>
            ))}
          </div>
          <QuizControls></QuizControls>
        </CardContent>
      </Card>
    </div>
  );
}

export default Question;
