import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/userSlice"; // Import action for updating user

const Profile = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);

    // Local state for edit mode and form values
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: currentUser?.name || "",
        email: currentUser?.email || "",
    });

    // Ensure form updates if currentUser changes
    useEffect(() => {
        if (currentUser) {
            setFormData({
                name: currentUser.name,
                email: currentUser.email,
            });
        }
    }, [currentUser]);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle save action
    const handleSave = () => {
        dispatch(updateUser(formData)); // Update Redux state
        setIsEditing(false); // Exit edit mode
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 mt-14 text-center">
                <h2 className="text-2xl font-bold mb-4">My Profile</h2>

                {/* Profile Image */}
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mx-auto">
                    <span className="text-gray-700 text-2xl">👤</span>
                </div>

                {/* User Info */}
                <div className="mt-4">
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your new username"
                                className="border p-2 w-full rounded"
                            />
                           
                        </>
                    ) : (
                        <>
                            <p className="font-semibold text-lg">{currentUser?.name || "User"}</p>
                            <p className="text-gray-500 text-sm">{currentUser?.email || "No email available"}</p>
                        </>
                    )}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-col gap-3">
                    {isEditing ? (
                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
