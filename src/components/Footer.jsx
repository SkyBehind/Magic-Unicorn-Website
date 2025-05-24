import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Magic Unicorn - Unconventional Technology & Stuff Inc. All rights reserved.</p>
        <p className="small mt-2">Where Magic Meets Technology</p>
      </div>
    </footer>
  );
}
