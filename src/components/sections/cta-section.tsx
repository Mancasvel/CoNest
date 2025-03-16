import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-lg bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">
            Start Your CoNest Experience Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community and find the perfect accommodation for your
            academic experience in Mexico. Whether you're a student or a host,
            we're here to help you make meaningful connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">
                Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 