-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    status ENUM('unread', 'read') DEFAULT 'unread'
);
