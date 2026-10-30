import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';
import { initialNewsList } from './data/mockNews';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsList] = useState(initialNewsList);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleTagSelect = (tag) => {
    const cleanTag = tag.replace('#', '');
    setSearchQuery(cleanTag);
  };

  const filteredNews = newsList.filter((item) => {
    const matchesCategory = selectedCategory === 'Barchasi' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return React.createElement(
    'div',
    { className: 'min-h-screen bg-slate-950 text-white flex flex-col justify-between' },
    React.createElement(
      'div',
      null,
      React.createElement(Navbar, {
        selectedCategory: selectedCategory,
        onCategoryChange: handleCategoryChange,
        onSearch: handleSearch
      }),
      React.createElement(
        'main',
        { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8' },
        React.createElement(
          'div',
          { className: 'flex flex-col lg:flex-row gap-8' },
          
          React.createElement(
            'div',
            { className: 'flex-1 space-y-6' },
            React.createElement(
              'div',
              { className: 'space-y-2' },
              React.createElement(
                'h1',
                { className: 'text-2xl sm:text-3xl font-bold tracking-tight' },
                selectedCategory === 'Barchasi' ? 'So\'nggi yangiliklar' : `${selectedCategory} yangiliklari`
              ),
              searchQuery && React.createElement(
                'p',
                { className: 'text-slate-400 text-sm' },
                `Qidiruv so'rovi: "${searchQuery}"`
              )
            ),

            React.createElement(
              'div',
              { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
              filteredNews.length > 0
                ? filteredNews.map((news) =>
                    React.createElement(NewsCard, { key: news.id, news: news })
                  )
                : React.createElement(
                    'div',
                    { className: 'col-span-full text-center py-12 text-slate-500' },
                    'Hech qanday yangilik topilmadi.'
                  )
            )
          ),

          React.createElement(Sidebar, {
            selectedCategory: selectedCategory,
            onSelectCategory: handleCategoryChange,
            onSelectTag: handleTagSelect
          })
        )
      )
    ),
    React.createElement(Footer, null)
  );
}

export default App;