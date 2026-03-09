# 🌍 EcoTwin — Smart City Digital Twin Platform

## Project Overview
- **Name**: EcoTwin Smart City Digital Twin
- **Goal**: A comprehensive AI-powered sustainability intelligence platform for tracking and predicting global environmental metrics
- **Tech Stack**: Hono + TypeScript + TailwindCSS + Plotly + Three.js + Chart.js

## 🚀 Live URL
- **Development**: http://localhost:3000
- **Platform**: Cloudflare Pages (edge-deployable)
npm run dev
## 🧩 Modules

### 1. 📊 Dashboard
- Global KPI cards (60+ countries, avg scores, CO₂, renewables)
- Top 10 countries bar chart
- Renewable vs CO₂ scatter correlation
- Global trend line chart (2015–2025)
- Categorized status grid (Sustainable/Moderate/Critical)

### 2. 🗺️ Interactive World Sustainability Map
- Choropleth world map (Plotly geo)
- Green/Yellow/Red color coding by sustainability score
- Filter by category (Sustainable / Moderate / Critical)
- Click any country → popup with all metrics + AI 5-year prediction
- Year slider animation (2015 → 2030)

### 3. 🔮 Predictive Scenario Simulator (LSTM)
- 5 parameter sliders: Renewable %, Recycling %, Water Access, CO₂, Population Growth
- LSTM-style 10-year forecasting engine
- Animated Plotly line charts (score, CO₂ trend, renewable growth)
- AI explanation panel with year-by-year insights
- Final sustainability score prediction with color coding

### 4. 🧠 Reinforcement Learning Policy Optimizer
- Deep Q-Learning / PPO algorithm selection
- Configurable training episodes, learning rate, discount factor
- Animated training progress chart (reward + score convergence)
- Optimal policy recommendation (4 environmental levers)
- Maximum achievable sustainability score display

### 5. ⚠️ AI Anomaly Detection System
- 30-day environmental monitoring timeline
- Isolation Forest + Autoencoder detection
- Alert banners for detected anomalies with cause identification
- CO₂ timeline chart with highlighted anomaly spikes
- Water usage & energy consumption anomaly charts

### 6. 🌐 3D Interactive Earth Visualization (Three.js)
- WebGL globe with star field and atmospheric glow
- Glowing colored markers for 35+ countries
- Metric toggle: Sustainability Score / CO₂ Emissions / Renewable Energy
- Smooth rotation with pause/resume control
- Top 5 emission hotspots sidebar
- Click markers for country environmental data

### 7. 🎯 UN SDG Progress Tracker
- 6 SDGs tracked: Clean Water (6), Clean Energy (7), Sustainable Cities (11), Climate Action (13), Life on Land (15), Life Below Water (14)
- Animated progress bars per SDG
- Sparkline trend charts (2020–2025)
- Radar chart for comprehensive SDG achievement overview
- AI policy recommendations per goal

### 8. 💬 Ask EcoTwin AI (Natural Language Query)
- LLM-powered chatbot connected to sustainability dataset
- Context-aware answers about countries, metrics, policies
- Animated typing indicator
- Suggested questions panel (8 presets + dynamic updates)
- Data-driven responses with policy recommendations

## 🌐 API Endpoints
| Endpoint | Method | Description |
|---|---|---|
| `/` | GET | Main dashboard SPA |
| `/world_data` | GET | 60+ countries sustainability dataset |
| `/simulate_future` | POST | LSTM 10-year forecast |
| `/rl_optimize` | POST | RL policy optimization |
| `/anomaly_data` | GET | Environmental anomaly timeline |
| `/sdg_data` | GET | UN SDG progress data |
| `/ai_query` | POST | Natural language sustainability Q&A |

## 📦 Data Architecture
- **Data Models**: Country sustainability profiles (CO₂, renewable, water, recycling, score)
- **Storage**: In-memory/edge (Cloudflare Workers runtime)
- **ML Models**: Simulated LSTM forecasting, Deep Q-Learning, Isolation Forest
- **AI**: Keyword-intent NLP with dataset-driven responses

## 🎨 UI Design
- Dark futuristic theme (gray-950 base)
- Cyan/Emerald accent color system
- Plotly interactive charts (dark theme)
- Three.js WebGL 3D globe
- TailwindCSS responsive layout
- FontAwesome icons

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: ✅ Active (Development)
- **Last Updated**: 2025-03-04
