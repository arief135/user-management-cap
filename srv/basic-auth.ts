import cds from "@sap/cds";
import { Request, Response, NextFunction } from "express";

type Req = Request & { user: cds.User, tenant: string };

export default function basicAuth(req: Req, res: Response, next: NextFunction) {
    // do your custom authentication ...

    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    let userValid = false

    if (login == 'arief') {
        userValid = true
        req.user = new cds.User({
            id: 'arief',
            roles: ['ADMINISTRATOR', 'DEVELOPER'],
            attr: {
                attra: '<value>',
                attrb: '<value>'
            }
        })
    }

    if (userValid) {
        return next()
    } else {
        res.set('WWW-Authenticate', 'Basic realm="401"')
        res.status(401).send('Authentication required.')
    }
}