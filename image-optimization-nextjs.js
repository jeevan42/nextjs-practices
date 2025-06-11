/**
 * 📘 Topic: Image Optimization in Next.js
 * 
 * Next.js provides an advanced <Image> component that automatically:
 * - Optimizes image size & format (WebP, AVIF, etc.)
 * - Lazy loads images
 * - Supports resizing, cropping, and responsive loading
 * 
 * It works with both remote images and local assets.
 */

import Image from 'next/image';

/**
 * 🔹 Basic Usage
 */
export default function OptimizedImages() {
  return (
    <div>
      <h1>🖼️ Optimized Image Example</h1>

      <h2>1. Local Image (stored in /public folder)</h2>
      <Image 
        src="/logo.png" 
        alt="Local Image" 
        width={300} 
        height={200} 
        priority={true} // Loads immediately without lazy loading
      />

      <h2>2. Remote Image</h2>
      <Image 
        src="https://via.placeholder.com/400" 
        alt="Remote Image" 
        width={400} 
        height={250}
      />

      <h2>3. Responsive Image</h2>
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <Image 
          src="/banner.jpg"
          alt="Responsive"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

/**
 * 🔧 next.config.js Setup for Remote Images:
 * 
 * module.exports = {
 *   images: {
 *     domains: ['via.placeholder.com', 'images.unsplash.com'],
 *   },
 * };
 *
 * Without this, remote images will throw an error in development.
 */

/**
 * ⚠️ Common Mistakes:
 * - Using <img> instead of <Image>: you lose all optimizations
 * - Not setting width/height: layout shift may occur
 * - Forgetting to add domains in next.config.js for remote images
 *
 * 🧠 Best Practices:
 * ✅ Always specify width and height unless using `fill`
 * ✅ Use `priority` for LCP images (first visible ones)
 * ✅ Use local images from `/public` for more control
 *
 * 🔁 Automatically served in modern formats (WebP, AVIF)
 * 💡 Can be integrated with CMS or external APIs too!
 */
