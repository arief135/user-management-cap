import cds from "@sap/cds";
import { Request, Response, NextFunction } from "express";

type Req = Request & { user: cds.User, tenant: string };

const { Users } = cds.entities('id.apnv.usermanagement')

const findUser = async (user: string) => {
    return await SELECT.one.from(Users, user)
}

export default function basicAuth(req: Req, res: Response, next: NextFunction) {
    // do your custom authentication ...

    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    return findUser(login).then((user: string) => {
        if (user) {
            req.user = new cds.User({
                id: user,
                roles: ['ADMINISTRATOR', 'DEVELOPER'],
                attr: {
                    attra: '<value>',
                    attrb: '<value>'
                }
            })
            return next()

        } else {
            res.set('WWW-Authenticate', 'Basic realm="401"')
            res.status(401).send('Authentication required.')
        }
    })
}