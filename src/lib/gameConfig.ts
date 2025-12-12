export const starClimbs = [
  { start: 7, end: 14, drop: 3, type: 'star', number: 1 },
  { start: 12, end: 26, drop: 8, type: 'star', number: 2 },
  { start: 18, end: 38, drop: 14, type: 'star', number: 3 },
  { start: 37, end: 50, drop: 19, type: 'star', number: 4 },
  { start: 39, end: 50, drop: 16, type: 'star', number: 5 },
  { start: 51, end: 88, drop: 1, type: 'star', number: 6 },
  { start: 61, end: 73, drop: 53, type: 'star', number: 7 },
  { start: 69, end: 89, drop: 49, type: 'star', number: 8 },
  { start: 77, end: 88, drop: 72, type: 'star', number: 9 },
  { start: 79, end: 92, drop: 64, type: 'star', number: 10 },
  { start: 87, end: 97, drop: 80, type: 'star', number: 11 },
  { start: 99, end: 100, drop: 1, type: 'star', number: 12 },
  { start: 4, end: 27, drop: 1, type: 'star', number: 13 },
  { start: 25, end: 45, drop: 3, type: 'star', number: 14 },
  { start: 30, end: 45, drop: 6, type: 'star', number: 15 },
  { start: 44, end: 68, drop: 15, type: 'star', number: 16 },
  { start: 48, end: 65, drop: 21, type: 'star', number: 17 },
  { start: 57, end: 75, drop: 36, type: 'star', number: 18 },
  { start: 71, end: 97, drop: 21, type: 'star', number: 19 },
  { start: 85, end: 95, drop: 45, type: 'star', number: 20 },
  { start: 91, end: 98, drop: 41, type: 'star', number: 21 },
  { start: 96, end: 100, drop: 34, type: 'star', number: 22 },
  { start: 10, end: 40, drop: 1, type: 'star', number: 23 },
  { start: 31, end: 62, drop: 20, type: 'star', number: 24 },
  { start: 43, end: 67, drop: 16, type: 'star', number: 25 },
];


// The cells that will trigger a question. These are the starting points of the stars.
export const questionCells = starClimbs.map(s => s.start);

// Sample questions.
export const hospitalQuestions = [
  {
    "number": 1,
    "start": 4,
    "question": "What does MICE stand for in the hospitality industry?",
    "options": [
      "Metrics, Improvements, Core, Events",
      "Management, Innovation, Customer, Experience",
      "Meetings, Incentives, Conferences, Exhibitions",
      "Marketing, Information, Communication, Entertainment"
    ],
    "correctAnswer": "Meetings, Incentives, Conferences, Exhibitions"
  },
  {
    "number": 2,
    "start": 7,
    "question": "Which of the following is a key service provided by a Convention and Visitors Bureau to hotels?",
    "options": [
      "Providing free guest room upgrades",
      "Marketing the destination to attract events and visitors",
      "Managing hotel staff payroll",
      "Designing hotel websites"
    ],
    "correctAnswer": "Marketing the destination to attract events and visitors"
  },
  {
    "number": 3,
    "start": 10,
    "question": "Which of the following is a reason planners may reject an RFP response?",
    "options": [
      "Too many venue options",
      "Delayed or incomplete responses from hotels",
      "Unclear keynote speaker schedule",
      "Bad weather forecast"
    ],
    "correctAnswer": "Delayed or incomplete responses from hotels"
  },
  {
    "number": 4,
    "start": 12,
    "question": "Which department in a hotel is primarily responsible for managing guest room inventory and pricing?",
    "options": [
      "Sales & Marketing",
      "Food & Beverage",
      "Revenue Management",
      "Housekeeping"
    ],
    "correctAnswer": "Revenue Management"
  },
  {
    "number": 5,
    "start": 18,
    "question": "How does Cvent's online venue sourcing tool help event planners?",
    "options": [
      "Helps in finding and comparing venues for their events",
      "Provides automated venue decoration designs based on event themes",
      "Manages venue staff scheduling and task assignments",
      "Facilitates automated negotiation of venue rental contracts"
    ],
    "correctAnswer": "Helps in finding and comparing venues for their events"
  },
  {
    "number": 6,
    "start": 25,
    "question": "Which Cvent tool is used for sourcing venues and managing RFPs (Requests for Proposals)?",
    "options": [
      "Cvent Supplier Network",
      "Cvent CRM",
      "Cvent Analytics",
      "Cvent Social Media Suite"
    ],
    "correctAnswer": "Cvent Supplier Network"
  },
  {
    "number": 7,
    "start": 30,
    "question": "How does Cvent's Event Diagramming benefit hotel operations for events, even though it's for planners?",
    "options": [
      "Staff uniform design",
      "Clear visual communication of setups & capacities",
      "Internal training",
      "External advertising"
    ],
    "correctAnswer": "Clear visual communication of setups & capacities"
  },
  {
    "number": 8,
    "start": 31,
    "question": "What is a key reason planners prefer hotels that offer 3D diagrams or virtual tours?",
    "options": [
      "To reduce costs of booking",
      "To avoid contacting hotel sales teams",
      "To visualise setup and ensure space suitability before booking",
      "To select hotel furniture styles"
    ],
    "correctAnswer": "To visualise setup and ensure space suitability before booking"
  },
  {
    "number": 9,
    "start": 37,
    "question": "How can a hotel improve their Cvent Supplier Network profile to attract more business?",
    "options": [
      "Hire a team of dolphins to greet planners",
      "Provide weather updates",
      "Add high-quality photos, virtual tours, diagrams",
      "Offer free unicorn rides"
    ],
    "correctAnswer": "Add high-quality photos, virtual tours, diagrams"
  },
  {
    "number": 10,
    "start": 39,
    "question": "How can event planners save time utilising Cvent's Event Diagramming Solution?",
    "options": [
      "It's allows for invitees to register for an event",
      "It helps to eliminate hours of back-and-forth spent on seating layout",
      "It allows planners to communicate with speakers",
      "It helps planners to collaborate with attendees"
    ],
    "correctAnswer": "It helps to eliminate hours of back-and-forth spent on seating layout"
  },
  {
    "number": 11,
    "start": 43,
    "question": "How can hotels use Cvent to capture repeat MICE business?",
    "options": [
      "Offer discounted rates every time",
      "Only work with local planners",
      "Track planner behaviour and preferences via reporting tools",
      "Automatically book events annually"
    ],
    "correctAnswer": "Track planner behaviour and preferences via reporting tools"
  },
  {
    "number": 12,
    "start": 44,
    "question": "Which team typically owns responding to MICE RFPs in a hotel?",
    "options": [
      "Engineering",
      "Sales & Events",
      "Security",
      "Front Office"
    ],
    "correctAnswer": "Sales & Events"
  },
  {
    "number": 13,
    "start": 48,
    "question": "What’s a smart way for hotels to boost visibility with planners on Cvent?",
    "options": [
      "Limit availability to weekends only",
      "Turn off auto-response features",
      "Use Featured Listings or Spotlight Ads",
      "Only respond to international planners"
    ],
    "correctAnswer": "Use Featured Listings or Spotlight Ads"
  },
  {
    "number": 14,
    "start": 51,
    "question": "How can Cvent Supplier Network help hotels beyond responding to RFPs?",
    "options": [
      "By using it as an internal staff communication tool",
      "By actively marketing their event spaces and services to a global network of planners",
      "By tracking competitor pricing for individual guest rooms",
      "By assisting planners in diagramming their event venues"
    ],
    "correctAnswer": "By actively marketing their event spaces and services to a global network of planners"
  },
  {
    "number": 15,
    "start": 57,
    "question": "Why do planners often prefer hotels with flexible meeting spaces?",
    "options": [
      "To host social events during late hours",
      "To manage last-minute changes and multiple formats",
      "To reduce security costs",
      "To avoid hiring AV vendor"
    ],
    "correctAnswer": "To manage last-minute changes and multiple formats"
  },
  {
    "number": 16,
    "start": 61,
    "question": "Which Cvent tool is best suited for managing hotel room blocks?",
    "options": [
      "Cvent Attendee Hub",
      "Cvent Business Transient",
      "Cvent Event Diagramming",
      "Cvent Passkey"
    ],
    "correctAnswer": "Cvent Passkey"
  },
  {
    "number": 17,
    "start": 69,
    "question": "Cvent's Response Automation or proposal tools assist hotel sales teams by …",
    "options": [
      "Automatically rejecting RFPs below a certain budget",
      "Allowing phone-based RFP submissions",
      "Generating individual guest room reservations",
      "Centralising communication, pre-filling responses and streamlining proposal creation"
    ],
    "correctAnswer": "Centralising communication, pre-filling responses and streamlining proposal creation"
  },
  {
    "number": 18,
    "start": 71,
    "question": "What are \"shoulder nights\" in MICE bookings?",
    "options": [
      "The nights before or after the peak event dates",
      "A mid-week evening with higher F&B minimums",
      "A day reserved for keynote speakers",
      "A time slot with mandatory breakouts"
    ],
    "correctAnswer": "The nights before or after the peak event dates"
  },
  {
    "number": 19,
    "start": 77,
    "question": "In hotel operations for a large conference, what does \"attrition\" refer to in a contract?",
    "options": [
      "The rate at which hotel staff leave their jobs",
      "The wear and tear on meeting room equipment",
      "The discount offered for early booking of event space",
      "The penalty for unfulfilled room block or F&B minimums."
    ],
    "correctAnswer": "The penalty for unfulfilled room block or F&B minimums."
  },
  {
    "number": 20,
    "start": 79,
    "question": "What are the benefits of using Cvent Passkey?",
    "options": [
      "Generate incremental revenue from room upgrades or packages",
      "Provide free airport shuttle",
      "Offer passes to guests for concerts/sporting events",
      "To secure all keys within the hotel"
    ],
    "correctAnswer": "Generate incremental revenue from room upgrades or packages"
  },
  {
    "number": 21,
    "start": 85,
    "question": "Why are sustainability practices important for hotels targeting MICE events?",
    "options": [
      "They help reduce electricity bills",
      "To avoid heavy fines",
      "Planners and attendees value eco-conscious choices",
      "Beacuse it's mandatory"
    ],
    "correctAnswer": "Planners and attendees value eco-conscious choices"
  },
  {
    "number": 22,
    "start": 87,
    "question": "What is Cvent Business Transient primarily designed to help hotels manage?",
    "options": [
      "Weddings and social events",
      "Small meetings",
      "Corporate travel programmes and transient RFPs",
      "Room block management"
    ],
    "correctAnswer": "Corporate travel programmes and transient RFPs"
  },
  {
    "number": 23,
    "start": 91,
    "question": "What’s one way Cvent helps hotels reduce manual work in responding to RFPs?",
    "options": [
      "Offers an AI chatbot for guest check-in",
      "Fills out standard proposal fields automatically",
      "Generates music playlists for events",
      "Translates emails into different languages"
    ],
    "correctAnswer": "Fills out standard proposal fields automatically"
  },
  {
    "number": 24,
    "start": 96,
    "question": "What is the benefit of Cvent’s Competitive Set (Comp Set) dashboard for hoteliers?",
    "options": [
      "Compares event planner reviews",
      "Tracks average meeting room temperature",
      "Benchmarks your RFP activity against similar hotels",
      "Identifies trends in competitor response behaviour"
    ],
    "correctAnswer": "Benchmarks your RFP activity against similar hotels"
  },
  {
    "number": 25,
    "start": 99,
    "question": "To analyse MICE business performance via Cvent, which reporting is most valuable for a hotel?",
    "options": [
      "Google Analytics",
      "Advanced MICE sales analytics",
      "Accounting reports",
      "Guest surveys"
    ],
    "correctAnswer": "Advanced MICE sales analytics"
  }
];

  
export const otherQuestions = [
  {
    "number": 1,
    "start": 4,
    "question": "Which of the following ranks in the Top 10 most stressful jobs according to a Forbes study?",
    "options": [
      "Nuclear Scientist",
      "Marine Engineer",
      "Event Planner",
      "Orthodontist"
    ],
    "correctAnswer": "Event Planner"
  },
  {
    "number": 2,
    "start": 7,
    "question": "During which phase of the event lifecycle is iCapture most effectively utilised?",
    "options": [
      "Promotion",
      "Post Event",
      "Day of Event",
      "Planning"
    ],
    "correctAnswer": "Day of Event"
  },
  {
    "number": 3,
    "start": 10,
    "question": "What is a hybrid event?",
    "options": [
      "An event that features both daytime and nighttime sessions",
      "An event that combines in-person and virtual attendees",
      "An event hosted simultaneously in two different cities",
      "An event organised by multiple planners"
    ],
    "correctAnswer": "An event that combines in-person and virtual attendees"
  },
  {
    "number": 4,
    "start": 12,
    "question": "What does RFP stand for?",
    "options": [
      "Request for Pricing",
      "Requirements for Proposal",
      "Request for Proposal",
      "Request for Participation"
    ],
    "correctAnswer": "Request for Proposal"
  },
  {
    "number": 5,
    "start": 18,
    "question": "How does Cvent's online venue sourcing tool help event planners?",
    "options": [
      "Helps in finding and comparing venues for their events",
      "Provides automated venue decoration designs based on event themes",
      "Manages venue staff scheduling and task assignments",
      "Facilitates automated negotiation of venue rental contracts"
    ],
    "correctAnswer": "Helps in finding and comparing venues for their events"
  },
  {
    "number": 6,
    "start": 25,
    "question": "iCapture is...",
    "options": [
      "a new solution to shoot moments from mobile",
      "used for AI-powered photography",
      "a solution for capturing leads",
      "a defence intelligence solution"
    ],
    "correctAnswer": "a solution for capturing leads"
  },
  {
    "number": 7,
    "start": 30,
    "question": "Which of the below activities are typically included in the post-event phase?",
    "options": [
      "Budget, venue sourcing, meeting request forms",
      "Lead conversion, reporting, surveys",
      "Virtual and hybrid event tools, onsite solutions, and mobile event app",
      "Surveys, attendee hub, event registration"
    ],
    "correctAnswer": "Lead conversion, reporting, surveys"
  },
  {
    "number": 8,
    "start": 31,
    "question": "Which Cvent product helps book 1:1 meetings and appointments?",
    "options": [
      "Attendee Hub",
      "Jifflenow",
      "Passkey",
      "iCapture"
    ],
    "correctAnswer": "Jifflenow"
  },
  {
    "number": 9,
    "start": 37,
    "question": "What does MICE stand for in the hospitality industry?",
    "options": [
      "Metrics, Improvements, Core, Events",
      "Management, Innovation, Customer, Experience",
      "Meetings, Incentives, Conferences, Exhibitions",
      "Marketing, Information, Communication, Entertainment"
    ],
    "correctAnswer": "Meetings, Incentives, Conferences, Exhibitions"
  },
  {
    "number": 10,
    "start": 39,
    "question": "How can event planners save time utilising Cvent's Event Diagramming Solution?",
    "options": [
      "It's allows for invitees to register for an event",
      "It helps to eliminate hours of back-and-forth spent on seating layout",
      "It allows planners to communicate with speakers",
      "It helps planners to collaborate with attendees"
    ],
    "correctAnswer": "It helps to eliminate hours of back-and-forth spent on seating layout"
  },
  {
    "number": 11,
    "start": 43,
    "question": "In which technology category does Event Technology belong?",
    "options": [
      "SalesTech",
      "HRTech",
      "FinTech",
      "MarTech"
    ],
    "correctAnswer": "MarTech"
  },
  {
    "number": 12,
    "start": 44,
    "question": "Which of the following is a crucial element of effective event reporting?",
    "options": [
      "Session insights, attendee tracking, and registration analysis for actionable feedback",
      "Compiling speaker profiles and audience demographics",
      "Reviewing catering preferences and vendor ratings",
      "Documenting event themes and entertainment quality"
    ],
    "correctAnswer": "Session insights, attendee tracking, and registration analysis for actionable feedback"
  },
  {
    "number": 13,
    "start": 48,
    "question": "Which Cvent tool is best suited for managing hotel room blocks?",
    "options": [
      "Cvent Attendee Hub",
      "Cvent Business Transient",
      "Cvent Event Diagramming",
      "Cvent Passkey"
    ],
    "correctAnswer": "Cvent Passkey"
  },
  {
    "number": 14,
    "start": 51,
    "question": "Global Meetings Industry Day (GMID) is celebrated annually on",
    "options": [
      "03-Sep",
      "15-May",
      "06-Aug",
      "03-Apr"
    ],
    "correctAnswer": "03-Apr"
  },
  {
    "number": 15,
    "start": 57,
    "question": "CVB stands for…",
    "options": [
      "Central Venue Booking",
      "Community Volunteer Bureau",
      "Convention and Visitors Bureau",
      "Corporate Vision Board"
    ],
    "correctAnswer": "Convention and Visitors Bureau"
  },
  {
    "number": 16,
    "start": 61,
    "question": "What is the primary function of an event website?",
    "options": [
      "To assist planners in diagramming their venues",
      "To provide comprehensive history of the event organisation",
      "To serve as a virtual venue for events",
      "To facilitate event registration"
    ],
    "correctAnswer": "To facilitate event registration"
  },
  {
    "number": 17,
    "start": 69,
    "question": "Which Cvent tool is best suited for managing hotel room blocks?",
    "options": [
      "Cvent Attendee Hub",
      "Cvent Business Transient",
      "Cvent Event Diagramming",
      "Cvent Passkey"
    ],
    "correctAnswer": "Cvent Passkey"
  },
  {
    "number": 18,
    "start": 71,
    "question": "Cvent provides solutions for which type of events?",
    "options": [
      "In-person, virtual, and hybrid events",
      "Only virtual events",
      "Only hybrid events",
      "Only in-person events"
    ],
    "correctAnswer": "In-person, virtual, and hybrid events"
  },
  {
    "number": 19,
    "start": 77,
    "question": "Which of the following is the primary objective of an event mobile app?",
    "options": [
      "Improving event networking",
      "Increasing attendee engagement",
      "Enhancing the onsite experience",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "number": 20,
    "start": 79,
    "question": "Event planners use venue diagramming tools to…",
    "options": [
      "Design and organise the layout of event spaces",
      "Streamline attendee registration",
      "Facilitate event ticket sales",
      "Host virtual events"
    ],
    "correctAnswer": "Design and organise the layout of event spaces"
  },
  {
    "number": 21,
    "start": 85,
    "question": "Which Cvent tool is used for sourcing venues and managing RFPs (Requests for Proposals)?",
    "options": [
      "Cvent Analytics",
      "Cvent CRM",
      "Cvent Supplier Network",
      "Cvent Social Media Suite"
    ],
    "correctAnswer": "Cvent Supplier Network"
  },
  {
    "number": 22,
    "start": 87,
    "question": "What are the main benefits of using Cvent's Event Budget Management Tool for planners?",
    "options": [
      "Helps compare costs",
      "Enables tracking of all catering expenses",
      "Provides spending estimates and monitors expenses throughout the event",
      "Supports collaboration with vendors"
    ],
    "correctAnswer": "Provides spending estimates and monitors expenses throughout the event"
  },
  {
    "number": 23,
    "start": 91,
    "question": "What is one advantage of using RFID badges at events?",
    "options": [
      "They enhance the event's visual appeal",
      "They facilitate tracking attendee movement and capturing networking data",
      "They lower electricity expenses",
      "They enhance the quality of speaker presentations"
    ],
    "correctAnswer": "They facilitate tracking attendee movement and capturing networking data"
  },
  {
    "number": 24,
    "start": 96,
    "question": "What is the primary purpose of 'Incentives' in the MICE industry?",
    "options": [
      "To organise exhibitions",
      "To hold training sessions",
      "To reward employees for performance",
      "To conduct business negotiations"
    ],
    "correctAnswer": "To reward employees for performance"
  },
  {
    "number": 25,
    "start": 99,
    "question": "Which Cvent product allows you to print sustainable event badges?",
    "options": [
      "Cvent Event Diagramming",
      "Cvent OnArrival",
      "Cvent Supplier Network",
      "Cvent Passkey"
    ],
    "correctAnswer": "Cvent OnArrival"
  }
];



export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};