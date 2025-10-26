# thisistrese.me - API Contracts & Integration Plan

## Overview
This document outlines the backend integration plan for Theresa Renee's portfolio website.

## Current State: Frontend-Only with Mock Data
**Location:** `/app/frontend/src/mockData.js`

### Mock Data Structure:
1. **heroData** - Static content (no backend needed)
2. **storyData** - Static quotes (no backend needed)
3. **workData** - Career experience cards (potentially dynamic)
4. **brandsData** - Organization information (potentially dynamic)
5. **inspirationData** - Blog posts from Substack (needs RSS integration)
6. **eventsData** - Upcoming and past events (needs backend + Eventbrite integration)
7. **contactData** - Contact links and scheduler (static)

## Backend Requirements

### 1. Substack RSS Integration (Priority: HIGH)
**Endpoint:** `GET /api/inspiration/posts`

**Purpose:** Fetch latest posts from Theresa's Substack

**Implementation:**
- Parse RSS feed from: `https://thisistrese.substack.com/feed`
- Extract: title, excerpt, date, link, tags
- Cache results (refresh every 1 hour)

**Response Format:**
```json
{
  "posts": [
    {
      "id": "string",
      "title": "string",
      "excerpt": "string",
      "date": "string",
      "link": "string",
      "tags": ["string"]
    }
  ]
}
```

**Frontend Changes:**
- Replace mock `inspirationData` with API call
- Add loading state
- Add error handling (fallback to mock data)

---

### 2. Events Management (Priority: MEDIUM)
**Endpoints:**
- `GET /api/events/upcoming` - Fetch upcoming events
- `GET /api/events/past` - Fetch past events
- `POST /api/events` - Admin: Add new event (future feature)
- `PUT /api/events/:id` - Admin: Update event (future feature)
- `DELETE /api/events/:id` - Admin: Delete event (future feature)

**MongoDB Schema:**
```javascript
{
  _id: ObjectId,
  title: String,
  date: String,
  location: String,
  role: String, // "Keynote Speaker", "Panelist", "Host", etc.
  description: String,
  eventType: String, // "upcoming" or "past"
  eventbriteUrl: String, // Optional
  createdAt: Date,
  updatedAt: Date
}
```

**Frontend Changes:**
- Replace mock `eventsData` with API calls
- Add loading states for both sections
- Add error handling

---

### 3. Work Experience (Priority: LOW - Can Stay Static)
**Current:** Static in mockData.js
**Future:** If needed, create CRUD endpoints for admin panel

---

### 4. Brands (Priority: LOW - Can Stay Static)
**Current:** Static in mockData.js
**Future:** If needed, create CRUD endpoints for admin panel

---

## Integration Steps

### Phase 1: Substack RSS Integration
1. Install RSS parser: `feedparser` or `requests` + `beautifulsoup4`
2. Create `/backend/services/substack_service.py`
3. Implement caching mechanism
4. Create API endpoint in `server.py`
5. Update frontend to fetch from API
6. Test and handle errors

### Phase 2: Events System
1. Create MongoDB model for events
2. Seed database with current mock event data
3. Create CRUD endpoints
4. Update frontend to use API
5. Test both upcoming and past events sections

### Phase 3: Eventbrite Integration (Future)
1. Get Eventbrite API credentials
2. Create service to fetch events from Eventbrite
3. Sync with local database
4. Display Eventbrite events alongside manually added ones

---

## Environment Variables Needed

### Backend `.env`:
```
MONGO_URL=<already configured>
DB_NAME=<already configured>
SUBSTACK_RSS_URL=https://thisistrese.substack.com/feed
CACHE_DURATION=3600  # 1 hour in seconds
```

### Frontend `.env`:
```
REACT_APP_BACKEND_URL=<already configured>
```

---

## API Error Handling

All API endpoints should return consistent error format:
```json
{
  "error": true,
  "message": "Error description",
  "code": "ERROR_CODE"
}
```

Frontend should gracefully fallback to mock data if API fails.

---

## Testing Plan

### Backend Tests:
1. Test Substack RSS parsing
2. Test events CRUD operations
3. Test caching mechanism
4. Test error scenarios

### Frontend Tests:
1. Test API integration
2. Test loading states
3. Test error handling
4. Test mobile responsiveness

---

## Notes
- All static content (Hero, Story, Contact) remains in frontend
- Only dynamic content (Inspiration, Events) needs backend
- Maintain mock data as fallback for offline/error scenarios
- Google Calendar scheduler link stays as direct link (no backend needed)
