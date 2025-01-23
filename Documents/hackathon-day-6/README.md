### **Shop.co - Marketplace hackathon(Day 1-6)** 

**Shop.co** is a modern and responsive clothes marketplace designed to empower small businesses and individuals. This platform provides a seamless and secure e-commerce experience.

---

## **Project Overview**

Shop.co is part of a hackathon project developed in 6 days. Each day's tasks focused on a specific aspect of the application, including design, development, testing, and deployment.

---

## **Features**
- **Dynamic Product Pages**: Product listing and detail pages.
- **Reusable Components**: Header, Footer, Sidebar, Filters, Cards, and ProductCards.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Performance Optimized**: Tested with Lighthouse and GTmetrix.
- **Environment Variables**: Securely stored sensitive data using `.env`.

---

## **Day-by-Day Progress**

### **Day 1: Conceptualization and Marketplace Design**
- Defined the marketplace type as a **general e-commerce platform for Shop.co**.
- **Business Goals**:
  - Promote small businesses and entrepreneurship.
  - Provide a seamless platform for buying and selling dresses online.
- **Data Schema**:
  - Entities: Products, Orders, Customers, and Delivery Zones.
  - Relationships: Customers place orders, orders reference products, and delivery zones are assigned to drivers.

---

### **Day 2: Technical Planning**
- **Tech Stack Finalized**:
  - **Frontend**: Next.js with Tailwind CSS for styling.
  - **Backend**: Sanity CMS for data management.
  - **Hosting**: Netlify for deployment.
- **Component Design**:
  - Designed and planned key components like ProductCard and Sidebar.

---

### **Day 3: Data Schema and Migration**
- **Sanity CMS Setup**:
  - Designed the schema for product categories, product descriptions,Colors, and pricing.
- **Data Import**:
  - Imported sample product data into CMS for testing.
- **Relationships**:
  - Defined relationships between products and orders.

---

### **Day 4: Dynamic Component Creation**
- **Key Components Developed**:
  - **Header**: Responsive navigation bar.
  - **ProductCard**: To display product details.
  - **FilterSidebar**: For dynamic filtering options.
  - **PaginationControls**: For dividing products into multiple pages.
- **Styling**: Styled components using Tailwind CSS to make them responsive and visually appealing.

---

### **Day 5: Testing**
- **Functional Testing**:
  - Verified workflows and API responses using Cypress and Postman.
- **Performance Testing**:
  - Analyzed speed and responsiveness using Lighthouse and GTmetrix tools.
- **Security Testing**:
  - Ensured input validation and HTTPS configurations.
- **Test Report**:
  - Documented functional and security test cases.

---

### **Performance Testing**:
![imag alt](https://github.com/Komal-shah22/ui-ux-hackathon/blob/68ba49321b4862ded7a9a861eba0ccd2b03d244b/Documents/hackathon-day-6/report.jpg)


### **Day 6: Deployment and Staging Environment**
- **Deployment**:
  - Deployed the project to Vercel for a staging environment.
- **Environment Variables**:
  - Configured API keys and sensitive data securely in the `.env` file.
- **Staging Environment Testing**:
  - Completed functional, performance, and security testing.
- **Documentation**:
  - Organized project files and README.md in the GitHub repository.

---

### **Hackathon Day-by-Day Progress**

![imag alt](https://github.com/Komal-shah22/ui-ux-hackathon/blob/2292ed345017067d565e24f0dd25c8d7d000b85a/Documents/hackathon-day-6/(Day%201-6).jpg)

## Project Structure
The project is organized as follows:

```plaintext
ui-ux-hackathon/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Sidebar.js
│   │   ├── Modal.js
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── FormInput.js
│   │   ├── Navbar.js
│   │   ├── ProductCard.js
│   │   ├── Pagination.js
│   │   ├── FilterSidebar.js
│   │   ├── SearchBar.js
│   │   ├── UserProfile.js
│   │   ├── LoginForm.js
│   │   ├── SignupForm.js
│   │   ├── Notification.js
│   │   ├── Spinner.js
│   │   ├── Tooltip.js
│   ├── pages/
│   │   ├── index.js
│   │   ├── about.js
│   │   ├── contact.js
│   │   ├── products.js
│   │   ├── product/[slug].js
│   │   ├── login.js
│   │   ├── signup.js
│   ├── Documents/
│   │   ├── hackathon-day1.pdf
│   │   ├── hackathon-day2.pdf
│   │   ├── hackathon-day3.pdf
│   │   ├── hackathon-day4.pdf
│   │   ├── hackathon-day5.pdf
│   │   ├── hackathon-day6.pdf
├── public/
│   ├── images/
│   ├── assets/
├── .env
├── README.md
```

## Description of Folders and Files

### **src/components/**
This folder contains all reusable UI components, such as:
- **Header.js**: Displays the navigation bar at the top of the page.
- **Footer.js**: Displays the footer section.
- **Sidebar.js**: Provides a sidebar for filters or navigation.
- **Modal.js**: Handles pop-up modal functionality.
- **Button.js**: Customizable button components.
- **Card.js**: Generic card component used in various places.
- **FormInput.js**: Input fields for forms.
- **Navbar.js**: Additional navigation bar configuration.
- **ProductCard.js**: Displays product information in a card format.
- **Pagination.js**: Handles pagination of data.
- **FilterSidebar.js**: Dynamic filtering options for products.
- **SearchBar.js**: Search functionality for the application.
- **UserProfile.js**: Displays user profile information.
- **LoginForm.js**: Form for user login.
- **SignupForm.js**: Form for user signup.
- **Notification.js**: Handles notifications for the application.
- **Spinner.js**: Loading spinner for asynchronous operations.
- **Tooltip.js**: Provides tooltips for additional context.

### **src/pages/**
This folder contains all the main pages:
- **index.js**: Homepage of the application.
- **about.js**: About page.
- **contact.js**: Contact page.
- **products.js**: Page displaying all products.
- **product/[slug].js**: Dynamic route for individual product details.
- **login.js**: User login page.
- **signup.js**: User signup page.

### **src/Documents/**
Contains project documentation for each day of the hackathon:
- **hackathon-day1.pdf**: Details of Day 1 activities.
- **hackathon-day2.pdf**: Details of Day 2 activities.
- **hackathon-day3.pdf**: Details of Day 3 activities.
- **hackathon-day4.pdf**: Details of Day 4 activities.
- **hackathon-day5.pdf**: Details of Day 5 activities.
- **hackathon-day6.pdf**: Details of Day 6 activities.

### **public/**
This folder contains public assets:
- **images/**: Image assets used in the project.
- **assets/**: Additional assets like icons, fonts, etc.

### **.env**
Environment variables file for sensitive data such as API keys.

### **README.md**
This file provides an overview of the project.

---

## **Environment Setup**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Komal-shah22/ui-ux-hackathon.git
   cd ui-ux-hackathon
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Setup environment variables**:
   Create a `.env` file and add the following:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Visit the application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## Deployment
Deployed on **Vercel**. Visit the [staging environment](https://github.com/Komal-shah22/ui-ux-hackathon) for more details.

---

## Contact
For queries or feedback:
- **Email**: komalfareed93@gmail.com
- **GitHub**: [Komal Shah](https://github.com/Komal-shah22)

---





  




