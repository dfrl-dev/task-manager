require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6181d08cf98228078ecf03f6').then((task) => {
//     console.log(task)
//     return Task.countDocuments( { completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id, status) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: status})
    return count
}

deleteTaskAndCount('6181d2165a43748c9f4a7342', false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})