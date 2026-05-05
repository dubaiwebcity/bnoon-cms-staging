

'use client';

import React, { useEffect, useState } from 'react';

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const locale = 'ar';
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
       const res = await fetch(
  `http://127.0.0.1:3000/api/blogs?locale=${locale}&sort=order`,
  { cache: 'no-store' }
);

        const data = await res.json();

        console.log('API DATA:', data);

        setBlogs(data?.docs || []);
      } catch (error) {
        console.log('ERROR:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h1>Blogs</h1>

      {blogs.length === 0 ? (
        <p>No blogs found</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} style={{ marginBottom: '20px' }}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p><b>{blog.author}</b></p>
          </div>
        ))
      )}
    </div>
  );
}
 