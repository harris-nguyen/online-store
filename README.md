## Online-Store
A full stack Node.js and React shopping cart app

## Live Demo
Try the application live at https://online-store.harrisitowynn.com/

## Features
- User can view products for sale
- User can view details of a product
- User can add a product to their cart
- User can delete a product from their cart
- User can view their cart summary
- User can place an order
- Mobile Responsiveness

## Preview
![online_store](shopping.gif) 

## System Requirements
- Node.js 10 or higher
- NPM 6 or higher
- PostgreSQL 6 or higher

## Getting Started
1. Clone the repository.
```
git clone https://github.com/harris-nguyen/online-store.git
```
2. Change directory to cloned folder
```
cd online-store/
```
3. Install all dependencies with NPM.
```
npm install
```
4. Start PostgreSQL server
```
sudo service postgresql start
```
5. Create the database
```
createdb onlineStore
```
6. Import the example database to PostgreSQL
```
npm db:import
```
7. Access the onlineStore Postgresql database server using pgweb in your default web browser
```
pgweb --db=onlineStore
```
8. Start the project.
```
npm run dev
```
9. Once started, you can view the application by opening https://localhost:3000
