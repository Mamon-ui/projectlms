import React from 'react'

const StudyMaterials = () => {

  const classes = [...Array(13).keys()]
  console.log(classes)

  return (
    <>
      <main className="mx-auto my-10 min-h-screen w-full text-center flex flex-col justify-start items-center">
        <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Study Material</h1>
        <section className="w-full grid gap-20 p-10 grid-cols-3">

          {
            classes.map((grade, idx) => {
              return (
                <>
                  <div className="bg-white p-10 grid place-items-center rounded-xl shadow-lg shadow-slate-300 hover:font-medium cursor-pointer transition-all" key={idx}>
                    {grade == 0 ? "KG" : "Class " + grade}
                  </div>
                </>
              )
            })
          }
        </section>
      </main>
    </>
  )
}

export default StudyMaterials