
import React from 'react';
import { Brain, BookOpen, Users, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
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
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/egitim-materyalleri"
              className={`flex items-center space-x-2 transition-colors cursor-pointer ${
                isActive('/egitim-materyalleri') 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Eğitim Materyalleri</span>
            </Link>
            <Link 
              to="/vaka-ornekleri"
              className={`flex items-center space-x-2 transition-colors cursor-pointer ${
                isActive('/vaka-ornekleri') 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Vaka Örnekleri</span>
            </Link>
            <Link 
              to="/metodoloji"
              className={`flex items-center space-x-2 transition-colors cursor-pointer ${
                isActive('/metodoloji') 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <Shield className="h-5 w-5" />
              <span>Metodoloji</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
