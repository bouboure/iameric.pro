import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to Eric's Football Journey</h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto">Eric was born on August 4, 2024. Follow his journey as we train him to become the next football star.</p>
        <div className="relative aspect-video w-full max-w-4xl mx-auto mb-10">
          <Image
            src="https://source.unsplash.com/random/1200x800/?baby,football"
            alt="Eric's First Kick"
            layout="fill"
            objectFit="cover"
            className="custom-img"
          />
        </div>
        <Link href="/blog">
          <Button size="lg" className="custom-button">Follow His Journey</Button>
        </Link>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-10 text-center">Recent Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="custom-card">
              <CardHeader>
                <CardTitle>Update {i}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}