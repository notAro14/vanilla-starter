// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 18px;\n}\n\nbody {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  width: 100vw;\n}\n\nmain {\n  width: 70%;\n  margin: 2rem auto;\n}\nmain .title {\n  color: dodgerblue;\n  margin-bottom: 1rem;\n}\n\n.snowpack {\n  color: #333;\n  position: relative;\n  text-decoration: none;\n}\n.snowpack::before {\n  content: \"\";\n  white-space: nowrap;\n  position: absolute;\n  top: 100%;\n  height: 2px;\n  background: dodgerblue;\n  width: 100%;\n  transform: scale3d(0, 1, 1);\n  transform-origin: right;\n  transition: transform 0.4s ease-out;\n}\n.snowpack:hover::before {\n  transform: scale3d(1, 1, 1);\n  transform-origin: left;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}