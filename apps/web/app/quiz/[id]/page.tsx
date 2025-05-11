'use client';
import Quiz from "@repo/ui/Quiz";

function QuizPage({params}: {params: {id: string}}) {
  return <div>
    <div>
        <Quiz
          quizId={params.id}
        />
    </div>
  </div>;
}


export default QuizPage;