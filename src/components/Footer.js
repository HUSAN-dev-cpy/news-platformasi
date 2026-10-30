import React from 'react';

const Footer = () => {
  return React.createElement(
    'footer',
    { className: 'bg-slate-900 border-t border-slate-800 text-slate-400 py-8 mt-12' },
    React.createElement(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement(
        'div',
        { className: 'flex flex-col md:flex-row items-center justify-between gap-6' },
        
        React.createElement(
          'div',
          { className: 'flex items-center space-x-3' },
          React.createElement(
            'div',
            { className: 'bg-blue-600 text-white font-black text-lg px-2.5 py-0.5 rounded-lg tracking-wider' },
            'NEWS'
          ),
          React.createElement(
            'span',
            { className: 'text-lg font-bold text-white tracking-tight' },
            'Platform'
          )
        ),

        React.createElement(
          'p',
          { className: 'text-sm text-center md:text-left' },
          '© 2026 News Platform. Barcha huquqlar himoyalangan.'
        ),

        React.createElement(
          'div',
          { className: 'flex space-x-6 text-sm' },
          React.createElement('a', { href: '#', className: 'hover:text-white transition duration-150' }, 'Maxfiylik siyosati'),
          React.createElement('a', { href: '#', className: 'hover:text-white transition duration-150' }, 'Foydalanish shartlari'),
          React.createElement('a', { href: '#', className: 'hover:text-white transition duration-150' }, 'Aloqa')
        )
      )
    )
  );
};

export default Footer;