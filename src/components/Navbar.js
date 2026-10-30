import React, { useState } from 'react';

const Navbar = ({ selectedCategory = 'Barchasi', onCategoryChange, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const categories = ['Barchasi', 'Siyosat', 'Texnologiya', 'Sport', 'Iqtisodiyot', 'Madaniyat'];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return React.createElement(
    'header',
    { className: 'bg-slate-900 text-white sticky top-0 z-50 shadow-md border-b border-slate-800' },
    React.createElement(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement(
        'div',
        { className: 'flex items-center justify-between h-16' },

        React.createElement(
          'div',
          { className: 'flex items-center space-x-3 cursor-pointer' },
          React.createElement(
            'div',
            { className: 'bg-blue-600 text-white font-black text-xl px-3 py-1 rounded-lg tracking-wider' },
            'NEWS'
          ),
          React.createElement(
            'span',
            { className: 'text-xl font-bold tracking-tight hidden sm:inline' },
            'Platform'
          )
        ),

        React.createElement(
          'div',
          { className: 'hidden md:flex items-center space-x-1' },
          categories.map((cat, idx) => {
            const isActive = selectedCategory === cat;
            return React.createElement(
              'button',
              {
                key: idx,
                onClick: () => onCategoryChange && onCategoryChange(cat),
                className: `px-3 py-2 rounded-md text-sm font-medium transition duration-150 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`
              },
              cat
            );
          })
        ),

        React.createElement(
          'div',
          { className: 'flex items-center space-x-3' },
          React.createElement(
            'div',
            { className: 'relative' },
            React.createElement('input', {
              type: 'text',
              placeholder: 'Qidiruv...',
              value: searchValue,
              onChange: handleSearchChange,
              className: 'bg-slate-800 text-sm text-white placeholder-slate-400 rounded-full pl-9 pr-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 w-36 sm:w-48 lg:w-64 transition-all'
            }),
            React.createElement(
              'svg',
              {
                className: 'w-4 h-4 text-slate-400 absolute left-3 top-2.5',
                fill: 'none',
                stroke: 'currentColor',
                viewBox: '0 0 24 24'
              },
              React.createElement('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              })
            )
          ),

          React.createElement(
            'button',
            {
              onClick: () => setIsMenuOpen(!isMenuOpen),
              className: 'md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none'
            },
            React.createElement(
              'svg',
              { className: 'h-6 w-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
              React.createElement('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                d: isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              })
            )
          )
        )
      ),

      isMenuOpen && React.createElement(
        'div',
        { className: 'md:hidden py-3 border-t border-slate-800 space-y-1' },
        categories.map((cat, idx) => {
          const isActive = selectedCategory === cat;

          return React.createElement(
            'button',
            {
              key: idx,
              onClick: () => {
                if (onCategoryChange) onCategoryChange(cat);
                setIsMenuOpen(false);
              },
              className: `block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`
            },
            cat
          );
        })
      )
    )
  );
};

export default Navbar;