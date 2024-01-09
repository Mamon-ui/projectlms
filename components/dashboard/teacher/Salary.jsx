import Link from 'next/link'
import React from 'react'

const Salary = () => {

  const Salaries = [
    {
      title: 'Salary - Jul',
      amount: 45000,
      date: 'July 7, 2022',
      document: (e) => { alert("Printing " + e.target.id) }
    },
    {
      title: 'Salary - Aug',
      amount: 50000,
      date: 'Aug 7, 2022',
      document: (e) => { alert("Printing " + e.target.id) }
    },
    {
      title: 'Salary - Sep',
      amount: 65000,
      date: 'Sep 7, 2022',
      document: (e) => { alert("Printing " + e.target.id) }
    },
    {
      title: 'Salary - Oct',
      amount: 65000,
      date: 'Oct 7, 2022',
      document: (e) => { alert("Printing " + e.target.id) }
    },
    {
      title: 'Bonus - Diwali',
      amount: 5000,
      date: 'Oct 10, 2022',
      document: (e) => { alert("Printing " + e.target.id) }
    },

  ]

  return (

    <main className="flex flex-col gap-10 justify-start items-center min-h-screen p-10 mx-auto my-10 text-center w-full">
      <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Salary</h1>
      <section className="w-5/6 flex- flex-col justify-center items-center">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-lg">S.No.</th>
                <th className="text-lg">Title</th>
                <th className="text-lg">Amount</th>
                <th className="text-lg">Date</th>
                <th className="text-lg">Print</th>
              </tr>
            </thead>
            <tbody>
              {
                Salaries.map((salary, index) => {

                  return (
                    <tr key={index} className="hover:bg-slate-500">
                      <th>{index + 1}</th>
                      <td>{salary.title}</td>
                      <td>&#8377; {salary.amount}</td>
                      <td>{salary.date}</td>
                      <td className="underline cursor-pointer" id={salary.title} onClick={salary.document}>Print &gt;</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Salary