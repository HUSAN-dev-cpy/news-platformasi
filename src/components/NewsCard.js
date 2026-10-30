import React from 'react';

const fallbackImage = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80';

const NewsCard = ({ news }) => {
  const { title, description, category, date, author, imageUrl, views } = news;

  return React.createElement(
    'article',
    { className: 'bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition duration-300 flex flex-col justify-between group shadow-lg' },
    
    React.createElement(
      'div',
      { className: 'relative overflow-hidden h-48 w-full' },
      React.createElement('img', {
        src: imageUrl || fallbackImage,
        alt: title,
        className: 'w-full h-full object-cover group-hover:scale-105 transition duration-300',
        onError: (event) => {
          event.currentTarget.src = fallbackImage;
        }
      }),
      React.createElement(
        'span',
        { className: 'absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow' },
        category
      )
    ),

    React.createElement(
      'div',
      { className: 'p-5 flex-1 flex flex-col justify-between space-y-4' },
      React.createElement(
        'div',
        { className: 'space-y-2' },
        React.createElement(
          'h3',
          { className: 'text-lg font-bold text-white group-hover:text-blue-400 transition duration-150 line-clamp-2' },
          title
        ),
        React.createElement(
          'p',
          { className: 'text-slate-400 text-sm line-clamp-3 leading-relaxed' },
          description
        )
      ),

      React.createElement(
        'div',
        { className: 'pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500' },
        React.createElement(
          'div',
          { className: 'flex items-center space-x-2' },
          React.createElement('span', { className: 'font-medium text-slate-400' }, author),
          React.createElement('span', null, '•'),
          React.createElement('span', null, date)
        ),
        React.createElement(
          'span',
          { className: 'flex items-center space-x-1' },
          React.createElement(
            'svg',
            { className: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            React.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '2',
              d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'
            }),
            React.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '2',
              d: 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
            })
          ),
          React.createElement('span', null, views)
        )
      )
    )
  );
};

export default NewsCard;