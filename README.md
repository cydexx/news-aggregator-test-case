# This is a task case for Innoscripta GmbH

This project is a news aggregator website created using Next.js and Tailwind CSS. It allows users to search for articles by keyword, navbar category selection. The application is designed with a mobile-responsive layout for an optimal viewing experience on various devices. Also added dark mode.

## Project Setup

### Clone the Repository:
```bash
git clone https://github.com/cydexx/news-aggregator.git
```

### Install Dependencies:
```bash
pnpm i
# or
npm i
```
### Configuration:
To fetch articles, you need to obtain API keys from at least three of the provided data sources (e.g., NewsAPI, OpenNews, NewsCred). Replace the placeholder API keys in the config.js file with your actual keys.
```bash
// .env
NEWS_API_API_KEY = "API_KEY"
```
### Run Project:
```bash
pnpm dev 
# or
npm run dev 
```

This will start the development server. Open your browser and navigate to http://localhost:3000 to view the news aggregator website.

## Project Structure
```bash
|-- news-aggregator
    |-- app
    |   |-- news
    |   |--   |--  [slug]
    |   |--   |--    |-- page.js
    |   |--   |--   page.js
    |   |--   layout.js
    |   |--   page.js
    |-- components
    |   |-- COMPONENTS
```
