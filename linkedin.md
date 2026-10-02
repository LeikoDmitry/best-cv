# LinkedIn profile copy

Paste-ready text for each LinkedIn field, written from `data/cv.json`. When the CV changes, update
this file too. LinkedIn limits: headline 220 chars, About 2,600, position description 2,000.

## Headline

Senior Backend Engineer · PHP / Symfony · Python · Microservices & DDD · Zend Certified Engineer

## Location

Minsk, Belarus

## About

Backend engineer with 10+ years in PHP/Symfony and Python/Django.

Since 2023 I've been building microservices at 21vek.by, one of the largest online retailers in Belarus. I work mostly in the cart and delivery domain: how a cart is assembled and priced, down to promo-code discounts, and which delivery methods and time slots a customer is offered at checkout. I also work on 21vek Post, the company's new parcel-shipping service: cost calculation for postal services and the data exchange with 1C. I model each service around its business domain with Domain-Driven Design and own it end to end, from the domain model to production on Kubernetes.

What I work with:
• PHP 8, Symfony, MySQL, PostgreSQL, Redis, Kafka, RabbitMQ, Docker, Kubernetes
• Python, pandas and Airflow for analytics and data tooling
• Claude Code day to day, extended with skills and plugins I write myself and with internal tools wired in over MCP

Before 21vek.by: hoster.by, EffectiveSoft, Itransition and Zaochnik.com. I worked on customer-facing products, client projects and third-party API integrations, and planned work for junior engineers.

Zend Certified Engineer (2018). Open to remote roles or relocation.

## Experience

### Senior Software Engineer — 21vek.by (Triovist LLC)
Jan 2023 – Present · Minsk, Belarus

One of the largest online retailers in Belarus: electronics, appliances and a retail marketplace.

• Build new microservices and maintain existing ones, modelling each around its business domain with Domain-Driven Design so services stay changeable as catalogue and order rules evolve.
• Work mostly in the cart and delivery domain: how a cart is assembled and priced down to promo-code discounts, and which delivery methods and time slots a customer is offered at checkout.
• Own services end to end: Symfony/PHP on MySQL and Redis, Kafka for inter-service messaging, shipped on Docker and Kubernetes.
• Backend engineer on 21vek Post, the company's new parcel-shipping service for individuals and businesses. Built the parcel-creation endpoint with domain invariants on weight, dimensions, declared value and cash on delivery, plus much of the shipping-cost calculation for add-on services: limits, dependencies between services, redelivery fees and the bulky-item surcharge.
• Built the service's two-way exchange with 1C: a transactional outbox publishing parcels to RabbitMQ, Kafka consumers for parcel updates and tariff reference data, and logging of every malformed message. Later added a second outbox for push notifications to senders. Stack: Symfony on FrankenPHP, PostgreSQL, RabbitMQ, Kafka.
• Use Claude Code day to day for code generation, review and getting up to speed in unfamiliar parts of the system, extended with my own skills and plugins and with internal and external tools wired in over MCP.
• Write Python tooling for analytics and data processing: pandas pipelines for reporting and ad-hoc analysis, scheduled with Airflow.

Skills: PHP · Symfony · PostgreSQL · Kafka · RabbitMQ · Kubernetes · Domain-Driven Design

### Senior Backend Developer — hoster.by
Oct 2021 – Jan 2023 · Minsk, Belarus

Belarusian hosting, domain and cloud-services provider.

• Extended the customer account area, where clients manage their hosting, domains and other services.
• Integrated third-party APIs with internal services, keeping provider changes isolated from the products that depended on them.
• Worked on a PHP/MySQL stack with ClickHouse for analytical queries, Redis caching, REST APIs and a Vue.js frontend, containerised with Docker.

Skills: PHP · MySQL · ClickHouse · Redis · REST APIs · Vue.js

### Senior Backend Developer — EffectiveSoft
Oct 2020 – Oct 2021 · Minsk, Belarus

Custom software development company.

• Estimated incoming work, built new functionality and evolved existing client projects in PHP (Symfony, Laravel) and Python.
• Planned and distributed tasks for junior engineers on the team.

Skills: PHP · Symfony · Laravel · Python · MySQL

### Software Engineer — Itransition
Oct 2017 – Oct 2020 · Minsk, Belarus

International software engineering and IT-consulting company.

• Built projects from scratch and extended existing ones for enterprise clients in PHP (Symfony), Python and MySQL.
• Delivered e-commerce work on WordPress/WooCommerce alongside custom application development.

Skills: PHP · Symfony · Python · MySQL · WooCommerce

### PHP Developer — Zaochnik.com
Nov 2015 – Oct 2017 · Minsk, Belarus

Online education marketplace.

• Supported the company's products and resolved production failures promptly.
• Integrated external services over APIs; worked across PHP (Laminas), MySQL and Python/Django.

Skills: PHP · Laminas · Python · Django · MySQL

### Frontend Developer — Freelance
Feb 2012 – Feb 2015 · Minsk, Belarus

• Built HTML/CSS templates from PSD designs, from landing pages to multi-page company sites.

## Projects

### find-apartment
https://github.com/LeikoDmitry/find-apartment

Rental-listing scanner for Kufar and Realt.by. It de-duplicates against SQLite and pushes only unseen listings to Telegram with photos and coordinates; price and room filters change live by chat command. Runs every 10 minutes in Docker, typed and linted with mypy and Ruff, with a GitHub Actions test and image-publish pipeline.

## Skills

Top 3 (pinned): PHP · Symfony · Domain-Driven Design

Rest: Python · Microservices · Kafka · Kubernetes · Docker · MySQL · PostgreSQL · RabbitMQ · Redis · ClickHouse · SQL · REST APIs · Laravel · Django · pandas · Apache Airflow · Git · Linux · SOLID · Vue.js · Claude Code

## Licenses & certifications

• Zend Certified Engineer — Rogue Wave Software, 2018
• PHP Developer — High-Tech Park (IT Academy), Minsk, 2014

## Languages

• Belarusian — Native or bilingual proficiency
• Russian — Native or bilingual proficiency
• English — Professional working proficiency
