CREATE TABLE users (
  id SERIAL PRIMARY KEY,                       
  firstName VARCHAR(40) NOT NULL,             
  lastName VARCHAR(40),                       
  emailId VARCHAR(100) NOT NULL UNIQUE,       
  password VARCHAR(255) NOT NULL,              
  age INT CHECK (age >= 18),                   
  gender VARCHAR(10),                          
  photo_url VARCHAR(255) DEFAULT 'https://tse3.mm.bing.net/th?id=OIP.w0TcjC4y9CxTrY3sitYa_AAAAA&pid=Api&P=0&h=220',
  about TEXT DEFAULT 'This is the default about the user!', 
  skills TEXT[],                               
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  CONSTRAINT email_id_check CHECK (emailId LIKE '%@%'),  
  CONSTRAINT gender_check CHECK (gender IN ('male', 'female', 'other')),  
  CONSTRAINT password_check CHECK (LENGTH(password) >= 8)  
);
