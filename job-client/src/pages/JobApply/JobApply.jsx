import React from 'react'
import { useParams } from 'react-router-dom';
import aplicationL from '../../assets/lottie/Job application.json'
import Lottie from 'lottie-react';
import useAuth from '../../hooks/useAuth';
const JobApply = () => {
    const { id } = useParams();
    //  console.log(id);
    const {user}=useAuth();

 
     const submitJobApplication = e => {
         e.preventDefault();
         const form = e.target;
         const linkedIn = form.linkedIn.value;
         const github = form.github.value;
         const resume = form.resume.value;
 
         console.log(linkedIn, github, resume);
         const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }
 
     }
  return (
    <div className="hero bg-base-200 min-h-screen">
             <div className="hero-content flex-col lg:flex-row-reverse">
                 <div className="text-center lg:text-left">
                   <Lottie animationData={aplicationL}></Lottie>
                 </div>
                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                     <form onSubmit={submitJobApplication} className="card-body">
                         <div className="form-control">
                             <label className="label">
                                 <span className="label-text">LinkedIn URL</span>
                             </label>
                             <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
                         </div>
                         <div className="form-control">
                             <label className="label">
                                 <span className="label-text">Github URL</span>
                             </label>
                             <input type="url" name='github' placeholder="Github URL" className="input input-bordered" required />
                         </div>
                         <div className="form-control">
                             <label className="label">
                                 <span className="label-text">Resume URL</span>
                             </label>
                             <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
                         </div>
                         <div className="form-control mt-6">
                             <button className="btn btn-primary">Apply</button>
                         </div>
                     </form>
                 </div>
             </div>
         </div>
  )
}

export default JobApply
