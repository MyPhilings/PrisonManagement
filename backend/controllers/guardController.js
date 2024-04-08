const guards = [
{
    'id': 1,
    'name': 'Warden',
    'rank': 'SilverElite',
    'years': 12,
    'active': false
},

{
    'id': 2,
    'name': 'Ying',
    'rank': 'GoldNovaMaster',
    'years': 6,
    'active': true
},

{
    'id': 3,
    'name': 'Maverick',
    'rank': 'LegendaryEagle',
    'years': 8,
    'active': true
}

]

module.exports.all = (req, res) => {

    res.json({'GUARDS': guards})

}

module.exports.guards = (req, res) => {

    const { id } = req.params

    const matchingGuard = guards.filter(
        (guard) => guard.id === parseInt(id)
    )

    if (matchingGuard.length === 0) {
        res.status(404).json({'Error': `Guard with ${id} not found`})
    } else {
        res.status(200).json({'Guard': matchingGuard[0]})
    }

}

module.exports.guard = (req, res) => {

    const { id, rank, years } = req.query

    const matchingGuard = guards.filter(
        (guard) => guard.id === parseInt(id) && guard.rank === rank && guard.years === parseInt(years)
    )

    if (matchingGuard.length === 0) {
        res.status(404).json({'Error': `Guard with ${id}, ${rank}, YOS ${years} not found`})
    } else {
        res.status(200).json({'Guard': matchingGuard[0]})
    }

}

module.exports.delete = (req, res) => {

    const { id } = req.query

    const matchingGuard = guards.filter(
        (guard) => guard.id === parseInt(id)
    )

    if (matchingGuard.length === -1) {
        res.status(404).json({'Error': `Guard with ${id} not found`})
    } else {
        delete guards[id]
        res.status(200).json({'GUARDS': guards})
    }

}