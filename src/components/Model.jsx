import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0  bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <FaTimes size={24} />
                </button>
                {children}
            </motion.div>
        </div>
    );
};

export default Modal;
