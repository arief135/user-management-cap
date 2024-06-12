import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace login.controller
 */
export default class Login extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        const oModel = new JSONModel({
            username: 'a',
            password: 'b'
        })
        this.getView()?.setModel(oModel)
    }

    public login(): void {
        const oModel = this.getView()?.getModel() as JSONModel
        const data = oModel.getData()
        const username: string = data['username']
        const password: string = data['password']
    }
}