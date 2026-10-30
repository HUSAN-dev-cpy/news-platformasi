import React, { useState, useEffect } from 'react';

const Sidebar = ({ selectedCategory = 'Barchasi', onSelectCategory, onSelectTag }) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategory);

  useEffect(() => {
    setActiveCategory(selectedCategory);
  }, [selectedCategory]);

  const categories = [
    { name: 'Barchasi', count: 42 },
    { name: 'Siyosat', count: 12 },
    { name: 'Texnologiya', count: 15 },
    { name: 'Sport', count: 8 },
    { name: 'Iqtisodiyot', count: 5 },
    { name: 'Madaniyat', count: 2 }
  ];

  const popularTags = ['#IT', '#AI', '#Uzbekistan', '#Futbol', '#Valyuta', '#Startap'];

  const trendingNews = [
    { title: 'Sun\'iy intellekt sohasidagi so\'nggi yangiliklar', time: '10 daqiqa oldin' },
    { title: 'O\'zbekistonda raqamli texnologiyalar rivojlanishi', time: '45 daqiqa oldin' },
    { title: 'Jahon iqtisodiyotidagi yangi o\'zgarishlar', time: '2 soat oldin' }
  ];

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    }
  };

  return React.createElement(
    'aside',
    { className: 'w-full lg:w-80 space-y-6' },

    React.createElement(
      'div',
      { className: 'bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg' },
      React.createElement(
        'h2',
        { className: 'text-lg font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between' },
        'Kategoriyalar',
        React.createElement('span', { className: 'text-xs text-blue-400 bg-blue-950 px-2 py-1 rounded-full' }, 'Lenta')
      ),
      React.createElement(
        'ul',
        { className: 'space-y-1' },
        categories.map((cat, idx) =>
          React.createElement(
            'li',
            { key: idx },
            React.createElement(
              'button',
              {
                onClick: () => handleCategoryClick(cat.name),
                className: `w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.name
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`
              },
              React.createElement('span', null, cat.name),
              React.createElement(
                'span',
                {
                  className: `text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === cat.name ? 'bg-blue-700 text-white' : 'bg-slate-800 text-slate-400'
                  }`
                },
                cat.count
              )
            )
          )
        )
      )
    ),

    React.createElement(
      'div',
      { className: 'bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg' },
      React.createElement(
        'h2',
        { className: 'text-lg font-bold text-white mb-4 pb-2 border-b border-slate-800' },
        'Dolzarb mavzular'
      ),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        trendingNews.map((item, idx) =>
          React.createElement(
            'div',
            {
              key: idx,
              className: 'group cursor-pointer p-2 rounded-lg hover:bg-slate-800/50 transition duration-150'
            },
            React.createElement(
              'h3',
              { className: 'text-sm font-medium text-slate-200 group-hover:text-blue-400 transition duration-150 line-clamp-2' },
              item.title
            ),
            React.createElement(
              'span',
              { className: 'text-xs text-slate-500 mt-1 block' },
              item.time
            )
          )
        )
      )
    ),

    React.createElement(
      'div',
      { className: 'bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg' },
      React.createElement(
        'h2',
        { className: 'text-lg font-bold text-white mb-4 pb-2 border-b border-slate-800' },
        'Ommabop teglar'
      ),
      React.createElement(
        'div',
        { className: 'flex flex-wrap gap-2' },
        popularTags.map((tag, idx) =>
          React.createElement(
            'button',
            {
              key: idx,
              onClick: () => onSelectTag && onSelectTag(tag),
              className: 'text-xs font-medium bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition duration-150'
            },
            tag
          )
        )
      )
    )
  );
};

export default Sidebar;