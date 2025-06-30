// app/components/Menu.tsx
import React from 'react';

// Define a type for menu items for reusability and type-safety
export type MenuItemType = {
  id: number;
  name: string;
  description: string;
  tags: string;
  price: string;
  image_url: string;
};

interface MenuProps {
  items: MenuItemType[];
}

export function Menu({ items }: MenuProps) {
  if (!items || items.length === 0) {
    return <p className="text-center text-gray-500">Menu coming soon...</p>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={item.image_url} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-semibold text-amber-600">{item.price}</span>
                <div className="flex space-x-2">
                  {item.tags.split(',').map(tag => (
                    <span key={tag} className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
