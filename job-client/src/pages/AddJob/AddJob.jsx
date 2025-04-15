import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const AddJob = () => {
    const {user}=useAuth();
    const navigate=useNavigate();
    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries())
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData)
        const { min, max, currency, ...newJob } = initialData;
        console.log(min, max, currency, newJob)
        newJob.salaryRange = { min, max, currency }
      
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)
        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Has been added.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJobs')
                }
            })
    }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 shadow-xl rounded-2xl mt-10 mb-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Post a New Job</h2>
      <form onSubmit={handleAddJob} className="space-y-6">
        {/* Job Title & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text font-medium">Job Title</span>
            </label>
            <input type="text" name="title" placeholder="Job Title" className="input input-bordered w-full" required />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-medium">Job Location</span>
            </label>
            <input type="text" name="location" placeholder="Job Location" className="input input-bordered w-full" required />
          </div>
        </div>

        {/* Job Type & Field */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text font-medium">Job Type</span>
            </label>
            <select name="type" className="select select-bordered w-full">
              <option disabled selected>Pick a Job Type</option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text font-medium">Job Field</span>
            </label>
            <select name="field" className="select select-bordered w-full">
              <option disabled selected>Pick a Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>
        </div>

        {/* Salary Range */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Salary Range</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" name="min" placeholder="Min" className="input input-bordered w-full" required />
            <input type="text" name="max" placeholder="Max" className="input input-bordered w-full" required />
            <select name="currency" className="select select-bordered w-full">
              <option disabled selected>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Job Description</span>
          </label>
          <textarea name="description" className="textarea textarea-bordered w-full min-h-[120px]" placeholder="Job Description" required />
        </div>

        {/* Company Name */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Company Name</span>
          </label>
          <input type="text" name="company" placeholder="Company Name" className="input input-bordered w-full" required />
        </div>

        {/* Requirements */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Job Requirements</span>
          </label>
          <textarea name="requirements" className="textarea textarea-bordered w-full min-h-[100px]" placeholder="Put each requirement in a new line" required />
        </div>

        {/* Responsibilities */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Job Responsibilities</span>
          </label>
          <textarea name="responsibilities" className="textarea textarea-bordered w-full min-h-[100px]" placeholder="Write each responsibility in a new line" required />
        </div>
        <div>
          <label className="label">
            <span className="label-text font-medium">Deadline</span>
          </label>
          <textarea name="deadline" className="textarea textarea-bordered w-full min-h-[120px]" placeholder="Job Deadline" required />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-full md:w-auto px-10 bg-fuchsia-700 text-white">
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
