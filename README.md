# Book Finder App

This project is a book finder app that fetches [Google Books API](https://developers.google.com/books/) data and displays the books on the website with additional information (Thumbnail, Title, Author,.. etc.), in addition to a link for further details if the user would like to know more about the book.

I built this project as a solo project to join Chingu Voyage 43, and you can know more information about the initiative by visiting [Chingu](https://www.chingu.io/) and you can join the [discord server](https://discord.com/invite/XfhUYqe) too, it's an amazing community!

## Technologies/Languges used

* HTNL5
* CSS3
* SASS
* Javascript
* React 
* API
* Vite
## Project Structure

I built the project using React by creating three main components:

* Search Component
* Book Component
* Spinner Component 

The project starts with a form where the user can search for a book title, after submitting the form, the app will fetch the data from the API, in the meantime, the user will see a spinner loading while the response is not ready and then the Book Card component will be rendered and this component is a stateless component and used only to render the books data!

## Installation

To run the project locally you need to do the following:
* Clone the project first in your CMD by running the command, "git clone https://github.com/Zien-Alhawshi/soloproject-tier2-bookfinder.git"
* Open the code in your preferred editor and in the main directory you need to install the required tools by running the command, "npm install" 
* When the installing process is completed, you can test the app by running "npm run dev" and it will open up in your default browser.

You can try the app [here](https://book-finder-solo.netlify.app/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.


