// app/components/BookingForm.tsx
import React, { useState } from 'react';

type ApiResponse = { err?: string; };

export function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.err || 'Something went wrong.');
      }

      setStatus('success');
      setMessage('Thank you! Your booking request has been sent.');
      (event.target as HTMLFormElement).reset();

    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Failed to submit booking.');
    }
  };

  return (
    <div className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-extrabold text-text sm:text-5xl text-center font-serif mb-16">Book a Service</h2>
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-text">Full Name</label>
              <input type="text" name="name" id="name" required className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-text">Email Address</label>
              <input type="email" name="email" id="email" required className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-text">Phone Number</label>
              <input type="tel" name="phone" id="phone" className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="date" className="block text-lg font-medium text-text">Preferred Date</label>
              <input type="date" name="date" id="date" required className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="block text-lg font-medium text-text">Service Required</label>
            <select id="service" name="service" required className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
              <option>Private Dinner</option>
              <option>Cooking Class</option>
              <option>Corporate Event</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-text">Message</label>
            <textarea id="message" name="message" rows={5} className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
          </div>
          <div>
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full flex justify-center py-4 px-6 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 transition-transform transform hover:scale-105"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Request'}
            </button>
          </div>
          {message && (
            <p className={`text-center text-lg ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
