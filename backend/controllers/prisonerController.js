const prisoners = [ 
{
    'id': 1,
    'name': 'Given',
    'age': 25,
    'crime': 'Frustated murder',
    'sentence': '25 years',
},

{
    'id': 2,
    'name': 'Nico Faith',
    'age': 23,
    'crime': 'Illegal possenssion of drugs and firearms',
    'sentence': '50 years',
},

{
    'id': 3,
    'name': 'Irish Lince',
    'age': 25,
    'crime': 'Adultery and Arson',
    'sentence': '10 years',
}

]

module.exports.prisoners = (req, res) => {

    res.json({'PRISONERS': prisoners})

};

// Search a prisaoner by id using /prisoner/id
// Method name must be prisoner

module.exports.prisoner = (req, res) => {

    const { id } = req.params

    //console.log(id)

    //http://localhost:4000/prisoner/prisoner/1

    const matchingPrisoner = prisoners.filter(
        (prisoner) => prisoner.id === parseInt(id)
    )

    if (matchingPrisoner.length === 0) {
        res.status(404).json({'Error': `Prisoner with ${id} not found`})
    } else {
        res.status(200).json({'Prisoner': matchingPrisoner[0]})
    }

}

module.exports.searchPrisoner = (req, res) => {

    const { id, name } = req.query

    // console.log(id, name)

    //http://localhost:4000/prisoner/search/prisoner?id=1&name=Given

    const matchingPrisoner = prisoners.filter(
        (prisoner) => prisoner.id === parseInt(id) && prisoner.name === name
    )

    if (matchingPrisoner.length === 0) {
        res.status(404).json({'Error': `Prisoner with ${id} and ${name} not found`})
    } else {
        res.status(200).json({'Found': matchingPrisoner[0]})
    }

}

module.exports.greet = (req, res) => {
    const { name } = req.query
    console.log(name)
    res.status(200).json({'HELLO': name})
}