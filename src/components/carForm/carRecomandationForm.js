import { React,useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import '../../layout/carRecomandationForm.css';
import { db } from "../../firebase/firebase.js";

export default function CarRecomandation() {

	const questions = [
		{
			questionText: 'What kind of car are you looking for?',
			answerOptions: [
				{ answerText: 'Small cars and town cars'},
				{ answerText: 'Family cars'},
				{ answerText: 'Berlines' },
				{ answerText: 'Trucks and roadster'},
			],
		}, 
		{
			questionText: 'What is your budget ?',
			answerOptions: [
				{ answerText: 'Less than 2 500€' },
				{ answerText: 'Less than 5 000€' },
				{ answerText: 'Less than 10 000€' },
				{ answerText: 'Neither or more than 10 000€' },
			],
		},
		{
			questionText: 'Will it be your first car ?',
			answerOptions: [
				{ answerText: 'Yes, my first car.' },
				{ answerText: 'No, my second car' },
				{ answerText: "No, but I don't know much about cars" },
				{ answerText: "No, I'm an expert" },
			],
		},
		{
			questionText: 'Do you have a preference for the fuel ?',
			answerOptions: [
				{ answerText: 'Yes, diesel' },
				{ answerText: 'Yes, gasoline' },
				{ answerText: 'Yes, electric' },
				{ answerText: 'No' },
			],
		},
	];
    // Initialize State using useState()
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [data, setData] = useState([]);
    let answers = [];

    // Create onClickHandler
    const onClickHandler = () => {
      if(currentQuestion === questions.length - 1){
        //if(questions[0]== "")
        console.log("end"); 
      }else{
        // Note we can't do currentQuestion++  -> const!
        // So we create a temp variable called 'nextQuestion' that is equal to the currentQuestion + 1
        const nextQuestion =  currentQuestion +1;
        console.log(currentQuestion);
        // Change the state -> currentQuestion => nextQuestion
        setCurrentQuestion(nextQuestion)
        // Note we call setCurrentQuestion to set a new value, to change the state of our currentQuestion.
      }
    }

    const answerOption = () => {
      if(currentQuestion === questions.length - 1){
        //if(questions[0]=="")
        console.log(currentQuestion[0]); 
      }else{
        // Note we can't do currentQuestion++  -> const!
        // So we create a temp variable called 'nextQuestion' that is equal to the currentQuestion + 1
        const nextQuestion =  currentQuestion +1;
        // Change the state -> currentQuestion => nextQuestion
        setCurrentQuestion(nextQuestion)
        // Note we call setCurrentQuestion to set a new value, to change the state of our currentQuestion.
      }
    }

	return (
    <div className='questionBox'>
		<div className='questions'>

            <div className='question-section'>
                <div className='question-count'>
                 {/* Note we can access the currenQuestion and add one(index starting at 0)
                     To display the currentQuestion of the user */}
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>

            <div className='answer-section'>
                { 
                    questions[currentQuestion].answerOptions.map(
                        answerOption =>( <button onClick={onClickHandler}>{answerOption.answerText}</button> )) 
                }
            </div>				
			
		</div>
    </div>
	);
}

