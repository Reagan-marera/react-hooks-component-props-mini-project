import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

function App() {
  const blogName = "My Awesome Blog"; 
  const posts = [
    { id: 1, title: "First Post", content: "This is the content of the first post." },
    { id: 2, title: "Second Post", content: "This is the content of the second post." },
    { id: 3, title: "Third Post", content: "This is the content of the third post." }
  ];

  return (
    <div>
      <Header name={blogName} />
      <About />
      <ArticleList posts={posts} /> {/* Pass posts as props to ArticleList */}
    </div>
  );
}

export default App;
