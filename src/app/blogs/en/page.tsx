'use client';

import React, { useEffect, useState } from 'react';

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  const locale = 'en';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:3000/api/blogs?locale=${locale}&depth=1&sort=order`,
          { cache: 'no-store' }
        );

        const data = await res.json();
        setBlogs(data?.docs || []);
      } catch (error) {
        console.log('ERROR:', error);
      }
    };

    fetchBlogs();
  }, [locale]); // 🔥 FIXED

  return (
    <div style={{ padding: '40px' }}>
      <h1>Blogs (EN)</h1>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
        </div>
      ))}
    </div>
  );
}