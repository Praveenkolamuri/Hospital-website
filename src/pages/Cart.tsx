
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Plus, Minus, Trash2, CreditCard } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      price: 12.99,
      originalPrice: 15.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      quantity: 2,
      prescription: false
    },
    {
      id: 2,
      name: "Vitamin D3 Tablets",
      category: "Supplements",
      price: 24.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=300&fit=crop",
      quantity: 1,
      prescription: false
    },
    {
      id: 3,
      name: "Blood Pressure Monitor",
      category: "Medical Devices",
      price: 89.99,
      originalPrice: 109.99,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop",
      quantity: 1,
      prescription: false
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const savings = originalTotal - subtotal;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    alert(`🛒 Proceeding to Checkout\n\nSubtotal: $${subtotal.toFixed(2)}\nShipping: $${shipping.toFixed(2)}\nTotal: $${total.toFixed(2)}\n\nYou saved: $${savings.toFixed(2)}!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Shopping Cart</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Review your selected items and proceed to secure checkout.
            </p>
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">
              {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} in Cart
            </Badge>
          </div>
        </div>

        {/* Cart Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {cartItems.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                <p className="text-gray-600 mb-6">Add some medicines to get started</p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Continue Shopping
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cart Items</h2>
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <p className="text-green-600 font-semibold">{item.category}</p>
                          {item.prescription && (
                            <Badge variant="outline" className="text-orange-600 border-orange-600 mt-1">
                              Prescription Required
                            </Badge>
                          )}
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xl font-bold text-gray-900">${item.price}</span>
                            <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input 
                            type="number" 
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-16 text-center"
                            min="1"
                          />
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Original Price</span>
                      <span className="line-through text-gray-500">${originalTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-semibold">
                      <span>You Save</span>
                      <span>-${savings.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-sm text-green-600">🎉 Free shipping on orders over $50!</p>
                    )}
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-gray-600">📦 Standard Delivery: 2-3 business days</p>
                    <p className="text-sm text-gray-600">🚚 Express Delivery: Next business day</p>
                    <p className="text-sm text-gray-600">✅ All medicines are authentic and verified</p>
                  </CardContent>
                </Card>

                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
