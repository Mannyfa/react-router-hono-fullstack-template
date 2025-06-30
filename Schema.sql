DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS menu_items;
DROP TABLE IF EXISTS blog_posts;
DROP TABLE IF EXISTS newsletter_signups;

CREATE TABLE bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  date TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE menu_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  tags TEXT,
  price TEXT,
  image_url TEXT
);

CREATE TABLE blog_posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT,
  tags TEXT,
  image_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE newsletter_signups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert some dummy data
INSERT INTO menu_items (name, description, tags, price, image_url) VALUES
('Seared Scallops', 'With saffron risotto and asparagus tips.', 'seafood,gluten-free', '$32', 'https://images.unsplash.com/photo-1580922700909-10657ba28a8d'),
('Filet Mignon', '8oz center-cut, served with potato gratin and a red wine reduction.', 'beef,classic', '$45', 'https://images.unsplash.com/photo-1558030006-450675393462');

INSERT INTO blog_posts (title, content, author, tags, image_url) VALUES
('The Art of Sous Vide', 'A deep dive into the techniques of precision cooking...', 'Chef Jane Doe', 'cooking,technique', 'https://images.unsplash.com/photo-1619985516997-3c5a6b523554');