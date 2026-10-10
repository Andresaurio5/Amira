import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import './App.css';

export default function App() {
  return (
      <div className="app-main">
        <Header />
        <HeroSection />
      </div>
  );
}