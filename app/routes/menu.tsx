import { useQuery } from '@tanstack/react-query';

// Define a type for your menu item for type safety
type MenuItem = {
  id: number;
  name: string;
  description: string;
  tags: string;
  price: string;
  image_url: string;
};

const fetchMenu = async (): Promise<MenuItem[]> => {
  const res = await fetch('/api/menu');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export default function MenuPage() {
  const { data: menuItems, isLoading, error } = useQuery({
    queryKey: ['menu'],
    queryFn: fetchMenu,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {menuItems?.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image_url} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-semibold">{item.price}</span>
                <div className="flex space-x-2">
                  {item.tags.split(',').map(tag => (
                    <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
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