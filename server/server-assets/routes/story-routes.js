let router = require('express').Router()
let Story = require('../models/story')

//GET ALL STORIES
router.get('/', (req, res, next) => {
  Story.find({})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//POST - CREATE NEW STORY
router.post('/', (req, res, next) => {
  // req.body.userId = req.session.uid
  Story.create(req.body)
    .then(newStory => {
      res.send(newStory)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//PUT CHANGE / UPDATE STORY DETAILS BY STORY ID
// router.put('/:id', (req, res, next) => {
//   Story.findById(req.params.id)
//     .then(story => {
//       if (!story.userId.equals(req.session.uid)) {
//         return res.status(401).send("ACCESS DENIED!?!")
//       }
//       story.update(req.body, (err) => {
//         if (err) {
//           console.log(err)
//           next()
//           return
//         }
//         res.send("Successfully Updated!?!")
//       });
//     })
//     .catch(err => {
//       console.log(err)
//       next()
//     })
// })


//DELETE - DELETE A STORY
// router.delete('/:id/:storyId', (req, res, next) => {
//   Story.findOne({ userId: req.params.id && req.session.uid })
//     .then(story => {
//       story.storySchedule.forEach((e, index) => {
//         if (e.id.toString() == req.params.scheduleId) {
//           story.storySchedule.splice(index, 1)
//         }
//       })
//       story.save(err => {
//         if (err) {
//           return res.status(400).send(err)
//         }
//         res.send(story)
//       })
//     })
//     .catch(err => {
//       res.status(400).send('ACCESS DENIED; Invalid Request')
//     })
// })


module.exports = router