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
    <div className="container mx-auto py-12 px-4 max-w-2xl">
      <h2 className="text-4xl font-bold text-center mb-8">Book a Service</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
          <input type="date" name="date" id="date" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Required</label>
          <select id="service" name="service" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500">
            <option>Private Dinner</option>
            <option>Cooking Class</option>
            <option>Corporate Event</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"></textarea>
        </div>
        <div>
          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:bg-gray-400"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Request'}
          </button>
        </div>
        {message && (
          <p className={`text-center ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
