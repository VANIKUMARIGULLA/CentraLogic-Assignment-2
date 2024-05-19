"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureTableExists = exports.addOrder = void 0;
const pgConfig_1 = __importDefault(require("./pgConfig"));
// Function to insert order IDs into the database
function addOrder(orderID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "INSERT INTO orders (orderID) VALUES ($1)";
            const result = yield pgConfig_1.default.query(query, [orderID]);
            return result;
        }
        catch (err) {
            return err;
        }
    });
}
exports.addOrder = addOrder;
// Function to check if the table exists, if not, create it
function ensureTableExists() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      orderID VARCHAR(255) NOT NULL
    )
  `;
        yield pgConfig_1.default.query(query);
    });
}
exports.ensureTableExists = ensureTableExists;
