import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import './tabs.css';

const url = 'https://course-api.com/react-tabs-project'

function Tabs() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const { company, dates, duties, title } = jobs[value]
  
  return (
    <section className="section-t">
      <div className="title-t">
        <h2>experience</h2>
        <div className="underline-t"></div>
      </div>
      <div className="jobs-center-t">
        {/* btn container */}
        <div className="btn-container-t">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn-t ${index === value && 'active-btn-t'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info-t">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date-t">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc-t">
                <FaAngleDoubleRight className="job-icon-t"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className="btn-t">
        more info
      </button>
    </section>
  )
}

export default Tabs
