# HTTP Webcrawler

This project is a basic web scraping utility built in JavaScript using the jsdom library. It consists of functions designed to extract and normalize URLs from HTML content. The primary functionality revolves around parsing HTML documents, identifying all anchor (<a>) elements, and extracting their href attributes to gather links. These URLs are then normalized by removing unnecessary elements like the protocol (http:// or https://) and trailing slashes. This provides a standardized output, which is especially useful for subsequent web crawling or data analysis tasks.

## Testing and Usage

The project includes a suite of tests written with the Jest framework, which ensure the integrity and correctness of the functions. Tests cover multiple scenarios for URL normalization and URL extraction, verifying that the utility performs consistently under different input conditions. By running these tests, developers can be confident that changes or additions to the codebase do not introduce errors or unexpected behavior. This makes the project an ideal starting point for building more complex web scraping tools or integrating with larger applications.
