## Figma URL

[Tours](https://www.figma.com/file/OnLoM3AzBFaHzSc2iolJS0/Tours?node-id=0%3A1&t=wiRXOlTLN5ehekYI-1)

## Workflow
Overall, the flow of the application should look something like this:

- App.jsx fetches tours data from a URL and sets the state of the Tours component to store the data.
- The Tours component maps over the tours array and renders a Tour component for each tour.
- Each Tour component has a "remove tour" button and a "read more" button.When the "remove tour" button is clicked, the Tours component updates its state to remove the tour from the tours array.

- When the "read more" button is clicked, the Tour component updates its state to toggle a "read more" flag and conditionally renders the full description.

- When the "re-fetch" button is clicked, the Tours component re-fetches the tours data from the URL and updates its state.
