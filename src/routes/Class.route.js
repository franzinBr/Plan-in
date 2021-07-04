const { Router } = require('express');
const CreateClassController = require('../controllers/CreateClass.controller');
const DeleteClassController = require('../controllers/DeleteClass.controller');
const EditClassController = require('../controllers/EditClass.controller');
const ListClassesFromModuleController = require('../controllers/listClassesFromModule.controller');
const EnsureAuthenticated = require('../middlewares/EnsureAuthenticated');
const EnsureAdmin = require('../middlewares/EnsureAdmin');

const router = Router();

const createClassController = new CreateClassController();
const deleteClassController = new DeleteClassController();
const editClassController = new EditClassController();
const listClassesFromModule = new ListClassesFromModuleController();

router.post(
    '/class',
    EnsureAuthenticated.verify,
    EnsureAdmin.verify,
    createClassController.handle
);
router.delete(
    '/class/:id',
    EnsureAuthenticated.verify,
    EnsureAdmin.verify,
    deleteClassController.handle
);
router.put(
    '/class/:id',
    EnsureAuthenticated.verify,
    EnsureAdmin.verify,
    editClassController.handle
);
router.get('/class/:id', listClassesFromModule.handle);

module.exports = router;
