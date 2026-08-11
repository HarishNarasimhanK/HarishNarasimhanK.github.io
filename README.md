# Personal Portfolio — Harish Narasimhan K

I built this portfolio to serve as a clean, high-performance home for my work, engineering projects, and research. My main goal was to design a site that feels minimal, fast, and elegant, matching my focus on backend systems and applied AI.

Here is a high-level look at how I built this portfolio and why:

### 1. Minimalist & Content-First Design
Instead of using heavy graphics or complex animations, I wanted a simple and direct layout. The design uses a classic black-and-white aesthetic, elegant serif headings, and structured borders. This keeps the focus entirely on the text, code contributions, and technical details.

### 2. Fast & Lean Tech Stack
The site is built using **React** and **Vite** with **Tailwind CSS**. Vite ensures the site compiles instantly and loads extremely quickly, keeping the bundle size small and responsive across all mobile and desktop devices. 

### 3. Clean UI Primitives
I used **Shadcn UI** (built on top of **Radix UI** primitives) for the interactive parts of the page, such as modal dialogs. This gives the site standard accessibility features and a premium feel without adding bulky third-party libraries.

### 4. Inline PDF Resume Preview
Instead of forcing visitors to download a file immediately to read my resume, I designed a direct preview modal. Clicking the "View Resume" button loads the PDF directly inside a clean viewer window on the page. A download option is placed in the top-right corner if visitors want a copy.

### 5. Clear Technical Showcases
I structured the content to focus on real engineering results:
- **Open Source**: Expanding blocks showing the specific problems, solutions, and performance impact of my pull requests in OpenSearch.
- **Projects**: Clean card layouts outlining what I built (e.g. multi-agent systems with LangGraph, CLIs, RAG tools) and the exact outcomes.
- **Competencies**: A simple categorized view of my programming languages, frameworks, cloud tooling, and algorithms background.

### 6. Secure Contact Form
To turn the simulated contact form into a functional communication channel while protecting my inbox from automated spam, I integrated:
- **Web3Forms**: A serverless forwarder that delivers submissions directly to my email.
- **Honeypot Protection**: A hidden honeypot field (`botcheck`) that catches and drops simple bot submissions client-side.
- **hCaptcha Integration**: A client-side hCaptcha widget that blocks scaled bot scripts from triggering API calls, automatically resetting on successful delivery.

### 7. Search Engine Optimization (SEO) & Indexing
- Built and submitted a dynamic `sitemap.xml` to define the site layout structure.
- Configured rich OpenGraph (`og:image`, canonical URLs) and JSON-LD structured schema tags in `index.html`.
- Verified domain ownership with Google Search Console via HTML verification to enable priority indexing.

### 8. Performance Tuning
- **Font Preconnecting**: Removed render-blocking `@import` rules in `index.css` and replaced them with preconnected Google Fonts `<link>` tags in `index.html` to prevent Flash of Unstyled Text (FOUT) and lower PageSpeed paint times.
- **Asset Pipeline**: Created a custom logo processing script utilizing Jimp to crop, sharpen, and output transparent experience cards for logos like AWS and QuickInsights.ai.
