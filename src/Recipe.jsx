import { recipes } from "./data-recipe.js"

export default function RecipeList(){
    return(
        <>
            Merhaba
            <TavukluYemekler recipes={recipes} />
            <SebzeliYemekler recipes={recipes} />
            <EtliYemekler recipes={recipes} />
            <BalikliYemekler recipes={recipes} />
            <HamurIsiYemekler recipes={recipes} />
        </>
    )
}

function TavukluYemekler({ recipes }) {
    // // console.log(recipes)
    // const filterTavukluYemekler = recipes.filter(recipe => recipe.category === "Tavuklu Yemekler" )
    // // console.log(tavukluYemekler)
    // const TavukluYemekler = filterTavukluYemekler.map((yemek, i) => (

    //     <h3 key={i}>{yemek.name}</h3>
    // )
    // );
    return(
        <>
            <h2>Tavuklu Yemekler</h2>
            <div>
                {recipes.filter(x => x.category === "Tavuklu Yemekler").map((recipe, i) => (
                    <div key={i}>
                        <h3>{recipe.name}</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}
function SebzeliYemekler({ recipes }) {
       return(
        <>
            <h2>Sebzeli Yemekler</h2>
            <div>
                {recipes.filter(x => x.category === "Sebzeli Yemekler").map((recipe, i) => (
                    <div key={i}>
                        <h3>{recipe.name}</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}
function EtliYemekler({ recipes }) {
    return(
        <>
            <h2>Etli Yemekler</h2>
            <div>
                {recipes.filter(x => x.category === "Etli Yemekler").map((recipe, i) => (
                    <div key={i}>
                        <h3>{recipe.name}</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}
function BalikliYemekler({ recipes }) {
    return(
        <>
            <h2>Balıklı Yemekler</h2>
            <div>
                {recipes.filter(x => x.category === "Balıklı Yemekler").map((recipe, i) => (
                    <div key={i}>
                        <h3>{recipe.name}</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}
function HamurIsiYemekler({ recipes }) {
    return(
        <>
            <h2>Hamur İşi Yemekler</h2>
            <div>
                {recipes.filter(x => x.category === "Hamur İşi Yemekler").map((recipe, i) => (
                    <div key={i}>
                        <h3>{recipe.name}</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}
//oncelıkle datanızı buraya ımport etmenız gerekıyor
//daha sonra componentlerınızde datayı kullanabılmenız ıcın 
//datanızı props olarak her bır componente gondermenız gerekıyor
//filter methodunu once kullanmanız daha sonra map ile bastırmanız gerekıyor