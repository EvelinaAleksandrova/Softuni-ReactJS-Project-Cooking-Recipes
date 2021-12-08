import {Routes, Route, Link} from "react-router-dom";
import RecipeList from "../PetList/RecipeList";
import CocktailsList from "../PetList/CocktailsList";
import VeganList from "../PetList/VeganList";
import SoupList from "../PetList/SoupList";
import MeatList from "../PetList/MeatList";
import ChristmasList from "../PetList/ChristmasList";


const DashboardPage = () => {

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Recipes</h1>

            <nav>
                <Link to="soup" style={{"margin": "50px","font-size": "30px"}}>Soup</Link>
                <Link to="meat" style={{"margin": "50px","font-size": "30px"}}>Meat</Link>
                <Link to="vegan" style={{"margin": "50px","font-size": "30px"}}>Vegan</Link>
                <Link to="cocktails" style={{"margin": "50px","font-size": "30px"}}>Drinks & Cocktails</Link>
                <Link to="christmas" style={{"margin": "50px","font-size": "30px"}}>Christmas</Link>
            </nav>

            <section>
                <Routes>
                    <Route path="/" element={<RecipeList/>}/>
                    <Route path="/soup" element={<SoupList/>}/>
                    <Route path="/meat" element={<MeatList/>}/>
                    <Route path="/vegan" element={<VeganList/>}/>
                    <Route path="/cocktails" element={<CocktailsList/>}/>
                    <Route path="/christmas" element={<ChristmasList/>}/>
                </Routes>
            </section>

        </section>
    );
}
export default DashboardPage;