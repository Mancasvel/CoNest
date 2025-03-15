# CoNest - Student Accommodation Platform

CoNest is a modern web application that connects international students with local host families in Mexico, providing a seamless and secure platform for finding and managing student accommodations.

## 🌟 Features

### For Students
- Create and manage student profiles
- Search for host families based on preferences
- Real-time chat with potential hosts
- Secure payment system for matching fees
- Contract management and digital signatures
- Payment tracking for accommodation fees

### For Host Families
- Create and manage host profiles
- List available rooms and amenities
- Chat with potential students
- Contract management and digital signatures
- Payment tracking for accommodation fees

### General Features
- Responsive design for all devices
- Real-time notifications
- Secure authentication
- Multi-language support
- Dark/Light mode

## 🛠️ Tech Stack

- **Frontend:**
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Shadcn/ui
  - React Email
  - Stripe Elements

- **Backend:**
  - Supabase (PostgreSQL)
  - Supabase Auth
  - Supabase Storage
  - Stripe API
  - Resend (Email)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Supabase account
- Stripe account
- Resend account

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Resend
RESEND_API_KEY=your_resend_api_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/conest.git
cd conest
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
conest/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── layout/         # Layout components
│   │   ├── sections/       # Page sections
│   │   ├── ui/            # UI components
│   │   └── emails/        # Email templates
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── types/             # TypeScript types
│   └── styles/            # Global styles
├── public/                # Static assets
├── supabase/             # Supabase migrations
└── prisma/               # Database schema
```

## 🎨 Design System

### Colors
- Primary: `#1E40AF` (Blue)
- Secondary: `#4B5563` (Gray)
- Background: White
- Text: Various shades of gray

### Typography
- Font Family: Inter
- Headings: Bold
- Body: Regular

### Components
- Custom button styles
- Card components
- Form inputs
- Navigation elements

## 🔒 Security

- Row Level Security (RLS) in Supabase
- Secure authentication flow
- Protected API routes
- Secure payment processing
- Data encryption

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1400px

## 🌐 Internationalization

- English (default)
- Spanish
- More languages coming soon

## 📦 Deployment

The application can be deployed to Vercel:

```bash
vercel deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- [Your Name] - Lead Developer
- [Team Member 2] - Frontend Developer
- [Team Member 3] - Backend Developer
- [Team Member 4] - UI/UX Designer

## 📞 Support

For support, email support@conest.com or join our Slack channel.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Stripe](https://stripe.com/)
- [Resend](https://resend.com/)