import React, { useEffect, useState } from 'react'

const Option = ({ idx, options, setOptions, question, setQuestion }) => {

  const handleOption = (e) => {

    const newOptions = options.map((opt, index) => {
      if (e.target.id == index) {
        return e.target.value
      } else {
        return opt
      }
    })

    setOptions(newOptions)
    setQuestion({ ...question, options: newOptions })
  }

  return (
    <span className="bg-slate-100 text-black rounded-md w-full p-4 text-xl flex justify-start items-center gap-6">
      <input required onChange={() => { setQuestion({ ...question, answer: idx }) }} type="radio" name="time" id="time" className="radio radio-primary" />
      <input required className="outline-none border-none bg-transparent" type="text" name="option" value={options[idx]} onChange={handleOption} id={idx} placeholder={`Option ${idx + 1}.`} />
    </span>
  )
}

const MCQ = () => {

  const [quiz, setQuiz] = useState([])
  const [options, setOptions] = useState(["", "", "", ""])
  const [question, setQuestion] = useState({
    question: "",
    options: options,
    answer: ""
  })

  const handleQuestion = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value })
  }

  const handleQuiz = (e) => {

    e.preventDefault()

    console.log(question)

    setQuestion({ ...question, options: options })
    setQuiz([...quiz, question])
    setQuestion({
      question: "",
      options: options,
      answer: ""
    })
    setOptions(["", "", "", ""])
  }

  // useEffect(() => {
  //   console.log(question)
  // }, [question])

  // useEffect(() => {
  //   console.log("Options => ", options)
  // }, [options])

  return (
    <main className="mx-auto min-h-screen w-full text-center flex flex-col justify-start items-center gap-10 p-10">
      <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Add Question</h1>

      <form onSubmit={handleQuiz} className="w-3/4 bg-white rounded-2xl shadow-lg overflow-hidden shadow-slate-500 flex flex-col justify-between items-center">

        <div className="text-2xl m-4 p-6 text-black w-full flex gap-4 justify-start items-center">
          {quiz.length + 1}.
          <input required type="text" name="question" placeholder="Add Question . . ." value={question.question} onChange={handleQuestion}
            className="w-3/4 text-2xl text-black bg-transparent outline-none border-b-2 border-black focus-within:border-b-4 border-solid" />
        </div>
        <section className="flex flex-col lg:grid lg:grid-cols-2 w-full p-6 gap-6">
          {
            options.map((no, idx) => {
              return <Option options={options} setOptions={setOptions} question={question} setQuestion={setQuestion} key={idx} idx={idx} />
            })
          }
        </section>
        <button type='submit' className="pt-auto w-full p-4 group bg-black text-2xl">
          <span className="bg-white bg-clip-text text-transparent group-hover:bg-gradient-to-r font-semibold from-[#4e37ff] to-[#c027ff]"> Add to Quiz + </span>
        </button>
      </form>
      {
        quiz.length > 0 ?

      <section className="w-3/4 flex flex-col gap-10 py-10">
        <h1 className="text-2xl lg:text-4xl  font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Quiz</h1>

        <section className="w-full flex flex-col justify-center items-center">
          <div className="w-full grid grid-cols-[1fr_5fr_4fr] bg-black text-white font-semibold p-4">
            <span className="text-center w-full text-lg">Q.No.</span>
            <span className="text-center w-full text-lg">Question</span>
            <span className="text-center w-full text-lg">Options</span>
          </div>
          {
            quiz.map((question, index) => {
              return (
                <div key={index} className="w-full grid grid-cols-[1fr_5fr_1fr_1fr_1fr_1fr] bg-white text-black p-4 border-black border-solid border">
                  <span key={index} className="text-center w-full text-lg">{index + 1}</span>
                  <span key={question.question} className="text-center w-full text-lg">{question.question}</span>
                  {
                    question.options.map((option, idx) => {
                      return (
                        idx == question.answer ?
                          <span key={idx} className="text-center w-full text-purple-500 text-lg">{option}</span>
                          :
                          <span key={idx} className="text-center w-full text-lg">{option}</span>
                      )
                    })
                  }
                </div>
              )
            })
          }

        </section>
      </section>
      :
      null
      }
    </main>
  )
}

export default MCQ