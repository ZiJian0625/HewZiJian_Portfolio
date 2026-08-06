---
title: "Smart Car Park System"
shortDescription: "An automated parking management system featuring real-time License Plate Recognition and a mobile app for seamless vehicle access and management"
image: "/images/portfolio_image/final_year_project/fyp_logo.png"
techStack: ["Python", "OpenCV", "YOLOv8", "Gemini API", "Firebase", "Android Studio", "Flutter (with Dart)", "MVC"]
githubLink: "https://github.com/ZiJian0625/smart_carpark_system"
media:
  - type: "video"
    url: "/images/portfolio_image/final_year_project/entry_horizontal_video.mp4"
    alt: "Vehicle Entry Video"
  - type: "video"
    url: "/images/portfolio_image/final_year_project/exit_horizontal_video.mp4"
    alt: "Vehicle Exit Video"
  - type: "image"
    url: "/images/portfolio_image/final_year_project/firestore_logs.png"
    alt: "Firestore Logs"
  - type: "image"
    url: "/images/portfolio_image/final_year_project/visitor_login.jpg"
    alt: "Visitor Login"
  - type: "image"
    url: "/images/portfolio_image/final_year_project/student_login.jpg"
    alt: "Student Login"
  - type: "image"
    url: "/images/portfolio_image/final_year_project/staff_login.jpg"
    alt: "Staff Login"
  - type: "image"
    url: "/images/portfolio_image/final_year_project/home_page.jpg"
    alt: "Home Page"
  - type: "image"
    url: "/images/portfolio_image/final_year_project/profile.jpg"
    alt: "Profile Page"
  - type: "image"
    url: "/images/portfolio_image/final_year_project/vep_approved.png"
    alt: "VEP Approved Page"
  - type: "image"
    url: "/images/portfolio_image/final_year_project/vep_active.png"
    alt: "VEP Active Page"
  - type: "image"
    url: "/images/portfolio_image/final_year_project/card_payment.png"
    alt: "Card Payment Interface"
  - type: "image"
    url: "/images/portfolio_image/final_year_project/find_my_car.jpg"
    alt: "Find My Car Feature"
  - type: "image"
    url: "/images/portfolio_image/final_year_project/report_incident.jpg"
    alt: "Report Incident Page"
---

## Overview
Designed to modernize campus parking operations, the Smart Car Park System replaces manual guard checks and physical stickers with an automated access control solution that leverages YOLOv8 and the Gemini API for real-time License Plate Recognition (LPR). <br><br>Integrated with a Flutter and Firebase mobile app, it provides students, staff, and visitors with a centralized platform to manage Vehicle Entry Passes (VEP), pay fines online, report parking violations, and track parked vehicles effortlessly.

## Deployment Links

<a href="https://github.com/ZiJian0625/smart_carpark_system" target="_blank" rel="noopener noreferrer" class="deployment-link-btn">
  <div class="deployment-link-left">
    <svg class="deployment-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
    Source Code
  </div>
  <span class="deployment-link-arrow">→</span>
</a>

## Features
- **Automated Access Control**: Uses OpenCV, YOLOv8, and Gemini API for real-time License Plate Recognition to manage gate entry and exit.
- **Vehicle Entry Pass (VEP) Management**: Allows users to apply, review, and renew permit statuses directly within the app.
- **Mobile Integration**: Features a cross-platform Flutter application tailored for students, staff, security guards, and visitors.
- **Find My Car**: Enables drivers to locate their parked vehicle by plate number, showing the parking zone, entry time, and duration.
- **Incident Reporting**: Allows users to submit parking violation reports.
- **Announcement & Push Notifications**: Delivers policy updates, fine alerts, and incident notifications via Firebase Cloud Messaging (FCM)
- **Real-time Logs**: Powered by Firebase to ensure data consistency across devices.
