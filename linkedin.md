# LinkedIn profile copy

Paste-ready text for each LinkedIn field, written from `data/cv.json`. When the CV changes, update
this file too. LinkedIn limits: headline 220 chars, About 2,600, position description 2,000.

## Headline

Senior Backend Engineer · PHP / Symfony · Python · Microservices & DDD · Zend Certified Engineer

## Location

Minsk, Belarus

## About

Backend engineer with 10+ years in PHP/Symfony and Python/Django.

Since 2023 I've been building microservices at 21vek.by, one of the largest online retailers in Belarus. I work mostly in the cart and delivery domain: how a cart is assembled and priced, down to promo-code discounts, and which delivery methods and time slots a customer is offered at checkout. With the team I built 21vek Post, the company's new parcel-shipping service, where I worked on cost calculation for postal services and the data exchange with 1C. We also migrated the legacy CakePHP monolith to Next.js, and I built the backend for the auto-parts finder. I model each service around its business domain with Domain-Driven Design and own it end to end, from the domain model to production on Kubernetes.

What I work with:
• PHP 8, Symfony, MySQL, PostgreSQL, MongoDB, Redis, Kafka, RabbitMQ, Docker, Kubernetes
• Python, pandas and Airflow for analytics and data tooling
• Claude Code day to day, extended with skills and plugins I write myself and with internal tools wired in over MCP

Before 21vek.by: hoster.by, EffectiveSoft, Itransition and Zaochnik.com. I worked on customer-facing products, client projects and third-party API integrations, built Sphinx full-text search and an internal CRM at hoster.by, introduced Docker and CI/CD on client projects, and planned work for junior engineers.

Zend Certified Engineer (2018). Open to remote roles or relocation.

## Experience

### Senior Software Engineer — 21vek.by (Triovist LLC)
Jan 2023 – Present · Minsk, Belarus

One of the largest online retailers in Belarus: electronics, appliances and a retail marketplace.

• Build and maintain microservices end to end — domain model, service boundaries, code review, production support — each modelled around its business domain so it stays changeable as catalogue and order rules evolve.
• Work mostly in the cart and delivery domain: how a cart is assembled and priced down to promo-code discounts, and which delivery methods and time slots a customer is offered at checkout.
• Built 21vek Post, the company's new parcel-shipping service for individuals and businesses, with the team. My part: the parcel-creation endpoint with domain invariants on weight, dimensions, declared value and cash on delivery, plus much of the shipping-cost calculation for add-on services: limits, dependencies between services, redelivery fees and the bulky-item surcharge.
• Built the service's two-way exchange with 1C: a transactional outbox publishing parcels to RabbitMQ, Kafka consumers for parcel updates and tariff reference data, and logging of every malformed message. Later added a second outbox for push notifications to senders.
• Moved the site from the CakePHP monolith to Next.js page by page — home, listings, product card, pickup, order history — with HAProxy routing between old and new code.
• Built the auto-parts finder backend: search by VIN or car model, a catalogue of assemblies with parts diagrams, originals and analogues from TradeSoft; part cards are assembled from events across seven topics.
• Use Claude Code day to day for code generation, review and getting into unfamiliar code, extended with my own skills and plugins and with tools wired in over MCP.
• Write analytics and data-processing tooling: reporting pipelines and ad-hoc analysis, run on a schedule.

Skills: PHP · Python · pandas · Apache Airflow · Symfony · CakePHP · MySQL · PostgreSQL · MongoDB · Redis · Kafka · RabbitMQ · Kubernetes · Docker · Next.js · Domain-Driven Design

### Senior Backend Developer — hoster.by
Oct 2021 – Jan 2023 · Minsk, Belarus

Belarusian hosting, domain and cloud-services provider.

• Extended the customer account area and the internal CRM: management of services, hosting and domains, plus website monitoring.
• Integrated third-party APIs with internal services, keeping provider changes isolated from the products that depended on them.
• Set up, tuned and integrated Sphinx full-text search into the services.

Skills: PHP · MySQL · ClickHouse · Sphinx · Redis · REST APIs · Vue.js · Docker

### Senior Backend Developer — EffectiveSoft
Oct 2020 – Oct 2021 · Minsk, Belarus

Custom software development company.

• Estimated incoming work, built and evolved client projects, and planned tasks for junior engineers.
• Rebuilt the cart of a US phone-number purchasing service from scratch: multiple numbers per order, a cart countdown timer and caching.
• Introduced Docker and CI/CD, replacing manual builds and deployments.

Skills: PHP · Symfony · Laravel · Python · MySQL · WordPress · Docker · CI/CD

### Software Engineer — Itransition
Oct 2017 – Oct 2020 · Minsk, Belarus

International software engineering and IT-consulting company.

• Built projects from scratch and extended existing ones for enterprise clients, with builds and deployments running through Jenkins.
• Also maintained WordPress/WooCommerce online stores.

Skills: PHP · Symfony · Python · MySQL · WooCommerce · JavaScript · Jenkins · CI/CD

### PHP Developer — Zaochnik.com
Nov 2015 – Oct 2017 · Minsk, Belarus

Online education marketplace.

• Supported the company's products and resolved production failures promptly.
• Connected external services over APIs.

Skills: PHP · Laminas · MySQL · Python · Django · WordPress

### Frontend Developer — Freelance
Feb 2012 – Feb 2015 · Minsk, Belarus

Independent contracting for web studios and direct clients.

• Turned PSD designs of varying complexity into page templates, from landing pages to multi-page company sites.

Skills: HTML · CSS · JavaScript · Bootstrap

## Projects

### find-apartment
https://github.com/LeikoDmitry/find-apartment

Rental-listing scanner for Kufar and Realt.by. It de-duplicates against SQLite and pushes only unseen listings to Telegram with photos and coordinates; price and room filters change live by chat command. Runs every 10 minutes in Docker, typed and linted with mypy and Ruff, with a GitHub Actions test and image-publish pipeline.

## Skills

Top 3 (pinned): PHP · Symfony · Domain-Driven Design

Rest: Python · Microservices · Kafka · Kubernetes · Docker · MySQL · PostgreSQL · MongoDB · RabbitMQ · Redis · ClickHouse · Sphinx · SQL · REST APIs · Laravel · CakePHP · Django · Next.js · pandas · Apache Airflow · Jenkins · CI/CD · Git · Linux · SOLID · Vue.js · Claude Code

## Licenses & certifications

• Zend Certified Engineer — Rogue Wave Software, 2018
• PHP Developer — High-Tech Park (IT Academy), Minsk, 2014

## Education

### Minsk State Professional Lyceum of Mechanical Engineering
Bachelor's degree, Mechanical engineering · 2001 – 2004

## Languages

• Belarusian — Native or bilingual proficiency
• Russian — Native or bilingual proficiency
• English — Professional working proficiency
