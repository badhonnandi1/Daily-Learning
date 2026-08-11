function List(props)
{

    const category = props.category;
    const itemList = props.items;


    // const fruits = [{id: 1,name:'apple', calories: "95"},
    //                 {id: 2,name:'orange', calories: 45},
    //                 {id: 3,name: 'banana',calories: 105},
    //                 {id: 4,name:'coconut',calories: 159},
    //                 {id: 5,name: 'pinapple',calories: 37}];
    // fruits.sort();



    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // alphabetical

    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // reverse

    // fruits.sort((a,b) => a.calories - b.calories); // numerical

    // fruits.sort((a,b) => b.calories - a.calories); // reverse numerical
    
    

    // const lowCalFruits  = fruits.filter(fruits => fruits.calories < 100); // conditional filtering in a list

    // const highcalFruits  = fruits.filter(fruits => fruits.calories >= 100); // conditional filtering in a list


    // const listItems = highcalFruits.map(highcalFruits => <li key ={highcalFruits.id}>{highcalFruits.name}: <b>{highcalFruits.calories}</b></li>) // conditional filtering

    // const listItems = fruits.map(fruits => <li key ={fruits.id}>{fruits.name}: <b>{fruits.calories}</b></li>) // key = jeta dibo oita dublicate hobena, hole warning debe
    
    const listItems = itemList.map(itemList => <li key ={itemList.id}>{itemList.name}: <b>{itemList.calories}</b></li>) // key = jeta dibo oita dublicate hobena, hole warning debe
    
    return (
        <>
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">{listItems}</ul>
        </>
        
);
}

export default List