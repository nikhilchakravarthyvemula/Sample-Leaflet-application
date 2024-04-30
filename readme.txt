 Overview

This project delivers a web-based mapping application using Leaflet, a leading open-source JavaScript library for mobile-friendly interactive maps. The application is designed to let users create, edit, delete, and annotate geographic features on a map. It also includes functionality to search text annotations added to these features, enhancing usability and interactivity.

 Features

- Feature Creation: Users can create various map features including points, lines, polygons, rectangles, and circles using a drawing toolbar.
- Feature Editing and Deletion: Once created, features can be edited or deleted.
- Text Annotation: Features can be annotated with multi-line text, allowing users to add descriptions or notes.
- Text Search: Users can search for features based on the text annotations.
- Responsive Design: The interface is responsive, adapting to different screen sizes and devices.

 Instructions for Use

 Setting Up

1. Prerequisites:
   - Any modern web browser (e.g., Chrome, Firefox, Safari).
   - Internet connection (for loading scripts and map tiles).

2. Installation:
   - Download the files `app.html`, `app.js`, and `app.css`.
   - Ensure all files are in the same directory.

 Running the Application

1. Open `app.html` in a web browser to launch the application.
2. The map will initialize centered on a predefined location with zoom level adjustment capabilities.

 Interacting with the Map

- Adding Features:
  - Select the desired feature type from the drawing toolbar located on the top right of the map.
  - Click on the map to start drawing. Follow on-screen prompts to complete the drawing (click to continue, double-click to finish).
  
- Editing and Deleting Features:
  - Click on an existing feature. Use the popup tools to either edit the shape or delete it.

- Adding Annotations:
  - After creating a feature, a text input modal will appear. Enter the desired text and click "Save" to attach the text to the feature.
  - To edit an existing annotation, double-click on the feature. Modify the text in the modal that appears and save the changes.

- Searching for Features:
  - Enter text in the search bar at the top of the map.
  - Click the search icon to find features with matching text in their annotations.
  - Use the "Next" and "Previous" buttons to cycle through the search results.

 Customizing the Application

- Modify `app.css` to adjust styles.
- Expand functionality by editing `app.js` for deeper interactions or additional feature types.

 Technical Details

- Leaflet Library: Utilizes Leaflet for rendering and interacting with the map.
- Leaflet Draw Plugin: Adds drawing and editing capabilities to the map.
- Font Awesome: Provides icons for UI elements.

By following these instructions and understanding the feature set, users can effectively utilize the Simple Web Map application for a variety of mapping needs.