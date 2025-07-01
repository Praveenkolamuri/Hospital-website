
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingCart, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      price: 12.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Vitamin D3 Tablets",
      category: "Supplements", 
      price: 24.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=300&fit=crop"
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Shopping Cart</h1>
            <p className="text-xl">Review your items and proceed to checkout</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="h-24 w-24 mx-auto text-gray-400 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <Button onClick={() => navigate("/pharmacy")} className="bg-green-600 hover:bg-green-700">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">{item.name}</h3>
                          <Badge className="bg-green-100 text-green-800">{item.category}</Badge>
                          <p className="text-2xl font-bold text-green-600 mt-2">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-lg font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-2xl font-bold">
                      <span>Total: ${total.toFixed(2)}</span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Proceed to Checkout
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddToCart;
