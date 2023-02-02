/**
 *
 * @param {Object} CreateRouter
 * @param {ExpressRouter} CreateRouter.router
 * @param {CreateController} CreateRouter.CreateController
 * @param {CreateValidator} CreateRouter.CreateValidator
 * @param {makeExpressCallback} CreateRouter.makeExpressCallback
 * @param {makeValidatorCallback} CreateRouter.makeValidatorCallback
 * @returns {ExpressRouter}
 */
module.exports = ({ router, CreateController, CreateValidator, makeValidatorCallback, makeExpressCallback }) => {
    console.log("dsfsdfs")
    router.post('/create', makeValidatorCallback(CreateValidator.validateRegister), makeExpressCallback(CreateController.create));
    return router;
  };
  