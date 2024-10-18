import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const birthDate = new Date('2024-08-04');
  const today = new Date();
  const ageInDays = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 3600 * 24));
  const ageInMonths = Math.floor(ageInDays / 30.44);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-10 text-center">About Eric</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <p className="text-lg mb-6">
            Eric was born on August 4, 2024. From the moment he entered this world, we knew he was destined for greatness on the football field.
          </p>
          <p className="text-lg mb-6">
            Our journey began with the simple idea: what if we could train a football star from infancy? With dedication, love, and a bit of science, we're embarking on this incredible adventure with Eric.
          </p>
          <p className="text-lg">
            Follow along as we document every step, every milestone, and every kick towards Eric's future in football.
          </p>
        </div>
        <Image
          src="https://source.unsplash.com/random/800x600/?baby,football"
          alt="Eric's first football"
          width={800}
          height={600}
          className="custom-img"
        />
      </div>

      <Card className="custom-card mb-12">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-6">Eric's Stats</h2>
          <p className="text-xl mb-2">Age: {ageInMonths} months ({ageInDays} days)</p>
          <p className="text-xl mb-2">Height: Updating monthly</p>
          <p className="text-xl mb-2">Weight: Updating monthly</p>
          <p className="text-xl">Favorite Toy: Mini football</p>
        </CardContent>
      </Card>

      <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
      <p className="text-lg mb-10">
        We believe that by introducing football concepts early and making them a natural part of Eric's life, we can nurture not just a talented player, but a passionate individual who truly loves the game. Our goal is to document this journey, sharing our methods, challenges, and triumphs with the world.
      </p>

      <h2 className="text-4xl font-bold mb-6">Join Us</h2>
      <p className="text-lg">
        Whether you're a parent, a coach, or just curious about this unique experiment, we invite you to follow Eric's journey. Together, let's explore the potential of early sports education and the beautiful game of football.
      </p>
    </div>
  );
}