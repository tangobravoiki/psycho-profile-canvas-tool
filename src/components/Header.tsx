
import React from 'react';
import { Brain, BookOpen, Users, Shield } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">
                Adli Psikoloji Eğitim Aracı
              </h1>
              <p className="text-sm text-slate-500">
                Forensic Psychology Education Tool
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
              <BookOpen className="h-5 w-5" />
              <span>Eğitim Materyalleri</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
              <Users className="h-5 w-5" />
              <span>Vaka Örnekleri</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
              <Shield className="h-5 w-5" />
              <span>Metodoloji</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
