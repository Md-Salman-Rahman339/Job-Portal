import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
  const applications = useLoaderData();
  const appsArray = Array.isArray(applications)
    ? applications
    : applications?.data || [];
    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id)
        const data = {
            status: e.target.value
        }
        fetch(`https://job-portal-server-1-q061.onrender.com/job-applications/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status Has been updated.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">
        Applications for this job: {appsArray.length}
      </h2>
      <div className="overflow-x-auto rounded-xl shadow-md bg-white">
        <table className="table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {appsArray.map((app, index) => (
              <tr key={app._id}>
                <td>{index + 1}</td>
                <td>{app.applicant_email}</td>
                <td>{app.jobTitle || 'N/A'}</td>
                <td>{app.favoriteColor || '—'}</td>
                <td>
                                     <select
                                         onChange={(e) => handleStatusUpdate(e, app._id)}
                                         defaultValue={app.status || 'Change Status'}
                                         className="select select-bordered select-xs w-full max-w-xs">
                                         <option disabled>Change Status</option>
                                         <option>Under Review</option>
                                         <option>Set Interview</option>
                                         <option>Hired</option>
                                         <option>Rejected</option>
                                     </select>
                                 </td>
              </tr>
            ))}
          </tbody>
        </table>
        {appsArray.length === 0 && (
          <p className="text-center text-gray-500 p-4">No applications found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewApplications;
