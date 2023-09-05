# CONFERENCE REGISTRATION FORM


**This form is built in tailwind css and VanillaJS**

**Features:**
- The styling was built with Tailwind. Mobile first was implemented to make the design responsive.
- Only one of the checkboxes gets selected in the group of checkboxes. Same is true with the group of radio button.
- The non-member checkbox is selected by default.
- The express radio button is selected by default.
- If you select the credit radio button, the credit card and billing address fields will show up. But if the express button is selected, the credit card and billing address fields will disappear.
- Upon clicking the submit button, the on submit event listener utilizes the new FormData() method to capture all the field inputs and the push() method pushes all the keys and values to an array with the use of for of loop.
- Displays an alert after clicking submit button