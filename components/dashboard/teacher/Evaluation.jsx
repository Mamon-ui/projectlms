import Link from 'next/link'
import React from 'react'

const Evaluation = () => {

  const Papers = [
    {
      subject: "Computer Science",
      class: "IX",
      section: "E",
      marks: 30,
      responses: 50,
    },
    {
      subject: "Social Science",
      class: "VIII",
      section: "A",
      marks: 50,
      responses: 42,
    },
    {
      subject: "Mathematics",
      class: "XII",
      section: "B",
      marks: 50,
      responses: 50,
    },
  ]


  return (
    <main className="min-h-screen flex flex-col justify-start items-center p-10 gap-10 mx-auto my-10 text-center">
      <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Papers</h1>
      <section className="w-5/6 bg-black flex- flex-col justify-center items-center">
        <div className="grid grid-cols-[5fr_1fr_1fr_1fr_1fr_1fr] place-items-center p-4 bg-black text-xl text-white font-semibold">
          <span> Subject </span>
          <span> Class </span>
          <span> Section </span>
          <span> Marks </span>
          <span> Responses </span>
          <span> Check </span>
        </div>
        {
          Papers.map((paper, idx) => {
            return (
              <div key={idx} className="grid grid-cols-[5fr_1fr_1fr_1fr_1fr_1fr] place-items-center bg-white p-4 text-lg">
                <span className="text-center"> {paper.subject} </span>
                <span className="text-center"> {paper.class} </span>
                <span className="text-center"> {paper.section} </span>
                <span className="text-center"> {paper.marks} </span>
                <span className="text-center"> {paper.responses} </span>
                <span className="text-center underline"> <Link href={`/paper/check${paper.subject}`}>Check &gt; </Link> </span>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default Evaluation