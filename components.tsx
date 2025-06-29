import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Download, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      title: "Digital Art Pack - Cyberpunk Collection",
      author: "ArtistPro",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      category: "Digital Art",
      rating: 4.8,
      downloads: 1200,
      featured: true
    },
    {
      id: 2,
      title: "Complete Guide to Photography",
      author: "PhotoMaster",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      category: "Ebooks",
      rating: 4.9,
      downloads: 800,
      featured: true
    },
    {
      id: 3,
      title: "Ambient Music Collection Vol. 1",
      author: "SoundScape",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      category: "Music",
      rating: 4.7,
      downloads: 650,
      featured: true
    }
  ];

  const categories = [
    { name: "Digital Art", count: 245, icon: "🎨" },
    { name: "Ebooks", count: 180, icon: "📚" },
    { name: "Music", count: 320, icon: "🎵" },
    { name: "Templates", count: 150, icon: "📄" },
    { name: "Photography", count: 290, icon: "📸" },
    { name: "Video", count: 120, icon: "🎬" }
  ];

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
    console.log(Added product ${productId} to cart);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                DigitalShop
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/categories" className="text-foreground hover:text-primary transition-colors">Categories</Link>
                <Link to="/products" className="text-foreground hover:text-primary transition-colors">Browse All</Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search products..." className="pl-10 w-64" />
              </div>
              
              <Button variant="ghost" size="icon" className="relative" asChild>
                <Link to="/cart">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {cartItems}
                    </Badge>
                  )}
                </Link>
              </Button>
              
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
              Premium Digital Downloads
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Discover thousands of high-quality digital products from talented creators worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
                Start Browsing
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Become a Creator
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Downloads</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-blue-600">
                    Featured
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{product.title}</CardTitle>
                  <CardDescription>by {product.author}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Download className="h-4 w-4" />
                      <span>{product.downloads}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <div className="flex gap-2 w-full">
                    <Button className="flex-1" onClick={() => addToCart(product.id)}>
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="icon">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "Amazing quality digital products! The art pack I bought exceeded my expectations.",
                rating: 5
              },
              {
                name: "Mike Chen",
                text: "Fast downloads, great prices, and excellent customer service. Highly recommended!",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                text: "The music collection I purchased was perfect for my project. Will definitely buy again!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Creating?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of creators selling their digital products</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Sign Up Today
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">DigitalShop</h3>
              <p className="text-muted-foreground mb-4">Your marketplace for premium digital downloads</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/categories/art" className="hover:text-primary">Digital Art</Link></li>
                <li><Link to="/categories/ebooks" className="hover:text-primary">Ebooks</Link></li>
                <li><Link to="/categories/music" className="hover:text-primary">Music</Link></li>
                <li><Link to="/categories/templates" className="hover:text-primary">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/refunds" className="hover:text-primary">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 DigitalShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
