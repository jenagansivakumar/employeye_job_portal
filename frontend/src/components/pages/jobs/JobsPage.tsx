import React, { useState } from 'react'
import { Job } from '../../../models/JobSchema'

export const JobsPage = () => {
    const [jobs, setJobs] = useState<Job[]>([])
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
  return (
    <div>JobsPage</div>
  )
}
