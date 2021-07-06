const { Router } = require('express');
const CreateModuleController = require('../../controllers/CreateModule.controller');
const DeleteModuleController = require('../../controllers/DeleteModule.controller');
const EditModuleController = require('../../controllers/EditModule.controller');
const ListModulesController = require('../../controllers/ListModules.controller');
const EnsureAuthenticated = require('../../middlewares/EnsureAuthenticated');
const EnsureAdmin = require('../../middlewares/EnsureAdmin');
const ListAllController = require('../../controllers/ListAll.controller');

const router = Router();

const createModuleController = new CreateModuleController();
const deleteModuleController = new DeleteModuleController();
const editModuleController = new EditModuleController();
const listModulesController = new ListModulesController();
const listAllController = new ListAllController();

router.post(
    '/modules',
    EnsureAuthenticated.verify,
    EnsureAdmin.verify,
    createModuleController.handle
);

router.delete(
    '/modules/:id',
    EnsureAuthenticated.verify,
    EnsureAdmin.verify,
    deleteModuleController.handle
);
router.put(
    '/modules/:id',
    EnsureAuthenticated.verify,
    EnsureAdmin.verify,
    editModuleController.handle
);
router.get('/modules', listModulesController.handle);
router.get(
    '/modules/all',
    EnsureAuthenticated.verify,
    EnsureAdmin.verify,
    listAllController.handle
);

module.exports = router;
