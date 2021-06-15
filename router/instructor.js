const router = require('express').Router();
const SectionController = require('../controllers/instructor/sectionsController');

router.get('/sections', SectionController.allSections);
router.get('/students/:section',SectionController.sectionStudents)
router.post('/grades',SectionController.submitGrade)

module.exports = router;
