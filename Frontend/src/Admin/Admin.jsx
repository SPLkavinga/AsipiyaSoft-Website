import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/AppLogo/logo.png';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [enteredOldPassword, setEnteredOldPassword] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);

  const navigate = useNavigate();

  // Hardcoded username and initial password
  const hardcodedUsername = 'asipiya';

  // Load current password from localStorage or set the default password
  const [currentPassword, setCurrentPassword] = useState(
    () => localStorage.getItem('currentPassword') || '123'
  );

  useEffect(() => {
    // Save currentPassword to localStorage whenever it changes
    localStorage.setItem('currentPassword', currentPassword);
  }, [currentPassword]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Attempting login with username: ${username} and password: ${password}`);
    if (username === hardcodedUsername && password === currentPassword) {
      console.log('Login successful');
      navigate('/Landingpage'); // Navigate to Landing page
    } else {
      console.log('Login failed: Invalid username or password');
      alert('Invalid username or password!');
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log(`Attempting password change for username: ${username}`);
    if (username === hardcodedUsername && enteredOldPassword === currentPassword) {
      setCurrentPassword(newPassword);
      console.log('Password changed successfully');
      alert('Password changed successfully!');
      setNewPassword('');
      setEnteredOldPassword('');
      setShowChangePassword(false);
    } else {
      console.log('Password change failed: Invalid username or previous password');
      alert('Invalid username or previous password!');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-900 via-purple-400 to-purple-900">
      <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Company Logo"
            className="w-28 h-18"
          />
        </div>

        <h2 className="mb-4 text-2xl font-bold text-center">
          {showChangePassword ? 'Change Password' : 'Login'}
        </h2>

        {showChangePassword ? (
          <form onSubmit={handleChangePassword}>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">Previous Password</label>
              <input
                type="password"
                value={enteredOldPassword}
                onChange={(e) => setEnteredOldPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Save Password
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="px-4 py-2 mb-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setShowChangePassword(true)}
                className="text-sm text-red-600 hover:underline"
              >
                Change Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Admin;
