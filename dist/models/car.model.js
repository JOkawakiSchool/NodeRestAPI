"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class car {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                make: { type: String, maxlength: 24 },
                model: { type: String, maxlength: 24 },
                year: { type: String, maxlength: 24 },
                mileage: { type: String, maxlength: 24 },
                accidents: { type: String, maxlength: 24 },
                owners: { type: String, maxlength: 24 },
                price: { type: String, maxlength: 24 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, "A table to store user's car info", [{
                    route: '/get-all-cars',
                    method: 'get',
                    callback: this.getAllCars,
                    requireToken: true,
                }]];
    }
    getAllCars(model) {
        return (req, res, next) => {
            let payload = {
                body: {
                    get: ["*"]
                }
            };
            let testModel = model.model.controller;
            console.log('model', model);
            //let resp = testModel.controller.get(req, null, null);
            // console.log('from test model resp: ', resp);
            res.json({ message: 'rom getAllCars works...' });
        };
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.car = car;
