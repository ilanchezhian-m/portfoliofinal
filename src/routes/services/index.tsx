// resume page 

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main class="mx-auto max-w-4xl px-6 py-20 text-black text-sm md:text-3xl">
      {/* Download Resume Button */}
      <div class=" top-6 md:right-100 z-50 mt-64">
        <a
          href="/resume/Ilanchezhian_M_Resume.pdf"
          download
          class="rounded-md bg-gray-200 px-8 py-4 text-sm md:text-4xl font-medium text-black transition hover:bg-gray-400 "
        >
           ⬇ Download Resume
        </a>
      </div>
            
      {/* Header */}
      <section class="text-center border-b mt-6 pb-8">
        <h1 class="text-4xl font-bold  tracking-wide">ILANCHEZHIAN.M</h1>
        <p class="mt-2 text-sm md:text-xl">Erode, Tamil Nadu</p>
        <p class="mt-1 text-sm md:text-xl">
          <a class="underline" href="https://www.linkedin.com/in/ilanchezhian27/">LinkedIn</a> ·{" "}
          <a class="underline" href="https://github.com/ilanchezhian-m">GitHub</a> ·{" "}
          <a class="underline" href="https://mail.google.com/mail/?view=cm&fs=1&to=ilanchezhian27@gmail.com">✉️ ilanchezhian27@gmail.com</a>
            📞{" "}
          <a
            href="https://wa.me/919443353813"
            target="_blank"
            rel="noopener"
            class="underline"
          >
            94433 53813
          </a>
                </p>
      </section>

      {/* Career Objective */}
      <section class="mt-8">
        <h2 class="text-3xl font-semibold border-b mb-3">Career Objective</h2>
        <p class="text-sm md:text-xl leading-relaxed">
          To apply my knowledge of computer applications and problem-solving skills
          in a dynamic organization, while continuously learning and contributing
          to impactful software solutions.
        </p>
      </section>

      {/* Education */}
      <section class="mt-8">
        <h2 class="text-xl font-semibold border-b mb-3">Education</h2>

        <div class="mb-4">
          <h3 class="font-medium">Master of Computer Applications (MCA)</h3>
          <p class="text-sm md:text-xl">Excel Engineering College, Komarapalayam</p>
          <p class="text-sm md:text-xl">Aug 2022 – May 2024 | 80%</p>
        </div>

        <div class="mb-4">
          <h3 class="font-medium">Bachelor of Commerce in Computer Applications</h3>
          <p class="text-sm md:text-xl">VET Institute of Arts and Science College, Erode</p>
          <p class="text-sm md:text-xl">June 2019 – May 2022 | 81%</p>
        </div>

        <div>
          <h3 class="font-medium">HSC</h3>
          <p class="text-sm md:text-xl">
            Adharsh Vidhyalaya Matric Higher Secondary School, Anthiyur
          </p>
          <p class="text-sm md:text-xl">June 2016 – May 2017 | 67%</p>
        </div>
      </section>

      {/* Technical Skills */}
      <section class="mt-8">
        <h2 class="text-xl md:text-3xl font-semibold border-b mb-3">Technical Skills</h2>
        <ul class="text-sm md:text-xl list-disc pl-5 space-y-1 mt-10">
          <li><strong>Languages:</strong> HTML, CSS, JavaScript</li>
          <li>
            <strong>Technologies / Frameworks:</strong> Bootstrap, Tailwind CSS,
            React, React Router, Git, Nodemailer
          </li>
          <li>
            <strong>Developer Tools:</strong> VS Code, Vite, Vercel, GitHub, Figma, npm
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section class="mt-8">
        <h2 class="text-xl md:text-3xl font-semibold border-b mb-3">Projects</h2>

        {/* Project 1 */}
        <div class="my-10">
          <h3 class="font-medium">
            E-Commerce Website | React, Tailwind, React Router
            <span class="ml-10">
              <a class="underline " href="https://ecommerce-supplements.vercel.app/">Live</a> ·{" "}
            <a class="underline" href="https://github.com/ilanchezhian-m/Ecommerce">GitHub</a>
            </span>
          </h3>
         
          <ul class="text-sm md:text-xl list-disc pl-5 space-y-1">
            <li>Built scalable e-commerce UI with reusable React components</li>
            <li>Implemented dynamic routing and product detail pages</li>
            <li>Optimized state handling and UI performance</li>
            <li>Designed mobile-first responsive layout using Tailwind CSS</li>
          </ul>
        
        </div>

        {/* Project 2 */}
        <div class="my-10">
          <h3 class="font-medium">
            Startup Website for Student Company | React, Node.js
            <span class="ml-10">
            <a class="underline" href="https://startup-website-five.vercel.app/">Live</a> ·{" "}
            <a class="underline" href="https://github.com/ilanchezhian-m/Startup-Website">GitHub</a>
            </span>
          </h3>
          <ul class="text-sm md:text-xl list-disc pl-5 space-y-1">
            <li>Developed responsive startup website using React & Tailwind</li>
            <li>Integrated Nodemailer for contact form email delivery</li>
            <li>Implemented SPA navigation with React Router</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div class="my-10">
          <h3 class="font-medium">
            Weather Forecast Web App | JavaScript, Open-Meteo API  
            <span class="ml-10"> 
            <a class="underline" href="https://weather-project-three-kohl.vercel.app/">Live</a> ·{" "}
            <a class="underline" href="https://github.com/ilanchezhian-m/weather-projcect">GitHub</a>
            </span>
          </h3>
    
          <ul class="text-sm md:text-xl list-disc pl-5 space-y-1">
            <li>Built real-time weather dashboard using public API</li>
            <li>Implemented search suggestions and unit switching</li>
            <li>Added dark/light theme using CSS variables</li>
          </ul>
        </div>
      </section>

      {/* Additional Information */}
      <section class="mt-8">
        <h2 class="text-xl font-semibold border-b mb-3">Additional Information</h2>
        <p class="text-sm md:text-xl mb-1">
          <strong>Soft Skills:</strong> Active listening, Critical thinking,
          Adaptability, Teamwork, Work ethic
        </p>
        <p class="text-sm md:text-xl">
          <strong>Languages:</strong> English, Tamil, Telugu
        </p>
      </section>

      {/* Co-Curricular */}
      <section class="mt-8">
        <h2 class="text-xl font-semibold border-b mb-3">Co-Curricular</h2>
        <ul class="text-sm md:text-xl list-disc pl-5 space-y-1">
          <li>
            Organized district-level Quiz Competition conducted by The Hindu
            Publications
          </li>
          <li>
            Presented paper at REPOWIS’21 National Level Technical Symposium,
            Kongu Engineering College
          </li>
        </ul>
      </section>

    </main>
  );
});

export const head: DocumentHead = {
  title: "Resume | Ilanchezhian M",
  meta: [
    {
      name: "description",
      content:
        "Resume of Ilanchezhian M – Frontend Developer skilled in React, Tailwind CSS, and modern web technologies.",
    },
  ],
};
