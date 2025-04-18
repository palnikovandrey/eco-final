
'use client';
import React, { useState } from 'react';

export default function Home() {
  const [view, setView] = useState('main');
  const [surveyType, setSurveyType] = useState('');

  const surveyTypes = [
    'Инженерно-экологические изыскания',
    'Инженерно-геологические изыскания',
    'Инженерно-геодезические изыскания',
    'Инженерно-гидрометеорологические изыскания',
  ];

  return (
    <div className='min-h-screen p-6 bg-gray-100'>
      <div className='max-w-xl mx-auto space-y-6'>
        {view === 'main' && (
          <div className='space-y-4'>
            <button
              onClick={() => setView('new')}
              className='w-full px-4 py-2 bg-blue-600 text-white rounded-xl shadow'
            >
              Новый проект
            </button>
            <button className='w-full px-4 py-2 border border-gray-300 rounded-xl shadow'>
              Проекты
            </button>
          </div>
        )}

        {view === 'new' && (
          <div className='space-y-4 bg-white p-4 rounded-xl shadow'>
            <h2 className='text-xl font-bold'>Создание проекта</h2>
            <select
              value={surveyType}
              onChange={(e) => setSurveyType(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded'
            >
              <option value=''>Выберите тип изысканий</option>
              {surveyTypes.map((type, idx) => (
                <option key={idx} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <button
              onClick={() => setView('main')}
              className='px-4 py-2 bg-green-600 text-white rounded'
            >
              Сохранить
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
