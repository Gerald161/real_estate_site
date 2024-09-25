import React from 'react';
import { useState, useRef } from 'react';
import styles from "../styles/questions.module.css";
import Image from 'next/image';
import profileImg from "../../images/1.jpg";
import chatBotImg from "../../images/chatbot.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons';

interface QuestionResponses {
    role: string;
    message: string;
}

export default function QuestionsSection({ slug }: { slug: string }) {
    const questionSectionRef = useRef<HTMLDivElement | null>(null);

    const chatlog = useRef([
        {
            "role": "system", 
            "content": `You are a helpful assistant that answers questions about Housing in a Real Estate Website`,
        },
    ])

    const [aiQuestion, setAiQuestion] = useState("");

    const [questionsAsked, setQuestionsAsked] = useState<QuestionResponses[]>([]);

    const [answerLoading, setAnswerLoading] = useState(false);
  
    const askAiQuestion = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        if(aiQuestion !== ""){
            setAnswerLoading(true);

            var previous_question = aiQuestion;

            setAiQuestion("");

            var oldQuestions = [...questionsAsked];

            oldQuestions.push({"role": "user", "message": previous_question});

            setQuestionsAsked(oldQuestions);

            var myHeaders = new Headers();

            // myHeaders.append("Authorization", `Token ${process.env.NEXT_PUBLIC_TOKEN}`);

            var formdata = new FormData();
            
            chatlog.current.push({"role": "user", "content": previous_question});

            formdata.append("question", JSON.stringify(chatlog.current));

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                body: formdata,
            };

            // var res = await fetch(`http://127.0.0.1:8000/food/askAIQuestion`, requestOptions)

            // var data = await res.json();

            // oldQuestions.push({"role": "assistant", "message": data["response"]})

            // returning static response here please delete
              oldQuestions.push({"role": "assistant", "message": "Wonderfully returned message"})
            // static response ends here

            setQuestionsAsked(oldQuestions);

            // chatlog.current.push({"role": "assistant", "content": data["response"]});

            setAnswerLoading(false);
        }
    }

    return (
      <div className={styles.chat_and_ai_button_container}>
        <div ref={questionSectionRef} className={`${styles.questionSection} questionSection`}>
          <h2 style={{textAlign: "center"}}>AI Assistant</h2>

          <form onSubmit={(e)=>{askAiQuestion(e)}} method='post' className={`${styles.message_content_section} message_content_section`}>
            <div className={`${styles.chat_window} chat_window`}>
              <div className={`${styles.output} output`}>
                {
                    questionsAsked.length == 0 ?
                    <p className={styles.no_question}>Please ask any question to our helpful assistant</p>
                    :
                    questionsAsked.map((question, index)=>
                        <div key={index} className={styles.profile_container}>
                            {
                                question.role === "user" ?
                                <div className={`${styles.profile_pic} profile_pic`}>
                                  {question.message}
                                </div>
                                :
                                <>
                                  <div className={`${styles.profile_pic2} profile_pic2`}>
                                      <Image
                                        src={chatBotImg}
                                        alt='Profile Image'
                                        height={100}
                                        width={100}
                                      />
                                  </div>
                                  <p className={`${styles.response} response`}>{question.message}</p>
                                </>
                            }
                        </div>
                    )
                }
                {
                    answerLoading == true &&
                    <p className={styles.no_question}>Please wait...</p>
                }
              </div>
            </div>

            <div className={styles.message_compose_section}>
              <FontAwesomeIcon icon={faPaperclip} style={{cursor: "pointer"}}/>
              <input value={aiQuestion} onChange={(e)=>{setAiQuestion(e.target.value)}} className={`${styles.message} message`} type="text" placeholder="Ask about property"/>
              <button className={styles.send}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>

        <div className={`${styles.ai_button_container} ai_button_container`}>
          <p>AI Chat</p>
          <div onClick={(e)=>{
            if(questionSectionRef.current!.style.display == "none" || questionSectionRef.current!.style.display == ""){
              questionSectionRef.current!.style.display = "block";
            }else{
              questionSectionRef.current!.style.display = "none";
            }
          }} className={`${styles.ai_chat_button} ai_chat_button`}>
            <Image
              src={chatBotImg}
              alt='Chat Logo'
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    )
}