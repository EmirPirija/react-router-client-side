# React Application with Client-Side Routing

This GitHub repository contains a React application that leverages the react-router-dom library to manage client-side routing and navigation. The application is structured around different pages and components, offering a clear and organized user experience. Here are the key components and features:

## Pages and Components:

- RootLayout: The root layout component that wraps the entire application.
- HomePage: The home page component.
- EventsRootLayout: Layout for managing events-related pages.
- EventsPage: Lists events and offers event-related actions.
- EventDetailPage: Displays detailed information about a specific event.
- ditEventPage: Allows editing event details.
- NewEventPage: Facilitates the creation of new events.
- NewsletterPage: A page dedicated to newsletters.


## Routing Configuration:

The application has a well-defined routing structure that connects various pages and components.
The root path ("/") leads to the RootLayout, with the home page as the default route.
The "/events" route leads to the events-related section, including listing events and managing individual event details.
Event-specific routing is handled via dynamic route parameters, allowing for navigation to specific events and actions.
The "/newsletter" route provides access to the newsletter page.

## Actions and Loaders:

The application incorporates actions and loaders for event manipulation and data retrieval.
deleteEventAction is used for deleting events.
manipulateEventAction is used for both editing and creating events.
eventsLoader and eventDetailLoader are responsible for loading event data.

## Error Handling:

The application includes an error page component (ErrorPage) for handling unexpected errors or invalid routes.

<img width="1440" alt="Screen Shot 2023-10-29 at 6 24 45 PM" src="https://github.com/EmirPirija/react-router-client-side/assets/118456820/5c5ab4f9-e78d-4c5b-8881-e64e0bf9a115">
