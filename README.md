# Pertinent CMS Studio

![ci badge](https://github.com/syskin/pertinent-cms-studio/workflows/CI/badge.svg)
[![GitHub version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://github.com/syskin/pertinent-cms-studio)

Craft your own website using basic CSS through Pertinent CMS Studio interface

## Description

This project is a part of Pertinent CMS which allows you to design and setup your own website as simple as possible.

## Requirements
1. Node.js >= 12.x
2. [Pertinent Dashboard](https://github.com/syskin/pertinent-cms-dashboard) (Strapi project with pertinent-plugins)

## Getting started

### Configuration

#### .env

|Key|Type|Default|Description|
|---|----|-------|-----------|
|API_BASE_URL=|string|null|Base url of the pertinent dashboard project (Local is : http://127.0.0.1:1337)|

### Build

Watch development environment
```
yarn start
```

Build production environment
```
yarn build
```

Lauch production build
```
yarn start
```

## Included in the project
- Pertinent Studio
- Development & production environments