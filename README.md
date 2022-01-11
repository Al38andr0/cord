# Cord Coding Challenge (Front-end)

### Requirements/Development
**Design**: 
1. In the first instance, I'd like to highlight that the mockups do not match the wireframe in a few aspects. I based my app on the mockups, not on the wireframe.
2. In the side nav, the first item look like a dropdown menu (based on the chevron down), but the original code was reported as a normal link. I kept it as a link pointing at the homepage.
3. In the mobile version, I created an interpretation of what you requested, since the mockups do not report a complete design.
4. Mobile: I preferred to adopt a solid background for the header and make it "sticky".
5. Mobile: the mockup doesn't show how the movie item should behave for a small device. I created it based on my experience.
6. Mobile: the mockup doesn't show how the filters behave in a small device. I created it based on my experience.
7. Desktop: since the API returns the data split into pages, I opted to keep the results always visible adding the page returned from the API. If this one wasn't just a test I would have also added pagination in this element. Saying "always visible" I mean that the results are in an independent scrollable element placed underneath it. In this way, in my opinion, the user journey would have been improved if the pagination were implemented.
8. I've added a loader during the search.

**Functionality**
1. The search works using the API as good as possible.
2. The requirements ask to load the results "instantly", but then highlight the rate-limiting issue. In order to reduce the number of requests, I applied a debounce functionality to the input with a delay of 250ms. This is in contrast with the "instantly" mentioned before, but I believe is a good compromise to optimize the service. Also, in order to limit the requests to the API, I've implemented a service worker.


**Code quality**:
- I believe wrote the code in a clean and intuitive way. I moved from the classes to the functions in order to use the Hooks. Also, I removed the native use of "styled-components" in favour of a standard HTML with ids and classes. I choose this way because I believe it's easier to understand, control the style (all the styles are in the SCSS files) and test (the elements have a proper tag to refer to during the tests). In the "movieitem" folder you can see an example of structure I would use for a real project, where style and test are within the component itself.

**Performance**:
- The app loads very quickly. Lighthouse reported a score performance of 96. I didn't use any external library for the style or JS except the ones injected by you.

**Automated Tests**
- In the "movieitem" folder you can find an example of unit test for the UI. In the normal condition I would test all the components and the JS files, but, since it's just a test I gave you just an example.

**Documentation** 
- I hope this documentation is understandable enough. The project itself it's pretty simple and, for a real project, it would have not required too much explanation, in my opinion. 
 
**Reporting** 
- I implemented an example of this functionality into "movieresults\index.js".
 
**Production-readiness** 
- The build creates the bundle without errors. I didn't explore the code-splitting functionality just for the lack of personal time.

**Future-readiness**
- I used hooks and applied the web worker. The PWA side and client-caching should be covered in **production**.