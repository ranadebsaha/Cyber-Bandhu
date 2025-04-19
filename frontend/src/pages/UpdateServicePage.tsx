import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const UpdateServicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  const [formData, setFormData] = useState({
    remarks: '',
    solved_date: '',
    solved_time: '',
    payment_amount: '',
    payment_type: ''
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`http://localhost:5000/expert/pending-service/${id}`);
        const data = await response.json();
        setService(data);
      } catch (err) {
        console.error('Error fetching task:', err);
      }
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      status: 'done'
    };

    try {
      const res = await fetch(`http://localhost:5000/service/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert('Task updated successfully!');
        navigate('/expert/dashboard');
      } else {
        const errData = await res.json();
        alert('Failed to update: ' + errData.message);
      }
    } catch (err) {
      console.error('Update failed:', err);
      alert('Error updating task.');
    }
  };

  if (!service) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Update Task: <span className="text-red-500"></span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Remarks</label>
          <textarea
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            value={formData.remarks}
            onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Solved Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              value={formData.solved_date}
              onChange={(e) => setFormData({ ...formData, solved_date: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Solved Time</label>
            <input
              type="time"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              value={formData.solved_time}
              onChange={(e) => setFormData({ ...formData, solved_time: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Amount (₹)</label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              value={formData.payment_amount}
              onChange={(e) => setFormData({ ...formData, payment_amount: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Type</label>
            <select
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              value={formData.payment_type}
              onChange={(e) => setFormData({ ...formData, payment_type: e.target.value })}
            >
              <option value="">Select Type</option>
              <option value="Cash">Cash</option>
              <option value="UPI">UPI</option>
              <option value="Online">Online</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Mark as Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateServicePage;
