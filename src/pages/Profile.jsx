import React from "react";

const Profile = ({ onLogout }) => {
    return (
        <div className="flex items-center justify-center min-h-screen  bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-2xl  mt-14 text-center">
                <h2 className="text-2xl font-bold mb-4">My Profile</h2>

                {/* Profile Image */}
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mx-auto">
                    <span className="text-gray-700 text-2xl">👤</span>
                </div>

                {/* User Info */}
                <div className="mt-4">
                    <p className="font-semibold text-lg">John Doe</p>
                    <p className="text-gray-500 text-sm">johndoe@example.com</p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-col gap-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Edit Profile
                    </button>
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
