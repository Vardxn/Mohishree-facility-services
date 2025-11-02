-- Seed Data for Mohishree Facility Services Database

-- Insert Services
INSERT INTO services (name, slug, category, description, short_description, base_price, unit, is_active, display_order) VALUES
-- Residential Services
('Full Home Cleaning', 'full-home-cleaning', 'residential', 'Complete cleaning solution for your entire home', 'End-to-end home cleaning from kitchen to bedroom', 2000.00, 'per_service', TRUE, 1),
('Deep Cleaning', 'deep-cleaning', 'residential', 'Intensive cleaning for thorough sanitization', 'Professional deep cleaning with advanced equipment', 3500.00, 'per_service', TRUE, 2),
('Sofa & Upholstery Cleaning', 'sofa-upholstery-cleaning', 'residential', 'Professional fabric and upholstery care', 'Remove stains and restore furniture', 1500.00, 'per_service', TRUE, 3),
('Bathroom Cleaning', 'bathroom-cleaning', 'residential', 'Sanitization and deep cleaning of bathrooms', 'Spotless, hygienic bathroom cleaning', 800.00, 'per_service', TRUE, 4),
('Water Tank Cleaning', 'water-tank-cleaning', 'residential', 'Safe drinking water through tank sanitization', 'Professional water tank cleaning and disinfection', 1200.00, 'per_service', TRUE, 5),
('Chimney Cleaning', 'chimney-cleaning', 'residential', 'Grease and carbon deposit removal', 'Kitchen chimney deep cleaning service', 1000.00, 'per_service', TRUE, 6),
('Window Cleaning', 'window-cleaning', 'residential', 'Streak-free window and glass cleaning', 'Crystal clear windows inside and out', 500.00, 'per_service', TRUE, 7),

-- Commercial Services
('Corporate Housekeeping', 'corporate-housekeeping', 'commercial', 'Comprehensive facility management for offices', 'Complete office housekeeping solutions', 15000.00, 'per_month', TRUE, 8),
('Office Cleaning', 'office-cleaning', 'commercial', 'Professional office cleaning services', 'Daily/weekly office cleaning', 5000.00, 'per_service', TRUE, 9),
('Facility Management', 'facility-management', 'commercial', 'End-to-end facility management services', 'Complete facility operations management', 25000.00, 'per_month', TRUE, 10),

-- Industry Solutions
('Shopping Mall Cleaning', 'shopping-malls', 'industrial', 'Large-scale retail space maintenance', 'Specialized cleaning for malls and retail', 30000.00, 'per_month', TRUE, 11),
('Educational Institution Cleaning', 'educational-institutions', 'industrial', 'School and college cleaning services', 'Safe, hygienic cleaning for educational spaces', 20000.00, 'per_month', TRUE, 12),
('Corporate Office Solutions', 'corporate-offices', 'industrial', 'Enterprise-level office cleaning', 'Customized solutions for corporate campuses', 40000.00, 'per_month', TRUE, 13),
('Factory Cleaning', 'factories', 'industrial', 'Industrial facility cleaning', 'Heavy-duty cleaning for manufacturing units', 35000.00, 'per_month', TRUE, 14),
('ATM Cleaning', 'atm-cleaning', 'industrial', 'Secure ATM kiosk cleaning services', 'Professional cleaning for banking kiosks', 500.00, 'per_service', TRUE, 15);

-- Insert Service Areas
INSERT INTO service_areas (city, state, is_active) VALUES
('Mumbai', 'Maharashtra', TRUE),
('Pune', 'Maharashtra', TRUE),
('Aurangabad', 'Maharashtra', TRUE),
('Nagpur', 'Maharashtra', TRUE),
('Nashik', 'Maharashtra', TRUE),
('Thane', 'Maharashtra', TRUE),
('Navi Mumbai', 'Maharashtra', TRUE);

-- Insert Sample Admin User (Password: Admin@123 - should be hashed in production)
INSERT INTO users (name, email, phone, password_hash, role, status, email_verified) VALUES
('Admin User', 'admin@mohishreefacilityservices.com', '+919876543210', '$2b$10$X7XQv9N5rZ4vX7XQv9N5rZ4vX7XQv9N5rZ4vX7XQv9N5rZ', 'admin', 'active', TRUE);

-- Insert Sample Testimonials
INSERT INTO testimonials (customer_name, customer_company, service_type, rating, testimonial_text, is_featured, is_approved, location) VALUES
('A. Kumar', 'Verified Justdial Reviewer', 'Home Cleaning', 5, 'Mohishree Facility Services gives excellent help! Their team is friendly and fast. They fix problems well and make my home nice. I called them for a leaky sink, and they came quickly. The work was great, and the price was fair.', TRUE, TRUE, 'Mumbai'),
('R. Patel', 'Corporate Client', 'Office Cleaning', 5, 'Outstanding service! The team is professional and thorough. Our office has never looked better. Highly recommend for commercial cleaning needs.', TRUE, TRUE, 'Pune'),
('S. Sharma', 'Residential Customer', 'Deep Cleaning', 5, 'Exceptional deep cleaning service. They covered every corner of my 3BHK apartment. Very satisfied with the results and the eco-friendly products they used.', TRUE, TRUE, 'Aurangabad');

-- Insert Sample Blog Posts
INSERT INTO blog_posts (title, slug, excerpt, content, author_name, category, is_published, published_at, read_time, views_count) VALUES
('10 Essential Deep Cleaning Tips for Indian Homes', 'deep-cleaning-tips-indian-homes', 'Monsoon season brings unique challenges. Learn how to protect your home from humidity, mold, and water damage.', '<p>Deep cleaning is essential...</p>', 'Priya Sharma', 'residential', TRUE, NOW(), '8 min read', 150),
('Office Hygiene Best Practices Post-COVID', 'office-hygiene-post-covid', 'Maintaining a safe workplace environment requires updated protocols.', '<p>Workplace safety...</p>', 'Rajesh Kumar', 'commercial', TRUE, NOW(), '6 min read', 200),
('Eco-Friendly Cleaning Products: What Works', 'eco-friendly-cleaning-products', 'Go green without compromising on cleanliness.', '<p>Sustainable cleaning...</p>', 'Anjali Mehta', 'environment', TRUE, NOW(), '10 min read', 180);

-- Insert Sample Pricing Rules
INSERT INTO pricing_rules (service_id, property_type, min_area, max_area, base_price, price_per_unit, frequency_discount) VALUES
(1, '1 BHK', 0, 600, 2000.00, 0, 0),
(1, '2 BHK', 601, 1000, 2500.00, 0, 5),
(1, '3 BHK', 1001, 1500, 3000.00, 0, 10),
(2, '1 BHK', 0, 600, 3500.00, 0, 0),
(2, '2 BHK', 601, 1000, 4500.00, 0, 5),
(2, '3 BHK', 1001, 1500, 5500.00, 0, 10);

-- Insert Newsletter Subscribers (sample)
INSERT INTO newsletter_subscribers (email, name, status) VALUES
('subscriber1@example.com', 'John Doe', 'active'),
('subscriber2@example.com', 'Jane Smith', 'active');
