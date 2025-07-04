# 📱 React Native Subscription App (Technical Assignment)

This project is a full-stack subscription-based mobile application built using:

- ✅ React Native CLI with TypeScript (no Expo)
- ✅ Node.js + Express backend with MongoDB
- ✅ Simulated Apple/Google receipt validation
- ✅ Subscription plans: Weekly, Monthly, Yearly

---

## 🧩 Features

- **Main Screen**: Shows current subscription status (Free, Active, Expired)
- **Paywall Screen**: Simulates purchasing a subscription
- **Backend**: Accepts and validates subscription receipts
- **Frontend**: React Context for token + subscription state
- **Receipts**: Simulated with plan-based mock values

---

## ⚙️ Tech Stack

### Mobile App
- React Native CLI
- TypeScript
- React Navigation
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT for simulated auth

---

## 📁 Folder Structure

.
├── App.tsx                # Root app component
├── src/                   # Source folder
│   ├── components/        # UI components
│   ├── screens/           # Home, Subscription screens
│   ├── context/           # User context for token + subscription
│   ├── services/          # API logic (getSubscription, submitReceipt)
│   └── utils/             # Axios config, helpers
├── backend/               # (Optional: if separate backend folder exists)
├── package.json           # React Native project config
├── metro.config.js        # Metro bundler config
└── README.md              # You’re here

---

## 🚀 Setup Instructions

### 🔧 Backend Setup (Optional or External)

If you're running a local backend:

1. Create a `.env` file with:
   MONGO_URI=mongodb://localhost:27017/subscriptions
   JWT_SECRET=your_secret
   PORT=4000

2. Install dependencies:
   npm install

3. Run the server:
   npm run dev

### 📱 Mobile App Setup

1. Install dependencies:
   yarn install

2. Install iOS pods (if on macOS):
   npx pod-install

3. Run the app:
   npx react-native run-ios
   # or
   npx react-native run-android

4. To test subscription:
   - Tap a subscription option (weekly/monthly/yearly)
   - Sends receipt to backend
   - Displays status update on home screen

---

## 📡 API Endpoints

### POST /subscription/submit-receipt
Send a mock receipt to simulate subscription.

**Request Body:**
{
  "receipt": "ios_weekly_mock_receipt_12345",
  "platform": "ios"
}

**Response:**
{
  "success": true,
  "subscribed": true,
  "receipt": {
    "subscriptionType": "weekly",
    "validUntil": "2025-08-04T..."
  }
}

---

### GET /subscription/getsubscription
Returns the latest valid subscription for the user.

**Response:**
{
  "valid": true,
  "subscriptionType": "monthly",
  "validUntil": "2025-08-04T..."
}

---

## 🎥 Demo

If included, see demo.mp4 in the root of this project.  
Or upload to YouTube and link here.

---

## ✅ Notes

- Receipt validation is mocked, but backend is structured for real Apple/Google integration
- You can test fail scenarios using "fail" as a plan
- Frontend uses React Context to store auth token and subscription status
- Designed with clarity, structure, and functionality as top priority

---

## 📄 License

This project is provided for technical assessment and demonstration purposes only.
# subscription-demo
# demo-subscription
