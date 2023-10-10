<!DOCTYPE html>
<html lang="en">
<body>

<h1>overlay-nav-react</h1>

<img src="https://i.pinimg.com/originals/dd/7a/5c/dd7a5c648c7ce25309a5882ed611294a.gif" alt="Overlay Nav GIF">

<p><code>overlay-nav-react</code> is a lightweight and customizable React component for creating overlay navigation menus with a hamburger icon that opens and closes the menu. It is designed to provide a smooth and responsive navigation experience for your web application. You can easily integrate it into your React project and customize it to fit your design and branding needs.</p>

<h2>Installation</h2>

<p>You can install <code>overlay-nav-react</code> using npm or yarn:</p>

<pre><code>npm install overlay-nav-react
# or
yarn add overlay-nav-react
</code></pre>

<h2>Usage</h2>

<p>Here's how you can use <code>overlay-nav-react</code> in your React application:</p>

<pre><code>&lt;import React from 'react';
import OverlayNav from 'overlay-nav-react';

const App = () =&gt; {
  return (
    &lt;div&gt;
      {/* Your other content */}
      &lt;OverlayNav
        logoSrc="https://i.pinimg.com/originals/c5/07/c2/c507c28cfe9ca6eb06a594a2a11e80e7.png"
        links={[
          { text: 'Home', url: '/home' },
          { text: 'Products', url: '/products' },
          { text: 'Contact', url: '/contact' },
          { text: 'About', url: '/about' },
        ]}
      /&gt;
    &lt;/div&gt;
  );
}

export default App;
</code></pre>

<h2>Props</h2>

<p><code>overlay-nav-react</code> accepts the following props:</p>

<ul>
  <li><code>logoSrc</code> (string): The URL of your logo image.</li>
  <li><code>links</code> (array of objects): An array of navigation links, where each link is an object with two properties: <code>text</code> (string) and <code>url</code> (string).</li>
  <li><code>backgroundColor</code> (string, optional): The background color of the overlay navigation menu (default is 'rgb(255, 245, 245)').</li>
  <li><code>iconColor</code> (string, optional): The color of the hamburger icon and other icons (default is '#000').</li>
  <li><code>mobileBackgroundColor</code> (string, optional): The background color of the overlay navigation menu for mobile devices (default is '#fff').</li>
</ul>

<h2>Author</h2>

<ul>
  <li>Username: saad662</li>
  <li>Email: saadamin662@gmail.com</li>
</ul>

<h2>License</h2>

<p>This package is licensed under the MIT License.</p>

<h2>Issues and Contributions</h2>

<p>If you encounter any issues or would like to contribute to the development of <code>overlay-nav-react</code>, please <a href="https://github.com/saad662/overlay-nav-react/issues">open an issue</a> on GitHub or submit a pull request. Your feedback and contributions are highly appreciated.</p>

</body>
</html>
