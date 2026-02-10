## 🚀 Personal Portfolio Website

A modern and responsive personal portfolio website built using **React** and **Chakra UI**, designed to showcase projects, skills, and contact information.

### ✨ Features
- Responsive design (mobile & desktop)
- Light / Dark mode support
- Project showcase with image slider
- Contact form with **EmailJS integration**
- Admin notification email on form submission
- Auto-reply email sent to users
- Social media links (GitHub, LinkedIn, X)

### 🛠️ Tech Stack
- React (Vite)
- Chakra UI
- EmailJS
- React Icons
- Framer Motion

### 📧 Contact Form
The contact form uses **EmailJS** to:
- Send messages directly to your email
- Automatically reply to users without a backend
- Secure configuration using environment variables

### 🔐 Environment Variables
Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_ADMIN_TEMPLATE_ID=your_admin_template_id
VITE_EMAILJS_REPLY_TEMPLATE_ID=your_reply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
