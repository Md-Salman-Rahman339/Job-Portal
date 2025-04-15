import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
const JobDetails = () => {
    const {
        _id,
        title,
        company,
        company_logo,
        location,
        salaryRange,
        description,
        requirements,
        responsibilities,
        employmentType,
        experienceLevel,
        postedDate,
      }=useLoaderData();
  return (
    <div className="card bg-base-100 shadow-xl rounded-2xl border border-fuchsia-700 max-w-4xl mx-auto my-6">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border-b">
      <img src={company_logo} alt="Company Logo" className="w-20 h-20 object-contain rounded-md" />
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <h3 className="text-lg text-gray-500">{company}</h3>
        <p className="flex items-center gap-1 text-sm text-gray-600">
          <FaMapMarkerAlt /> {location}
        </p>
      </div>
    </div>

    <div className="card-body space-y-4">
      <div>
        <h4 className="text-lg font-semibold">Job Description</h4>
        <p>{description}</p>
      </div>

      {responsibilities && (
        <div>
          <h4 className="text-lg font-semibold">Responsibilities</h4>
          <ul className="list-disc list-inside">
            {responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h4 className="text-lg font-semibold">Requirements</h4>
        <div className="flex flex-wrap gap-2">
          {requirements.map((skill, i) => (
            <span key={i} className="badge badge-outline badge-lg hover:badge-accent cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold">Salary:
         
           
            ${salaryRange.min} - {salaryRange.max} {salaryRange.currency}
            </h4>
        </div>
        <div>
          <h4 className="font-semibold">Employment Type</h4>
          <p>{employmentType || 'N/A'}</p>
        </div>
        <div>
          <h4 className="font-semibold">Experience Level</h4>
          <p>{experienceLevel || 'N/A'}</p>
        </div>
        <div>
          <h4 className="font-semibold">Posted</h4>
          <p>{postedDate || 'N/A'}</p>
        </div>
      </div>

      <div className="card-actions justify-end mt-4">
        <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default JobDetails
