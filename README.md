# Software Requirements Specification (SRS)  

# Coffee Shop Coupon Management Application 

 

 

## Introduction: 

The Coffee Shop Coupon Management Application aims to provide a comprehensive solution for restaurants and customers to manage coupon assignments, redemption, and user profiles. This document outlines the functional and non-functional requirements of the application and provides a detailed understanding of its features, architecture, and technology stack. 


## Purpose: 

This document serves as a comprehensive guide for the development team, stakeholders, and project managers. It defines the scope of the application, user interactions, system components, technical specifications, and provides clarity on how the application will be designed and developed. 


## Scope: 

The application will consist of three components: a website version (App 1) for SUPERADMIN, a mobile app (App 2) for restaurant users (Admin and Staff), and a mobile app (App 3) for customers. Each component will have specific functionalities tailored to the user groups. 


## Technical Stack: 

### Frontend
NEXT.js React - web-based and mobile app interfaces. 

### Backend
Node.js + Express for server-side logic and API development. 

### Database
MySQL 8 for storing structured data 

### UX Design
ADOBE XD 

 

## Assumptions and Constraints: 

The application will require an internet connection for real-time functionality. 

The development team is familiar with React Hybrid, Node.js, and MySQL. 

Have an Android/IOS/Windows Device 



## Functional Requirements: 


## App 1 - Website Version (SUPERADMIN): 

### SUPERADMIN Login: 

SUPERADMIN can Login using a PRESET phone number and receive an OTP for verification. 

SUPERADMIN can log in using their credentials to Reach Landing Page. 

### Restaurant Dashboard: 

SUPERADMIN can view a list of registered restaurants. 

SUPERADMIN can view new restaurant registration requests. 

SUPERADMIN can approve or reject new restaurant registrations. 

SUPERADMIN can suspend or delete restaurant accounts. 


 

## App 2 - Mobile App for Restaurant (Admin and Staff): 

### Shop Registration 

Registration Screen for Restaurant 

Enter Mandatory Restaurant Details 

Enter Mandatory Admin Details 

Enter Optional Staff Details 

Submit to SUPERADMIN for Approval 

### User Registration and Login: 

Admin and Staff can log in using their registered credentials + OTP. 

Post Login Reach Landing Page – Camera to Scan QR Code 

### QR Code Scan and Coupon Assignment: 

Admin and Staff can scan customer QR codes for coupon assignment. 

Admin and Staff can view available customer coupons. 

Admin and Staff can assign new coupons to customers. 

### Profile Management: 

Admin can update their profiles, including contact information. 

 


## App 3 - Mobile App for Customer (End User): 

### User Scans QR Code in Restaurant to Download App from Store 

### User Registration and Login: 

Customers can register using Phone Number First Name and Last Name (Optional) details. 

Customers can log in using their registered credentials with OTP. 

Customers go to Landing Page -> QR CODE Display 

### QR Code Display and Coupon Assignment: 

Customers can view their Already Generated QR code for coupon assignment. 

Customers can display their QR code for scanning by restaurant staff. 

Restaurant Staff Assigns the Coupons 

Customers can view updated Coupons in their Coupon List under the Restaurant 

### Restaurant List and Coupon Viewing: 

Customers can view a list of all registered restaurants. 

Customers can view coupons available for each restaurant. 


 

## Common Features: 


### Security: 

User data should be securely stored and transmitted. 

QR codes should be tamper-proof to prevent fraudulent activities. 


### Performance: 

The application should perform well under varying loads and traffic. 


### Usability: 

The user interface should be intuitive, user-friendly, and responsive across devices. 


### Compatibility: 

The application should be compatible with Android and IOS Devices 


### Scalability: 

The architecture should allow for easy scalability to accommodate growing user numbers. 



 

## Conclusion: 

This detailed SRS outlines the functional and non-functional requirements of the Restaurant Coupon Management Application, along with a starter MySQL 8 database schema. It serves as a reference for developers, project managers, and stakeholders to understand the application's scope, features, and architecture. 

 
