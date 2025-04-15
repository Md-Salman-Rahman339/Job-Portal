import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
  const applications = useLoaderData();
  const appsArray = Array.isArray(applications)
    ? applications
    : applications?.data || [];

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
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {appsArray.map((app, index) => (
              <tr key={app._id}>
                <td>{index + 1}</td>
                <td>{app.applicant_email}</td>
                <td>{app.jobTitle || 'N/A'}</td>
                <td>{app.favoriteColor || '—'}</td>
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
