import { React,useState, useRef } from "react";
import { useForm } from "react-hook-form";
import '../../layout/carRecomandationForm.css';
import { useHistory } from "react-router";

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
    const [resultPrice, setPrice] = useState(0);
    const [resultModel, setModel] = useState("");
    const [resultFuel, setFuel] = useState("");
    const history = useHistory();
    var results = new Array();
    

     
      
      async function AnalyzeResults(){
        

        if(results[0]== "Small cars and town cars"){
          setModel("CityCar");
        }else if(results[0]== "Family cars"){
          setModel("Monospace");
        }else if(results[0]== "Berlines"){
          setModel("Berline");
        }else if(results[0]== "Trucks and roadster"){
          setModel("SUVorOffRoad");
        }

        if(results[1]== "Less than 10 000€"){
          setPrice(10000);
        }else if(results[1]== "Less than 2 500€"){
          setPrice(2500);
        }else if(results[1]== "Less than 5 000€"){
          setPrice(5000);
        }else if(results[1]== "Neither or more than 10 000€"){
          setPrice(100000);
        }

        if(results[3]== "Yes, diesel"){
          setFuel("Diesel");
        }else if(results[3]== "Yes, gasoline"){
          setFuel("Gasoline");
        }else if(results[3]== "Yes, electric"){
          setFuel("Electric");
        }else if(results[3]== "No"){
          setFuel("");
        }

        let objData = {
          price : resultPrice,
          model: resultModel,
          fuel: resultFuel,
        }
        history.push({
                    pathname: '/announcements',
                    state: {object:objData}
      })
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
                        answerOption =>( <button onClick={
                          
        function onClickHandler() {

           if(currentQuestion === questions.length - 1){
            
            results.push(answerOption.answerText);
            AnalyzeResults();
               }else{
                results.push(answerOption.answerText);
               // Note we can't do currentQuestion++  -> const!
              // So we create a temp variable called 'nextQuestion' that is equal to the currentQuestion + 1
              const nextQuestion =  currentQuestion +1;
                    
              // Change the state -> currentQuestion => nextQuestion
              setCurrentQuestion(nextQuestion)
              // Note we call setCurrentQuestion to set a new value, to change the state of our currentQuestion.
               }
               }}>{answerOption.answerText}</button> )) 
                }
            </div>				
			
		</div>
    </div>
	);
}

