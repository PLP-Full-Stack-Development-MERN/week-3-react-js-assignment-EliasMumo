
import React, { useState } from 'react';

interface ProfileProps {
  initialName: string;
  initialEmail: string;
}

const Profile: React.FC<ProfileProps> = ({ initialName, initialEmail }) => {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(initialName);
  const [tempEmail, setTempEmail] = useState(initialEmail);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName(tempName);
    setEmail(tempEmail);
    setIsEditing(false);
  };

  return (
    <div className="w-full max-w-md mx-auto opacity-0 animate-fade-in-delay-1">
      <div className="glass-card rounded-2xl p-6 md:p-8 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium text-apple-darkgray">Profile</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-apple-blue text-sm font-medium hover:text-blue-600 transition-colors"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        {!isEditing ? (
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm text-apple-lightgray">Name</p>
              <p className="text-apple-darkgray font-medium">{name}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-apple-lightgray">Email</p>
              <p className="text-apple-darkgray font-medium">{email}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-apple-lightgray">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="apple-input w-full"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-apple-lightgray">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={tempEmail}
                onChange={(e) => setTempEmail(e.target.value)}
                className="apple-input w-full"
                placeholder="Enter your email"
              />
            </div>
            <button type="submit" className="apple-button w-full mt-4">
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
