-- Create the tables
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    color_name VARCHAR(255) NOT NULL,
    color_hex VARCHAR(7) NOT NULL,
    price INT NOT NULL
);


CREATE TABLE interests (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    product_id INT NOT NULL REFERENCES products(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some examples:

INSERT INTO products (color_name, color_hex, price) VALUES
('Royal Gray', '#808080', 1000),
('Amber', '#FFBF00', 1100),
('Emerald', '#50C878', 1200),
('Cinerous', '#98817B', 1300);


INSERT INTO interests (email, product_id) VALUES
('link.zelda@example.com', 1),  -- Amber
('mario.hates.bowser@example.com', 2), -- Emerald
('pikachu@example.com', 3); -- Royal Gray
