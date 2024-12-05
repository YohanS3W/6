import React, { useState } from 'react';
import { Lawyer } from '../types/lawyer';
import { Plus } from 'lucide-react';

interface AddLawyerFormProps {
  onAddLawyer: (lawyer: Omit<Lawyer, 'id' | 'isContactVisible' | 'isVerified'>) => void;
}

const AddLawyerForm = ({ onAddLawyer }: AddLawyerFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    image: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddLawyer(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      image: '',
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add New Lawyer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1 w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Image URL</label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="mt-1 w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#7A0000] text-white px-4 py-2 rounded-md hover:bg-[#900000] flex items-center justify-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Lawyer
        </button>
      </form>
    </div>
  );
};

export default AddLawyerForm;