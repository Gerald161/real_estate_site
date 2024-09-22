import React from 'react';
import { useState, useRef } from 'react';
import styles from "../styles/questions.module.css";
import Image from 'next/image';
import profileImg from "../../images/1.jpg";

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

            myHeaders.append("Authorization", `Token ${process.env.NEXT_PUBLIC_TOKEN}`);

            var formdata = new FormData();
            
            chatlog.current.push({"role": "user", "content": previous_question});

            formdata.append("question", JSON.stringify(chatlog.current));

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
            };

            // var res = await fetch(`${process.env.NEXT_PUBLIC_API}food/askAIQuestion`, requestOptions)

            // var data = await res.json();

            // oldQuestions.push({"role": "assistant", "message": data["response"]})

            setQuestionsAsked(oldQuestions);

            // chatlog.current.push({"role": "assistant", "content": data["response"]});

            setAnswerLoading(false);
        }
    }

    return (
        <div className={styles.chat_and_ai_button_container}>
        <div ref={questionSectionRef} className={styles.questionSection}>
          <h2>AI Assistant</h2>

          <form onSubmit={(e)=>{askAiQuestion(e)}} method='post' className={styles.message_content_section}>
            <div className={styles.chat_window}>
              <div className={styles.output}>
                {
                    questionsAsked.length == 0 ?
                    <p className={styles.no_question}>Please ask any question to our helpful assistant</p>
                    :
                    questionsAsked.map((question, index)=>
                        <div key={index} className={styles.profile_container}>
                            {
                                question.role !== "user" ?
                                <div className={styles.profile_pic}></div>
                                :
                                <div className={styles.profile_pic2}>
                                    <Image
                                      src={profileImg}
                                      alt='Profile Image'
                                      height={100}
                                      width={100}
                                    />
                                </div>
                            }
                            {/* <p>:</p> */}
                            <p className={styles.response}>{question.message}</p>
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
              <input value={aiQuestion} onChange={(e)=>{setAiQuestion(e.target.value)}} className={styles.message} type="text" placeholder={`Ask about ${slug.split("-")[0]}`} />
              <button className={styles.send}>Send</button>
            </div>
          </form>
        </div>

        <div className={styles.ai_button_container}>
          <p>AI Chat</p>
          <div onClick={(e)=>{
            if(questionSectionRef.current!.style.display == "none" || questionSectionRef.current!.style.display == ""){
              questionSectionRef.current!.style.display = "block";
            }else{
              questionSectionRef.current!.style.display = "none";
            }
          }} className={styles.ai_chat_button}>
            <Image
              src={profileImg}
              alt='Chat Logo'
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    )
}