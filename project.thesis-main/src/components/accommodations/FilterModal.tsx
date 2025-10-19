import React from "react";
import { X } from "lucide-react";

interface FilterModalProps {
  onClose: () => void;
  filters: {
    price: { min: string; max: string };
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      price: { min: string; max: string };
    }>
  >;
}

const FilterModal: React.FC<FilterModalProps> = ({ onClose, filters, setFilters }) => {
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      price: { ...prev.price, [name]: value },
    }));
  };

  return (
    // Overlay background
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      {/* Modal container */}
      <div className="relative w-[50vw] min-h-[300px] bg-white rounded-2xl shadow-lg p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-semibold mb-4">Filter Options</h2>

        <div className="space-y-6">
          {/* Price Range */}
          <div>
            <label className="block font-medium mb-2">Price Range (₱)</label>
            <div className="flex gap-2">
              <input
                type="number"
                name="min"
                placeholder="Min"
                value={filters.price.min}
                onChange={handlePriceChange}
                className="border p-2 rounded w-1/2"
              />
              <input
                type="number"
                name="max"
                placeholder="Max"
                value={filters.price.max}
                onChange={handlePriceChange}
                className="border p-2 rounded w-1/2"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
