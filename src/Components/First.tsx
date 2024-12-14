import { Devvit, useState } from "@devvit/public-api";
import { Columns } from "@devvit/kit";

interface FirstProps {
  page: string;
  updateParentValue: (newValue: string) => void;
}

const questions = [
  {
    question: "What kind of crust do you like?",
    options: [
      { name: "Thin", spicy: 0, tangy: 0, bitter: 0, sweet: 0 },
      { name: "Thick", spicy: -2, tangy: -1, bitter: 0, sweet: 1 },
      { name: "Cheese-Burst", spicy: 0, tangy: 0, bitter: 0, sweet: 2 },
      { name: "Stuffed-Crust", spicy: 0, tangy: 0, bitter: 0, sweet: 1 },
    ],
  },
  {
    question: "Which sauce do you want?",
    options: [
      { name: "Marinara", spicy: 0, tangy: 4, bitter: 0, sweet: 2 },
      { name: "Alfredo", spicy: 0, tangy: 0, bitter: 0, sweet: 1},
      { name: "Garlic Cream", spicy: 0, tangy: 0, bitter: 1, sweet: 0 },
      { name: "Olive and Garlic", spicy: 0, tangy: 1, bitter: 2, sweet: 0 },
    ],
  },
  {
    question: "The Cheese Of Your Liking?!",
    options: [
      { name: "Mozarella", spicy: 0, tangy: 0, bitter: 0, sweet: 1 },
      { name: "Parmesan", spicy: 0, tangy: 1, bitter: 1, sweet: 0 },
      { name: "Cheddar", spicy: 0, tangy: 2, bitter: 0, sweet: 0 },
      { name: "No Cheese...", spicy: 0, tangy: 0, bitter: 0, sweet: 0 },
    ],
  },
  {
    question: "The Topping is crucial!",
    options: [
      { name: "Mushroom", spicy: 0, tangy: 0, bitter: 1, sweet: 0 },
      { name: "Pepperoni", spicy: 2, tangy: 1, bitter: 0, sweet: 0},
      { name: "Shrimp", spicy: 0, tangy: 1, bitter: 0, sweet: 1 },
      { name: "Pine Apple", spicy: 0, tangy: 2, bitter: 1, sweet: 3 },
    ],
  },
  {
    question: "Don't forget the seasonings!",
    options: [
      { name: "Oregano",spicy: 0, tangy: 1, bitter: 1, sweet: 0 },
      { name: "Chilli Flakes", spicy: 4, tangy: 1, bitter: 0, sweet: 0},
      { name: "Garlic Powder",spicy: 0, tangy: 1, bitter: 1, sweet: 0 },
      { name: "Basil", spicy: 0, tangy: 1, bitter: 0, sweet: 1 },
    ],
  },
];

export function First({ page, updateParentValue }: FirstProps) {
  const [counter, setCounter] = useState(0)
    const [questionIndex,setQuestionIndex]=useState(0)
    const [score,setScore]=useState(0)
    const [currentQuestion,setCurrentQuestion]=useState('')
    const [selection,setSelection]=useState("")
  const [tastes,setTastes]=useState({spicy: 0, tangy: 0, bitter: 0, sweet: 0 })
    const [spice,setSpice]=useState(0)
    const [sweet,setSweet]=useState(0)
    const [tangy,setTangy]=useState(0)
    const [bitter,setBitter]=useState(0)

    const increaseIndex=()=>{

      if(questionIndex!=questions.length-1)
      {
          setQuestionIndex(questionIndex+1)
      }
      else
      {
        
        updateParentValue("Final")
      }
    }

  const changeTaste=(data)=>{
      setTastes(data)
  }

    
    return (
      <vstack alignment='center' height='100%' gap='medium' padding="small">
        <text  weight='bold'>
          Current Question Index-{questionIndex}
          ---------------- {questions.length}
        </text>

         <text size="xlarge" >
           {questions[questionIndex].question}
        </text>
        <vstack gap="small"  width="100%">
           <Columns columnCount={2}    gapY="20px" order="column">
           {
          questions[questionIndex].options.map((option)=>(
            <hstack 
              gap="small"
              border="thick"
              alignment="center"
               onPress={() => {
                 setSelection(option.name)
                 changeTaste(option)
               }}
           
              >
              <hstack   gap="small">
                      <icon
              name={
                selection === option.name
                  ? 'radio-button-fill'
                  : 'radio-button-outline'
              }
            />
            <text>
            {option.name}
            </text>
              </hstack>
        
            </hstack>
             
            
          ))
        }
           </Columns>
        </vstack>
     
        
        <button onPress={()=>{
        
        increaseIndex()
        setSelection("")

        setSpice(spice+tastes.spicy)
        setBitter(bitter+tastes.bitter)
        setTangy(tangy+tastes.tangy)
        setSweet(sweet+tastes.sweet)
        
      }} appearance="primary" disabled={!selection && questionIndex!=questions.length}>
        Next
        </button>

        <text>
        Score-{score}
        </text>
        <text>
          Current Option-{selection}
        </text>

    
        <hstack gap="small">
        <text>Current Spice-{spice}</text>
          
        <text> Current Sweet-{sweet}</text>

          <text>Current Bitter-{bitter}</text>
          
        <text>Current Tangy-{tangy}</text>

          
        </hstack>
        
      </vstack>
    )
}
