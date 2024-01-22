const express = require("express");
const router = express.Router();

// Require controller modules.
const budget_controller = require("../controllers/budgetController");
const card_controller = require("../controllers/cardController");
const category_controller = require("../controllers/categoryController");
const ledger_controller = require("../controllers/ledgerController");
const transaction_controller = require("../controllers/transactionController");
const user_controller = require("../controllers/userController");

/// TRANSACTION ROUTES ///

// GET home page.
router.get("/", transaction_controller.index);

// GET request for creating a transaction. NOTE This must come before routes that display transaction (uses id).
router.get("/transaction/create", transaction_controller.transaction_create_get);

// POST request for creating transaction.
router.post("/transaction/create", transaction_controller.transaction_create_post);

// GET request to delete transaction.
router.get("/transaction/:id/delete", transaction_controller.transaction_delete_get);

// POST request to delete transaction.
router.post("/transaction/:id/delete", transaction_controller.transaction_delete_post);

// GET request to update transaction.
router.get("/transaction/:id/update", transaction_controller.transaction_update_get);

// POST request to update transaction.
router.post("/transaction/:id/update", transaction_controller.transaction_update_post);

// GET request for one transaction.
router.get("/transaction/:id", transaction_controller.transaction_detail);

// GET request for list of all transaction items.
router.get("/transactions", transaction_controller.transaction_list);

/// USER ROUTES ///

// GET request for creating user. NOTE This must come before route for id (i.e. display user).
router.get("/user/create", user_controller.user_create_get);

// POST request for creating user.
router.post("/user/create", user_controller.user_create_post);

// GET request to delete user.
router.get("/user/:id/delete", user_controller.user_delete_get);

// POST request to delete user.
router.post("/user/:id/delete", user_controller.user_delete_post);

// GET request to update user.
router.get("/user/:id/update", user_controller.user_update_get);

// POST request to update user.
router.post("/user/:id/update", user_controller.user_update_post);

// GET request for one user.
router.get("/user/:id", user_controller.user_detail);

// GET request for list of all users.
router.get("/users", user_controller.user_list);

/// LEDGER ROUTES ///

// GET request for creating a LEDGER. NOTE This must come before route that displays ledger (uses id).
router.get("/ledger/create", ledger_controller.ledger_create_get);

//POST request for creating ledger.
router.post("/ledger/create", ledger_controller.ledger_create_post);

// GET request to delete ledger.
router.get("/ledger/:id/delete", ledger_controller.ledger_delete_get);

// POST request to delete ledger.
router.post("/ledger/:id/delete", ledger_controller.ledger_delete_post);

// GET request to update ledger.
router.get("/ledger/:id/update", ledger_controller.ledger_update_get);

// POST request to update ledger.
router.post("/ledger/:id/update", ledger_controller.ledger_update_post);

// GET request for one ledger.
router.get("/ledger/:id", ledger_controller.ledger_detail);

// GET request for list of all ledger.
router.get("/ledgers", ledger_controller.ledger_list);

/// CATEGORY ROUTES ///

// GET request for creating a CATEGORY NOTE This must come before route that displays category (uses id).
router.get(
  "/category/create",
  category_controller.category_create_get,
);

// POST request for creating category.
router.post(
  "/category/create",
  category_controller.category_create_post,
);

// GET request to delete category.
router.get(
  "/category/:id/delete",
  category_controller.category_delete_get,
);

// POST request to delete category.
router.post(
  "/category/:id/delete",
  category_controller.category_delete_post,
);

// GET request to update category.
router.get(
  "/category/:id/update",
  category_controller.category_update_get,
);

// POST request to update category.
router.post(
  "/category/:id/update",
  category_controller.category_update_post,
);

// GET request for one category.
router.get("/category/:id", category_controller.category_detail);

// GET request for list of all category.
router.get("/categories", category_controller.category_list);

/// CARD ROUTES ///

// GET request for creating a Card NOTE This must come before route that displays category (uses id).
router.get(
  "/card/create",
  card_controller.card_create_get,
);

// POST request for creating card.
router.post(
  "/card/create",
  card_controller.card_create_post,
);

// GET request to delete card.
router.get(
  "/card/:id/delete",
  card_controller.card_delete_get,
);

// POST request to delete card.
router.post(
  "/card/:id/delete",
  card_controller.card_delete_post,
);

// GET request to update card.
router.get(
  "/card/:id/update",
  card_controller.card_update_get,
);

// POST request to update card.
router.post(
  "/card/:id/update",
  card_controller.card_update_post,
);

// GET request for one card.
router.get("/card/:id", card_controller.card_detail);

// GET request for list of all cards.
router.get("/cards", card_controller.card_list);

/// BUDGET ROUTES ///

// GET request for creating a budget NOTE This must come before route that displays budget (uses id).
router.get(
  "/budget/create",
  budget_controller.budget_create_get,
);

// POST request for creating budget.
router.post(
  "/budget/create",
  budget_controller.budget_create_post,
);

// GET request to delete budget.
router.get(
  "/budget/:id/delete",
  budget_controller.budget_delete_get,
);

// POST request to delete budget.
router.post(
  "/budget/:id/delete",
  budget_controller.budget_delete_post,
);

// GET request to update budget.
router.get(
  "/budget/:id/update",
  budget_controller.budget_update_get,
);

// POST request to update budget.
router.post(
  "/budget/:id/update",
  budget_controller.budget_update_post,
);

// GET request for one budget.
router.get("/budget/:id", budget_controller.budget_detail);

// GET request for list of all budgets.
router.get("/budgets", budget_controller.budget_list);

module.exports = router;
