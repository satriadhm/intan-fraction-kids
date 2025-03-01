"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Step3 = () => {
  const router = useRouter();
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Step 3: Pecahan Gabungan</h1>
      <div className="w-full max-w-2xl space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Pecahan Campuran</h2>
          <p className="mb-4">
            Pecahan campuran terdiri dari bilangan bulat dan pecahan biasa.
          </p>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full"
          />
          <p className="mt-2">Nilai Slider: {sliderValue}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Konversi Pecahan</h2>
          <p className="mb-4">
            Pecahan campuran dapat dikonversi menjadi pecahan biasa.
          </p>
        </div>
      </div>
      <button
        onClick={() => router.push('/menu')}
        className="mt-8 bg-orange-600 text-white p-2 rounded hover:bg-orange-700 transition-colors"
      >
        Kembali ke Menu
      </button>
    </div>
  );
};

export default Step3;