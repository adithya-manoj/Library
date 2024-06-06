import logo from './logo.svg';
import './App.css';
import NavbarComp from './Navbar';
import Library from './Images/library.jpg';
import { Link, useNavigate } from 'react-router-dom';

function App() {
    let navigatecategory = useNavigate();

    const genre = [
        { head: "Fiction" },
        { head: "Mystery & Adventure" },
        { head: "Classics" },
        { head: "Romance" },
        { head: "Thriller and Suspense" },
        { head: "Biographies and Memoirs" },
        { head: "Poetry" },
        { head: "Horror" },
        { head: "Fantasy" },
        { head: "Comics and Graphic Novels" },
        { head: "History" },
        { head: "Travel" }
    ];

    let handleCategory = (category) => {
        console.log(category);
        navigatecategory(`/CatResult/${category}`);
    };

    return (
        <div className="App">
            <NavbarComp />
            <div>
                <img src={Library} alt="" className='img-fluid' />
                <div className='row d-flex flex-wrap p-3 border bg-dark text-white justify-content-center'>
                    {genre.map((item, index) => (
                        <div
                            key={index}
                            className='border border-3 border-primary 
                            p-3 rounded-4 m-1 fixed-size 
                            d-flex align-items-center justify-content-center 
                            col-12 col-sm-6 col-md-4 col-lg-3'
                            onClick={() => handleCategory(item.head)}
                        >
                            {item.head}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
