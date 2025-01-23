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


## **Folder Structure**

ui-ux-hackathon/ ├── src/ │ ├── components/ │ │ ├── Header.js │ │ ├── Footer.js │ │ ├── Sidebar.js │ │ ├── Modal.js │ │ ├── Button.js │ │ ├── Card.js │ │ ├── FormInput.js │ │ ├── Navbar.js │ │ ├── ProductCard.js │ │ ├── Pagination.js │ │ ├── FilterSidebar.js │ │ ├── SearchBar.js │ │ ├── UserProfile.js │ │ ├── LoginForm.js │ │ ├── SignupForm.js │ │ ├── Notification.js │ │ ├── Spinner.js │ │ ├── Tooltip.js │ ├── pages/ │ │ ├── index.js │ │ ├── about.js │ │ ├── contact.js │ │ ├── products.js │ │ ├── product/[slug].js │ │ ├── login.js │ │ ├── signup.js │ ├── Documents/ │ │ ├── hackathon-day1.pdf │ │ ├── hackathon-day2.pdf │ │ ├── hackathon-day3.pdf │ │ ├── hackathon-day4.pdf │ │ ├── hackathon-day5.pdf │ │ ├── hackathon-day6.pdf ├── public/ │ ├── images/ │ ├── assets/ ├── .env ├── README.md


![imag alt]()
---

## **Environment Setup**

1. **Clone the repository**:
   ```bash
   git clone 


2. **Install dependencies**:
   ```bash
  cd ui-ux-hackathon
  npm install

3. **Setup Environment Variables**:
 - .env file mein sensitive variables add karein:

4. **Run the development server**:
    ```bash
       npm run dev

5. **Visit the application**: 
 Open your browser and go to http://localhost:3000.


## **Staging Environment**
 Project deploy link

🔗 Visit Staging Environment 

## **Contact**
 - For queries or feedback, reach out via:

- Email: komalfareed93@gmail.com
- GitHub: komalshah22



  




