import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  { id: 1, title: "Eric's First Kick", date: "2024-09-15", excerpt: "At just 6 weeks old, Eric made his first intentional contact with a football..." },
  { id: 2, title: "Developing Motor Skills", date: "2024-10-20", excerpt: "We've started incorporating fun exercises to help Eric develop his motor skills..." },
  { id: 3, title: "The Importance of Play", date: "2024-11-25", excerpt: "As Eric grows, we're learning the crucial role of playtime in his development..." },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-10 text-center">Eric's Football Journey</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="custom-card">
            <CardHeader>
              <CardTitle className="text-2xl">{post.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-primary hover:underline font-semibold">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}