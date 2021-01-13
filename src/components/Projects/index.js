import Invitr from '../img/Invitr.png'
import MSVGB from '../img/MSVGB.png'
import GBS from '../img/GBS.png'
import Fitness from '../img/Fitness.png'
import Note from '../img/Note.png'
import Budget from '../img/Budget.png'

const Projects = [
    {
        id: 1,
        name: 'Invitr',
        description: 'This app helps invite guests to a wedding. It has a guest list built in and you can input info about the different types of guests. You can create an individual account for individual guest list access.',
        github: 'https://github.com/jburz/Invitr',
        deployed: 'https://scary-cat-18885.herokuapp.com/',
        img: Invitr,
    },
    {
        id: 2,
        name: 'Martha Stewarts VG Bible',
        description: 'This app allows you to look up any kind of game by filling out the keywords and criteria. The app also recommends a recipe for a snack to make while you game.',
        github: 'https://github.com/Teknix420/Martha-Stewarts-VG-Bible',
        deployed: 'https://teknix420.github.io/Martha-Stewarts-VG-Bible/',
        img: MSVGB,
    },
    {
        id: 3,
        name: 'Google Books Search',
        description: 'This app lets you search for a book using the Google Book API and then lets you save books to the DB or you can view the book directly on Google Books website.',
        github: 'https://github.com/Teknix420/TG-Google-Books-Search',
        deployed: 'https://tg-google-books-search.herokuapp.com/',
        img: GBS,
    },
    {
        id: 4,
        name: 'Fitness Tracker',
        description: 'You can track workout progress with this app by inputting the number of reps and other info into this app. It tracks everything and allows you to pick up where you left off or start a new workout.',
        github: 'https://github.com/Teknix420/TG-Workout-Tracker',
        deployed: 'https://tg-workout-tracker.herokuapp.com/',
        img: Fitness,
    },
    {
        id: 5,
        name: 'Note Taker',
        description: 'This app will let you take notes and save them within the app. You can view previously saved notes, review them, and delete them.',
        github: 'https://github.com/Teknix420/TG-Note-Taker',
        deployed: 'https://tg-note-taker.herokuapp.com/',
        img: Note,
    },
    {
        id: 6,
        name: 'Budget Tracker',
        description: 'You can add and subtract finances in this app. It will show you the list of transactions and display a graph to visualize spending habits.',
        github: 'https://github.com/Teknix420/TG-Budget-Tracker',
        deployed: 'https://tg-budget-tracker.herokuapp.com/',
        img: Budget,
    },
]

export default Projects;