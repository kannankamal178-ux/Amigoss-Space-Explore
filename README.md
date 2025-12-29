🌌 Solar System Explorer
🔗 Project Link (Local): file:///C:/Users/Rakul/OneDrive/Desktop/space%20explore/index.html

Interactive 3D-Style Planet Navigation Website
Created by Kamalakannan S

🚀 Overview
Solar System Explorer is a visually engaging and interactive web project that allows users to explore planets, moons, and planetary information through smooth transitions and layered 3D-style animations.

The project is primarily built using HTML and CSS, demonstrating the power of modern CSS for creating advanced animations and interactions without relying on JavaScript.
Optional JavaScript can be added to enhance accessibility and navigation.

This project is ideal for:

Learning advanced CSS animations

Practicing UI/UX design

Portfolio and showcase projects

Creative front-end experiments

✨ Features
🎨 Visually rich UI with animated planets and glowing previews

🌍 Detailed planet descriptions (Mercury to Pluto)

🔄 Pure CSS navigation using radio buttons

🌓 Moon representations for planets like Earth, Jupiter, and Saturn

🪐 Planet menu with astronomical distance (AU) labels

📖 Full-screen planet information panels

💫 Smooth hover effects, transitions, overlays, and depth effects

📱 Responsive design for different screen sizes

🧠 Optional JavaScript Enhancements
While the project works completely without JavaScript, optional JS can improve usability.

JavaScript Can Add:
⌨️ Keyboard navigation (Left / Right arrow keys)

🖱️ Enhanced planet selection handling

♿ Accessibility improvements

🔍 Active planet state tracking

Example JavaScript (Optional)
const planets = document.querySelectorAll("input[name='planet']");
let currentIndex = [...planets].findIndex(p => p.checked);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % planets.length;
  }
  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + planets.length) % planets.length;
  }
  planets[currentIndex].checked = true;
});
📌 JavaScript is optional and does not replace the CSS-based logic.

📁 Project Structure
📦 Solar-System-Explorer
 ┣ 📜 index.html
 ┣ 🎨 style.css
 ┗ 🖼 Images loaded from external URLs
(Optional)

 ┗ 📜 script.js
🛠️ Technologies Used
HTML5

CSS3

Flexbox

CSS Transitions

CSS Animations

Transform & 3D Effects

Positioning & Layering

Font Awesome (CDN)

▶️ How to Run the Project
Download or clone the repository

Keep all files in the same folder

Open index.html in any modern browser (Chrome / Edge recommended)

Use the planet menu or keyboard arrows (if JS enabled)

👨‍🚀 Author
Kamalakannan S
Front-End UI & Animation Project

📜 License
This project is open for learning and personal use.
Feel free to modify and enhance it for educational or portfolio purposes.
