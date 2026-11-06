# LinkedIn profile copy

Paste-ready text for each LinkedIn field, written from `data/cv.json`. When the CV changes, update
this file too. LinkedIn limits: headline 220 chars, About 2,600, position description 2,000.

## Headline

Senior Backend Engineer · PHP / Symfony · Python · Microservices & DDD · Zend Certified Engineer

## Location

Minsk, Belarus

## About

Backend engineer with 10+ years in PHP/Symfony and Python/Django.

I build microservices at 21vek.by, one of the largest online retailers in Belarus, designing each around its business domain with Domain-Driven Design. I work mostly in the cart and delivery domain: how a cart is assembled and priced, down to promo-code discounts, and which delivery methods and time slots a customer is offered at checkout. With the team I built 21vek Post, the company's new parcel-shipping service, where I worked on cost calculation for postal services and the data exchange with 1C. We also migrated the legacy CakePHP monolith to Next.js and built the backend for the auto-parts finder.

What I work with:
• PHP 8, Symfony, MySQL, PostgreSQL, MongoDB, Redis, Kafka, RabbitMQ, Docker, Kubernetes
• Python, pandas and Airflow for analytics and data tooling
• Claude Code day to day, extended with skills and plugins I write myself and with internal tools wired in over MCP

Before 21vek.by: hoster.by, EffectiveSoft, Itransition and Zaochnik.com. I worked on customer-facing products, client projects and third-party API integrations, built Sphinx full-text search and an internal CRM and sped up Bitrix pages at hoster.by, introduced Docker and CI/CD on client projects, and planned work for junior engineers.

Zend Certified Engineer (2018). Open to remote roles or relocation.

## Experience

### Senior Software Engineer — 21vek.by (Triovist LLC)
Jan 2023 – Present · Minsk, Belarus

One of the largest online retailers in Belarus: electronics, appliances and a retail marketplace.

• Own microservices end to end, from domain model and service boundaries to code review and production, including logging, metrics and Grafana alerts.
• Work in the purchase stream — two teams of ten engineers — mostly in the cart and delivery domain: how a cart is assembled and priced down to promo-code discounts, and which delivery methods and time slots a customer is offered at checkout.
• Refine epics before development: clarify requirements and edge cases, map affected services and contracts, break the work into stories and tasks, and estimate with the team so risks surface before coding starts.
• Instrumented the purchase flow with product metrics, from cart and checkout to order confirmation, so the business sees funnel conversion and drop-off points.
• Built 21vek Post, the company's new parcel-shipping service, with the team. My part: the parcel-creation endpoint with domain invariants on weight, dimensions, declared value and cash on delivery, and much of the add-on services cost calculation: limits, service dependencies, redelivery fees and the bulky-item surcharge.
• Built its two-way exchange with 1C: a transactional outbox to RabbitMQ, Kafka consumers for parcel updates and tariffs, and logging of malformed messages; later a second outbox for push notifications.
• With the team, moved the site from the CakePHP monolith to Next.js over six months of staged releases, with HAProxy routing between old and new code.
• Built the auto-parts finder backend with the team: search by VIN or car model, assembly diagrams, originals and analogues; part cards are assembled from events across seven topics.
• Use Claude Code day to day for code generation, review and exploring unfamiliar code, extended with my own skills, plugins and MCP tools.
• Write analytics tooling: scheduled reporting pipelines and ad-hoc analysis.

Skills: PHP · Python · pandas · Apache Airflow · Symfony · CakePHP · MySQL · PostgreSQL · MongoDB · Redis · Kafka · RabbitMQ · Kubernetes · Docker · Grafana · Next.js · Domain-Driven Design

### Senior Backend Developer — hoster.by
Oct 2021 – Jan 2023 · Minsk, Belarus

Belarusian hosting, domain and cloud-services provider.

• Extended the customer account area and the internal CRM: management of services, hosting and domains, plus website monitoring.
• Integrated third-party APIs with internal services, keeping provider changes isolated from the products that depended on them.
• Set up, tuned and integrated Sphinx full-text search into the services.
• Sped up Bitrix pages: reworked heavy database queries and how page blocks are rendered.
• Set up service logging and Grafana alerts on key metrics: errors, latency and availability.

Skills: PHP · MySQL · ClickHouse · Sphinx · Bitrix · Redis · REST APIs · Vue.js · Grafana · Docker

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

• Maintained and developed a customs duty and tax calculation system.
• Built projects from scratch and extended existing ones for enterprise clients: designed and optimised MySQL databases, with builds and deployments running through Jenkins.

Skills: PHP · Symfony · Python · MySQL · WooCommerce · JavaScript · Jenkins · CI/CD

### Backend Developer — Zaochnik.com
Nov 2015 – Oct 2017 · Minsk, Belarus

Online education marketplace.

• Built the service's server side: APIs for the customer and author account areas, and background order processing.
• Integrated payment and partner APIs over REST/JSON and SOAP/XML; made payment notification handling idempotent, with retries on provider failures.

Skills: PHP · Laminas · Python · Django · Django REST Framework · Celery · MySQL · SOAP · WordPress

### Frontend Developer — Freelance
Feb 2012 – Feb 2015 · Minsk, Belarus

Independent contracting for web studios and direct clients.

• Turned PSD designs of varying complexity into page templates, from landing pages to multi-page company sites.
• Built frontend components in JavaScript, and wrote and extended jQuery plugins.

Skills: HTML · CSS · JavaScript · jQuery · Bootstrap

## Projects

### find-apartment
https://github.com/LeikoDmitry/find-apartment

Rental-listing scanner for Kufar and Realt.by. It de-duplicates against SQLite and pushes only unseen listings to Telegram with photos and coordinates; price and room filters change live by chat command. Runs every 10 minutes in Docker, typed and linted with mypy and Ruff, with a GitHub Actions test and image-publish pipeline.

## Skills

Top 3 (pinned): PHP · Symfony · Domain-Driven Design

Rest: Python · Microservices · Kafka · Kubernetes · Docker · MySQL · PostgreSQL · MongoDB · RabbitMQ · Redis · ClickHouse · Sphinx · SQL · REST APIs · Laravel · CakePHP · Django · Bitrix · Next.js · pandas · Apache Airflow · Jenkins · CI/CD · Git · Grafana · Linux · SOLID · Vue.js · Claude Code

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
