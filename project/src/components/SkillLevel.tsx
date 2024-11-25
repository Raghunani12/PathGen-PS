import React from 'react';
import { useStore } from '../store/useStore';
import { GraduationCap, Book, Trophy } from 'lucide-react';
import type { SkillLevel as SkillLevelType } from '../types';

const skillLevels = [
  {
    level: 'beginner',
    title: 'Beginner',
    description: 'New to the subject, learning fundamentals',
    icon: Book,
    color: 'bg-green-50 text-green-600',
  },
  {
    level: 'intermediate',
    title: 'Intermediate',
    description: 'Familiar with basics, ready for advanced concepts',
    icon: GraduationCap,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    level: 'advanced',
    title: 'Advanced',
    description: 'Experienced, seeking mastery',
    icon: Trophy,
    color: 'bg-purple-50 text-purple-600',
  },
];

export const SkillLevel = () => {
  const { setSkillLevel, nextStep } = useStore();

  const handleSkillSelect = (level: SkillLevelType) => {
    setSkillLevel(level);
    nextStep();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        What's Your Current Skill Level?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillLevels.map(({ level, title, description, icon: Icon, color }) => (
          <button
            key={level}
            onClick={() => handleSkillSelect(level as SkillLevelType)}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center space-y-4 border border-gray-100 hover:border-blue-500"
          >
            <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center`}>
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};