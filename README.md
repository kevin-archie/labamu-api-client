<p align="center">
  <a href="https://github.com/kevin-archie/labamu-api-client.git" target="blank"><img src="https://miro.medium.com/v2/resize:fit:1000/1*uWouYRveA4Gbc1s8oNcWgg.png" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A lightweight TypeScript library for seamless API integration in Labamu microservices architectures.</p>
<p align="center">Designed to simplify communication between services in a scalable and efficient way.</p>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Labamu API Client


## Table of Contents

- [Introduction](#introduction)

- [Main Contributors](#main-contributors)

- [API Features](#api-features)

- [Tech Stack](#tech-stack)

- [Getting Started](#getting-started)

    - [Prerequisites](#prerequisites)

    - [Installation](#installation)

    - [Requirements](#requirements)

    - [Running the Service Locally](#running-the-service-locally)

- [Change Log](#change-log)

- [License](#license)


## Introduction
Welcome to the Labamu API Client repository! This TypeScript library simplifies communication between various microservices in your Labamu architecture, such as the Company, Catalog, etc services. It provides pre-configured HTTP clients that are easy to integrate into your service.


## Main Contributors

- [Kevin Archie](https://github.com/archie-ce) (Backend Engineer)


## Modules

- **Company**:


## Tech Stack

<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg" alt="nodejs" width="40" height="40"/> </a>
<a href="https://www.npmjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>

## Getting Started

To start with Labamu API Client, follow the installation and setup instructions below. Whether you're setting up a development environment or deploying to production, these steps will guide you through the process.

## Requirements

- node >= v20.11.0
- npm (>=10.4.0) or yarn (>=v1.22.22)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm (node.js package manager) / yarn. You can get them from http://nodejs.org/.
- You have created a `.env` file in the root directory with the necessary environment variables (see `.env.example` for reference).

## Installation

1. Install the Library:
    ```bash
    npm install git+ssh://git@github.com:kevin-archie/labamu-api-client.git#v1.0.0
    ```
   Replace v1.0.0 with the desired version tag.

2. Environment Setup:
    ```env
    COMPANY_SERVICE_URL=https://your-company-service-url.com
    COMPANY_API_KEY=your-api-key
    ```
   Create a `.env` file in the root directory and configure it based on your environment. Refer to the `.env.example` file for required variables.
   Use the service name as the prefix of variable.

## Usage
```typescript
import { CompanyService } from 'labamu-api-client';
    async function fetchCompanyDetails(slug: string) {
        const companyClient = new CompanyService();
        try {
            const companyDetail = await companyClient.getBySlug(slug);
            console.log('Company Detail:', companyDetail);
        } catch (error) {
            console.error('Error fetching company details:', error);
        }
    }
    
fetchCompanyDetails('example-slug');
```

### Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/kevin-archie/labamu-api-client/releases) page.

### License
Unlicensed